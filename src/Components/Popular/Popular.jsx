import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular flex flex-col items-center gap-[10px] lg:h-[90vh] lg:w-fit mb-20 px-5">
      <h1 className="text-[#171717] text-[50px] font-semibold">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-52 h-1.5 rounded-lg bg-[#252525]" />
      <div className="popular-item mt-[50px] lg:flex grid gap-[30px] lg:gap-0">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
