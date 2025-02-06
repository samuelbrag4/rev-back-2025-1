import { Router } from "express";
import StudentRouter from "./students.routes";
import userRouter from "./users.routes"

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Vai Tomando!" });
});

router.use("/students", StudentRouter);
router.use("/users", userRouter)

export default routes;