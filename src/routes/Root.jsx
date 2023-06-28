import React, { useState } from "react";
import { NavBarProfile } from "../components/NavBarProfile";
import { Outlet } from "react-router-dom";
import { SecondSideBar } from "../components/SecondSideBar";

export const Root = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (status) => {
    setOpen(status);
  };

  return (
    <div className="bg-white h-screen">
      <div className="grid grid-cols-12 bg-white">
        <div
          className={
            open ? "col-span-1 bg-white z-50" : "col-span-1 bg-white z-10"
          }
        >
          <SecondSideBar handleClick={handleClick} />
        </div>
        <div className="col-span-11 bg-white shadow-xl h-screen">
          <NavBarProfile />
          <div className="px-60 bg-white mt-20">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
