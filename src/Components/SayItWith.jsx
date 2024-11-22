import React, { useRef } from "react";
import cake from "../Assets/cake.png";
import flowers from "../Assets/flower.png";
import gifts from "../Assets/gifts.png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const SayItWith = () => {
  const scrollContainerRef = useRef(null);

  // Scroll to the next item
  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 311 + 32, // Item width + gap (adjust if necessary)
        behavior: "smooth",
      });
    }
  };

  // Scroll to the previous item
  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -(311 + 32), // Item width + gap (adjust if necessary)
        behavior: "smooth",
      });
    }
  };

  const Options = [
    { id: 1, name: "Gifts", image: gifts },
    { id: 2, name: "Flowers", image: flowers },
    { id: 3, name: "Cakes", image: cake },
    { id: 4, name: "Flowers", image: flowers },
    { id: 5, name: "Cakes", image: cake },
  ];

  return (
    <div className="h-[470px] py-8  md:h-[601px] bg-white">
      <div className="px-4 md:px-14">
        <p className="text-center uppercase text-[#9A9392] text-sm sm:text-[16px]">
          Say it With
        </p>
        <p className="text-center mt-1 sm:mt-2 uppercase text-xl font-semibold sm:text-[22px]">
          flowers & gifts
        </p>
      </div>
      <div className="flex relative justify-between items-center mt-6 md:mt-8">
        <div
          ref={scrollContainerRef}
          className="w-full flex overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {Options.map((opt) => (
            <div
              key={opt.id}
              className="bg-slate-100 ml-14 relative h-[311px] w-[311px] md:h-[428px] md:w-[428px] flex-shrink-0 overflow-hidden"
            >
              <div className="h-full w-full group">
                <img
                  src={opt.image}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center w-full absolute bottom-6 left-0">
                <button className="text-[12px] h-[42px] w-fit uppercase tracking-wider px-6 hover:bg-black hover:text-white font-semibold bg-white">
                  {opt.name}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:flex w-full justify-between px-4 absolute bottom-40 md:px-14 gap-1">
          <button
            onClick={() => scrollPrev()}
            className="rounded-full h-11 w-11 flex items-center justify-center bg-white"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={() => scrollNext()}
            className="rounded-full h-11 w-11 flex items-center justify-center bg-white"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SayItWith;
