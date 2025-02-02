import React, { useEffect } from 'react';
import { FaSort, FaSpinner } from 'react-icons/fa';
import TaskCard from './TaskCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../stores/taskStore';
import { RootState } from '../stores/taskStore';
import { fetchTasks } from '../stores/taskSlice';

interface LaneProps {
    name: 'todo' | 'doing' | 'done';
}

const Lane: React.FC<LaneProps> = ({ name }) => {
    const colorCount = name === 'todo' ? 'bg-blue-300'
        : name === 'doing' ? 'bg-purple-300' : 'bg-green-300';

    const dispatch: AppDispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const loading = useSelector((state: RootState) => state.tasks.loading);
    const error = useSelector((state: RootState) => state.tasks.error);

    useEffect(() => {
        if (tasks.length === 0) {
            dispatch(fetchTasks());
        }
    }, [tasks.length, dispatch]);

    const getTasks = () => {
        return tasks.filter(task => task.status === name);
    };

    const laneTasks = getTasks();

    return (
        <div className='h-[40rem] bg-gray-700 rounded-lg border border-gray-300 shadow-md'>
            <header className='bg-white flex justify-between items-center text-black p-3 rounded-t-lg'>
                <p className={`${colorCount} px-3 py-1 rounded-full text-sm font-semibold`}>
                    {laneTasks.length}
                </p>
                <h2 className='text-lg font-bold'>{name.toUpperCase()}</h2>
                <FaSort className='text-gray-500 cursor-pointer' />
            </header>
            <div className='h-[91%] p-3 overflow-y-auto'>
                {loading ? (
                    <div className='flex justify-center items-center h-full'>
                        <FaSpinner className='animate-spin text-2xl text-blue-500' />
                    </div>
                ) : error !== 'none' ? (
                    <div className='flex justify-center items-center h-full'>
                        <p className='text-red-500 font-semibold'>{error}</p>
                    </div>
                ) : laneTasks.length > 0 ? (
                    laneTasks.map(task => (
                        <TaskCard key={task._id} task={task} />
                    ))
                ) : (
                    <div className='flex justify-center items-center h-full'>
                        <p className='text-white'>No tasks found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Lane;