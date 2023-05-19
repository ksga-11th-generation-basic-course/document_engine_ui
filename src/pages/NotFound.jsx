import React from 'react'
import Navbar from './Navbar'
import Page404 from "../assets/images/NotFound/404 Error.svg"
export default function 
() {
  return (
    <div className='notFound bg-[#EDF9FF] h-[100vh] w-full '>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className='flex flex-col justify-center items-center pt-16'>
            <div className='images '>
                <img src={Page404} alt="" className='pr-28 h-[566px] w-[566px]' />
            </div>
            <div className='text'>
                 <h1 className='text-7xl text-primary font-bold'>Page Not Found</h1>
                 <p className='text-back text-center pt-5 text-xl'>Sorry, we can’t find the page you looking for.</p>
                 <div className='flex justify-center pt-8 text-white'>
                    <button className='px-4 bg-primary py-2 rounded-xl'>Back to Home</button>
                 </div>
            </div>
        </div>
        
    </div>
  )
}
