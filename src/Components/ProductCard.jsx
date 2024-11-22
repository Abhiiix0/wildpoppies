import React from "react";
import stars from "../Assets/Stars.png";
const ProductCard = ({ data, imgHover }) => {
  return (
    <div className="w-56 m-4 cursor-pointer group flex flex-col items-center md:h-[509px] md:w-[336px] h-[409px] bg-white rounded-md border">
      {/* Image Container */}
      <div className="w-56 h-56 md:w-[336px] border md:h-[336px] bg-slate-200 relative">
        <img
          src={data?.img}
          className={`h-full  w-full  object-cover transition-opacity duration-300 ease-in-out ${
            data?.img2 ? "group-hover:opacity-0" : ""
          }`}
          alt={data?.title || "Product"}
        />
        {data?.img2 && (
          <img
            src={data?.img2}
            className="absolute top-0 left-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            alt="Hover Product"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between h-full items-center pb-4">
        <div className="mt-4 flex flex-col gap-1">
          <p className="text-center text-sm font-semibold">{data?.title}</p>
          <p className="text-center text-sm text-[#555555]">{data?.price}</p>
          <p className=" flex items-center justify-center text-sm text-[#555555]">
            <img src={stars} alt="" /> (12)
          </p>
        </div>
        <button className="mt-2 h-10 md:h-[53px] w-48 md:w-72 border group-hover:bg-black border-black uppercase text-sm text-black group-hover:text-white">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
