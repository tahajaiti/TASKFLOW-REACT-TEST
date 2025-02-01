import { Request, Response } from "express";
import Task from "../models/Task";

export const getAll = async (req: Request, res: Response) => {
    try {  
        const tasks = await Task.find();
        res.json(tasks);
    } catch {
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getById = async (req: Request, res: Response) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task){
            res.status(404).json({ message: "Task not found" });
        }
        res.json(task);
    } catch {
        res.status(500).json({ message: "Internal server error" });
    }
}

export const createTask = async (req: Request, res: Response) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch {
        res.status(500).json({ message: "Internal server error" });
    }
}

export const updateTask = async (req: Request, res: Response) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask){
            res.status(404).json({ message: "Task not found" });
        }
        res.json(updatedTask);
    } catch {
        res.status(500).json({ message: "Internal server error" });
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask){
            res.status(404).json({ message: "Task not found" });
        }
        res.status(204).json();
    } catch {
        res.status(500).json({ message: "Internal server error" });
    }
}