/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { SideBar } from "../components/SideBar";
import { NavBarProfile } from "../components/NavBarProfile";
import { Outlet } from "react-router-dom";
import menu from '../assets/images/Dashboard/menu.svg'
import close from "../assets/dashboard_image/close.svg";

export const Root = () => {

  const[open, setOpen] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-2 lg:col-span-12">
                <div className="lg:hidden"> <SideBar /></div>

                <div className={!open ? "hidden lg:flex lg:items-center lg:mt-9 md:mt-5 " : "lg:flex lg:items-center"}>
                      <div className="hidden lg:inline-block">
                          {open ? 
                                  null:
                                  <button
                                        className="lg:pl-14 md:pl-8"
                                        onClick={() => setOpen(!open)}
                                  >
                                          <img src={menu} alt="menu" className="md:w-3"/>
                                  </button>
                          }

                        {open ? <span className="z-10 absolute bg-[#FAFAF9] shadow-custom md:fixed"><SideBar sideBar={open} setSideBar={setOpen} /></span>  : null}
                    </div>

                    <span className={open ? "lg:absolute lg:right-0 lg:mt-24 md:-right-8 md:mt-16" : "absolute right-0 md:-right-8"}><NavBarProfile /></span>
              </div>

              <div className={open ?  "hidden lg:inline-block lg:ml-10 lg:mt-24 lg:px-3" : "hidden lg:inline-block lg:ml-10 lg:mt-9 lg:px-3"}><Outlet /></div>
        </div>

        <div className="col-span-10 shadow-xl h-screen lg:hidden md:hidden">
                <NavBarProfile />
                <div className="px-64 lg:hidden">
                         <Outlet/>
                </div>
        </div>
      </div>
    </div>
  );
};
