import React from "react";
import NavigationBar from "../components/NavigationBar";
import Group from "../assets/images/Icon/Group.svg";
import Solar from "../assets/images/Icon/Solar.svg";
import Drop from "../assets/images/Icon/Drop down.svg";
import Sidebar from "../components/Sidebar";

export default function Workspace() {
  return (
    <div className="flex ">
      {/* <Sidebar /> */}
      <NavigationBar />
    <div>
      {/* Workspace */}
      {/* <div className="flex pt-4 pb-4 pl-6 mt-28 ">
        <div className=" flex w-12 h-12  ">
          <button class="drop-shadow-2xl rounded-lg border-2 right-0 px-4 py-2 text-center ">
            <img src={Group} alt="" className="w-[27px] h-[27px] " />
          </button>
        </div>

        <div class=" text-[#526581] font-bold py-3 text-2xl pl-6">
          Workspace
        </div> */}
      </div>

      {/* Last Updated */}
      {/* <div className="flex">
        <img src={Solar} alt="" className="w-[27px] h-[27px] " />
        <div class=" text-[#526581] font-bold py-3 text-2xl pl-6">
          Sort: Last Updated
        </div>
        <img src={Drop} alt="" className="w-[27px] h-[27px] " />
      </div>
    </div>
       */}
    </div>
  );
}
