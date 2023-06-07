/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { SideBar } from "../components/SideBar";
import { NavBarProfile } from "../components/NavBarProfile";
import { Outlet } from "react-router-dom";
import menu from '../assets/images/Dashboard/menu.svg'

export const Root = () => {

  const [open, setOpen] = useState(false);
  const [newWorkspace, setNewWorkspace] = useState(false);

  return (
    <div className="relative">
      <div className="grid grid-cols-12">
        <div className="col-span-2 lg:col-span-12 xl:col-span-3 2xl:col-span-3 xs:col-span-12 z-10">
          <div className="w-80 lg:hidden md:hidden"> <SideBar newWorkspace={newWorkspace} setNewWorkspace={setNewWorkspace} /></div>
          <div className="hidden lg:inline-block md:inline-block">
            <div className={open ? "lg:flex lg:items-center" : "hidden lg:flex lg:items-center lg:mt-9 md:mt-7"}>
              <div className="hidden lg:inline-block">
                {open ?
                  null :
                  <button
                    className="lg:pl-14 md:pl-8"
                    onClick={() => setOpen(!open)}
                  >
                    <img src={menu} alt="menu" className="md:w-3" />
                  </button>
                }

                {open ? <span className="fixed z-10 shadow-custom h-screen lg:overflow-hidden md:overflow-hidden"><SideBar sideBar={open} setSideBar={setOpen} /></span> : null}
              </div>

              <span className={open ? "hidden fixed lg:inline-block lg:absolute lg:right-0 lg:mt-24 md:-right-8 md:mt-20 md:fixed" : "hidden lg:inline-block lg:absolute right-0 md:-right-8 md:fixed"}><NavBarProfile /></span>
            </div>

            <div className={open ? "hidden lg:inline-block lg:ml-10 lg:mt-24 lg:px-20 xs:px-4 2xs:px-4" : "lg:px-20 xs:px-4 2xs:px-4 hidden lg:inline-block lg:mt-9"}>
              <Outlet />
              </div>
          </div>
        </div>

        <div className={newWorkspace ? "col-span-10 xl:col-span-9 2xl:col-span-9 h-screen overflow-y-auto lg:hidden z-0 lg:col-span-12" : "lg:col-span-12 col-span-10 xl:col-span-9 2xl:col-span-9 h-screen overflow-y-auto lg:hidden"}>
          <div><NavBarProfile /></div>
          <div className="px-64 xl:px-10 2xl:px-20">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
