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
        <div className="col-span-10 shadow-xl">
          <NavBarProfile />
          <div className="px-60">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
