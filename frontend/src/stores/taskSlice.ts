import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskType, taskState } from "../types/TaskType";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const initialState: taskState = {
    tasks: [],
    loading: false,
    error: "none",
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await axios.get(`${process.env.API_URL}/tasks`);
    return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task: Omit<TaskType, "_id">) => {
    const response = await axios.post(`${process.env.API_URL}/tasks`, task);
    return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async(id: number) => {
    const response = await axios.delete(`${process.env.API_URL}/tasks/${id}`);
    return response.data;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async(task: TaskType) => {
    const response = await axios.put(`${process.env.API_URL}/tasks/${task._id}`, task);
    return response.data;
});

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {}
});


export default taskSlice.reducer;