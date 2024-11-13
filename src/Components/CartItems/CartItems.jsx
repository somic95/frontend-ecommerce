import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartitems my-[100px] lg:mx-[170px]">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-1 bg-[#e2e2e2] border-0" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={e.image}
                  alt=""
                  className="carticon-product-icon h-[62px]"
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity w-16 h-12 border-2 border-solid border-[#ebebeb] bg-white">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon w-4 my-0 mx-10 cursor-pointer"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="carditems-down xl:flex my-24 mx-0 pl-5 lg:pl-0">
        <div className="carditems-total flex-1 flex flex-col mr-[200px] gap-10">
          <h1 className="font-semibold">Cart Totals</h1>
          <div>
            <div className="cartitems-total-item flex justify-between py-4 px-0">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item flex justify-between py-4 px-0">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item flex justify-between py-4 px-0 font-semibold">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-64 h-14 outline-none border-none bg-[#ff5a5a] text-white text-base font-semibold cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitems-promocode flex-1 text-base font-medium">
          <p className="text-[#555]">If you have a promo code, Enter it here</p>
          <div className="carditems-promobox w-[504px] h-14 mt-4 pl-5 bg-[#eaeaea]">
            <input
              className="border-none outline-none bg-transparent text-base w-[305px] h-12"
              type="text"
              placeholder="promo code"
            />
            <button className="w-[170px] h-14 text-base bg-black text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
