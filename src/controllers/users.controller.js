import { hash } from "bcrypt";

import userRouter from "../routes/users.routes";
import UsersRepository from "../models/users/UserRepository";

const UserRepository = new UsersRepository();

export const getUsers = (req, res) => {
    const users = UserRepository.getUsers();

    if (!users) {
        return res.status(404).send({message: "Não há usuários cadastrados!"})
    }

    return res.status(200).send({ totalUsers: users.length, users });
};

export const getUserById = (req, res) => {
    const { id } = req.params;

    const user = UserRepository.getUserById(id);

    if (!user) {
        return res.status(404).send({ message: "Usuário não encontrado!" });
    }

    return res.status(200).send({ message: "Usuário encontrado", user });
};

export const createUser = async (req, res) => {
    const { name, email,password } = req.body;

    const userAlreadyExist = UserRepository.getUserByEmail(email);

    if (userAlreadyExist) {
        return res.status(409).send({ message: "Usuário já cadastrado!" })
    }

    const passwordHash = await hash(password, 8);

    const user = new User(name, email, passwordHash);

    UserRepository.createUser(user);

    return res.status(201).send({ message: "Usuário cadastrado com sucesso!", user })
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const getUserById = UserRepository.getUserById(id);

    if (!user) {
        return res.status(404).send({ message: "Usuário não encontrado!" });
    }

    if (UserById && UserByEmail.id !== id) {
        return res.status(409).send({ message: "Email já cadastrado!" });
    }

    const passwordHash = await hash(password, 8);

    const user = UserRepository.updateUser(id, name, email, passwordHash);

    return res 
    .status(200)
    .send({ message: "Usuário atualizado com sucesso!", user });
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    const user = UserRepository.getUserById(id);

    if (!user) {
        return res.status(404).send({ message: "Usuário não encontrado!" });
    }

    UserRepository.deleteUser(id);

    return res
        .status(200)
        .send({ message: "Usuário deletado com sucesso!" });
};