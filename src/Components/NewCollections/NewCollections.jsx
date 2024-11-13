import React from "react";
import new_collection from "../Assets/new_collections";
import Item from "../Item/item";

const NewCollections = () => {
  return (
    <div className="new-collections flex flex-col items-center gap-[10px] mb-[100px]">
      <h1 className="text-[#171717] text-[50px] font-semibold">
        NEW COLLECTIONS
      </h1>
      <hr className="w-52 h-1.5 rounded-xl bg-[#252525]" />
      <div className="collections grid lg:grid-cols-4 mt-[50px] gap-[30px] lg:gap-0">
        {new_collection.map((item, i) => {
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

export default NewCollections;
