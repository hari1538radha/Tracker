import React from 'react'

function Footer() {
  return (
    <div className='flex justify-center mb-[45px]'>
      <div className='w-4/5'>
        <div className='mb-[47px]'>
          <h1 className='font-bold text-[22px] text-black font-sans mb-[45px]'>Tracker</h1>
          <div className='border-b-2 border-black opacity-30'></div>
        </div>
        <div className='flex w-full text-[16px] font-normal'>
          <div>
            <a href="#" className=''>Home</a>
            <a href="#" className='ml-[17px]'>About Us</a>
            <a href="#" className='ml-[17px]'>Contact Us</a>
          </div>
          <div className='ml-[61.5%]'>
            <p>© 2022 Tracker. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
