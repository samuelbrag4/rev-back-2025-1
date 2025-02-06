import { Router } from "express";

import {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} from "../controllers/Student.controller";

const StudentRouter = Router();

StudentRouter.get("/", getStudents);
StudentRouter.get("/:id", getStudentById);
StudentRouter.get("/", createStudent);
StudentRouter.get("/:id", updateStudent);
StudentRouter.get("/:id", deleteStudent);

export default StudentRouter;
