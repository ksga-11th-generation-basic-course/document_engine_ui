import React from 'react'
import Logo from "../assets/images/DashBaord/LogoD.svg"
export default function DashBoardHeader() {
  return (
    <div className='navbar h-16  flex flex-row justify-end items-center'> 
         <button class="bg-transparent  h-8 hover:bg-blue-500 text-primary text-center  font-semibold hover:text-white border border-gray-500 hover:border-transparent rounded ">
           <a className='text-center pr-3'><span  className='p-2'>+</span>Join</a>
         </button>
        <button type="button" class="flex rounded-full pl-7 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <img class="h-10 w-10 rounded-full" src={Logo} alt=""/>
        </button>
    </div>
  )
}
