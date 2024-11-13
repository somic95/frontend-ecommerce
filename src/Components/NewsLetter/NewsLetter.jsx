import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter w-4/5 h-[60vh] lg:h-[40vh] flex flex-col items-center justify-center m-auto lg:px-[140px] mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] gap-[30px]">
      <h1 className="text-[#454545] text-[85px]  font-semibold lg:hidden mb-4">
        Get{" "}
      </h1>
      <h1 className="text-[#454545] text-[55px] font-semibold lg:hidden">
        Exclusive Offers
      </h1>
      <h1 className="text-[#454545] text-[55px] font-semibold lg:hidden">
        On Your Email
      </h1>

      <h1 className="text-[#454545] text-[50px] font-semibold hidden lg:block">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-[20px] animate-pulse">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-[450px] lg:w-[730px] h-10 lg:h-[70px] rounded-[80px] border-[1px] border-solid border-[#e3e3e3]">
        <input
          type="email"
          placeholder="Your Email ID"
          className="w-[500px] ml-[30px] border-none outline-none text-[#616161] text-[16px]"
        />
        <button className="w-[210px] h-10 lg:h-[70px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
