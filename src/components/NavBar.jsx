import React from "react";
import logo from "../assets/landing_image/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { DropDownMenu } from "../components/DropDownMenu";

export const NavBar = () => {
  return (
    <div className="fixed z-50 flex w-full justify-between items-center px-14 border-[2px] text-18px 
    font-semibold text-accent bg-[#F9F9FF] md:justify-around md:px-4 ">
      {/* logo */}
      <div>
        <Link>
          <img src={logo} className="w-[72px] h-[72px] md:w-[55px]" />
        </Link>
      </div>
      {/* Home */}
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
          {/* About Us */}
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
          {/* Contact Us */}
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
      {/* SignUp and SignIn */}
      <div className="relative flex justify-center items-center gap-x-5 md:w-auto md:flex md:justify-evenly md:ml-20">
        <Link to={"/signin"} className="md:whitespace-nowrap md:text-base">Sign in</Link>
        <Link to={"/signup"}className="bg-primary px-4 py-1 rounded-lg text-white md:px-2 md:whitespace-nowrap md:py-1 md:text-base">
          Sign up
        </Link>
      </div>
      {/* Home, About and Contact Us responsive Mobile */}
      <div className="  hidden dropdown relative md:block md:left-6">
            <div className="dropdown dropdown-end relative md:mr-4">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </label>
              <ul tabIndex={0}
               className="menu menu-compact gap-2 dropdown-content mt-5 p-4 text-center bg-sky-100 max-lg:hidden max-md:hidden border-primary
               border-2 shadow-lg absolute right-0 rounded-box w-[345px] md:w-[350px]">
                <li><NavLink   to={"/"} className={({ isActive }) =>
                                isActive
                                  ? "text-center bg-primary p-3 text-white"
                                  : "text-center bg-sky-400 p-3 text-white"
                              }
                 >Home</NavLink> </li>
                <li><NavLink   to={"/aboutus"} className={({ isActive }) =>
                                isActive
                                  ? "text-center bg-primary p-3 text-white"
                                  : "text-center bg-sky-400 p-3 text-white"
                              }> About Us</NavLink></li>
                <li><NavLink  to={"/contactus"} className={({ isActive }) =>
                                isActive
                                  ? "text-center bg-primary p-3 text-white"
                                  : "text-center bg-sky-400 p-3 text-white"
                              }> Contact Us</NavLink></li>
              </ul>
          </div>
      </div>
   </div>  
  );
};