import React from 'react'
import Logo from "../assets/images/Logo.svg";
import VerifyL from "../assets/images/verify/left-verify-pic.svg";
import VerifyR from "../assets/images/verify/right-verify-pic.svg";
import Google from "../assets/images/Login/Google.svg";
import Facebook from "../assets/images/Login/Facebook.svg";
import { useState } from 'react';
import { useRef } from 'react';
export default function VerifyAddress() {
    const [OTP, setOTP] = useState(
        {
            digitOne:" ",
            digitTwo:" ",
            digitThree:" ",
            digitFour:" ",
            digitFive:" ",
            digitSix:" ",
        }
    );
   const handleChange=(event)=>{
     const {name,value}=event.target;
     setOTP(prev=>({
        ...prev,
        [name]:value
     }));
     event.target.nextSibling.focus(); 
   }
   const inputRef=useRef({})
    const renderInput=()=>{
        return Object.keys(OTP).map((keys,index)=>(
             <input name={keys} ref={(element)=>(inputRef.current[index]=element)} class="m-2 border border-blue-300 bg-blue-50 h-10 w-10 text-center form-control rounded" type="text" id="first" maxlength="1" onChange={handleChange} /> 
        ));
    }
  return (
      <div className="flex justify-center items-center bg-[#EDF9FF] text-[#37352F]">
      <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
        <img src={Logo} className="absolute top-5 left-0" />
        <img src={VerifyL}/>
        <div className="bg-white p-12 flex flex-col justify-center gap-y-6 rounded-3xl shadow-md">
          <div class=" xs:p-0 mx-auto md:w-full md:max-w-md  ">
                <div class="bg-white w-full  ">
                    <h1 class="font-bold text-center text-blue-400 text-4xl">Verify Email Address</h1> 
                    <div>
                    <div class="py-10 px-3">
                        <div class="container mx-auto">
                            <div class="max-w-sm mx-auto md:max-w-lg">
                                <div class="w-full">
                                    <div class="bg-white h-64 rounded text-center">
                                    <div className="text">
                                            <p class="text-xl text-gray-500 ">Please enter the code we've end to
                                                use your</p>  
                                            <p class="text-xl text-center text-blue-500">your email address</p>  
                                            </div>
                                        <div id="otp" class="flex   flex-row justify-center text-center px-2 mt-5">
                                            <div>
                                               {renderInput()}
                                                {/* {renderInput()}
                                                {renderInput()}
                                                {renderInput()}
                                                {renderInput()}
                                                {renderInput()}
                                                {renderInput()} */}
                                            </div>
                                            {/* <input class="m-2 border border-blue-300 bg-blue-50 h-10 w-10 text-center form-control rounded" type="text" id="first" maxlength="1" />  */}
                                            {/* <input class="m-2 border border-blue-300 bg-blue-50 h-10 w-10 text-center form-control rounded" type="text" id="second" maxlength="1" />  */}
                                            {/* <input class="m-2 border border-blue-300  bg-blue-50 h-10 w-10 text-center form-control rounded" type="text" id="third" maxlength="1" />  */}
                                            {/* <input class="m-2 border border-blue-300 bg-blue-50 h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxlength="1" /> */}
                                            {/* <input class="m-2 border border-blue-300  bg-blue-50 h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxlength="1" />  */}
                                            {/* <input class="m-2 border border-blue-300  bg-blue-50 h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" /> */}
                                        </div>           
                                    <div class="flex justify-center text-center mt-5">
                                    <a class="flex items-center  cursor-pointer"><span class="font-bold">(30s)</span></a>
                                </div>
                                <div class="flex justify-center text-center mt-5">
                                    <a class="flex items-center text-blue-500 hover:text-blue-900 cursor-pointer"><span class="font-bold underline pr-3">Didn't receive the code?</span>Click to resend</a>
                                </div>
                                <div className="btn pt-8">
                                    <button type="button" onC class="transition  duration-200 bg-blue-400 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                        Sign in
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
        <img src={VerifyR} className='mb-32' />
      </div>
    </div>
  )
}

