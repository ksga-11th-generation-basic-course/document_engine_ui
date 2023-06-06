/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { SideBar } from "../components/SideBar";
import { NavBarProfile } from "../components/NavBarProfile";
import { Outlet } from "react-router-dom";
import menu from '../assets/images/Dashboard/menu.svg'

export const Root = () => {

  const[open, setOpen] = useState(false);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="bg-white">
      <div className="grid grid-cols-12">
<<<<<<< HEAD
        <div className="col-span-2 md:col-span-1 lg:col-span-1 2xs:hidden xs:hidden">
          <SideBar />
        </div>
        <div className="col-span-10 shadow-xl md:col-span-11 lg:col-span-11 2xs:col-span-12 xs:col-span-12">
          <NavBarProfile />
          <div className="px-64 2xl:px-40 lg:px-28 md:px-16 sm:px-14 2xs:px-5 xs:px-7">
=======
        <div className="col-span-2 md:col-span-3 sm:hidden">
          <SideBar />
        </div>
        <div className="col-span-10 md:col-span-9">
          <NavBarProfile />
          <div className="md:px-4 px-64 ">
>>>>>>> 114d6aa (seyha)
            <Outlet />
          </div>
=======
    <div>
=======
    <div className="relative">
>>>>>>> f1e0592 (responsive)
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-2 lg:col-span-12 md:col-span-12">
              <div className="fixed w-80 z-0 lg:hidden md:hidden "> <SideBar /></div>

              <div className={!open ? "hidden lg:flex lg:items-center lg:mt-9 md:mt-7 " : "lg:flex lg:items-center"}>
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

                        {open ? <span className="z-10 absolute shadow-custom h-screen lg:overflow-hidden md:overflow-hidden"><SideBar sideBar={open} setSideBar={setOpen} /></span>  : null}
                    </div>

<<<<<<< HEAD
<<<<<<< HEAD
                    <span className={open ? "hidden fixed lg:inline-block lg:absolute lg:right-0 lg:mt-24 md:-right-8 md:mt-20 md:fixed" : "hidden lg:inline-block lg:absolute right-0 md:-right-8 md:fixed"}><NavBarProfile /></span>
              </div> 

              <div className={open ?  "hidden lg:inline-block lg:ml-10 lg:mt-24 lg:px-3" : "hidden lg:inline-block lg:ml-10 lg:mt-9 lg:px-3"}><Outlet /></div>
        </div>

        <div className="col-span-10 z-10 shadow-xl lg:hidden">
                <div><NavBarProfile /></div>
                <div className="px-64">
                         <Outlet/>
                </div>
>>>>>>> 6d37ee2 (responsive)
=======
          <div className={open ? "hidden lg:inline-block lg:ml-10 xs:ml-0 lg:mt-24 lg:px-3" : "hidden lg:inline-block lg:ml-10 xs:ml-0 lg:mt-9 lg:px-3 xs:px-10"}>
=======
          <div className={open ? "hidden lg:inline-block lg:ml-10 xs:ml-0 lg:mt-24 lg:px-3" : "hidden lg:inline-block lg:ml-10 xs:ml-0 lg:mt-9 lg:px-3"}>
>>>>>>> b4c6792 (init)
            <Outlet /></div>
        </div>

        <div className="col-span-10 z-10 shadow-xl lg:hidden">
          <div><NavBarProfile /></div>
          <div className="px-64 xs:px-40">
            <Outlet />
          </div>
>>>>>>> 993ffaf (init)
        </div>
      </div>
    </div>
  );
};
