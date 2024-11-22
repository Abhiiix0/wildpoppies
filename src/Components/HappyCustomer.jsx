import React from "react";
import brand1 from "../Assets/brands/brand1.png";
import brand2 from "../Assets/brands/brand2.png";
import brand3 from "../Assets/brands/brand3.png";
import brand4 from "../Assets/brands/brand4.png";
import brand5 from "../Assets/brands/brand5.png";

const HappyCustomer = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5];

  return (
    <div className="px-4 md:px-14  py-14 flex items-center justify-center flex-col">
      <div className="w-full md:w-[648px] flex flex-col gap-3 sm:gap-4 px-1">
        <p className="text-center uppercase font-semibold tracking-wider text-[#9A9392] text-sm md:text-[1rem]">
          Nz’s no 1 florist
        </p>
        <p className="text-center text-[20px] sm:text-[22px] uppercase font-semibold">
          A part of Kiwi’s memories for over 25 years
        </p>
        <p className="text-sm sm:text-[16px] text-center text-[#555555]">
          Trust our talented team to use their favorite flowers in the shop to
          create the beautiful bouquet or posy in your colour tones.
        </p>
      </div>
      <button className="mt-8 h-[43px] sm:h-[53px] w-full sm:w-[183px] bg-black text-white hover:opacity-80 uppercase text-sm">
        meet the team
      </button>

      {/* Brands Section */}
      <div className="w-full mt-9 md:mt-12 lg:w-[830px]">
        <p className="uppercase text-[14px] sm:text-[1rem] text-[#9A9392]  text-center">
          our happy customers
        </p>
        <div className=" flex justify-center lg:justify-between gap-4 mt-3 lg:mt-0 items-center flex-wrap">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={brand} alt={`Brand ${index + 1}`} className="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyCustomer;
