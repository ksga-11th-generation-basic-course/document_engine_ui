import React from "react";
import SidebarPopup from "../components/SidebarPopup";
import Cancel from "../assets/images/Icon/cancel.svg";
import Workspace from "../assets/images/Icon/Workspace.svg";
import PHP from "../assets/images/Workspace/PHP.svg";
import Remove from "../assets/images/Icon/Remove.svg";
import Setting from "../assets/images/Icon/SettingAdvance.svg";

export default function WorkspaceSetting() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className=' w-[1200px] h-[670px]'>
                <div className="grid grid-cols-12">
                    <div className="col-span-2 h-[670px]">
                        <SidebarPopup />
                    </div>

                    <div className=" col-span-10 bg-white h-[670px] pl-10">
                        <div className="flex justify-end m-4">
                            <img src={Cancel} alt="" className=" pr-2 w-[30px] " />
                        </div>

                        <div className=" grid grid-cols-12">
                            <div className="col-span-2"></div>
                            <div className="col-span-8 justify-center">
                            {/*Workspace’s Setting  */}
                            <div>
                                <h1 className="text-[#526581] font-bold text-3xl">
                                Workspace’s Setting
                                </h1>
                                <p className="text-[#526581] font-normal ">
                                Manage permissions and invite people in your workspace
                                </p>
                            </div>

                            {/* Your Workspace */}
                            <div className="mt-2 border-solid rounded-lg border border-[#BEBEBE] h-[375px]">
                                <div className="grid grid-cols-6 ml-7 mt-2 ">

                                <div className="col-span-4 flex ">
                                    <img src={Workspace} alt="" className=" mb-1 w-6  " />
                                    <h1 className=" text-[#37352F] font-bold text-xl px-3 ">
                                    Your Workspace
                                    </h1>
                                </div>
                                <div className="col-span-2 ml-28    ">
                                    <button class="bg-[#1E9CEF] rounded-md text-white font-semibold px-5 h-8 ">
                                        Save
                                    </button>
                                </div>
                                </div>

                                {/* line */}
                                <hr className="w-full h-[0.9px] mt-2 mx-auto  bg-[#BEBEBE] border-0 rounded  dark:bg-gray-700" />

                                {/* Workspace Name and PHP Developer */}
                                <div className="ml-4">
                                <h1 className="mb-3  mt-3 text-[#37352F] font-bold text-lg px-3 ">
                                    Workspace Name:
                                </h1>
                                <div class="border ml-3 border-[#BEBEBE] rounded-lg w-80 h-10 text-[#526581] font-semibold  text-lg">
                                    <h1 className="ml-6 mt-1.5">PHP Developer</h1>
                                </div>
                                </div>
                                {/*Workspace Photo  */}
                                <div className="grid grid-cols-2">
                                <div className="col-span-1">
                                    <h1 className=" mt-4 ml-4 text-[#37352F] font-semibold  text-lg px-3">
                                    Workspace Photo
                                    </h1>
                                    <h1 className=" ml-7 mt-1 text-[#526581] font-medium">
                                    Displayed when collaborating with others.
                                    </h1>
                                </div>

                                {/* Choose Photo */}
                                <div className="flex mt-6 ml-36">
                                    <div className="col-span-1 mt-2  border ml-2 border-[#BEBEBE] rounded-lg w-28 h-8 text-[#526581] font-semibold  text-sm">
                                    <h1 className="ml-4 mt-1">Choose Photo</h1>
                                    </div>

                                    {/*Button Remove */}
                                    <button class="cols-span-1 mt-2 ml-3 flex justify-center drop-shadow-2xl rounded-lg border right-0 w-[30px] h-[30px] py-1 text-center ">
                                        <img
                                            src={Remove}
                                            alt=""
                                            className="cols-span-1 mt-1 w-[15px] h-[15px] "
                                        />
                                    </button>
                                </div>
                                </div>

                                {/* PHP Photo */}
                                <div className="mt-1 ml-7">
                                <img
                                    src={PHP}
                                    alt=""
                                    className="rounded-lg w-56 h-36  "
                                />
                                </div>
                            </div>

                            {/* Advanced */}
                            <div className="  mt-4  border-solid rounded-lg border border-[#BEBEBE]   h-[120px]">
                                <div className="flex m-2 ml-7 ">
                                    <img src={Setting} alt="" className="w-6" />
                                    <h1 className=" ml-3  text-[#37352F] font-bold text-xl ">
                                        Advanced{" "}
                                    </h1>
                                </div>

                                {/* Line */}
                                <hr className="w-full h-[1px] mt-2 mx-auto  bg-[#BEBEBE] border-0 rounded  dark:bg-gray-700" />

                                {/* Remove Workspace */}
                                <div className="grid grid-cols-2 mt-2 ml-7">
                                <div className="col-span-1 ">
                                    <h1 className="text-[#37352F] font-bold text-lg">
                                    Remove Workspace
                                    </h1>
                                    <p1 className="text-[#526581]">
                                    Remove your workspace form your account
                                    </p1>
                                </div>
                                <div className="col-end-3 ml-52  mt-3 ">
                                    <button class=" rounded-lg border-2  text-[#FF5658] font-bold py-1 px-3">
                                    Remove
                                    </button>
                                </div>
                                </div>
                                
                            </div>
                            </div>
                            <div className="col-end-2"></div>
                        </div>
                </div>
            </div>
        </div> 
    </div>
    
  );
}
