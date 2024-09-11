import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const Item = ["All India", "BUY", "RENT", "PROJECT", "AGENTS", "SERVICE"];
  return (
    <div className="bg-white shadow-md py-2">
      <div className="container grid grid-cols-12 items-center">
        <div className="col-span-11 ">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-2">
                <img src="/assets/logo.svg" alt="logo" />
            </div>
            <div className="col-span-7 items-center flex justify-center">
              <ul className="flex gap-10 items-center">
                {Item?.map((x) => (
                  <li className="text-lg hover:border-b border-b-blue-400">{x}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-3 flex justify-end gap-6 items-center">
              <button className="bg-blue-600 text-white px-8 py-2 rounded-full">
                Post Property
              </button>
              <BsQuestionCircle className="text-xl" />
            </div>
          </div>
        </div>
        <div className="col-span-1  flex justify-end items-center">
          <FaUser className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;