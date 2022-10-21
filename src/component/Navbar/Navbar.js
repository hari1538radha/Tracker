//package import 
import React from "react";
//Images import
import Logo from "../Images/Logo.svg";

const Navbar = () => {
  return (
    <div className="  font-poppins  font-bold shadow-lg shadow-black-100  w-full h-0 flex-row flex items-center ">
      <div>
        <img className="pl-137" src={Logo}></img>
      </div>
      <span className="tracking-widest leading-3 pl-3 text-27 ">TRACKER</span>
    </div>
  );
};

export default Navbar;
