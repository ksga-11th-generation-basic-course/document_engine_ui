import React from 'react'
import Logo from "../assets/images/Logo.svg";
import SignUpLeft from '../assets/images/Left/SignUpLeft.svg';
import SignUpRight from '../assets/images/Right/SignUpRight.svg';

const SignUp = () => {
    return (
        <div>
            {/* logo  */}
            <img src={Logo} className="absolute top-7 left-20" />
            {/* grid  */}
            <div className="grid grid-cols-3 h-screen bg-[#EDF9FF]">
                {/* left-pic  */}
                <div className='flex justify-end items-center'><img className='w-[387px] h-[545px]' src={SignUpLeft} /></div>
                {/* form  */}
                <div className="flex items-center justify-center">
                    <div className="border bg-white p-10 rounded-3xl shadow-lg w-[400px]">
                        <h1 className="font-bold text-center mb-5 text-primary text-3xl">
                            Sign in
                        </h1>
                        <div>
                            <label className="text-sm font-ssp font-bold text-text-primary">
                                Username
                            </label>
                            <input
                                type="email"
                                name="name"
                                className="focus:border-[#009AFF] border-2 border-primary rounded-lg mb-4 text-sm w-full h-11"
                                placeholder="Username" />
                            <label className="text-sm font-ssp font-bold text-text-primary">
                                E-mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="focus:border-[#009AFF] border-2 border-primary rounded-lg mb-4 text-sm w-full h-11"
                                placeholder="example@gmail.com" />
                            <label className="text-sm font-ssp font-bold text-text-primary">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="focus:border-[#009AFF] border-2 border-primary rounded-lg mb-4 text-sm w-full h-11"
                                placeholder="Password" />
                            <label className="text-sm font-ssp font-bold text-text-primary">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="focus:border-[#009AFF] border-2 border-primary rounded-lg text-sm w-full h-11"
                                placeholder="Confirm Password" />

                            <div className='text-center text-sm py-4 font-ssp font-bold'>
                                <a className='text-text-primary' href="">Do you have an account?</a>
                                <a className='text-primary' href="">  Sign in</a>
                            </div>

                            <button
                                type="button"
                                className="transition duration-200 mb-2 font-bold bg-primary hover:bg-primary focus:shadow-sm focus:ring-4 text-white w-full py-3 rounded-lg text-sm text-center">
                                Continue
                            </button>
                        </div>
                        {/* or  */}
                        <div className="py-3">
                            <div className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
                                <p className="mx-1 text-center text-sm text-gray-400">or</p>
                            </div>
                        </div>
                        {/* google and facebook button  */}
                        <div className="py-2">
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex justify-center items-center text-sm py-2 w-[150px] bg-white border border-gray-200 rounded-lg font-bold transition transform hover:-translate-y-0.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mr-2"
                                        viewBox="0 0 48 48">
                                        <path
                                            fill="#fbc02d"
                                            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                                        />
                                        <path
                                            fill="#e53935"
                                            d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                                        />
                                        <path
                                            fill="#4caf50"
                                            d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                                        />
                                        <path
                                            fill="#1565c0"
                                            d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                                        />
                                    </svg>
                                    <p className="text-text-primary">Google</p>
                                </button>
                                <button className="flex justify-center items-center text-sm py-2 w-[150px] bg-white border border-gray-200 rounded-lg font-bold transition transform hover:-translate-y-0.5">
                                    <svg
                                        className="w-6 h-6 mr-2 text-blue-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    <p className="text-text-primary">Facebook</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right-pic  */}
                <div className='flex justify-start items-center'><img className='w-[300px] h-[400px]' src={SignUpRight} /></div>
            </div>

        </div>
    )
}

export default SignUp