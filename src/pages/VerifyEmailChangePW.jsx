import React from 'react'
import Logo from "../assets/images/Logo.svg";
import VerifyEmailLeft from '../assets/images/Left/VerifyEmailLeft.svg'
import VerifyEmailRight from '../assets/images/Right/VerifyEmailRight.svg'
import NewPasswordRight from '../assets/images/NewPasswordRight.svg'

import { useState } from 'react';
import { useRef } from 'react';
export default function VerifyEmail() {
    const [OTP, setOTP] = useState(
        {
            digitOne: " ",
            digitTwo: " ",
            digitThree: " ",
            digitFour: " ",
            digitFive: " ",
            digitSix: " ",
        }
    );
    const handleChange = (event) => {
        const { name, value } = event.target;
        setOTP(prev => ({
            ...prev,
            [name]: value
        }));
        event.target.nextSibling.focus();
    }
    const inputRef = useRef({})
    const renderInput = () => {
        return Object.keys(OTP).map((keys, index) => (
            <input name={keys} ref={(element) => (inputRef.current[index] = element)} className="m-1 border border-primary bg-blue-50 h-11 w-11 text-center form-control rounded" type="text" id="first" maxlength="1" onChange={handleChange} />
        ));
    }
    return (
        <div className='bg-[#EDF9FF] h-screen flex justify-center items-center'>
            {/* logo  */}
            <img src={Logo} className="absolute top-7 left-20" />
            <div>
                {/* grid  */}
                <div className='grid-cols-3 flex justify-center items-center'>
                    {/* left-pic */}
                    <div className="flex justify-center items-center">
                        <img className='w-[300px] h-[300px]' src={VerifyEmailLeft} />
                    </div>
                    {/* form  */}
                    <div>
                        <div className="border bg-white p-10 rounded-3xl shadow-lg w-[400px]">
                            <h1 className="font-bold text-center text-primary text-3xl">Verify Email Address</h1>
                            <div className="py-5">
                                <div className="max-w-sm mx-auto md:max-w-lg">
                                    <div className="w-full">
                                        <div className="h-60 rounded text-sm text-center">
                                            <div>
                                                <p className="text-gray-500">Please enter the code we've send to</p>
                                                <p className="text-center text-primary">your email address</p>
                                            </div>
                                            <div id="otp" className="flex flex-row justify-center text-center py-5">
                                                {renderInput()}
                                            </div>
                                            <div className="flex justify-center text-center">
                                                <a className="flex items-center cursor-pointer"><span className="font-bold text-sm text-gray-500">(30s)</span></a>
                                            </div>
                                            <div className="flex justify-center  text-sm text-center mt-5">
                                                <a className="flex items-center text-primary text-sm cursor-pointer underline"><span className="pr-2 no-underline">Didn't receive the code?</span>Click to resend</a>
                                            </div>
                                            <div className="py-5">
                                                <button
                                                    type="button"
                                                    className="transition duration-200 font-bold bg-primary hover:bg-hover focus:shadow-sm focus:ring-4 text-white w-full py-3 rounded-lg text-sm text-center">
                                                    Sign in
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right-pic */}
                    <div>
                        <img className='w-[300px] h-[300px]' src={VerifyEmailRight} />
                    </div>
                </div>
            </div>
            {/* button */}
            <div className='flex justify-center absolute bottom-10'>
                <button className="w-[45px] h-[4px] rounded-lg bg-[#d9d9d9] ml-1">  </button>
                <button className="w-[45px] h-[4px] rounded-lg bg-primary ml-1">  </button>
                <button className="w-[45px] h-[4px] rounded-lg bg-[#d9d9d9] ml-1">  </button>
            </div>
        </div>
    )
}