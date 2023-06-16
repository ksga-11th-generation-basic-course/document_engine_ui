import React from "react";
import { SideBar } from "../components/SideBar";
import { NavBarProfile } from "../components/NavBarProfile";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <SideBar />
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