import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaCopyright } from 'react-icons/fa6'

const Footer: React.FC = () => {
    return (
        <footer className='flex flex-col justify-center items-center text-white/30'>
            <div className='flex gap-2 items-center '>
                <h2>TASKFLOW</h2>
                <FaCopyright />
            </div>
            <a target='_blank' href="https://www.github.com/tahajaiti">
                <FaGithub className='text-xl hover:scale-110 hover:text-white transition-all' />
            </a>
        </footer>
    )
}

export default Footer