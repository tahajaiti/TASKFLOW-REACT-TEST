import { FaTrash, FaEdit } from 'react-icons/fa'

export interface TaskType {
    id: number;
    title: string;
    description: string;
    date: string;
    priority: string;
    status: string;
}

const TaskCard = (props: TaskType) => {

    const color = props.priority === 'High' ? 'bg-red-400' :
        props.priority === 'Medium' ? 'bg-orange-400' : 'bg-green-400';

    const cardColor = props.priority === 'High' ? 'bg-red-300' :
    props.priority === 'Medium' ? 'bg-orange-300' : 'bg-green-300';

    return (
        <div className={`${cardColor} card`}>
            <div className="flex justify-between items-center mb-4 p-2">
                <FaEdit className='text-xl cursor-pointer text-blue-600 hover:text-blue-600' />
                <p className='text-xl'>{props.title}</p>
                <FaTrash className='text-xl cursor-pointer text-red-600 hover:text-red-600' />
            </div>
            <div className='flex justify-between content-baseline'>
                <div className={`${color} left-tag`} >{props.date}</div>
                <div className={`${color} right-tag`}>{props.priority}</div>
            </div>
        </div>
    );
};

export default TaskCard;
