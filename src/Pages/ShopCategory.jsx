import React, { useContext } from "react";
import all_product from "../Components/Assets/all_product";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner block my-[30px] mx-auto w-5/6 lg:w-4/5"
        src={props.banner}
        alt=""
      />
      <div className="shopcategory-indexsort flex my-0 mx-[55px] lg:mx-[170px] justify-between items-center">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort hidden lg:block py-2.5 px-5 rounded-[40px] border-[1px] border-solid border-[#888]">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products lg:my-5 my-10 lg:mx-[170px] grid lg:grid-cols-4 gap-[30px] justify-center">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-lg font-medium">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
