import React from "react";
import logo from "../assets/landing_image/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { DropDownMenu } from "../components/DropDownMenu";

export const NavBar = () => {
  return (
    <div className="fixed z-50 flex w-full justify-between items-center px-14 border-[2px] text-18px font-semibold text-accent bg-[#F9F9FF]">
      <div>
        <Link to={"/"}>
          <img src={logo} className="w-[72px] h-[72px]" />
        </Link>
      </div>
      <div className="relative">
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
      <div className="relative flex justify-center items-center gap-x-5">
        <Link to={"/signin"}>Sign in</Link>
        <Link to={"/signup"} className="bg-primary px-4 py-2 rounded-xl text-white">
          Sign up
        </Link>
        {/* <div className="hidden lg:block">
          <DropDownMenu />
        </div> */}
      </div>
    </div>
  );
};
