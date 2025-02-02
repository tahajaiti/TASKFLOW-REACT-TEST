import React from "react";
import { FaPlusSquare, FaCheck } from "react-icons/fa";

const Navbar: React.FC = () => {
    return (
        <header className="flex justify-between p-2 bg-black">
            <div className="flex items-center gap-2">
                <FaCheck className="text-xl" />
                <p className="font-semiboldd text-lg">TASKFLOW</p>
            </div>
            <FaPlusSquare className="text-2xl active:scale-95 hover:scale-105 hover:text-gray-400 cursor-pointer" />
        </header>
    );
};

export default Navbar;
