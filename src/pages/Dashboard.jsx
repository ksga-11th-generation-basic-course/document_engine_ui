import React from "react";
import Sidebar from "../components/Sidebar";
import star from "../assets/images/Icon/stars.svg"
import document from "../assets/images/Icon/document.svg"
import more from "../assets/images/Icon/More.svg"
import pencil from "../assets/images/Icon/pencil.svg"

export default function Dashboard() {
  return (
    <div className="h-screen grid grid-cols-12 p-20">
      <div className="col-span-2 z-0">
              <Sidebar></Sidebar>
      </div>
      <div className="col-span-10 shadow-content z-10">
        
        <div className="mt-10 px-44">
          <div className="w-full">
            {/* Header */}
            <div>
              <h1 className="font-bold text-4xl text-[#526581]">Hi, Ouddom!</h1>
              <p className="mt-2 text-20px text-[#526581]">Welcome to DocEngine</p>
            </div>

            {/* Tips */}
            <div className="flex h-full justify-center mt-6 ">
                <div className="w-[98%] bg-white rounded-l-lg px-2 py-3 grid grid-cols-12 shadow-custom ">
                            <span className="flex justify-center">
                                <img src={star} className="w-10 col-span-1"/>
                            </span>
                            <span className="col-span-11">
                                    <h1 className="text-22px font-semibold">Ouddom, get started with DocEngine</h1>
                                    <p className="text-20px text-accent">Hint! to create your Document</p>
                            </span>
                </div>
                <div className="bg-[#1E9CEF] w-[2%] shadow-custom rounded-r-lg ">    
                </div>
            </div>

            {/* Recently Document */}
            <div className="mt-7">
                    {/* Title */}
                    <div className="flex">
                            <img src={document} className="bg-white rounded-lg shadow-custom p-2"/>
                            <p className="flex items-center ml-4 font-semibold  text-20px text-accent">Recently</p>
                    </div>

                    {/* Document */}
                    {/* Doc1 */}
                    <div className="mt-5">
                        <div className="bg-white shadow-custom px-8 py-4 rounded-lg grid grid-cols-12">
                                    <div className="col-span-11">
                                                <div>
                                                        <div className="flex items-center">
                                                                    <p className="text-22px font-semibold w-36">Spring Profile</p>
                                                                    <p className="ml-7 bg-[#EDF9FF] px-5 rounded-lg flex">
                                                                            <span className="text-[#1E9CEF] text-12px">Editing...</span>
                                                                            <span className="flex items-center ml-3">
                                                                                    <img src={pencil}/>
                                                                            </span>
                                                                    </p>
                                                        </div>
                                                        <div>
                                                            <p className="text-accent">Edited 5days ago</p>
                                                        </div>
                                                </div>
                                    </div>
                                    <div className="col-span-1 flex justify-center">
                                            <img src={more}  className="w-[5px]"/>
                                    </div>
                        </div>
                    </div>

                    {/* Doc2 */}
                    <div className="mt-5">
                        <div className="bg-white shadow-custom px-8 py-4 rounded-lg grid grid-cols-12">
                                    <div className="col-span-11">
                                                <div>
                                                        <div className="flex items-center">
                                                                    <p className="text-22px font-semibold w-40">Redux Toolkit</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-accent">Edited 9days ago</p>
                                                        </div>
                                                </div>
                                    </div>
                                    <div className="col-span-1 flex justify-center">
                                            <img src={more}  className="w-[5px]"/>
                                    </div>
                        </div>
                    </div>

                    {/* Doc3 */}
                    <div className="mt-5">
                        <div className="bg-white shadow-custom px-8 py-4 rounded-lg grid grid-cols-12">
                                    <div className="col-span-11">
                                                <div>
                                                        <div className="flex items-center">
                                                                    <p className="text-22px font-semibold w-36">Laravel</p>
                                                                    <p className="ml-7 bg-[#EDF9FF] px-5 rounded-lg flex">
                                                                            <span className="text-[#1E9CEF] text-12px">Editing...</span>
                                                                            <span className="flex items-center ml-3">
                                                                                    <img src={pencil}/>
                                                                            </span>
                                                                    </p>
                                                        </div>
                                                        <div>
                                                            <p className="text-accent">Edited 17days ago</p>
                                                        </div>
                                                </div>
                                    </div>
                                    <div className="col-span-1 flex justify-center">
                                            <img src={more}  className="w-[5px]"/>
                                    </div>
                        </div>
                    </div>
            </div>
            
            <div className="flex items-center justify-center">
                    <div className="bg-[#E9E9E9] h-0.5 mt-7 w-[75%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
