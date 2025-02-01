interface TaskType {
    _id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
    createdAt: Date;
    updatedAt: Date;
}

export default TaskType;