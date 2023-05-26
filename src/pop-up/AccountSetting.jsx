import React from "react";
import Cancel from "../assets/images/Icon/cancel.svg";
import Profile from "../assets/images/Icon/Profile.svg";
import Remove from "../assets/images/Icon/Remove.svg";
import Setting from "../assets/images/Icon/SettingAdvance.svg";
import Google from "../assets/images/Icon/Google.svg";
import Lyheng from "../assets/images/Icon/lyheng.svg"
import SidebarPopup from "../components/SideBarForPopup.jsx"


export default function WorkspaceSetting() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className=" w-[1200px] h-[670px] shadow-custom rounded-2xl">
        <div className="grid grid-cols-12">
          <div className="col-span-2 h-[670px]">
            <SidebarPopup />
          </div>

          <div className=" col-span-10 bg-white h-[670px] pl-12">
            <div className="flex justify-end m-2">
              <img src={Cancel} alt="" className=" pr-2 w-[35px] " />
            </div>

            <div className=" grid grid-cols-12">
              <div className="col-span-2"></div>
              <div className="col-span-10 justify-center">
                {/*Account Setting */}
                <div>
                  <h1 className="text-[#526581] font-bold text-3xl">
                    Account Setting
                  </h1>
                  <p className="text-[#526581] font-normal ">
                    Manage your profile, preferences, and login settings
                  </p>
                </div>

                {/* Your Profile */}
                <div className="mt-3 border-solid rounded-lg border border-[#BEBEBE] h-[320px]">
                  <div className="grid grid-cols-6 ml-7 mt-2 ">
                    <div className="col-span-4 flex ">
                      <img src={Profile} alt="" className=" mb-1 w-6  " />
                      <h1 className=" text-[#37352F] font-bold text-xl px-3 ">
                        Your Profile
                      </h1>
                    </div>
                    <div className="col-span-2 ml-40   ">
                      <button class="bg-[#1E9CEF] hover:bg-[#2a8fd1] rounded-md text-white font-semibold px-5 h-8 ">
                        Save
                      </button>
                    </div>
                  </div>

                  {/* line */}
                  <hr className="w-full h-[0.9px] mt-2 mx-auto  bg-[#BEBEBE] border-0 rounded  dark:bg-gray-700" />

                  {/* Account Name */}
                  <div className="ml-4">
                    <h1 className="mb-1  mt-1 text-[#37352F] font-bold text-lg px-3 ">
                      Account Name:
                    </h1>
                   <div>
                   <label class="relative block">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input class="ml-2 placeholder:text-slate-400 block bg-white w-60 border border-slate-300 rounded-md py-1 pl-4 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Chhum Lyheng" type="text" name="search"/>
                    </label>
                   </div>
                  </div>
                  {/*Change new password */}
                  <div className="flex ">
                    <div className="">
                      <h1 className=" mt-4 ml-4 text-[#37352F] font-bold  text-lg px-3">
                        Change new password
                      </h1>
                      <h1 className=" ml-7  text-[#526581] font-normal text-sm">
                        You can reset password to make your password more
                        security.
                      </h1>
                    </div>
                    {/* Change Password */}
                    <div className="flex  mt-6 ml-56 pl-5">
                      <div className=" mt-2  border  border-[#BEBEBE] rounded-lg w-32 h-8 text-[#526581] font-semibold  text-sm">
                        <h1 className="ml-3 mt-1">Change Password</h1>
                      </div>
                    </div>
                  </div>

                  {/*Change new password */}
                  <div className="flex ">
                    <div className="">
                      <h1 className=" mt-4 ml-4 text-[#37352F] font-bold  text-lg px-3">
                        Change new password
                      </h1>
                      <h1 className=" ml-7  text-[#526581] font-normal text-sm">
                      Displayed when collaborating with others.

                      </h1>
                    </div>
                    {/* Change Password */}
                    <div className="flex  mt-6 ml-60 pl-8">
                    <img
                          src={Lyheng}
                          alt=""
                          className="  w-[39px] h-[42px] "
                        />
                      <div className=" mt-2 ml-2 border  border-[#BEBEBE] rounded-lg w-32 h-8 text-[#526581] font-semibold  text-sm">
                        <h1 className="ml-3 mt-1">Upload Photo</h1>
                      </div>
                    {/*Button Remove */}
                      <div className="pl-3 ">
                      <button class=" mt-2 flex justify-center drop-shadow-2xl border-[#BEBEBE]  rounded-lg border right-0 w-[30px] h-[30px]  text-center ">
                        <img
                          src={Remove}
                          alt=""
                          className="  m-1 w-[18px] h-[18px] "
                        />
                      </button>
                      </div>
                    </div>
                  </div>

                  {/* You are connected to Google*/}
                  <div className="flex ">
                    <div className="col-span-2">
                      <h1 className=" mt-1 ml-4 text-[#37352F] font-bold  text-lg px-3">
                        You are connected to Google
                      </h1>
                      <h1 className=" ml-7  text-[#526581] font-normal text-sm">
                        You can sign in to DocEngine using your Google account.
                      </h1>
                    </div>
                    {/* lyhengchhum@gmail.com */}
                    <div className="flex  mt-4 ml-44">
                      <div className="flex  mt-1  border ml-2 bg-[#F8F8F8] border-[#BEBEBE] rounded-lg w-56 h-8 text-[#526581] font-semibold  text-sm">
                        <img src={Google} alt="" className="ml-4 w-5" />
                        <h1 className="ml-4 mt-1">lyhengchhum@gmail.com</h1>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advanced */}
                <div className="  mt-4  border-solid rounded-lg border border-[#BEBEBE]   h-[200px]">
                  <div className="flex m-2 ml-7 ">
                    <img src={Setting} alt="" className="w-6" />
                    <h1 className=" ml-3  text-[#37352F] font-bold text-xl ">
                      Advanced{" "}
                    </h1>
                  </div>

                  {/* Line */}
                  <hr className="w-full h-[1px] mt-2 mx-auto  bg-[#BEBEBE] border-0 rounded  dark:bg-gray-700" />

                  {/* Signing out */}
                  <div className="grid grid-cols-2 mt-2 ml-7">
                    <div className="col-span-1 ">
                      <h1 className="text-[#37352F] font-bold text-lg">
                        Signing out
                      </h1>
                      <p1 className="text-[#526581] font-normal  text-sm">
                        You can safely sign out from the current sessions and
                        choose to sign in back later.
                      </p1>
                    </div>
                    <div className="col-end-3 ml-60 pl-2 mt-5 ">
                      <button class=" rounded-lg border border-[#BEBEBE]  text-[#FF5658] font-semibold py-1 px-3">
                        Signing out
                      </button>
                    </div>
                  </div>
                  {/* Close Account */}
                  <div className="grid grid-cols-2 mt-2   ml-7">
                    <div className="col-span-1  ">
                      <h1 className="text-[#37352F] font-bold text-lg">
                        Close Account
                      </h1>
                      <p1 className=" text-[#526581] font-normal text-sm">
                        By close your account, your account can’t see by other.
                      </p1>
                    </div>
                    <div className="col-end-3 ml-56 pl-1   mt-3 ">
                      <button class=" rounded-lg border border-[#BEBEBE]  text-[#FF5658] font-semibold py-1 px-3">
                        Close Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-end-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
