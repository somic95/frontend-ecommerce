import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay lg:flex  my-0 lg:mx-[170px] mx-5">
      <div className="productdisplay-left flex gap-[17px] lg:w-1/2">
        <div className="productdisplay-img-list flex flex-col gap-4 ">
          <img className="h-[163px] object-cover" src={product.image} alt="" />
          <img className="h-[163px] object-cover" src={product.image} alt="" />
          <img className="h-[163px] object-cover" src={product.image} alt="" />
          <img className="h-[163px] object-cover" src={product.image} alt="" />
        </div>
        <div className="productdisplay-img ">
          <img
            className="productdisplay-main-img w-[586px] h-[700px] object-cover"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right lg:my-0 mt-5 lg:mx-[70px] flex flex-col lg:w-1/2">
        <h1 className="text-[#3d3d3d] text-[40px] font-bold leading-normal">
          {product.name}
        </h1>
        <div className="productdisplay-right-stars flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-base">
          <div className="flex gap-[5px]">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
          </div>
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices flex my-10 mx-0 gap-[30px] text-2xl font-bold">
          <div className="productdisplay-right-price-old text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new text-[#ff4141]">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          voluptatum magnam et molestias ipsum impedit nostrum dolorem,
          distinctio fugit? Rem blanditiis adipisci, excepturi vero natus
          perspiciatis veniam quo officia numquam aspernatur fugiat voluptate
          labore ipsum asperiores omnis, nulla repudiandae autem dignissimos
          soluta, similique possimus! Incidunt, quia minima. Incidunt, ratione
          nostrum.
        </div>
        <div className="productdisplay-right-size">
          <h1 className="mt-[55px] text-[#656565] text-xl font-semibold">
            Select Size
          </h1>
          <div className="productdisplay-right-sizes flex my-[30px] mx-0 gap-5">
            <div className="py-[18px] px-6 bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer">
              S
            </div>
            <div className="py-[18px] px-6 bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer">
              M
            </div>
            <div className="py-[18px] px-6 bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer">
              L
            </div>
            <div className="py-[18px] px-6 bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer">
              XL
            </div>
            <div className="py-[18px] px-6 bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <button
          className="py-5 px-10 w-[200px] text-base font-semibold text-white bg-[#ff4141] mb-10 border-none outline-none cursor-pointer"
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category mt-2.5">
          <span className="font-semibold">Category : </span>Women , T-Shirt,
          Crop Top
        </p>
        <p className="productdisplay-right-category mt-2.5">
          <span className="font-semibold">Tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
