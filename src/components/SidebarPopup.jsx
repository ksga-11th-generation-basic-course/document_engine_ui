import React from "react";
import Logo from "../assets/images/Logo.svg";
import Dashboard from "../assets/images/Icon/Dashboard.svg";
import Home from "../assets/images/Icon/Home.svg";
import Setting from "../assets/images/Icon/Settings.svg"
import User from "../assets/images/Icon/users.svg";




export default function Sidebar() {
  return (
    <div>
      <div className="fixed  w-64 h-[670px] bg-[#FAFAF9]">
        {/* Logo */}
            <div className="flex justify-center ">
              <img src={Logo} alt="" className="w-[100px] h-[100px] " />
            </div>
            <hr class="w-full h-[0.35px]  mx-auto  bg-[#D9D9D9] border-0 rounded  dark:bg-gray-700"/>
        
        {/* workspace */}
            <div>
              <div className="flex rounded-lg py-2 px-5 m-5 mt-6 bg-[#EFEFEF]">
                <img src={Setting} alt="" className="pr-2 w-[30px] " />
                <button class=" text-[#1E9CEF] font-semibold ">Setting</button>
              </div>
              
              <div className="flex ml-7 px-5 m-2">
              <img src={User} alt="" className="mr-4 " />
              <h1 className="text-[#526581] font-semibold">Collaborators</h1>
            </div>
            </div>

      </div>
    </div>
  );
}
