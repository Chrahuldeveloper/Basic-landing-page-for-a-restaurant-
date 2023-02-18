import React from "react";

export default function Footer({ Scrolltoabout, ScrolltoMenu }) {
  return (
    <div className="bg-red-500  md:h-[50vh] px-5 text-white space-y-7 flex md:justify-around items-center flex-col md:flex-row">
      <div className="space-y-5 my-3 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl text-white font-semibold duration-300 ease-in-out cursor-pointer">
          <i>Nimantran</i>
        </h1>
        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet
          laborum, eaque earum blanditiis provident ipsa sequi cupiditate.
          Reiciendis, est.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold duration-300 ease-in-out cursor-pointer">
          About us
        </h1>
        <ul className="text-lg space-y-3 my-3">
          <li className="cursor-pointer" onClick={Scrolltoabout}>
            Who are we
          </li>
          <li className="cursor-pointer" onClick={ScrolltoMenu}>
            Our Menu
          </li>
          <li className="cursor-pointer">Contact us</li>
        </ul>
      </div>
      <div className="space-y-3 my-3 text-center">
        <h1 className="text-2xl font-semibold cursor-pointer-">Get in Touch</h1>
        <ul className="space-y-2 text-lg   my-3">
          <li>Monday-saturaday 10:00 to 23:00</li>
          <li>Saturday 10:00 to 24:00</li>
        </ul>
      </div>
    </div>
  );
}
