import React from "react";
import { SideBar } from "../components/SideBar";
import { NavBarProfile } from "../components/NavBarProfile";
import { Outlet } from "react-router-dom";
import { NewSidebar } from "../components/NewSidebar";
import { SecondSideBar } from "../components/SecondSideBar";

export const Root = () => {
  return (
    <div className="bg-white h-screen">
      <div className="grid grid-cols-12 bg-white">
        <div className="col-span-1 bg-white">
          <SecondSideBar />
        </div>
        <div className="col-span-11 bg-white shadow-xl h-screen">
          <NavBarProfile />
          <div className="px-60 bg-white">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};