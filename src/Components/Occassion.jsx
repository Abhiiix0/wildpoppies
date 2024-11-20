import React, { useRef } from "react";

const Occassion = () => {
  const scrollContainerRef = useRef(null);

  // Scroll to the next item
  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 120, // Adjust this value based on the width of your items
        behavior: "smooth",
      });
    }
  };

  // Scroll to the previous item
  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -120, // Adjust this value based on the width of your items
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="border h-44 md:h-64 p-4 relative">
      <div>
        <p className="uppercase font-semibold text-xl mb-4">Shop by Occasion</p>
        <button className=" rounded-full h-11 w-11 bg-white"></button>
        <button className=" rounded-full h-11 w-11 bg-gray-300"></button>
      </div>
      {/* Scroll Buttons for Desktop */}
      <button
        onClick={scrollPrev}
        className="hidden md:block absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded"
      >
        Prev
      </button>
      <button
        onClick={scrollNext}
        className="hidden md:block absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded"
      >
        Next
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="border w-full flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 md:scrollbar-hidden scroll-smooth"
      >
        {/* Add 10 divs */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="bg-black h-10 w-[110px] flex-shrink-0 mr-3"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Occassion;
