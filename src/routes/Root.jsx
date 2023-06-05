import React from "react";
import { SideBar } from "../components/SideBar";
import { NavBarProfile } from "../components/NavBarProfile";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
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
        </div>
      </div>
    </div>
  );
};
