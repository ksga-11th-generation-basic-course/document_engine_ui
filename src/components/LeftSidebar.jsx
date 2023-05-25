import React from 'react'
import Logo from "../assets/images/Logo.svg";
import Dashboard from "../assets/images/Icon/Dashboard.svg";
import Home from "../assets/images/Icon/Home.svg";

function LeftSidebar() {
  return (
    <div className='text-sm lg:w-full h-screen flex-col bg-[#FAFAF9]'>
      <div className='lg:w-full justify-center flex items-center p-2'>
        <img src={Logo} />
      </div>
      {/* New workspace */}
      <div className='lg:w-full grid grid-rows-1 lg:h-auto px-5 py-1'>
        <div className=''>
          <a href="#_" class="inline-flex items-center justify-center w-full py-1 font-medium leading-6 font-semibold text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
            New workspace
          </a>
        </div>
      </div>

      {/* Menu */}
      <div className='lg:w-full grid grid-rows-1 gap-1 lg:h-auto px-5 py-2.5'>
        <div className=''>
          <a href="#_" class="gap-3 inline-flex px-4 w-full py-1 font-medium leading-6 text-[#526581] whitespace-no-wrap rounded-md hover:bg-[#EFEFEF] focus:outline-none focus:ring-2 focus:ring-offset-2" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
            <img src={Home} alt="" className="" />
            <p className='font-semibold'>Home</p>
          </a>
        </div>
        <div className=''>
          <a href="#_" class="gap-2 inline-flex px-4 w-full py-2 font-medium leading-6 text-[#526581] whitespace-no-wrap rounded-md hover:bg-[#EFEFEF] focus:outline-none focus:ring-2 focus:ring-offset-2" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
            <img src={Dashboard} alt="" className="" />
            <p className='font-semibold'>Workspace</p>
          </a>
        </div>
      </div>
      <hr class="w-48 h-[2px] mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
      
      {/* workspace name */}
      <div className='lg:w-full grid grid-rows-1 gap-3 lg:h-auto px-5 py-2.5'>
        <div className=''>
          <a href="#_" class="gap-2 inline-flex px-4 w-full py-2 font-medium leading-6 text-[#526581] whitespace-no-wrap rounded-md bg-[#EFEFEF] hover:bg-[#EFEFEF] focus:outline-none focus:ring-2 focus:ring-offset-2" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
            <img src={Dashboard} alt="" className="" />
            <p className='font-semibold text-[#1E9CEF]'>React Developer</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar