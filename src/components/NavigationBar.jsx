import React from "react";
import Avatar from "../assets/images/Avatar.svg";

export default function NavigationBar() {
  return (
    <div>
      <div className="flex ">
        {/* Navbar */}
        <nav class="w-[83%] h-[90px] bg-slate-200 dark:bg-gray-900 fixed z-20 ">
            <div class="flex justify-end mr-10 mt-3">
              <button
                type="button"
                class="h-[37px] mt-5 mr-3 border-2 border-[#526581] right-0 text-[#1E9CEF] font-medium rounded-lg text-sm px-4 text-center ">
                +Join
              </button>
              <img src={Avatar} alt="" className="mt-5 w-[40px]" />
            </div>
        </nav>
      </div>
    </div>
  );
}
