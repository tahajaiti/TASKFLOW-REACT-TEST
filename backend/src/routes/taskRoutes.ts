import express from "express";
import { getAll, getById, createTask, updateTask, deleteTask } from "../controllers/taskController";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;