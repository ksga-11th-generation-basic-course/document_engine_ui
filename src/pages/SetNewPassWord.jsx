import React from 'react'
import Logo from "../assets/images/Logo.svg";
import Reset from "../assets/images/Set_New_pass.svg"
export default function SetNewPassWord() {
  return (   
        <div className="flex justify-center items-center bg-[#EDF9FF] relative text-[#37352F]">
            <img src={Logo} className="absolute top-10 left-10 max-sm:top-3" />
            <div className="flex flex-row justify-center  items-center relative min-h-screen  overflow-hidden">
            {/* <!-- component --> */}
                <div className="relative lg:py-10">
                    <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
                        <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
                            <div className="bg-white max-sm:bg-[#EDF9FF] ] p-10 flex flex-col max-sm:mt-16 justify-center rounded-3xl    lg:shadow-lg">
                                <div className=" mx-auto md:w-full px-5  md:max-w-md ">
                                    <div className="max-sm:bg-[#EDF9FF] w-full  max-sm:px-2 ">
                                        <h1 className="font-bold text-center text-primary   max-sm:text-4xl  text-5xl whitespace-nowrap">Set New Password?</h1> 
                                                <div className="pt-8 ">
                                                    <div className="container mx-auto">
                                                        <div className="max-w-sm mx-auto md:max-w-lg">
                                                            <div className="w-full">
                                                                <div className="h-54 rounded text-center">
                                                                    <div className="text">
                                                                        <p className="text-[20px] max-sm:text-[18px] max-sm:whitespace-nowrap text-accent ">Password must be at least 8 characters.</p>  
                                                                </div>
                                                            <div className="relative pt-[30px]">
                                                                <p className='text-left text-black text-xl'>New Password</p>
                                                                <input placeholder="Your New Password" type="text" className="border-2 placeholder-gray-400  focus:outline-none
                                                                focus:border-primary w-full  pt-3 pr-3 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                                                border-primary rounded-md"/>
                                                            </div>     
                                                            <div className="relative pt-[23px]">
                                                                <p className='text-left   text-black text-xl'>Confirm New Password</p>
                                                                <input placeholder="Your New Password" type="text" className="border-2  placeholder-gray-400 focus:outline-none
                                                            focus:border-primary w-full pt-3 pr-3 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                                            border-primary rounded-md"/>
                                                            </div>           
                                                                <div className="btn pt-8">
                                                                    <button type="button" className="transition font-bold  duration-200 bg-primary  hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-4 rounded-lg text-xl  shadow-sm hover:shadow-md text-bold text-center inline-block">
                                                                        Reset Password
                                                                    </button>
                                                                </div>
                                                            </div>
                                                                    </div>
                                                        </div>
                                                        </div>
                                                    </div>              
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 <div className="w-full bg-cover relative max-w-md max-lg:hidden   lg:max-w-2xl lg:w-7/12lg:hidden">
                                    <img src={Reset} class=""/>
                               </div>
                        </div>
                    </div>
                </div>
        </div>
  )
}
