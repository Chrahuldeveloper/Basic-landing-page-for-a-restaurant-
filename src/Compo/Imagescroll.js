import React, { useRef } from "react";

export default function Imagescroll() {
  const dishs = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/9412023/pexels-photo-9412023.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  let card = useRef(null);
  const scrollLeft = () => {
    card.current.scrollLeft += 100;
  };

  return (
    <div
      ref={card}
      className="flex overflow-x-scroll scroll-smooth hide-scroll-bar gap-x-2  my-24"
    >
      {dishs?.map((item) => {
        return (
          <div key={item.id}>
            <img
              onClick={scrollLeft}
              className="duration-1000 ease-in-out max-w-md"
              src={item.image}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}
