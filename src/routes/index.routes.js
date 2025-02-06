import { Router } from "express";
import StudentRouter from "./students.routes";
import userRouter from "./users.routes"

const router = Router();

// Rota raiz para teste
router.get("/", (req, res) => {
  return res.status(200).json({ message: "Vai Tomando!" });
});

router.use("/students", StudentRouter);
router.use("/users", userRouter);

export { router };