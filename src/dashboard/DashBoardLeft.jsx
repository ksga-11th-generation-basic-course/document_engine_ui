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
          {/* <div className='home absolute top-40 py-2 left-6'>
            <button className=' whitespace-nowrap  flex flex-row '>
              <img src={Home} alt="" className='pr-2 w-10 h-6' />
              <a href="#" className='text-lg'>Home</a>
            </button>
          </div>
          <div className='home absolute top-56 bg-slate-300  '>
            <button className=' whitespace-nowrap  px-12 py-2  bg-slate-300 flex justify-start'>
              <img src={WorkSpace} alt="" className='pr-2 w-10 h-6' />
              <a href="#" className='text-lg'>Workspace</a>
            </button>
          </div> */}
        </div>
      </div>
    </div>
    // <div className='left_dashboard  w-[100%]'>
    //   <div className='w-[15%] h-[100vh] bg-secondary flex flex-row relative '>
    //     <div className="logo w-[100%] absolute top-0 flex justify-center">
    //        <img src={Logo} alt="" />
    //     </div>
    //   </div>
    //   <div className="button absolute top-24 left-[11px] text-white text-lg">
    //        <button className='px-14 py-2 bg-primary   rounded-lg  whitespace-nowrap'><a href="#">New workspace</a></button>
    //     </div>
    //     <div className="button absolute top-40 left-4  hover:opacity-0.5  text-accent ">
    //       <button className=' whitespace-nowrap  flex flex-row '>
    //            <img src={Home} alt="" className='pr-2 w-10 h-6' />
    //           <a href="#" className='text-lg'>Home</a>
    //       </button>
    //     </div>
    //     <div className="button absolute top-52 left-4  bg-gray-200 rounded-base w-[14rem] py-2 px-4 hover:opacity-0.5  text-accent ">
    //       <button className='whitespace-nowrap  flex flex-left'>
    //           <img src={WorkSpace} alt="" className=' h-6  w-6' />
    //           <a href="#" className='text-xl text-primary pl-5'>Workspaces</a>
    //       </button>
    //     </div>
    //   <div className=''>

    //   </div>
    // </div>
  )
}
