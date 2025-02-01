import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: false, default: ''},
    status: {type: String, required: true, default: 'todo'},
    priority: {type: String, required: true, default: 'low'},
    date: {type: Date, required: false, default: Date.now()}
}, {timestamps: true});

const Task = mongoose.model('Task', TaskSchema);

export default Task;