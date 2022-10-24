import React from 'react'
import Navbar from "../Navbar/Navbar";
import SearcLogo from "../Images/SearchLogo.svg";
import Cancel from "../Images/Cancel.svg";
import sample from "../Images/sample.png";
import email from "../Images/Email.svg";
import location from "../Images/Location.svg";
import rupee from "../Images/Rupee.svg";
import Footer from "../Footer/Footer";

function DetailPage() {
    return (
        <div>
            <Navbar />
            <div className="flex  items-center justify-center mt-11">
                <div className="flex relative">
                    <input
                        className=" w-1104 pl-11 border-solid border-2 border-gray-300 h-53 rounded-l-xl flex"
                        type="text"
                        placeholder="Search by name"
                    ></input>
                    <img
                        className="absolute right-10 top-50 cursor-pointer"
                        src={Cancel}
                        alt=''
                    ></img>
                </div>
                <div className="bg-blue-400 h-51 w-64 flex justify-center items-center rounded-r-xl cursor-pointer ">
                    <img src={SearcLogo} alt=''></img>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div>
                    <div className="mt-[50px] w-[771px] h-[659px] shadow-xl shadow-gray-300 rounded-2xl">
                        <div className='flex flex-col items-center w-[771px]'>
                            <img className="mt-[54px] w-[325px] h-[319px] rounded-xl" src={sample} alt='' ></img>
                        </div>
                        <div className="flex flex-col mt-11 font-poppins">
                            <p className="font-bold flex flex-col items-center mb-[20px] text-[24px]">KAVINKUMAR.S</p>
                            <div className='ml-[240px] text-[20px] text-[#70747E] font-normal'>
                                <div className='flex flex-row] mb-[18px]'>
                                    <img className='mr-[17px]' src={email} alt=''></img>
                                    <h3>kavin@gmail.com</h3>
                                </div>
                                <div className='flex flex-row] mb-[18px]'>
                                    <img className='mr-[17px]' src={location} alt=''></img>
                                    <h3>INDIA</h3>
                                </div>
                                <div className='flex flex-row] mb-[18px]'>
                                    <img className='mr-[17px]' src={rupee} alt=''></img>
                                    <h3>1000000</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='space-x-[16px] font-poppins text-[#70747E] mt-[83px] mb-[94px] text-[20px]'>
                    <button className='w-[234px] h-[60px] p-[10px] shadow-xl shadow-gray-300 rounded-2xl font-medium'>Expense</button>
                    <button className='w-[244px] h-[60px] p-[10px] shadow-xl shadow-gray-300 rounded-2xl font-medium'>Amount</button>
                    <button className='w-[138px] h-[65px] p-[10px] shadow-xl shadow-gray-300 rounded-2xl bg-[#6496EB] text-[#F5F5F5] font-semibold'>ADD</button>
                </div>
                <div className='mb-[80px] w-[600px] font-medium text-[20px] space-y-[20px]'>
                    <div className='flex flex-row'>
                        <h3 className='w-[130px] text-gray-700 pt-[14px]'>Total Salary</h3>
                        <p className='ml-[140px] font-bold text-gray-500 pt-[10px] text-[25px]'>:</p>
                        <p className='ml-[100px] shadow-xl shadow-gray-300 rounded-xl pt-[20px] pl-[80px] w-[243px] h-[60px] text-[#6496EB]'>₹  10000</p>
                    </div>
                    <div className='flex flex-row'>
                        <h3 className='w-[130px] text-gray-700 pt-[14px]'>Rent</h3>
                        <p className='ml-[140px] font-bold text-gray-500 pt-[10px] text-[25px]'>:</p>
                        <p className='ml-[100px] shadow-xl shadow-gray-300 rounded-xl pt-[20px] pl-[80px] w-[243px] h-[60px] text-[#70747E]'>₹  1000</p>
                    </div>
                    <div className='flex flex-row'>
                        <h3 className='w-[130px] text-gray-700 pt-[14px]'>Petrol</h3>
                        <p className='ml-[140px] font-bold text-gray-500 pt-[10px] text-[25px]'>:</p>
                        <p className='ml-[100px] shadow-xl shadow-gray-300 rounded-xl pt-[20px] pl-[80px] w-[243px] h-[60px] text-[#70747E]'>₹  2000</p>
                    </div>
                    <div className='flex flex-row'>
                        <h3 className='w-[130px] text-gray-700'>Remainning Amount</h3>
                        <p className='ml-[140px] font-bold text-gray-500 pt-[10px] text-[25px]'>:</p>
                        <p className='ml-[100px] shadow-xl shadow-gray-300 rounded-xl pt-[20px] pl-[80px] w-[243px] h-[60px] text-[#6496EB]'>₹  7000</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DetailPage