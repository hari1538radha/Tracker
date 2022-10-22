import React from "react";
import Navbar from "../Navbar/Navbar";
import Background from "./Img/back.png";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="relative ">
          <img src={Background}></img>
          <div className="  flex flex-col justify-center  items-center bg-white absolute w-1/3 rounded-xl gap-y-4  h-1/2  left-1/3 bottom-1/4">
            <h1 className="text-3xl "> Log In</h1>
            <input
              className=""
              type="text"
              placeholder="Your email"
              required
            ></input>
            <input
              className=""
              type="password"
              placeholder="Your password"
              required
            ></input>
            <button className="bg-blue-300 w-3/4  h-2.5 rounded-full ">
              Log In
            </button>
            <span className="text-rose-600 hidden ">Invalid Credentials</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

