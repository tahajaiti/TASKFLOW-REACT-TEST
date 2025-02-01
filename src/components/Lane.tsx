import { FaSortAlphaUpAlt } from "react-icons/fa";
import TaskCard, { TaskType } from "./TaskCard";
import { useEffect, useState } from "react";

interface laneProps {
    name: string;
    tasks: TaskType[]
}

const Lane = ({ name, tasks }: laneProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(tasks.length);
    }, [tasks]);

    return (
        <div className="xl:w-1/3 w-full border rounded-sm">
            <header>
                <div className="flex justify-between items-center bg-gray-700 w-full p-3 rounded-sm">
                    <div className="text-md">
                        {count}
                    </div>
                    <div className="text-md font-bold">{name.toUpperCase()}</div>
                    <FaSortAlphaUpAlt className="text-xl font-bold" />
                </div>
            </header>
            <div className="swim-lane bg-gray-500 flex flex-col 
            items-center w-full h-[30rem] overflow-y-scroll  rounded-br-[15px] rounded-bl-[15px]">
                {
                    tasks.map((t) => (
                        <TaskCard key={t.id} {...t}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Lane;
