import React from "react";

export default function ReviewCard() {
  const reviews = [
    {
      id: 1,
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Para: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
      pic: "",
    },
    {
      id: 2,
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Para: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
      pic: "",
    },
    {
      id: 3,
      Tittle: "Lorem ipsum dolor sit amet consectetur.",
      Para: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
      pic: "",
    },
  ];
  //   Review cards
  return (
    <div className="px-6 flex gap-6 justify-center flex-col md:flex-row items-center">
      {reviews?.map((item) => {
        return (
          <>
            <div className=" shadow-md hover:shadow-xl ease-in-out duration-300 p-5 rounded-xl text-center bg-[#f3f3f3]">
              <img
                src="https://assets.website-files.com/6295792fdccb153a120b7d24/6296d62eea187195571c7502_Framewe145.png"
                className="mx-auto"
                alt="fivestarts"
              />
              <h1 className="text-2xl my-5 font-semibold">{item.Tittle}</h1>
              <p className="my-3">{item.Para}</p>
              <img
                src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-10 mx-auto my-3 h-10 rounded-full"
              />
              <h1 className="text-xl font-bold ">Name</h1>
            </div>
          </>
        );
      })}
    </div>
  );
}
