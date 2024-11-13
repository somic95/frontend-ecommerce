import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar flex justify-around p-[16px] shadow-sm shadow-neutral-400">
      <div className="nav-logo flex items-center gap-[10px]">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Link to="/">
          <p className="text-[#171717] text-[38px] font-semibold">SHOPPER</p>
        </Link>
      </div>
      <ul className="nav-menu flex items-center gap-[50px] text-[#626262] text-[20px] font-medium">
        <li
          className="flex flex-col items-center justify-center gap-2 cursor-pointer"
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl bg-[#ff4141]" />
          ) : (
            <div></div>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-2 cursor-pointer"
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens">Men</Link>
          {menu === "mens" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl bg-[#ff4141]" />
          ) : (
            <div></div>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-2 cursor-pointer"
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens">Women</Link>
          {menu === "womens" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl bg-[#ff4141]" />
          ) : (
            <div></div>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-2 cursor-pointer"
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? (
            <hr className="border-none w-4/5 h-1 rounded-xl bg-[#ff4141]" />
          ) : (
            <div></div>
          )}
        </li>
      </ul>
      <div className="nav-login-cart flex items-center gap-[45px]">
        <Link to="/login">
          <button className="w-[157px] h-[58px] outline-none border-[1px] border-solid border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white cursor-pointer active:bg-[#f3f3f3]">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-[11px] bg-red-600 text-white">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
