import React from "react";
import social1 from "../Assets/socialmedia/social1.jpg";
import social2 from "../Assets/socialmedia/social2.jpg";
import social3 from "../Assets/socialmedia/social3.jpg";
import social4 from "../Assets/socialmedia/social4.jpg";
import social5 from "../Assets/socialmedia/social5.jpg";
import social6 from "../Assets/socialmedia/social1.jpg";

const SocialMedia = () => {
  const socialImages = [social1, social2, social3, social4, social5, social6];

  return (
    <div className="px-4 bg-white border md:py-14 md:px-14 py-8">
      <div className=" md:pb-4 ">
        <p className="text-[#9A9392] m-0 text-sm md:text-[16px] uppercase text-center tracking-wider">
          Follow us
        </p>
        <p className="text-xl md:text-[22px] mt-1 sm:mt-3  font-semibold text-center">
          @wildpoppiesnz
        </p>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {socialImages.map((image, index) => (
            <div key={index} className="w-full h-auto overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={`social-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
