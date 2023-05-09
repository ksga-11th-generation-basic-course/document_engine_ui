import React from "react";
import Logo from "../assets/images/Logo.svg";
import RightImage from "../assets/images/Login/Right-img-login.svg";
import LeftImage from "../assets/images/Login/Left-img-login.svg";
import Google from "../assets/images/Login/Google.svg";
import Facebook from "../assets/images/Login/Facebook.svg";
const Login = () => {
  return (
    <div className="flex px-2 justify-center items-center bg-[#EDF9FF] text-[#37352F]">
              <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
        <img src={Logo} className="absolute top-5 left-0" />
        <img src={LeftImage} className="mr-2" />
        <div className="bg-white p-10 flex flex-col justify-center gap-y-6 rounded-3xl shadow-md">
         <div class=" xs:p-0 mx-auto md:w-full md:max-w-md">
                    <h1 class="font-bold text-center text-blue-500  text-2xl">Sign in</h1> 
                    <div class="px-5 py-5">
                        <label class="font-semibold text-sm text-gray-600 pb-3 block">E-mail</label>
                        <input type="email" class="border border-blue-400 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"  placeholder='example@gmail.com'/>
                        <label class="font-semibold text-sm text-gray-600 pb-3 block">Password</label>
                        <input type="text" class="border border-blue-400 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"  placeholder='Password' />
                        <button type="button" class="transition pb-5 duration-200  w-full py-2.5  text-sm  font-semibold text-left inline-block">
                            Forgot your password?
                        </button> 
                        <button type="button" class="transition  duration-200 bg-primary hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            Sign in
                        </button>
                        <button type="button" class="transition  duration-200 text-primary pt-5 w-full py-2.5  text-sm  font-semibold text-center inline-block">
                            Sign in
                        </button>
                    </div>
                    <div className='px-4 mb-3'>
                        <div
                            class="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-400">
                            <p
                            class="mx-4 mb-0 text-center font-semibold dark:text-neutral-400">
                            or
                            </p>
                        </div>
                    </div>   
                    <div class="p-2">
                      <div class="grid grid-cols-2 gap-6">
                          <button            class="flex justify-center items-center  py-2 px-4 text-sm uppercase rounded bg-white border border-gray-300  hover:border-transparent hover:text-gray-700  font-bold transition transform hover:-translate-y-0.5"          >
                              <svg              xmlns="http://www.w3.org/2000/svg"              class="w-6 h-6 mr-4"              viewBox="0 0 48 48"            >
                                  <path                fill="#fbc02d"                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"              />
                                  <path                fill="#e53935"                d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"              />
                                  <path                fill="#4caf50"                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"              />
                                  <path                fill="#1565c0"                d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"              />
                              </svg>
                              Google
                          </button>
                          <button            class="flex justify-center items-center py-2 px-4 font-bold text-sm uppercase rounded border border-gray-300 hover:border-black   hover:border-transparent hover:text-gray-700   transition transform hover:-translate-y-0.5"          >
                              <svg
                                  class="w-6 h-6 mr-4 text-blue-600 fill-current"
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
        <img src={RightImage} />
      {/* <div className="flex justify-center items-center min-h-screen relative overflow-hidden"> */}
       
            {/* <img src={LeftImage} className="" /> */}
            {/* <div className="bg-white p-12 flex flex-col justify-center gap-y-6 rounded-3xl shadow-md">
            <div class=" xs:p-0 mx-auto md:w-full md:max-w-md  ">
                    <div class="bg-white w-full  ">
                        <h1 class="font-bold text-center text-blue-500 text-2xl">Sign Up</h1> 
                        <div class="px-5 py-7">
                            <label class="font-semibold text-sm text-gray-600  block">E-mail</label>
                            <input type="text" class="border border-blue-400 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"  placeholder='example@gmail.com'/>
                            <label class="font-semibold text-sm text-gray-600  block">Password</label>
                            <input type="text" class="border border-blue-400 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"  placeholder='Password' />
                            <div className='pb-3'>
                                <div class="text-left">
                                    <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                                </div>
                            </div>   
                            <button type="button" class="transition pb-3 duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                Sign in
                            </button>
                            <button type="button" class="transition pt-3 duration-200 text-blue-500  w-full rounded-lg text-sm  font-semibold text-center inline-block">
                                Sign Up
                            </button>
                        </div>
                        <div className='px-4 '>
                            <div
                                class="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-400">
                                <p
                                class="mx-4 mb-0 text-center font-semibold dark:text-neutral-400">
                                or
                                </p>
                            </div>
                        </div>   
                    <div class="p-5 ">
                        <div class="grid grid-cols-2 gap-6 ">
                            <button            class="flex items-center text-center py-2 px-2 text-sm uppercase rounded bg-white border border-gray-300 hover:border-transparent hover:text-gray-700  font-bold transition transform hover:-translate-y-0.5"          >
                                <svg              xmlns="http://www.w3.org/2000/svg"              class="w-6 h-6 mr-5"              viewBox="0 0 48 48"            >
                                    <path                fill="#fbc02d"                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"              />
                                    <path                fill="#e53935"                d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"              />
                                    <path                fill="#4caf50"                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"              />
                                    <path                fill="#1565c0"                d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"              />
                                </svg>
                                Google
                            </button>
                            <button            class="flex items-center py-2 px-4 font-bold text-sm uppercase rounded border border-gray-300    hover:border-transparent hover:text-gray-700   transition transform hover:-translate-y-0.5"          >
                                <svg
                                    class="w-6 h-6 mr-4 text-blue-600 fill-current"
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
            </div> */}
            {/* <img src={RightImage} /> */}
      {/* </div> */}
    </div>
  );
};

export default Login;
