import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="relatedproducts flex flex-col items-center gap-2.5 lg:h-[90vh] lg:mb-0 mt-[90px]">
      <h1 className="text-[#171717] text-[50px] font-semibold">
        Related Products
      </h1>
      <hr className="w-[200px] h-1.5 rounded-[10px] bg-[#252525]" />
      <div className="relatedproducts-item mt-[50px] mb-[50px] flex gap-[30px] w-5/6 text-xs">
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

export default RelatedProducts;
