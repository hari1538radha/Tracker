import React from "react";
import Navbar from "../Navbar/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <input
          className="mt-11 w-1104 ml-137 pl-11 border-solid border-2 border-green-100 h-53 rounded-xl "
          type="text"
          placeholder="Search by name"
        ></input>
      </div>
    </div>
  );
};

export default LandingPage;
