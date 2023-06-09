import React from "react";
import logo from "../assets/landing_image/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { DropDownMenu } from "../components/DropDownMenu";

export const NavBar = () => {
  return (
    <div className="fixed z-50 flex w-full justify-between items-center px-14 py-2 sm:px-4 md:px-6 border-[2px] text-18px font-semibold text-accent bg-[#F9F9FF] sm:justify-around">
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
            <div className="dropdown dropdown-end  relative">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </label>
                {/* <ul className="dropdown-content absolute left-0 ">
                  <li className="bg-blue-500"><NavLink>Home</NavLink></li>
                  <li><NavLink>Home</NavLink></li>
                  <li><NavLink>Home</NavLink></li>
                </ul> */}
              <ul tabIndex={0} className="menu menu-compact gap-2 dropdown-content mt-5 p-4 text-center  bg-sky-100 max-lg:hidden max-md:hidden border-primary border-2 shadow-lg absolute right-0 rounded-box w-[345px] md:[]">
                <li><NavLink   to={"/"} className={({ isActive }) =>
                                isActive
                                  ? "text-center bg-primary p-3 text-white"
                                  : "text-center bg-sky-500 p-3 text-white"
                              }
                 >Home</NavLink> </li>
                <li><NavLink   to={"/aboutus"} className={({ isActive }) =>
                                isActive
                                  ? "text-center bg-primary p-3 text-white"
                                  : "text-center bg-sky-500 p-3 text-white"
                              }> About Us</NavLink></li>
                <li><NavLink  to={"/contactus"} className={({ isActive }) =>
                                isActive
                                  ? "text-center bg-primary p-3 text-white"
                                  : "text-center bg-sky-500 p-3 text-white"
                              }> Contact Us</NavLink></li>
              </ul>
          </div>
      </div>
   </div>  
  );
};
