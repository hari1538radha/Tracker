import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../Store/Slice/LandingSlice";
import SearcLogo from "../Images/SearchLogo.svg";
import Cancel from "../Images/Cancel.svg";
import Loader from "../Images/Loader.gif";
import Fotter from "../Fotter/Fotter";
const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  const { userData, userDataLoading } = useSelector(
    (state) => state.userDataInfo
  );
  console.log(userData);

  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex  items-center justify-center mt-11">
        <div className="flex relative">
          <input
            className=" w-1104 pl-11 border-solid border-2 border-gray-300 h-53 rounded-l-xl flex  "
            type="text"
            placeholder="Search by name"
          ></input>
          <img
            className="absolute right-10 top-50 cursor-pointer"
            src={Cancel}
          ></img>
        </div>

        <div className="bg-blue-400 h-51 w-64 flex justify-center items-center rounded-r-xl cursor-pointer ">
          <img src={SearcLogo}></img>
        </div>
      </div>
      <div>
        {
          <div className="flex flex-wrap align-center justify-center gap-x-78 mt-51 gap-y-51  ">
            {userDataLoading == true && (
              <div className="flex flex-col justify-center items-center">
                <p className="text-2xl">Loading Please Wait</p>
                <img className="w-72 h-72" src={Loader}></img>
              </div>
            )}
            {userData?.length > 0 &&
              userData.map((obj, key) => (
                <div className="flex w-545 h-72 shadow-md shadow-gray-300 rounded-2xl ">
                  <img
                    className="rounded-l-lg mr-11"
                    src={obj.picture.medium}
                  ></img>
                  <div className="flex flex-col mt-11 font-poppins gap-y-3 ">
                    <p className="font-bold mb-3 ">
                      {obj.name.title}.{obj.name.first}
                    </p>
                    <h3 className="text-grey-200">{obj.email}</h3>
                    <h3>{obj.location.country}</h3>
                    <h3> ₹10000</h3>
                  </div>
                </div>
              ))}
          </div>
        }
      </div>
      <footer>
        <Fotter />
      </footer>
    </div>
  );
};

export default LandingPage;
