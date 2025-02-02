export interface TaskType {
    _id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
    createdAt: Date;
    updatedAt: Date;
}

export type taskState = {
    tasks: TaskType[];
    loading: boolean;
    error: string;
} 