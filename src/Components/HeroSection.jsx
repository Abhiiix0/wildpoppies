import React from "react";
import HeroImg from "../Assets/HeroBanner.jpg";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat px-4 md:px-14 pb-4 md:pb-14 flex items-end h-[86.4vh]"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      <div>
        <div className="flex gap-2 flex-col mb-4 text-white">
          <p className="uppercase tracking-wider text-sm font-normal">
            Premium quality
          </p>
          <p className="font-semibold text-2xl tracking-wider uppercase">
            new combo flower deals
          </p>
          <p className="font-normal text-sm tracking-wider capitalize">
            Discover our new combo flower deals, starting from $59.
          </p>
        </div>
        <button className="uppercase font-light h-11 w-full sm:w-fit sm:px-6 bg-white text-black rounded-sm text-[0.75rem] tracking-wider">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
