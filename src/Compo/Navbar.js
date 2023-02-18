import React, { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
export default function Navbar({ scrollreviews, Scrolltoabout, ScrolltoMenu }) {
  const [openmenu, setOpenmenu] = useState(false);
  return (
    <>
      <div className="p-5 md:p-0 md:flex md:justify-around md:items-center ">
        <div className="flex justify-between items-center  ">
          <h1 className="text-2xl  md:text-3xl text-red-600 font-semibold hover:text-red-400 duration-300 ease-in-out cursor-pointer">
            <i>Nimantran</i>
          </h1>
          <AiOutlineMenuUnfold
            onClick={() => {
              setOpenmenu(!openmenu);
            }}
            className="w-8 h-8 md:hidden cursor-pointer"
          />
        </div>
        <div className={` ${openmenu ? "block " : "hidden"}  md:block`}>
          <ul
            className={`text-center space-y-5 my-5 md:flex md:gap-x-5 md:space-y-0 md:justify-center md:items-center text-lg `}
          >
            <li
              className="cursor-pointer hover:text-red-600 ease-in-out duration-300 font-semibold"
              onClick={Scrolltoabout}
            >
              About us
            </li>
            <li className="cursor-pointer hover:text-red-600 ease-in-out duration-300  font-semibold" onClick={ScrolltoMenu}>
              Menu
            </li>
            <li
              className="cursor-pointer hover:text-red-600 ease-in-out duration-300 font-semibold"
              onClick={scrollreviews}
            >
              Testimonials
            </li>
          </ul>
        </div>
        <div
          className={`text-center my-5 ${
            openmenu ? "block" : "hidden"
          } md:block`}
        >
          <button className="border-2 border-slate-600 px-6 py-2 rounded-full font-semibold">
            Contact us
          </button>
        </div>
      </div>
    </>
  );
}
