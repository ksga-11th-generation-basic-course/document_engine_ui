import React from 'react'
import Logo from "../assets/images/Logo.svg";
export default function DashBoardLeft() {
  return (
    <div className='left_dashboard flex justify-center'>
      <div className='flex flex-col'>
        {/* <img src={Logo} alt="" /> */}
        <div className='img'>
            <img src={Logo} alt="" />
        </div>
        <div className='btn'>
            <button>New workspace</button>
        </div>
      </div>
    </div>
  )
}
