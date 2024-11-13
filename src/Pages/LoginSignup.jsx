import React from "react";

const LoginSignup = () => {
  return (
    <div className="loginsignup w-full  bg-[#fce3fe] py-24">
      <div className="loginsignup-container lg:w-2/5 w-4/5 bg-white m-auto py-10 px-[60px] rounded-lg">
        <h1 className="my-3 mx-auto">Sign Up</h1>
        <div className="loginsignup-fields flex flex-col gap-7 mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full h-[72px] pl-5 border-[1px] border-solid border-[#c9c9c9] text-lg"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-[72px] pl-5 border-[1px] border-solid border-[#c9c9c9] text-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-[72px] pl-5 border-[1px] border-solid border-[#c9c9c9] text-lg"
          />
        </div>
        <button className="w-full h-[72px] text-white bg-[#ff4141] mt-8 text-2xl font-medium cursor-pointer">
          Continue
        </button>
        <p className="loginsignup-login mt-5 text-[#5c5c5c] text-lg font-medium">
          Already have an account?{" "}
          <span className="text-[#ff4c4c] font-semibold"> Login Here</span>
        </p>
        <div className="loginsignup-agree flex items-center mt-7 gap-5 text-[#5c5c5c] text-lg font-medium">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
