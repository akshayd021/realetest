import React, { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import AllIndiaDropwon from "./AllIndiaDropwon";
import BuyDropdown from "./BuyDropdown";

const Navbar = () => {
  const Item = ["RENT", "PROJECT", "AGENTS", "SERVICE"];
  const [showAll, setShowAll] = useState(false)
  const [buy, setBuy] = useState(false)
  return (
    <div className="bg-white shadow-md py-3 fixed z-50 top-0 w-full">
      <div className="container grid grid-cols-12 items-center">
        <div className="col-span-11 ">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-2">
              <div className="flex gap-1 items-center">
                <img src="/assets/logo-1.svg" alt="logo" className="w-8" />
                <img src="/assets/logo.svg" alt="logo" />
              </div>
            </div>
            <div className="hidden md:flex col-span-7 items-center  justify-center">
              <div className="relative">
                <ul className="flex gap-10 items-center">
                  <div className="flex gap-1 items-center" onClick={() => setShowAll(!showAll)}>
                    <FaLocationDot className="text-gray-500 text-sm cursor-pointer" />
                    <li className="text-[14px] hover:border-b cursor-pointer border-b-blue-400">All India</li>
                    <IoIosArrowDown className="text-gray-500 mt-1 cursor-pointer" />
                  </div>
                </ul>
                {showAll && (
                  <div className="absolute top-8 left-0 bg-white w-[50vw] shadow-md z-10">
                    <AllIndiaDropwon />
                  </div>
                )}
              </div>
              <div className="relative mx-5">
                <ul className="flex gap-10 items-center mx-1">
                  <div className={`${buy ? "bg-blue-400 py-1 rounded-md  text-white " : ''}flex gap-1 items-center`} onMouseEnter={() => setBuy(true)}>
                    <li className={`text-[14px] hover:border-b cursor-pointer border-b-blue-400 `}>Buy</li>
                    <IoIosArrowDown className={`${buy ? " text-white " : ''}text-gray-500 mt-1 cursor-pointer`} />
                  </div>
                </ul>
                {buy && (
                  <div className="absolute top-8 -left-20 bg-white w-[50vw] shadow-md z-10">
                    <BuyDropdown setBuy={setBuy} />
                  </div>
                )}
              </div>
              <ul className="flex gap-10 items-center justify-center">
                {Item?.map((x) => (
                  <li className="text-[14px] cursor-pointer hover:border-b border-b-blue-400">{x}</li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3 flex md:justify-end md:gap-6 items-center relative">
              <div className="bg-yellow-400 rounded-md absolute right-14 -top-2">
                <p className="text-[11px] px-2 uppercase ">Free</p>
              </div>
              <button className="bg-blue-600 text-white px-8 md:py-1.5 rounded-full">
                Post Property
              </button>
              <BsQuestionCircle className="text-xl" />
            </div>
          </div>
        </div>
        <div className="col-span-1  flex justify-end items-center border-l ml-3">
          <FaUser className="text-xl ml-1" />
          <p className="text-[10px] ml-2 text-blue-500">Sign In
            Join Free</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;