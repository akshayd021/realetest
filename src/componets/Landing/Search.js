import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "./Dropdown";

const SearchBar = () => {
  const [dropdown ,setDropDown] =useState(false)
  return (
    <div className="flex">
      <div className="w-full mx-auto mt-4">
        <div className="grid grid-cols-12 bg-white rounded-md">
          <div className="col-span-2 pl-4 flex relative  ">
            <div className="flex flex-row items-center gap-1 cursor-pointer" onClick={()=>setDropDown(!dropdown)}>
           <p className="text-sm text-gray-500">All Residentails</p>
           <IoIosArrowDown className="text-gray-500  " />
            </div>
            {dropdown && (
                  <div className="absolute top-10 left-0 bg-white w-[40vw] shadow-md z-10">
                    <Dropdown />
                  </div>
                )}
          </div>
          <div className="col-span-8 pl-4 ">
            <input
              type="text"
              className="w-full text-sm text-gray-700 py-2.5 placeholder:text-gray-400 outline-none"
              placeholder="Search City"
            />
          </div>
          <div className="col-span-2 relative">
            <div className="absolute left-0 top- border-l pl-2  ml-2 h-full">
              <FaLocationCrosshairs className="text-gray-600 text-xl mt-2 " />
            </div>
            <button className="flex absolute right-0 items-center gap-4 rounded-e-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2">
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
  