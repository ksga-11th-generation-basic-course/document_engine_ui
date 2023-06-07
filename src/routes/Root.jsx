/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { SideBar } from "../components/SideBar";
import { NavBarProfile } from "../components/NavBarProfile";
import { Outlet } from "react-router-dom";
import menu from "../assets/images/Dashboard/menu.svg";

export const Root = () => {
  const [open, setOpen] = useState(false);
  const [newWorkspace, setNewWorkspace] = useState(false);

  return (
    <div className="relative bg-white">
      <div className="grid grid-cols-12">
        <div className="col-span-2  z-10">
          <div className="fixed w-80 shadow-sidebar lg:hidden md:hidden">
            {" "}
            <SideBar
              newWorkspace={newWorkspace}
              setNewWorkspace={setNewWorkspace}
            />
          </div>

          <div className="hidden lg:inline-block md:inline-block">
            <div
              className={
                open
                  ? "lg:flex lg:items-center"
                  : "hidden lg:flex lg:items-center lg:mt-9 md:mt-7"
              }
            >
              <div className="hidden lg:inline-block">
                {open ? null : (
                  <button
                    className="lg:pl-14 md:pl-8"
                    onClick={() => setOpen(!open)}
                  >
                    <img src={menu} alt="menu" className="md:w-3" />
                  </button>
                )}

                {open ? (
                  <span className="fixed z-10 shadow-custom h-screen lg:overflow-hidden md:overflow-hidden">
                    <SideBar sideBar={open} setSideBar={setOpen} />
                  </span>
                ) : null}
              </div>

              <span
                className={
                  open
                    ? "hidden fixed lg:inline-block lg:absolute lg:right-0 lg:mt-24 md:-right-8 md:mt-20 md:fixed"
                    : "hidden lg:inline-block lg:absolute right-0 md:-right-8 md:fixed"
                }
              >
                <NavBarProfile />
              </span>
            </div>

            <div
              className={
                open
                  ? "hidden lg:inline-block lg:ml-10 lg:mt-24 lg:px-3"
                  : "hidden lg:inline-block lg:ml-10 lg:mt-9 lg:px-3"
              }
            >
              <Outlet />
            </div>
          </div>
        </div>

        <div
          className={
            newWorkspace
              ? "col-span-10 h-screen overflow-y-auto lg:hidden z-0"
              : "col-span-10 h-screen overflow-y-auto lg:hidden"
          }
        >
          <div>
            <NavBarProfile />
          </div>
          <div className="px-64">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
