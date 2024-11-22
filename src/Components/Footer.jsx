import React, { useState } from "react";
import { FaArrowRight, FaPlus, FaMinus } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import footerImg from "../Assets/fb.jpg";

//payment
import Amex from "../Assets/paymentsIcons/Amex.png";
import GooglePay from "../Assets/paymentsIcons/GooglePay.png";
import Mastercard from "../Assets/paymentsIcons/Mastercard.png";
import PayPal from "../Assets/paymentsIcons/PayPal.png";
import ShopPay from "../Assets/paymentsIcons/ShopPay.png";
import Visa from "../Assets/paymentsIcons/Visa.png";

const Footer = () => {
  const Company = [
    "Corporate Gifting",
    "Wedding & Events",
    "Rewards",
    "Our Brands",
    "Our Team",
    "Our Story",
    "Blog",
  ];

  const help = [
    "FAQ",
    "Contact Us",
    "Our Store",
    "Delivery",
    "Returns & Refunds",
  ];
  const social = ["Facebook", "Instagram", "TikTok"];

  const [collapseState, setCollapseState] = useState({
    company: false,
    help: false,
    social: false,
  });

  const payments = [Amex, GooglePay, Mastercard, PayPal, ShopPay, Visa];
  const toggleCollapse = (section) => {
    setCollapseState((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-full md:h-[798px] h-full bg-black text-white flex-row md:flex items-center justify-normal">
      {/* Image Section */}
      <div
        className="md:w-2/5 md:h-full h-96 overflow-hidden flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${footerImg})` }}
      >
        <div className="flex flex-col items-center">
          <span className="text-6xl font-bold">WP.</span>
          <span className="capitalize text-xl">Floristry & gifts</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 px-4 py-8 sm:px-20 lg:px-24 xl:px-36">
        {/* Newsletter Section */}
        <div>
          <h2 className=" text-[18px] sm:text-2xl">
            SIGN UP TO OUR NEWSLETTER
          </h2>
          <div className="flex justify-between items-center mt-4 border-b-2 border-white pb-6 text-gray-400">
            <input
              type="text"
              placeholder="Email"
              className=" bg-transparent w-full pr-4 border-none outline-none"
            />
            <FaArrowRight />
          </div>
          <div className="mt-6 text-sm text-gray-400">
            By signing up you agree to our Privacy Policy
          </div>
        </div>

        {/* Sections */}
        <div className="mt-6">
          {/* Columns for larger screens, collapsible for smaller screens */}
          <div className="hidden md:flex justify-between">
            {/* Company Section */}
            <div>
              <h2>Company</h2>
              <div className="flex flex-col mt-2 gap-2">
                {Company.map((c) => (
                  <span
                    key={c}
                    className="text-gray-400 cursor-pointer text-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <div>
              <h2>Help</h2>
              <div className="flex flex-col mt-2 gap-2">
                {help.map((h) => (
                  <span
                    key={h}
                    className="text-gray-400 cursor-pointer text-sm"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Follow Us Section */}
            <div>
              <h2>Follow Us</h2>
              <div className="flex gap-2 flex-col mt-2">
                {social.map((s) => (
                  <a key={s} className="text-gray-400 cursor-pointer text-sm">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Collapsible Sections for smaller screens */}
          <div className="space-y-4 md:hidden">
            {/* Company Section */}
            <div>
              <div
                className="flex justify-between items-center border-b pb-2 cursor-pointer"
                onClick={() => toggleCollapse("company")}
              >
                <h2>Company</h2>
                {collapseState.company ? <FaMinus /> : <FaPlus />}
              </div>
              {collapseState.company && (
                <div className="flex flex-col gap-2 mt-2">
                  {Company.map((c) => (
                    <span
                      key={c}
                      className="text-gray-400 cursor-pointer text-sm"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Help Section */}
            <div>
              <div
                className="flex justify-between items-center border-b pb-2 cursor-pointer"
                onClick={() => toggleCollapse("help")}
              >
                <h2>Help</h2>
                {collapseState.help ? <FaMinus /> : <FaPlus />}
              </div>
              {collapseState.help && (
                <div className="flex flex-col gap-2 mt-2">
                  {help.map((h) => (
                    <span
                      key={h}
                      className="text-gray-400 cursor-pointer text-sm"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Follow Us Section */}
            <div>
              <div
                className="flex justify-between items-center border-b pb-2 cursor-pointer"
                onClick={() => toggleCollapse("social")}
              >
                <h2>Follow Us</h2>
                {collapseState.social ? <FaMinus /> : <FaPlus />}
              </div>
              {collapseState.social && (
                <div className="flex flex-col gap-2 mt-2">
                  {social.map((s) => (
                    <a key={s} className="text-gray-400 cursor-pointer text-sm">
                      {s}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Store Section */}
        <div className="mt-6">
          <h2 className="text-xl">Our Store</h2>
          <div className="flex flex-col md:flex-row mt-2">
            <div className="text-gray-400 text-sm flex flex-col flex-1">
              <span>36 Ethel St, Sandringham,</span>
              <span>Auckland 1025, New Zealand</span>
              <span>Call 093576161</span>
            </div>
            <div className="text-gray-400 text-sm flex flex-col flex-1">
              <span>Monday - Friday: 7.30am - 5.30pm</span>
              <span>Saturday: 8am - 12.00pm</span>
              <span>Sunday: Closed except for special events</span>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-6">
          <div className="flex flex-wrap justify-start items-center text-4xl gap-6">
            {payments?.map((p) => (
              <img key={p} src={p} alt="Payment Method" className="" />
            ))}
          </div>
          <div className="cursor-pointer mt-4">&copy; 2024 Wild Poppies.</div>
          <div className="flex gap-5 mt-4">
            <a className=" text-[12px] sm:text-[16px]">Social Responsibility</a>
            <a className=" text-[12px] sm:text-[16px]">Trading Terms</a>
            <a className=" text-[12px] sm:text-[16px]">Liquor off License</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
