import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero flex h-screen bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] mb-20 lg:mb-48">
      <div className="hero-left flex flex-1 flex-col justify-center gap-[20px] lg:p-0 p-10 lg:pl-[180px]  leading-tight">
        <h2 className="text-[#090909] text-[26px] font-semibold ">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="hero-hand-icon flex items-center gap-[20px]">
            <p className="text-[#171717] text-[100px] font-bold">new</p>
            <img src={hand_icon} alt="" className="w-[105px]" />
          </div>
          <p className="text-[#171717] text-[100px] font-bold">collections</p>
          <p className="text-[#171717] text-[100px] font-bold">for everyone</p>
        </div>
        <div className="sm:justify-center lg:justify-start flex">
          <div className="hero-latest-btn flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium cursor-pointer">
            <div>Lastest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="hero-right flex-1  items-center justify-center m-auto hidden xl:block">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
