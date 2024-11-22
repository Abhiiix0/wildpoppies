import React, { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Occassion = () => {
  const scrollContainerRef = useRef(null);
  const data = [
    "birthday",
    "Sympathy",
    "Weddings",
    "Anniversary",
    "Baby & Mum",
    "For Hospital",
    "Get Well",
    "Thank You",
    "birthday",
    "Sympathy",
    "Weddings",
    "Anniversary",
    "Baby & Mum",
  ];

  // Scroll to the next item
  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 132, // Adjust this value based on the width of your items
        behavior: "smooth",
      });
    }
  };

  // Scroll to the previous item
  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -132, // Adjust this value based on the width of your items
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="border bg-[#F8F7F7] h-44 md:h-64 p-4 md:px-14 frid place-content-center relative">
      <div className="md:mb-8 mb-4 flex items-center justify-between">
        <p className="uppercase font-semibold text-xl">Shop by Occasion</p>
        <div className=" hidden md:flex gap-1">
          <button
            onClick={() => scrollPrev()}
            className=" rounded-full h-11 w-11 flex items-center justify-center hover:bg-white"
          >
            {" "}
            <FaArrowLeftLong />
          </button>
          <button
            onClick={() => scrollNext()}
            className=" rounded-full h-11 w-11 flex items-center justify-center hover:bg-white"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className=" w-full flex mt-4 overflow-x-auto scrollbar-thin scrollbar-hide scrollbar-thumb-gray-400 scrollbar-track-gray-200 md:scrollbar-hidden scroll-smooth"
      >
        {/* Add 10 divs */}
        {data.map((d, index) => (
          <div
            key={index}
            className="bg-black hover:opacity-80 text-white grid place-content-center h-10 md:h-[56px] px-6 flex-shrink-0 mr-3"
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Occassion;
