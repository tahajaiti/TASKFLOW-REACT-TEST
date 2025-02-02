import React, { useEffect } from 'react';
import { FaSort, FaSpinner } from 'react-icons/fa';
import TaskCard from './TaskCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../stores/taskStore';
import { fetchTasks } from '../stores/taskSlice';

interface LaneProps {
    name: 'todo' | 'doing' | 'done';
}

const Lane: React.FC<LaneProps> = ({ name }) => {
    const getLaneStyle = () => {
        switch (name) {
            case 'todo':
                return {
                    bgColor: 'bg-blue-900/40',
                    textColor: 'text-blue-400',
                    borderColor: 'border-blue-800',
                    countBg: 'bg-blue-500/20',
                    countBorder: 'border-blue-500/30'
                };
            case 'doing':
                return {
                    bgColor: 'bg-purple-900/40',
                    textColor: 'text-purple-400',
                    borderColor: 'border-purple-800',
                    countBg: 'bg-purple-500/20',
                    countBorder: 'border-purple-500/30'
                };
            case 'done':
                return {
                    bgColor: 'bg-green-900/40',
                    textColor: 'text-green-400',
                    borderColor: 'border-green-800',
                    countBg: 'bg-green-500/20',
                    countBorder: 'border-green-500/30'
                };
        }
    };

    const styles = getLaneStyle();
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
        <div className={`h-[40rem] ${styles.bgColor} rounded-xl border ${styles.borderColor} shadow-lg`}>
            <header className={`flex justify-between items-center p-4 border-b ${styles.borderColor}`}>
                <div className={`px-3 py-1 rounded-full text-sm font-medium border ${styles.countBg} ${styles.countBorder} ${styles.textColor}`}>
                    {laneTasks.length}
                </div>
                <h2 className={`text-lg font-bold ${styles.textColor} tracking-wide`}>
                    {name.toUpperCase()}
                </h2>
                <FaSort className={`${styles.textColor} cursor-pointer hover:opacity-80 transition-opacity`} />
            </header>
            
            <div className='h-[calc(100%-4rem)] p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'>
                {loading ? (
                    <div className='flex justify-center items-center h-full'>
                        <FaSpinner className={`animate-spin text-3xl ${styles.textColor}`} />
                    </div>
                ) : error !== 'none' ? (
                    <div className='flex justify-center items-center h-full'>
                        <p className='text-red-400 font-medium bg-red-900/20 px-4 py-2 rounded-lg border border-red-800'>
                            {error}
                        </p>
                    </div>
                ) : laneTasks.length > 0 ? (
                    laneTasks.map(task => (
                        <div key={task._id} className="transform transition-transform duration-200 hover:-translate-y-1">
                            <TaskCard {...task} />
                        </div>
                    ))
                ) : (
                    <div className='flex justify-center items-center h-full'>
                        <p className={`${styles.textColor} font-medium bg-gray-800/40 px-4 py-2 rounded-lg border border-gray-700`}>
                            No tasks found
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Lane;