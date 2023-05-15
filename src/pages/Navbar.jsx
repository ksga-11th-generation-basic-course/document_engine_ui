import React from 'react'
import Logo from "../assets/images/Logo.svg";
import { Link, NavLink } from 'react-router-dom'
export default function 
() {
  return (
    <div className='w-full fixed z-10'>
         <div class="bg-secondary font-sans w-full ">
            <div class="bg-secondary shadow">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between py-4 ">
                <div className=' max-sm: '>
                    <img src={Logo} className="absolute max-sm:h-14 h-16 top-0 mb-8 left-12 max-sm:left-0" />
                </div>
                <div class="hidden sm:flex sm:items-center max-sm:hidden">
                    <NavLink to="/">
                        <a class="text-gray-800 text-sm font-semibold mr-4 hover:text-primary hover:underline ">Home</a>
                    </NavLink>
                    <NavLink to="/about">
                        <a  class="text-gray-800 text-sm font-semibold mr-4 hover:text-primary hover:underline ">About us</a>
                    </NavLink>
                    <NavLink to="/contact" >
                        <a to="/contact" class="text-gray-800 text-sm font-semibold  mr-4 hover:text-primary hover:underline ">Contact Us</a>
                    </NavLink>
                </div>
                <div class="max-sm:absolute max-sm:right-14 text-sm">
                    <a href="#" class="text-gray-800  max-sm:bg-accent max-sm:py-2 max-sm:px-2 max-sm:mr-5 mr-3  max-sm:rounded-lg font-semibold max-sm:hover:text-white hover:text-primary hover:underline">Sign in</a>
                    <a href="#" class="text-white font-semibold  px-2 py-2 bg-primary max-sm:py-2 max-sm:px-2 border-primary border-2 rounded-lg hover:bg-white hover:text-black hover:border-blue-500">Sign up</a>
                </div>
                <div className=" sm:hidden cursor-pointer flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>

            </div>
            </div>
        </div>
    </div>
     
  )
}
