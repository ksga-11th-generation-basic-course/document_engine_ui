import React from "react";
import logo from "../assets/landing_image/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { DropDownMenu } from "../components/DropDownMenu";

export const NavBar = () => {
  return (
    <div className="fixed z-50 flex w-full justify-between items-center px-14 sm:px-4 md:px-6 border-[2px] text-18px font-semibold text-accent bg-[#F9F9FF] sm:justify-around">
      <div>
        <Link>
          <img src={logo} className="w-[72px] h-[72px] " />
        </Link>
      </div>
      <div className="relative sm:hidden md:hidden">
        <ul className="flex justify-center items-center gap-x-8">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-accent"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/aboutus"}
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-accent"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contactus"}
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-accent"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="relative flex justify-center sm:w-auto md:justify-between  sm:flex sm:justify-evenly items-center gap-x-5 ">
        <Link to={"/signin"} className="sm:whitespace-nowrap">Sign in</Link>
        <Link to={"/signup"}className="bg-primary px-4 py-2 sm:px-2 sm:whitespace-nowrap sm:py-1  text rounded-xl text-white">
          Sign up
        </Link>
      </div>
      <div className="sm:block md:block  hidden dropdown relative ">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                {/* <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg> */}
                {/* <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg> */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  max-lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg> */}
                </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-white max-lg:hidden max-md:hidden border-primary border-2 shadow-lg absolute right-0 rounded-box w-40">
                <li><NavLink   to={"/"} className="hover:bg-sky-400 hover:text-white bg-white text-primary">Home</NavLink> </li>
                <li><NavLink   to={"/aboutus"} className="hover:bg-sky-400 hover:text-white bg-white text-primary"> About Us</NavLink></li>
                <li><NavLink  to={"/contactus"} className="hover:bg-sky-400 hover:text-white bg-white text-primary"> Contact Us</NavLink></li>
              </ul>
          </div>
      </div>
   </div>  
  );
};
