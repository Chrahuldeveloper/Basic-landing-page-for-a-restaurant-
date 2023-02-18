import React from "react";

export default function AboutSection() {
  return (
    <section>
      <div className="md:flex md:justify-around md:items-center">
        <div className="my-20 px-6 md:p-0">
          <img
            src="https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="md:w-[30vw] h-[50vh] rounded-2xl shadow-2xl shadow-slate-700"
          />
          <div className=" hidden md:block">
            <img
              src="https://images.pexels.com/photos/7758253/pexels-photo-7758253.jpeg?auto=compress&cs=tinysrgb&w=600 "
              alt=""
              className="shadow-2xl shadow-slate-700 md:w-[350px] md:h-[300px] -translate-y-20 rounded-2xl  md:translate-x-32 mx-5"
            />
          </div>
        </div>
        <div className="max-w-md text-center md:text-left  space-y-5 md:space-y-8 md:-translate-y-20">
          <h1 className="text-red-500 text-xl  font-bold">About us </h1>
          <h1 className="text-3xl md:text-5xl font-bold">
            We are Here <br /> Because of You
          </h1>
          <p className="md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            itaque blanditiis optio, veritatis, placeat iste praesentium quidem,
            repellendus error odio sapiente. Veritatis harum ea voluptas iusto,
            illum natus quibusdam voluptatem quia unde obcaecati velit
            praesentium sint blanditiis eos aspernatur deserunt.
          </p>
        </div>
      </div>
    </section>
  );
}
