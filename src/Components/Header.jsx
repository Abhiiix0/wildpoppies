import React, { useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import logo from "../Assets/WILDPOPPIES-black 1.png";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { Drawer } from "antd";
import { IoCloseOutline } from "react-icons/io5";
const Header = () => {
  const [drawerBtn, setDrawerBtn] = useState(false);
  return (
    <div className="">
      <Drawer
        closeIcon={false}
        placement="left"
        open={drawerBtn}
        title={
          <div className=" flex items-center justify-between">
            <img src={logo} alt="" className=" h-4" />
            <IoCloseOutline
              size={29}
              onClick={() => setDrawerBtn(false)}
              className=" font-bold cursor-pointer"
            />
          </div>
        }
        onClose={() => setDrawerBtn(false)}
      >
        <div className="  flex flex-col  gap-4">
          <p className=" flex h-full gap-1  uppercase  cursor-pointer tracking-wide justify-center text-black font-semibold text-sm">
            Flowers <IoIosArrowDown size={16} className=" text-gray-700" />
          </p>
          <p className=" flex h-full gap-1  uppercase cursor-pointer  tracking-wide  justify-center text-black font-semibold text-sm">
            gift boxs <IoIosArrowDown size={16} className=" text-gray-700" />
          </p>
          <p className=" flex h-full gap-1  uppercase tracking-wide cursor-pointer  justify-center text-black font-semibold text-sm">
            Cakes & add-ons{" "}
            <IoIosArrowDown size={16} className=" text-gray-700" />
          </p>
          <p className=" flex h-full gap-1 items-center cursor-pointer uppercase tracking-wide  justify-center text-black font-semibold text-sm">
            occasion <IoIosArrowDown size={16} className=" text-gray-700" />
          </p>
          <p className=" uppercase text-center cursor-pointer tracking-wide text-red-500 hover:text-red-700 font-semibold text-sm">
            Combo Flower Deals
          </p>
        </div>
      </Drawer>

      <div className=" bg-black h-10 flex justify-center md:justify-between items-center px-14">
        <div className=" hidden md:flex w-56  items-center justify-start gap-3">
          <FaFacebook className=" text-white cursor-pointer" />
          <FaInstagram className=" text-white cursor-pointer" />

          <FaTiktok className=" text-white cursor-pointer" />
        </div>
        <p className="  text-white text-sm">Same Day Delivery Auckland Wide</p>
        <div className=" hidden md:flex w-56   items-center justify-end gap-3">
          <p className=" uppercase text-white text-sm ">rewards</p>
          <p className=" uppercase text-white text-sm ">Delivery</p>
          <p className=" uppercase text-white text-sm ">Faqs</p>
        </div>
      </div>
      <div className=" flex justify-between items-center px-4 md:px-14 py-4 md:py-5 border-b">
        <div className=" w-56 flex gap-3 md:gap-1 items-center">
          <LuMenu
            onClick={() => setDrawerBtn(true)}
            className="text-xl md:text-2xl cursor-pointer md:hidden"
          />
          <CiSearch className="text-xl md:text-2xl" />
          <input
            type="text"
            placeholder="Search"
            className=" hidden md:block outline-none h-12"
          />
        </div>
        <div className=" ">
          <img src={logo} alt="" className=" h-3 w-32 md:w-[273px] md:h-7  " />
        </div>
        <div className="  w-56 justify-end items-center flex gap-3 md:gap-6 ">
          <p className=" flex gap-3 items-center text-sm font-normal text-gray-500">
            <span className=" hidden md:block">Account</span>{" "}
            <CiUser className=" text-xl md:text-2xl text-black" />
          </p>
          <p className="flex gap-3 items-center text-sm font-normal text-gray-500">
            <span className=" hidden md:block">Cart</span>{" "}
            <LiaShoppingBagSolid className="text-xl md:text-2xl text-black" />
          </p>
        </div>
      </div>
      <div className=" hidden border-b h-14 md:flex items-center px-14 justify-center">
        <div className=" h-full w-[53rem] items-center  flex justify-between">
          <p className=" flex h-full gap-1 items-center uppercase  tracking-wide justify-center text-black font-semibold text-sm">
            Flowers <IoIosArrowDown size={16} className=" text-gray-700" />
          </p>
          <p className=" flex h-full gap-1 items-center uppercase  tracking-wide  justify-center text-black font-semibold text-sm">
            gift boxs <IoIosArrowDown size={16} className=" text-gray-700" />
          </p>
          <p className=" flex h-full gap-1 items-center uppercase tracking-wide  justify-center text-black font-semibold text-sm">
            Cakes & add-ons{" "}
            <IoIosArrowDown size={16} className=" text-gray-700" />
          </p>
          <p className=" flex h-full gap-1 items-center uppercase tracking-wide  justify-center text-black font-semibold text-sm">
            occasion <IoIosArrowDown size={16} className=" text-gray-700" />
          </p>
          <p className=" uppercase justify-center tracking-wide text-red-500 font-semibold text-sm">
            Combo Flower Deals
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
