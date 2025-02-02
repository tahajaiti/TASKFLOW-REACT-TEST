import React from 'react'
import { FaSort } from 'react-icons/fa'

interface laneProps {
    name: 'todo' | 'doing' | 'done'
}

const Lane: React.FC<laneProps> = ({ name }) => {
    const colorCount = name === 'todo' ? 'bg-blue-300'
        : name === 'doing' ? 'bg-purple-300' : 'bg-green-300';


    return (
        <div className='h-[40rem] bg-gray-500 rounded-sm border border-gray-300'>
            <header className='bg-white flex justify-between items-center text-black p-2'>
                <p className={`${colorCount} px-2 rounded-full`}>0</p>
                <h2>{name.toUpperCase()}</h2>
                <FaSort />
            </header>
        </div>
    )
}

export default Lane