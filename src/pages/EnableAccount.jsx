import React from 'react'
import Logo from "../assets/images/Logo.svg";
import EnableAcc from '../assets/images/EnableAcc.svg'

const EnableAccount = () => {
    return (
        <div className='bg-[#EDF9FF] h-screen flex justify-center items-center'>
            {/* logo  */}
            <img src={Logo} className="absolute top-7 left-20" />
            <div>
                {/* grid  */}
                <div className='grid-cols-2 gap-11 flex justify-center items-center'>
                    {/* left-pic */}
                    <div>
                        <img className='w-[350px]' src={EnableAcc} />
                    </div>
                    {/* form  */}
                    <div>
                        <div className="border bg-white p-14 rounded-3xl shadow-lg w-[400px]">
                            <h1 className="font-bold text-center text-primary text-3xl">
                                Enable Your Account
                            </h1>
                            <p className='text-center text-sm text-gray-500 py-5'>Please enter your email address below</p>
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
                                        className="transition duration-200 font-bold bg-primary hover:bg-primary focus:shadow-sm focus:ring-4 text-white w-full py-3 rounded-lg text-sm text-center">
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnableAccount