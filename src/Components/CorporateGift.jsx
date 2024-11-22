import React from "react";
import img1 from "../Assets/corporate/flowers.jpg";
import img2 from "../Assets/corporate/gifts.jpg";

const CorporateGift = () => {
  return (
    <div className="px-4 relative md:px-14 py-14 bg-white">
      <div className="relative flex flex-col md:flex-row">
        {/* Lighter Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-0"></div>

        {/* Image 1 */}
        <div className="w-full md:w-1/2">
          <img
            src={img1}
            className="w-full h-[320px] sm:h-auto object-cover sm:max-h-[300px] md:max-h-[500px] lg:max-h-[600px]"
            alt="Flowers"
          />
        </div>

        {/* Image 2 */}
        <div className="w-full md:w-1/2">
          <img
            src={img2}
            className="w-full h-[320px] sm:h-auto object-cover sm:max-h-[300px] md:max-h-[500px] lg:max-h-[600px]"
            alt="Gifts"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="absolute bottom-24 sm:bottom-[108px] w-full left-0 px-8 sm:px-14">
        <div className="flex items-center justify-center flex-col gap-3 sm:gap-4">
          <p className="uppercase tracking-wider text-[#FFFFFF]">
            corporate gifting
          </p>
          <p className="text-[20px] text-center sm:text-[22px] uppercase font-semibold text-white">
            Over 25 years experience in happiness
          </p>
          <button className="w-full h-[42px] sm:h-[53px] sm:w-[160px] bg-white hover:bg-black hover:text-white text-black uppercase tracking-wider text-[12px] sm:text-[16px]">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CorporateGift;
