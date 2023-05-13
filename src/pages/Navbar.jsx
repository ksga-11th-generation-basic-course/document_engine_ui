import React from 'react'
import Logo from "../assets/images/Logo.svg";
import { Link, NavLink } from 'react-router-dom'
export default function 
() {
  return (
    <div className='w-full fixed z-10'>
        {/* <!-- component --> */}
        <div class="bg-secondary font-sans w-full  m-0">
            <div class="bg-secondary shadow">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between py-4 max-sm:py-6">
                <div className=' '>
                    <img src={Logo} className="absolute max-sm:left-8 lg-bottom-26 w-16 h-16 top-1 mb-8 left-12" />
                </div>
                <div class="hidden sm:flex sm:items-center">
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
                <div class="max-sm:pl-[50rem] sm:flex sm:items-center">
                    <a href="#" class="text-gray-800 text-sm max-sm:bg-accent max-sm:px-4 max-sm:py-2 max-sm:rounded-lg max-sm:text-white  font-semibold hover:text-primary mr-4 hover:underline">Sign in</a>
                    <a href="#" class="text-white text-sm font-semibold border bg-primary px-4 py-2  rounded-lg hover:bg-white hover:text-black hover:border-blue-500">Sign up</a>
                </div>
                <div className="sm:hidden  form-control">
                    <input type="text" placeholder="Search" className="input input-bordered px-5 border border-accent" />
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
