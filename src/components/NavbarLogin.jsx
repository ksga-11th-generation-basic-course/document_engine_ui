import React from 'react'
import Dashboard from "../assets/images/Workspace/Avatar.svg"

export default function NavbarLogin() {
  return (
    <div>
      <div className=''>
        <div className='flex justify-end  w-full h-[70px] '> 
            <button class="border-2 mr-3 mt-4 border-[#526581] rounded  w-[75px] h-[37px] text-[#1E9CEF] font-medium ">+Join</button>
            <img src={Dashboard} alt="" className="px-3 mt-4 mr-8 h-[37px]" />
        </div>
      </div>
    </div>
    
  )
}
