import React from 'react'
import Logo from "../assets/images/Logo.svg";
import VerifyEmailLeft from '../assets/images/Left/VerifyEmailLeft.svg'
import VerifyEmailRight from '../assets/images/Right/VerifyEmailRight.svg'
import { useState } from 'react';
import { useRef } from 'react';
export default function VerifyEmailChangePW() {
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
            <input name={keys} ref={(element) => (inputRef.current[index] = element)} class="m-1 border border-primary bg-blue-50 h-11 w-11 text-center form-control rounded" type="text" id="first" maxlength="1" onChange={handleChange} />
        ));
    }
    return (
        <div className="flex justify-center items-center bg-[#EDF9FF] text-text-primary">
            {/* logo  */}
            <img src={Logo} className="absolute top-7 left-20" />
            {/* grid  */}
            <div className="grid grid-cols-3 h-screen bg-[#EDF9FF]">
                {/* left-pic */}
                <div className="flex items-center justify-end">
                    <img className='w-[400px] h-[400px]' src={VerifyEmailLeft} />
                </div>
                <div className="flex items-center justify-center">
                    <div className="border bg-white p-10 rounded-3xl shadow-lg w-[400px]">
                        <h1 class="font-bold text-center text-primary text-3xl">Verify Email Address</h1>
                        <div class="py-5">
                            <div class="max-w-sm mx-auto md:max-w-lg">
                                <div class="w-full">
                                    <div class="h-60 rounded text-sm text-center">
                                        <div>
                                            <p class="text-gray-500">Please enter the code we've send to</p>
                                            <p class="text-center text-primary">your email address</p>
                                        </div>
                                        <div id="otp" class="flex flex-row justify-center text-center py-5">
                                            {renderInput()}
                                        </div>
                                        <div class="flex justify-center text-center">
                                            <a class="flex items-center cursor-pointer"><span className="font-bold text-sm text-gray-500">(30s)</span></a>
                                        </div>
                                        <div class="flex justify-center  text-sm text-center mt-5">
                                            <a class="flex items-center text-primary text-sm cursor-pointer underline"><span class="pr-2 no-underline">Didn't receive the code?</span>Click to resend</a>
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
                <div className='flex justify-start items-center'>
                    <img src={VerifyEmailRight} className='w-[300px] h-[400px]' />
                </div>
            </div>
        </div >
    )
}