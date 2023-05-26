import React from 'react'
import Logo from "../assets/images/Logo.svg";
import EnablePic from"../assets/images/EnableAccount/EnableAccount.svg"
export default function EnableAccount() {
  return (
    <div>
        <div className="flex justify-center items-center bg-[#EDF9FF] relative text-[#37352F]">
            <img src={Logo} className="absolute top-10 left-10 max-sm:top-32" />
            <div className="flex flex-row justify-center  items-center relative min-h-screen  overflow-hidden">
                <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                    <div className="flex flex-col items-center max justify-center lg:w-full h-full relative lg:pr-10">
                        <img src={EnablePic} class="max-sm:w-13 "/>
                    </div>    
                         </div>
                    <div className="relative lg:py-10 py-2">
                        <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
                            xl:px-5 lg:flex-row">
                            <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
                                <div className="lg:bg-white p-10  bg-[#EDF9FF]  flex flex-col justify-center gap-y-6 rounded-3xl lg:shadow-md">
                                        <div className=" xs:p-0 mx-auto md:w-full px-5  md:max-w-md  ">
                                            <div className=" w-full  ">
                                                <h1 className="font-bold text-center text-blue-400 text-5xl whitespace-nowrap max-sm:text-4xl">Enable Your Account</h1> 
                                                <p className="text-xl text-accent text-center pt-5 max-sm:text-base">Please enter your email address below
                                                </p>  
                                            <div>
                                        <div className="py-6 max-sm:px-0 max-sm:py-3">
                                            <div className="container mx-auto">
                                                <div className="max-w-sm mx-auto md:max-w-lg">
                                                    <div className="w-full">
                                                        <div className="lg:bg-white bg-[#EDF9FF]  h-54 rounded text-center">
                                                            <div className="relative">
                                                                <p className='text-left pt-4  text-xl'>Email</p>
                                                                <input placeholder="example@gmail.com" type="text" className="border-2 placeholder-gray-400  focus:outline-none
                                                                focus:border-primary w-full   pt-2 pr-3 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block lg:bg-white bg-[#EDF9FF]  
                                                                border-blue-500 rounded-md"/>
                                                            </div>             
                                                <div className="btn pt-8">
                                                    <button type="button" className="transition text-xl  duration-200 bg-primary hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-3 rounded-lg  shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                                    Continue
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
