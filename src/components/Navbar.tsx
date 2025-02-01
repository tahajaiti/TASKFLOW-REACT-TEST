import { FaCheck } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

interface navProp {
  handle: () => void
}

const Navbar = ({handle}: navProp ) => {


  return (
    <header className="flex items-center justify-between bg-gray-800 py-2 px-4 2xl:px-10 shadow-xl">
      <div className="flex items-center justify-center gap-2">
        <FaCheck className="text-2xl" />
        <h1 className="text-2xl text-whiteone">TASKFLOW</h1>
      </div>
      <IoMdAddCircle onClick={handle}
        className="cursor-pointer text-3xl 
    hover:text-gray-300 hover:scale-110 active:text-whiteone/50 active:scale-95 transition-all"
      />
    </header>
  );
};

export default Navbar;
