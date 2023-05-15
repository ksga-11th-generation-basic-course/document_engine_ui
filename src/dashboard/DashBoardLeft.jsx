import React from 'react'
import Logo from "../assets/images/Logo.svg";
import Home from "../assets/images/DashBaord/home.svg"
import WorkSpace from "../assets/images/DashBaord/workSpace.svg"
export default function DashBoardLeft() {
  return (
    <div className='w-[100%]'>
      <div className='w-[15%] h-[100vh] bg-secondary'>
        <div className='px-5 flex flex-col justify-center gap-2'>
          <img src={Logo} alt="" className='h-24' />
          <div className="button">
            <button className='px-14 py-2 bg-primary  rounded-lg  whitespace-nowrap'><a href="#">New workspace</a></button>
          </div>
          <div className='home'>
            <button className=' whitespace-nowrap  flex flex-row '>
              <img src={Home} alt="" className='pr-2 w-10 h-6' />
              <a href="#" className='text-lg'>Home</a>
            </button>
           </div> 
          <div className='workspace bg-slate-300  flex justify-start '>
            <button className=' whitespace-nowrap p-2 flex justify-start'>
              <img src={WorkSpace} alt="" className='w-10 h-6' />
              <a href="#" className='text-lg text-primary'>Workspace</a>
            </button>
          </div> 
        </div>
      </div>
    </div>
  )
}
