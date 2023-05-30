import React from 'react'
import Logo from "../assets/images/Logo.svg";
import NewPasswordRight from '../assets/images/NewPasswordRight.svg'

const SetNewPassword = () => {
    return (
        <div className='bg-[#EDF9FF] h-screen flex justify-center items-center'>
            {/* logo  */}
            <img src={Logo} className="absolute top-7 left-20" />
            <div>
                {/* grid  */}
                <div className='grid-cols-3 gap-11 flex justify-center items-center'>
                    {/* form  */}
                    <div>
                        <div className="border bg-white p-14 rounded-3xl shadow-lg w-[370px]">
                            <h1 className="font-bold text-center text-primary text-3xl">
                                Set New Password
                            </h1>
                            <p className='text-center text-sm text-gray-400 py-5'>Password must at least 8 characters.</p>
                            <div>
                                <label className="text-sm font-ssp font-bold text-text-primary">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="focus:border-[#009AFF] border-2 border-primary rounded-lg mb-4 text-sm w-full h-11"
                                    placeholder="Your New Password" />
                                <label className="text-sm font-ssp font-bold text-text-primary">
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="focus:border-[#009AFF] border-2 border-primary rounded-lg mb-6 text-sm w-full h-11"
                                    placeholder="Your New Password" />
                                <div>
                                    <button
                                        type="button"
                                        className="transition duration-200 mb-4 font-bold bg-primary hover:bg-primary focus:shadow-sm focus:ring-4 text-white w-full py-3 rounded-lg text-sm text-center">
                                        Reset Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right-pic */}
                    <div>
                        <img className='w-[450px]' src={NewPasswordRight} />
                    </div>
                </div>
            </div>
            {/* button */}
            <div className='flex justify-center absolute bottom-10'>
                <button className="w-[45px] h-[4px] rounded-lg bg-[#d9d9d9] ml-1">  </button>
                <button className="w-[45px] h-[4px] rounded-lg bg-[#d9d9d9] ml-1">  </button>
                <button className="w-[45px] h-[4px] rounded-lg bg-primary ml-1">  </button>
            </div>
        </div>
    )
}

export default SetNewPassword