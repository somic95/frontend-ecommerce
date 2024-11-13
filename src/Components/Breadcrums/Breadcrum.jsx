import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum flex items-center gap-2 text-[#5e5e5e] text-xs lg:text-base font-semibold my-5 lg:my-[60px] mx-5 lg:mx-[170px] capitalize">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
