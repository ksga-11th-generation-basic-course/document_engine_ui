import React, { useState } from 'react'
import Logo from "../assets/images/Logo.svg";
import Dashboard from "../assets/images/Dashboard/Dashboard.svg";
import Member from "../assets/images/Dashboard/Member.svg";
import Document from "../assets/images/Dashboard/Document.svg";
import Home from "../assets/images/Icon/Home.svg";

function LeftSidebar() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='text-sm lg:w-full h-screen flex-col bg-[#FAFAF9]'>
      <div className='lg:w-full justify-center flex items-center p-2'>
        <img src={Logo} />
      </div>
      {/* New workspace */}
      <div className='lg:w-full grid grid-rows-1 lg:h-auto px-5 py-1'>
        <div className=''>
          <a href="#_" class="inline-flex items-center justify-center w-full py-1 leading-6 font-semibold text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-offset-2" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
            New workspace
          </a>
        </div>
      </div>

      {/* Menu */}
      <div className='lg:w-full grid grid-rows-1 gap-1 lg:h-auto px-5 py-2.5'>
        <div className=''>
          <a href="#_" class="gap-3 inline-flex px-4 w-full py-2 font-medium leading-6 text-[#526581] whitespace-no-wrap rounded-md hover:bg-[#EFEFEF] focus:outline-none focus:ring-offset-2" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
            <img src={Home} alt="" className="" />
            <p className='font-semibold'>Home</p>
          </a>
        </div>
        <div className=''>
          <a href="#_" class="gap-2 inline-flex px-4 w-full py-2 font-medium leading-6 text-[#526581] whitespace-no-wrap rounded-md hover:bg-[#EFEFEF] focus:outline-none focus:ring-offset-2" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
            <img src={Dashboard} alt="" className="text-black" />
            <p className='font-semibold'>Workspace</p>
          </a>
        </div>
      </div>
      <hr class="w-48 h-[2px] mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>

      {/* workspace name */}
      <div className='lg:w-full grid grid-rows-1 gap-3 lg:h-auto px-5 py-2.5'>
        <div className=''>
          <a href="#_" class="gap-2 inline-flex px-4 w-full py-2 font-medium leading-6 text-[#526581] whitespace-no-wrap rounded-md hover:bg-[#EFEFEF] focus:outline-none focus:ring-offset-2" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
            <img src={Member} alt="" className="" />
            <p className='font-semibold '>React Developer</p>
          </a>
          <a onClick={() => setToggle(!toggle)} href="#_" class="text-primary ml-3 mt-2 gap-2 inline-flex px-6 py-2 font-medium leading-6 whitespace-no-wrap rounded-md bg-[#EFEFEF] hover:bg-[#EFEFEF] focus:outline-none focus:ring-offset-2" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                <img src={Document} alt="" className="" />
                <p className='font-semibold'>React Developer </p>
              </a>
          {toggle && (
            <ul class="ml-2 p-2">
              <a href="#_" class="gap-2 ml-5 inline-flex px-4 w-36 py-2 font-medium leading-6 text-[#526581] whitespace-no-wrap rounded-md hover:bg-[#EFEFEF] focus:outline-none focus:ring-offset-2" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                <img src={Document} alt="" className="" />
                <p className='font-semibold'>Page1</p>
              </a>
              <a href="#_" class="gap-2 ml-5 inline-flex px-4 w-36 py-2 font-medium leading-6 text-[#526581] whitespace-no-wrap rounded-md hover:bg-[#EFEFEF] focus:outline-none focus:ring-offset-2" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                <img src={Document} alt="" className="" />
                <p className='font-semibold'>Page2</p>
              </a>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar