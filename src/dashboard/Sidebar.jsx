import React from "react";
import Logo from "../assets/images/Logo.svg";
import Dashboard from "../assets/images/Icon/Dashboard.svg";
import Home from "../assets/images/Icon/Home.svg";

export default function Sidebar() {
  return (
    <div>
      <div className="w-full h-screen shadow-sm-light bg-[#FAFAF9]">
        {/* Logo */}
            <div className="flex justify-center ">
              <img src={Logo} alt="" className="w-[100px] h-[100px] " />
            </div>
        {/*  Button New workspace */}
            <div className="flex justify-center m-5">
              <button class="rounded py-2 w-[215px] bg-blue-500 hover:bg-blue-700 text-white font-normal">
                New workspace
              </button>
            </div>
        {/* Home */}
            <div className="flex ml-7  m-2">
              <img src={Home} alt="" className="mr-4 " />
              <h1>Home</h1>
            </div>
        {/* workspace */}
            <div>
              <div className="flex rounded py-2 px-2 m-6 mt-6 bg-[#EFEFEF]">
                <img src={Dashboard} alt="" className="pr-4 " />
                <button class=" text-[#1E9CEF] font-bold ">workspace</button>
              </div>
             
            </div>
            
      </div>
      
     
    </div>
  );
}
