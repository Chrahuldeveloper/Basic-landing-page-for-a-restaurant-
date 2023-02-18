import React from "react";
export default function Hero({ScrolltoMenu}) {
  return (
    <div className="md:flex md:justify-around md:items-center md:my-9">
      <div   className="my-6 py-2 px-6 space-y-5 md:space-y-9">
        <p   className="text-red-500 md:text-lg font-bold">#1 Best Resturent in Adilabad</p>
        <h1  className="font-extrabold text-5xl md:text-6xl">
          Enjoy Our Fresh & <br /> Delicious Food
        </h1>
        <p className="font-light text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Vero
          consectetur eveniet quos quidem d quasi <br /> laudantium, corrupti
          voluptas debitis adipisci.
        </p>
        <button onClick={ScrolltoMenu} className="bg-red-500 px-7 py-3 text-sm text-white font-semibold rounded-full">
          Explore Our menu
        </button>
      </div>
      <div className="p-6">
        <img
          src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="rounded-2xl md:w-[30vw] md:h-[60vh] shadow-2xl shadow-slate-600"
          alt=""
        />
      </div>
    </div>
  );
}
