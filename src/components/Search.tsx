import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex gap-2 items-center p-2 bg-gray-700 w-full lg:w-1/3 mx-auto mt-4 rounded-full">
      <FaSearch />
      <input className="w-full h-fit" type="text" placeholder="Search..." value={search} onChange={handleSearch} />
    </div>
  );
};

export default Search;
