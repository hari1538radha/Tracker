import React from "react";
import Navbar from "../Navbar/Navbar";
import Background from "../Images/Background.svg";
import Footer from "../Footer/Footer";
const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="relative font-poppins mb-11">
        <img className="bg-cover w-[100%]" src={Background}></img>
        <div className="  flex flex-col  items-center bg-white absolute  rounded-xl gap-y-4 w-[410px] left-1/3 top-[89px]">
          <h1 className="text-3x mt-51 font-bold text-[42px] font-sans"> Log In</h1>
          <input
            className="w-[330px] border-2 border-grey-300 pl-[20px] bg-white h-51 rounded-[100px] mt-[45px]"
            type="text"
            placeholder="Your email"
            required
          ></input>
          <input
            className="bg-white h-51 w-[330px] rounded-[100px] pl-[20px] border-2 border-grey-300 mt-[20px]"
            type="password"
            placeholder="Your password"
            required
          ></input>
          <button className="bg-[#6496EB] text-white w-[330px] h-51 mt-[40px] rounded-full ">
            Log In
          </button>
          <span className="text-[#F75B46] mt-[20px] mb-51 ">Invalid Credentials</span>
        </div>
      </div>
      <div>
        <Footer/>
        </div>
    </div>
  );
};

export default Login;
