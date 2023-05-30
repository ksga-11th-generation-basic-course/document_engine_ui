import React from 'react'
import Logo from "../assets/images/Logo.svg";
import ForgetPasswordLeft from '../assets/images/ForgetPasswordLeft.svg'

const ForgetPassword = () => {
    return (
        <div className='bg-[#EDF9FF] h-screen flex justify-center items-center'>
            {/* logo  */}
            <img src={Logo} className="absolute top-7 left-20" />
            <div>
                {/* grid  */}
                <div className='grid-cols-3 gap-11 flex justify-center items-center'>
                    {/* left-pic */}
                    <div>
                        <img className='w-[450px]' src={ForgetPasswordLeft} />
                    </div>
                    {/* form  */}
                    <div>
                        <div className="border bg-white p-10 rounded-3xl shadow-lg w-[400px]">
                            <h1 className="font-bold text-center text-primary text-3xl">
                                Forget Your Password?
                            </h1>
                            <p className='text-center text-sm text-gray-500 py-5'>Please enter your email address below to receive password reset instruction</p>
                            <div>
                                <label className="text-sm font-ssp font-bold text-text-primary">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="focus:border-[#009AFF] border-2 border-primary rounded-lg mb-6 text-sm w-full h-11"
                                    placeholder="example@gmail.com" />
                                <div>
                                    <button
                                        type="button"
                                        className="transition duration-200 mb-4 font-bold bg-primary hover:bg-primary focus:shadow-sm focus:ring-4 text-white w-full py-3 rounded-lg text-sm text-center">
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* button */}
            <div className='flex justify-center absolute bottom-10'>
                <button className="w-[45px] h-[4px] rounded-lg bg-primary ml-1">  </button>
                <button className="w-[45px] h-[4px] rounded-lg bg-[#d9d9d9] ml-1">  </button>
                <button className="w-[45px] h-[4px] rounded-lg bg-[#d9d9d9] ml-1">  </button>
            </div>
        </div>
    )
}

export default ForgetPassword