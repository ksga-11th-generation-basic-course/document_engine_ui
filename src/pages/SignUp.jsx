import React from 'react'
import Logo from "../assets/images/Logo.svg";
import Right1Image from "../assets/images/Login/Right-img-logout.svg";
import Left1Image from "../assets/images/Login/Left-img-logout.svg";
import Google from "../assets/images/Login/Google.svg";
import Facebook from "../assets/images/Login/Facebook.svg";
export default function SignUp() {
  return (
    <div className="flex px-2 justify-center items-center bg-[#EDF9FF] text-accent">
    <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
        <img src={Logo} className="absolute top-8 left-14 max-sm:left-3 max-sm:top-0" />
        <img className="w-[600px] h-[500.16px] mr-5 max-sm:hidden" src={Left1Image} />
        <div className="bg-white max-sm:bg-[#EDF9FF] p-12 flex flex-col justify-center gap-y-6 rounded-3xl lg:shadow-lg">
            <div className=" xs:p-0 mx-auto w-[380px] md:max-w-md">
                <h1 className="font-bold text-center text-primary text-3xl max-sm:pt-5 max-sm:text-4xl">Sign Up</h1>
                <div className="px-2 py-8 max-sm:py-8 max-sm:px-8  ">
                    <label className= "font-semibold text-lg block">Username</label>
                    <div class=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary ">
                        <input class="border-primary border  rounded-lg px-2 py-3 max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none" type="text" placeholder="Username" aria-label="Full name"/>
                    </div>
                    {/* <input type="username" className="border border-primary max-sm:bg-transparent max-sm:appearance-none max-sm:border-none max-sm:focus:outline-none outline-blue-500 rounded-lg px-2 py-3 mt-1 mb-3 text-sm w-full" placeholder='Username' /> */}
                    <label className="font-semibold text-lg block pt-3 ">Email</label>
                    <div class=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary ">
                        <input class="border-primary border  rounded-lg px-2 py-3 max-sm:appearance-none max-sm:bg-transparent max-sm:leading-tight max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none" type="text" placeholder="example@gmail.com" aria-label="Full name"/>
                    </div>
                    {/* <input type="email" className="border border-primary outline-blue-500 rounded-lg px-2 py-3 mt-1 mb-3 text-sm w-full" placeholder='example@gmail.com' /> */}
                    <label className="font-semibold text-lg block pt-3">Password</label>
                    <div class=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary ">
                        <input class="border-primary border  rounded-lg px-2 py-3 max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none" type="text" placeholder='Password' aria-label="Full name"/>
                    </div>
                    {/* <input type="text" className="border border-primary outline-blue-500 rounded-lg px-2 py-3 mt-1 mb-3 text-sm w-full" placeholder='Password' /> */}
                    <label className="font-semibold text-lg block pt-3">Confirm Password</label>
                    <div class=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary ">
                        <input class="border-primary border  rounded-lg px-2 py-3 max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none" type="text" placeholder="Confirm Password" aria-label="Full name"/>
                    </div>
                    {/* <input type="text" className="border border-primary outline-blue-500 rounded-lg px-2 py-3 mt-1 mb-3 text-sm w-full" placeholder='Confirm Password' /> */}
                    <button type="button" className="transition duration-200 w-full py-2.5 mb-3 text-center text-sm font-semibold inline-block max-sm:pt-4">
                        Do you have an account?<a href="" className='text-primary pl-2'>Sign Up</a>
                    </button>
                    <a href="#_" class="px-5 py-2.5 max-sm:py-3 font-semibold relative group overflow-hidden bg-primary w-full text-center rounded-lg text-white hover:ring-2 inline-block hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-1000">
                        {/* <span class=" absolute right-0 w-8 h-32  transition-all duration-1000 transform translate-x-28 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span> */}
                        <span class="relative ">Continue </span>
                    </a>
                    <button type="button" className="outline-none duration-200 text-primary pt-5 w-full font-semibold text-center inline-block">
                        Sign up
                    </button>
            </div>
            <div className='px-4 pb-4 '>
                <div
                    className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-400">
                    <p
                        className="mx-1 text-center text-gray-400 ">
                        or
                    </p>
                </div>
            </div>
            <div className="p-2">
                <div className="grid grid-cols-2 gap-6">
                    <button className="flex justify-center items-center py-2 px-4 text-sm rounded border border-gray-200  outline-none max-sm:border-primary max-sm:border-2 text-accent font-bold transition transform "          >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 48 48"            >
                            <path fill="#fbc02d" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                            <path fill="#e53935" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                            <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                            <path fill="#1565c0" d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                        </svg>
                        Google
                    </button>
                    <button className="flex justify-center items-center py-2 px-4 font-bold text-sm rounded border  outline-none border-gray-200 max-sm:border-primary max-sm:border-2 text-accent transition transform "          >
                        <svg
                            className="w-6 h-6 mr-2 text-blue-600 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                            />
                        </svg>
                        Facebook
                    </button>
                    </div>
                </div>

            </div>

        </div>
    </div>
    <img className="w-[600px] h-[600.57px]  max-sm:hidden" src={Right1Image} /> 
    </div>
  )
}
