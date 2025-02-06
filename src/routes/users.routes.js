import { Router } from 'express';

import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/users.controller';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.get('/', createUser);
userRouter.get('/:id', updateUser);
userRouter.get('/:id', deleteUser);

export default userRouter;
