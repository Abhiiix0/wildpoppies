import React from "react";
import banner from "../Assets/ExclusiveBanner.jpg";

const Exclusive = () => {
  return (
    <div className="bg-black px-4 md:px-14 py-10 md:py-14">
      {/* Background image section */}
      <div
        className="sm:h-[400px] h-[521px] w-full bg-center bg-cover grid place-content-center px-4"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex items-center justify-center flex-col gap-5 rounded-md">
          <p className="text-center text-white font-semibold text-xl uppercase tracking-wider">
            unlock exclusive benefits
          </p>
          <p className="text-center text-white font-normal">
            Earn points as you shop and enjoy exclusive benefits and rewards.
          </p>
          <button className="w-full sm:w-40 h-10 sm:h-14 text-[12px] sm:text-[1rem] bg-white text-black transition-colors duration-200 hover:bg-black hover:text-white text-sm font-semibold uppercase tracking-wider">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
