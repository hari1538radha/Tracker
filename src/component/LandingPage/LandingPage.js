import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../Store/Slice/LandingSlice";
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
      <div>
        <input
          className="mt-11 w-1104 pl-11 border-solid border-2 border-gray-300 h-53 rounded-xl flex  "
          type="text"
          placeholder="Search by name"
        ></input>
      </div>
      <div>
        {
          <div className="flex flex-wrap align-center justify-center gap-x-78 mt-51 gap-y-51 ">
            {userData?.length &&
              userData.map((obj, key) => (
                <div
                  className="flex w-545 h-72 shadow-md shadow-gray-300 rounded-2xl "
                  key={key}
                >
                  <img
                    className="rounded-l-lg mr-11"
                    src={obj.picture.medium}
                  ></img>
                  <div className="flex flex-col mt-11 font-poppins">
                    <p className="">
                      {obj.name.title}.{obj.name.first}
                    </p>
                    <p>{obj.email}</p>
                    <p>{obj.location.country}</p>
                    <p> ₹10000</p>
                  </div>
                </div>
              ))}
          </div>
        }
      </div>
    </div>
  );
};

export default LandingPage;
