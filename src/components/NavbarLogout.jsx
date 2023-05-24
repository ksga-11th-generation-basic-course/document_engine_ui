import React from "react";
import Logo from "../assets/images/Logo.svg";
import {Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="w-full fixed z-10">
      <div className="bg-secondary w-full ">
        <div className="bg-secondary shadow">
          <div className="mx-auto">
            <div className="flex items-center justify-between py-1 px-16 max-sm:px-8">
              <div>
                <img
                  src={Logo}
                  className="max-sm:h-14  h-14"
                />
              </div>
              <div className="sm:flex sm:items-center max-sm:hidden ">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-accent"
                  }
                >
                  <a className=" text-18px font-semibold mr-8 hover:text-primary">
                    Home
                  </a>
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-accent"
                  }
                >
                  <a className=" text-18px font-semibold mr-8 hover:text-primary ">
                    About us
                  </a>
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-accent"
                  }
                >
                  <a
                    to="/contact"
                    className="text-18px font-semibold  mr-8 hover:text-primary "
                  >
                    Contact Us
                  </a>
                </NavLink>
              </div>
              <div className="max-sm:absolute max-sm:right-14 text-sm">
                <Link
                  to={"signin"}
                  className="text-accent text-22px max-sm:bg-accent max-sm:text-white max-sm:py-1 max-sm:px-2 max-sm:mr-5 mr-3  max-sm:rounded-lg font-semibold max-sm:hover:text-white hover:text-primary outline-none"
                >
                  Sign in
                </Link>
                <Link
                  to={"signup"}
                  className="text-white text-18px font-semibold px-5 py-2 bg-primary max-sm:py-1  max-sm:px-2 border-primary border-2 rounded-xl"
                >
                  Sign up
                </Link>
              </div>
              <div className="sm:hidden cursor-pointer flex-none">
                <button className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
