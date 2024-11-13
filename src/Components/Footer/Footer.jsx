import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pinterest_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer flex flex-col items-center justify-center gap-[50px]">
      <div className="footer-logo flex items-center gap-5">
        <img src={footer_logo} alt="" />
        <p className="text-[#383838] text-[46px] font-bold">SHOPPER</p>
      </div>
      <ul className="footer-links lg:flex gap-[50px] text-[#252525] grid grid-cols-2 text-4xl lg:text-[20px] cursor-pointer">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon flex gap-5 ">
        <div className="footer-icon-container p-2.5 pb-1.5 bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb]">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container p-2.5 pb-1.5 bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb]">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icon-container p-2.5 pb-1.5 bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb]">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px]">
        <hr className="w-4/5 border-none rounded-xl h-1 bg-[#c7c7c7]" />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
