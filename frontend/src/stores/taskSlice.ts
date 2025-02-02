import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskType, taskState } from "../types/TaskType";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const initialState: taskState = {
    tasks: [],
    loading: false,
    error: "none",
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await axios.get(`${apiUrl}/tasks`);
    return response.data;
});

export const fetchById = createAsyncThunk('tasks/fetchById', async (id: number) => {
    const response = await axios.get(`${apiUrl}/tasks/${id}`);
    return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task: Omit<TaskType, "_id">) => {
    const response = await axios.post(`${apiUrl}/tasks`, task);
    return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async(id: number) => {
    const response = await axios.delete(`${apiUrl}/tasks/${id}`);
    return response.data;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async(task: TaskType) => {
    const response = await axios.put(`${apiUrl}/tasks/${task._id}`, task);
    return response.data;
});

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

        //fetch tasks
        .addCase(fetchTasks.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<TaskType[]>) => {
            state.loading = false;
            state.tasks = action.payload;
            state.error = "none";
        })
        .addCase(fetchTasks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch tasks";
        })

        //fetch by id
        .addCase(fetchById.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchById.fulfilled, (state, action: PayloadAction<TaskType>) => {
            state.loading = false;
            state.tasks = [action.payload];
        })
        .addCase(fetchById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch task";
        })

        //add task
        .addCase(addTask.fulfilled, (state, action: PayloadAction<TaskType>) => {
            state.loading = false;
            state.tasks.push(action.payload);
        })

        //delete task
        .addCase(deleteTask.fulfilled, (state, action: PayloadAction<TaskType>) => {
            state.tasks = state.tasks.filter((task) => task._id !== action.payload._id);
        })

        //update task
        .addCase(updateTask.fulfilled, (state, action: PayloadAction<TaskType>) => {
            const index = state.tasks.findIndex((task) => task._id === action.payload._id);
            if(index !== -1) {
                state.tasks[index] = action.payload;
            }
        });
    }
});


export default taskSlice.reducer;