import express from "express";
import { getAll, getById, createTask, updateTask, deleteTask } from "../controllers/taskController";
import { validateObjectId } from "../middlewares/validateObjectId";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", validateObjectId,getById);
router.post("/", createTask);
router.put("/:id", validateObjectId ,updateTask);
router.delete("/:id",validateObjectId ,deleteTask);

export default router;