import express from "express";
import { getAll, getById, createTask, updateTask, deleteTask } from "../controllers/taskController";
import { validateObjectId } from "../middlewares/validateObjectId";
import {body} from "express-validator";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", validateObjectId,getById);

router.post(
    "/",
    [
        body("title").notEmpty().withMessage("Title is required"),
        body("description").optional().isString(),
        body("status").optional().isString(),
        body("priority").optional().isString(),
    ],
    createTask
);


router.put("/:id", validateObjectId ,updateTask);
router.delete("/:id",validateObjectId ,deleteTask);

export default router;