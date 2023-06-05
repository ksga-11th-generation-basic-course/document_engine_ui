import React from "react";
import { SideBar } from "../components/SideBar";
import { NavBarProfile } from "../components/NavBarProfile";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-12">
        <div className="col-span-2 md:col-span-3 sm:hidden">
          <SideBar />
        </div>
        <div className="col-span-10 md:col-span-9">
          <NavBarProfile />
          <div className="md:px-4 px-64 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
