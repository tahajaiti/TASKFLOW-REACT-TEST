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



const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {}
});


export default taskSlice.reducer;