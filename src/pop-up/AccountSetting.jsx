import React from 'react'
import SideBarSettingProfile from '../components/SideBarSettingProfile';
import Logo from "../assets/images/Logo.svg";
import setting from "../assets/images/Icon/settings.svg"

export const AccountSetting = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
                 <div className='bg-yellow-300 w-[1200px] h-[600px]'>
                    {/*    <div className="w-64 h-screen bg-[#F6F6F6]">

                        <div className="flex justify-center mb-4  shadow-logo bg-[#FFFFFF] pr-12">
                            <img src={Logo} alt="" className="w-[80px] h-[104px] " />
                          </div>
                        
                          <div className="w-full">
                              <div className="flex rounded-lg px-5  py-3 mx-4 mt-6 bg-[#EFEFEF]">
                                    <img src={setting} alt="" className="pr-2 w-[30px]" />
                                    <div className=" text-[#1E9CEF] font-semibold ml-3">Setting</div>
                              </div>
                          </div>
                  </div>*/}
                </div> 
    </div>
  )
}
