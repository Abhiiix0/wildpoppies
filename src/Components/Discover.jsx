import React, { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "./ProductCard";
import imghover from "../Assets/freeGifts/Image3.png";
const Discover = ({ title, title2, desc, data }) => {
  const scrollContainerRef = useRef(null);
  console.log(data);
  // Scroll to the next item
  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350, // Adjust this value based on the width of your items
        behavior: "smooth",
      });
    }
  };

  // Scroll to the previous item
  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350, // Adjust this value based on the width of your items
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-[#F8F7F7] px-4 md:px-14 py-8 sm:py-12 h-full">
      <div className=" flex flex-col gap-1 justify-between">
        <p className=" uppercase font-normal tracking-wider">{title}</p>
        <p className=" mt-1 text-[22px] tracking-wider uppercase font-semibold">
          {title2}
        </p>
        <div className=" flex justify-between items-center ">
          <p className=" font-normal tracking-wider">{desc}</p>
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
      </div>
      <div
        ref={scrollContainerRef}
        className=" w-full flex overflow-x-auto scrollbar-thin scrollbar-hide scrollbar-thumb-gray-400 scrollbar-track-gray-200 md:scrollbar-hidden scroll-smooth"
      >
        {data.map((d, index) => (
          <ProductCard key={index} imgHover={imghover} data={d} />
        ))}
      </div>
      {title === "discover" ? (
        <button className=" mt-2 hover:opacity-80 w-full sm:mt-4 h-10 md:h-14 sm:w-64 uppercase bg-black text-white">
          shop all Flowers
        </button>
      ) : (
        <button className=" mt-2 hover:opacity-80 w-full sm:mt-4 h-10 md:h-14 sm:w-64 uppercase bg-black text-white">
          shop all combo deals
        </button>
      )}
    </div>
  );
};

export default Discover;
