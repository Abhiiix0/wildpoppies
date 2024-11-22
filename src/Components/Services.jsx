import React from "react";
import sun from "../Assets/icons/sun.png";
import sizer from "../Assets/icons/sizer.png";
import tag from "../Assets/icons/tag.png";
import vans from "../Assets/icons/vans.png";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: sun,
      title: "Same Day Delivery",
      description:
        "Pay within 30 days by choosing Afterpay or Zippay at checkout",
    },
    {
      id: 2,
      icon: sizer,
      title: "Made To Order",
      description: "Customise your gift and add a personalised message card",
    },
    {
      id: 3,
      icon: tag,
      title: "Shop Now, Pay Later",
      description:
        "Pay within 30 days by choosing Afterpay or Zippay at checkout",
    },
    {
      id: 4,
      icon: vans,
      title: "Overnight Delivery",
      description: "Order before 2.30pm for overnight NZ-wide delivery",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-14 gap-4">
      {services.map((s, i) => (
        <div
          key={i}
          className=" bg-white flex items-center justify-center sm:flex-col gap-3  py-4 px-2 sm:px-6 w-full sm:h-[233px] h-fit"
        >
          <div className=" w-[16%] grid place-content-center ">
            <img src={s?.icon} alt="png" className="  sm:mb-3" />
          </div>
          <div className=" w-[84%] flex flex-col  items-start sm:items-center gap-1 sm:gap-3 ">
            <p className=" font-semibold sm:text-center sm:text-lg">
              {s.title}
            </p>
            <p className=" text-[#555555] text-[14px] sm:text-[1rem] sm:text-center">
              {s.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
