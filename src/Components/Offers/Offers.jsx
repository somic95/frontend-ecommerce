import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers w-4/5 h-screen flex m-auto lg:px-24 px-0 justify-center items-center bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]">
      <div className="offers-left lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-[#171717] text-[80px] font-semibold mb-[50px] lg:mb-[80px]">
          Exclusive
        </h1>
        <h1 className="text-[#171717] text-[80px] font-semibold mb-[50px] ">
          Offers
        </h1>
        <h1 className="text-[#171717] text-[80px] font-semibold mb-[50px] ">
          For You
        </h1>
        <p className="text-[#171717] text-[22px] font-semibold">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-medium mt-[30px] cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="offers-right lg:w-1/2 hidden lg:block">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
