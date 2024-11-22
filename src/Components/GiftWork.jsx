import React from "react";
import GiftWorkImg from "../Assets/GiftWork.jpg";
import bag from "../Assets/icons/bag.png";
import shapes from "../Assets/icons/shapes.png";
import vans from "../Assets/icons/car.png";
import flower from "../Assets/icons/flower.png";

const GiftWork = () => {
  const data = [
    {
      id: 1,
      name: "Choose your gift",
      image: bag,
    },
    {
      id: 1,
      name: "Customise your gift",
      image: shapes,
    },
    {
      id: 1,
      name: "We deliver Mon - Sun",
      image: vans,
    },
    {
      id: 4,
      name: "Enjoy the presented gift",
      image: flower,
    },
  ];
  return (
    <div className=" px-4 md:px-14 py-12 sm:py-14">
      <div className=" w-full flex flex-col md:flex-row gap-4">
        <div className=" w-full h-full">
          <img
            src={GiftWorkImg}
            className=" h-[400px] sm:h-[700px] w-full"
            alt=""
          />
        </div>
        <div className=" bg-white h-fit sm:h-[700px] flex items-center sm:p-12 w-full">
          <div className=" h-[400px] m-4 sm:m-0 flex flex-col justify-between">
            <div className=" flex flex-col gap-4">
              <p className=" font-semibold text-lg sm:text-xl uppercase">
                how gifting works
              </p>
              <p className=" text-[#555555] text-[14px] sm:text-[16px]">
                Create your perfect gift bundle with ease. <br />
                We deliver same day… she won't even notice it’s late.{" "}
              </p>
            </div>
            <div className="flex gap-6 flex-col">
              {data.map((item, index) => (
                <div key={item.id} className="  flex gap-5">
                  <div className=" w-8">
                    <img src={item?.image} alt="" className="" />
                  </div>
                  <p>{item?.name}</p>
                </div>
              ))}
            </div>
            <button className=" h-[53px] w-[183px] font-semibold uppercase text-sm bg-black hover:opacity-80 text-white">
              shop all gifts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftWork;
