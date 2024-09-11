import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex">
      <div className="w-full mx-auto mt-4">
        <div className="flex items-center bg-white rounded-md">
          <div className="w-1/5 pl-4">
            <select className="w-full text-sm text-gray-700">
              <option value="">Select Option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="w-3/5 pl-4">
            <input
              type="text"
              className="w-full text-sm text-gray-700 placeholder:text-gray-400 outline-none"
              placeholder="Search..."
            />
          </div>
          <div className="w-1/5 ml-[10rem]">
            <button className="flex justify-center items-center gap-4 rounded-e-md w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
              <FaSearch />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
