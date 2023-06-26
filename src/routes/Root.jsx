import React from "react";
import { SideBar } from "../components/SideBar";
import { NavBarProfile } from "../components/NavBarProfile";
import { Outlet } from "react-router-dom";
import { NewSidebar } from "../components/NewSidebar";

export const Root = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-[#F7F7FA]">
          <NewSidebar />
        </div>
        <div className="col-span-10">
          <NavBarProfile />
          <div className="px-60">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};