import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

export const validateObjectId = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        res.status(400).json({ message: "Invalid ID" });
        return;
    }

    next();
};