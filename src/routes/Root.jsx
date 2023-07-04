/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { NavBarProfile } from "../components/NavBarProfile";
import { Outlet } from "react-router-dom";
import menu from '../assets/images/Dashboard/menu.svg'
import { SecondSideBar } from "../components/SecondSideBar";

export const Root = () => {

  const [open, setOpen] = useState(false);
  const [newWorkspace, setNewWorkspace] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const handleClick = (status) => {
    setSideBar(status);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-12">
        <div className= "col-span-2  z-10 md:col-span-12">
              <div className= "fixed w-80 shadow-sidebar lg:hidden md:hidden"> 
                    <SecondSideBar handleClick={handleClick} sideBar={sideBar} setSideBar={setSideBar}/>
              </div>

              <div className="hidden lg:inline-block md:inline-block">
                      <div className={sideBar ? "lg:flex lg:items-center md:px-5" : "hidden lg:flex lg:items-center lg:mt-9 md:flex md:mt-5"}>
                              <div className="hidden lg:inline-block">
                                  {sideBar ? 
                                          null:
                                          <button
                                                className="lg:pl-10 md:pl-7"
                                                onClick={() => setSideBar(!sideBar)}
                                          >
                                                  <img src={menu} alt="menu" className="md:w-3"/>
                                          </button>
                                  }

                                {sideBar ? 
                                    <span className="fixed z-10 shadow-custom lg:fixed lg:z-50 md:fixed md:-ml-5">
                                            <SecondSideBar handleClick={handleClick} sideBar={sideBar} setSideBar={setSideBar}/>
                                      </span>  : null}
                            </div>

                              <div className={sideBar ? "hidden lg:inline-block lg:absolute lg:right-0 lg:mt-24 md:mt-16 lg:pr-10 lg:z-30 md:pr-2" : "hidden lg:inline-block lg:absolute lg:right-0 lg:z-30 md:inline-block md:absolute lg:pr-10  md:pr-2"}><NavBarProfile /></div>
                      </div> 

                      <div className={sideBar ?  "hidden lg:inline-block lg:ml-10 lg:mt-24 lg:px-0 md:mt-14 md:px-2 z-0" : "hidden lg:inline-block lg:ml-10 lg:mt-9 lg:px-0 md:mt-3 md:h-screen md:px-2 z-0"}><Outlet /></div>
            </div>
        </div>

        <div className={newWorkspace ? "col-span-10 h-screen overflow-y-auto lg:hidden z-0 md:hidden" : "col-span-10 h-screen overflow-y-auto lg:hidden"}>
                <div><NavBarProfile/></div>
                <div className="px-64 mt-10">
                         <Outlet/>
                </div>
        </div>
      </div>
    </div>
  );
};