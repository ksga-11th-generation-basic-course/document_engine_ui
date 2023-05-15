import React from 'react'
import Logo from "../assets/images/Logo.svg";


export default function Sidebar() {
  return (
    <div>
        <div className='flex w-[17%] h-screen bg-[#EFEFEF] '>
        <img src={Logo} className="absolute w-16 h-16 top-1 mb-8 left-12" />

        </div>
    </div>
  )
}
