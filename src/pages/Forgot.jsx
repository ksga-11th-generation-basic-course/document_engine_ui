import React from 'react'
import Logo from "../assets/images/Logo.svg";
import Forgot1 from "../assets/images/Forgot/Forgot.svg"
export default function Forgot() {
  return (
    <div className="flex justify-center items-center bg-[#EDF9FF] relative text-[#37352F]">
        <img src={Logo} className="absolute top-10 left-10" />
        <div className="flex flex-row justify-center  items-center relative min-h-screen  overflow-hidden">
        {/* <!-- component --> */}
        <div class="relative lg:py-10">
        <div class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
            xl:px-5 lg:flex-row">
            <div class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
            <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                <img src={Forgot1} class="btn-"/>
                </div>    
            </div>
            <div className="bg-white p-10 flex flex-col justify-center gap-y-6 rounded-3xl shadow-md">
          <div class=" xs:p-0 mx-auto md:w-full md:max-w-md  ">
                <div class="bg-white w-full  ">
                    <h1 class="font-bold text-center text-blue-400 text-4xl">Forgot Your Password?</h1> 
                    <div>
                    <div class="py-8 px-3">
                        <div class="container mx-auto">
                            <div class="max-w-sm mx-auto md:max-w-lg">
                                <div class="w-full">
                                    <div class="bg-white h-54 rounded text-center">
                                    <div className="text">
                                            <p class="text-l text-gray-500 ">Please enter your email address below to receive
                                             </p>  
                                            <p class="text-l text-center text-gray-500">password reset instructor</p>  
                                     </div>
                                    <div class="relative">
                                        <p className='text-left pt-5  text-lg'>Email</p>
                                        <input placeholder="example@.com" type="text" class="border placeholder-gray-400 focus:outline-none
                                        focus:border-primary w-full pt-2 pr-3 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                                        border-blue-500 rounded-md"/>
                                    </div>           
                                  <div className="btn pt-8">
                                    <button type="button" class="transition  duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-4 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
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
  )
}
