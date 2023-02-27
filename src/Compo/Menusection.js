import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";

export default function Menusection() {
  const card = useRef(null);
  // scrolling right
  const scrollRight = () => {
    card.current.scrollLeft += 200;
  };
  // scrolling Left
  const scrollLeft = () => {
    card.current.scrollLeft -= 200;
  };

  // static menu data
  const Menudata = [
    {
      id: 1,
      pic: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem, ipsum dolor.Lorem, ipsum dolor",
      Price: "100",
    },
    {
      id: 2,
      pic: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem, ipsum dolor.Lorem, ipsum dolor",
      Price: "100",
    },
    {
      id: 3,
      pic: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem, ipsum dolor.Lorem, ipsum dolor",
      Price: "100",
    },
    {
      id: 4,
      pic: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem, ipsum dolor.Lorem, ipsum dolor",
      Price: "100",
    },
    {
      id: 5,
      pic: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem, ipsum dolor.Lorem, ipsum dolor",
      Price: "100",
    },
    {
      id: 43,
      pic: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem, ipsum dolor.Lorem, ipsum dolor",
      Price: "100",
    },
    {
      id: 42,
      pic: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem, ipsum dolor.Lorem, ipsum dolor",
      Price: "100",
    },
    {
      id: 41,
      pic: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Lorem, ipsum dolor.Lorem, ipsum dolor",
      Price: "100",
    },
  ];
  return (
    // simple text
    <section className=" px-6 my-16 md:my-0  md:px-20 ">
      <div>
        <h1 className="text-red-500 text-xl font-bold">Our Menu</h1>
        <p className="font-bold text-3xl my-5 md:text-5xl">
          Our Popular Menu That will <br /> Always Make You Love it
        </p>
      </div>
      <div className=" md:flex md:justify-around md:items-center md:gap-x-10">
        <div className="flex justify-end gap-x-5 my-3">
          <FiChevronLeft
            strokeWidth={1}
            className="md:w-12 md:h-12 w-10 h-10 hover:bg-red-500 border-2 border-slate-800 hover:border-0 hover:text-white rounded-full"
            onClick={scrollLeft}
          />
          <FiChevronRight
            strokeWidth={1}
            className="md:w-12 md:h-12 w-10 h-10 hover:bg-red-500 border-2 border-slate-800 hover:border-0 hover:text-white rounded-full "
            onClick={scrollRight}
          />
        </div>
        {/* Menu Cards */}
        <div
          ref={card}
          className="flex my-10 ease-in-out duration-200 flex-nowrap items-center overflow-x-scroll scroll-smooth hide-scroll-bar scroll-smooth "
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {Menudata?.map((item) => {
            return (
              <div className="mr-5 md:mr-5 ml-2 shadow-lg ">
                <img
                  className="max-w-xs md:max-w-md rounded-t-xl  opacity-80 ease-in-out duration-200 hover:opacity-100"
                  src={item.pic}
                  alt="Menupic"
                />
                <div className="bg-[#f3f3f3] rounded-b-3xl p-3 shadow-xl space-y-2">
                  <h1 className="text-xl font-bold">{item.Tittle}</h1>
                  <img
                    src="https://assets.website-files.com/6295792fdccb153a120b7d24/6296d62eea187195571c7502_Framewe145.png"
                    alt="dish"
                  />
                  <p className="font-bold text-xl">$ {item.Price}</p>
                  <div className="flex justify-end">
                    <AiFillPlusCircle className="w-12 h-12 " color="red" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
