import React from 'react'
import Logo from "../assets/images/Logo.svg";
import Contact from "../assets/images/Contact.svg"
import Navbar from './Navbar';
import Message from '../assets/images/Contact/Message.svg'
import IG from '../assets/images/Contact/IG.svg'
import Face from '../assets/images/Contact/Facebook.svg'
import Tele from '../assets/images/Contact/Telegram .svg'
export default function () {
    return (
        <div className=' min-h-screen'>
            <div className="navbar">
                <Navbar></Navbar>
            </div>



            {/* grid 1 block title*/}
            <div className=' grid grid-cols-1 lg:grid-cols-2   '>
                <div className=' m-28'>
                    <div>
                        <div className='bg-blue-500 px-2 py-0.5  rounded-r-lg  w-32' ></div>
                    </div>
                    <div className="text pt-5">
                        <h2 class="text-3xl font-bold pb-5">Let's <span className='text-blue-400'>Talk!</span></h2>
                        <div className='text-justify text-2xl text-gray-500'>
                            <p>To request  a quote or what to meet up for coffee, </p>
                            <p>contact us directly or fill out the form we will get back to</p>
                            <p>your promptly </p>
                        </div>
                    </div>
                    <div className="form relative top-10">
                        <label htmlFor="" className='text-xl'>Your Email @</label>
                        <input type="text" class="form-control block
                                w-full
                                px-3
                                py-3
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                resize
                                "

                        />
                        <div className='flex flex-row pt-5'>
                            <div className='email text-gray-600 '>
                                <label className='text-xl'>Your Message</label>
                            </div>
                            <div className='text-gray-500 pl-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1Z" /></svg>
                            </div>
                        </div>
                        <textarea class="
                                form-control
                                block
                                w-full
                                px-4
                                py-8
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                            "></textarea>
                        <button type="submit" class="
                            mt-5
                            px-12
                            py-2.5
                            bg-blue-400
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                                    
                            rounded
                            shadow-xl
                            transition
                            duration-150
                            ease-in-out">Send</button>
                    </div>

                </div>

                {/* grid 2 block images*/}

                <div className='flex flex-col justify-center items-center '>
                    <img src={Contact} alt="" className=' md:w-[560px]  mt-28' />
                    <div className=''>
                        <div className='flex mt-12 sm:flex justify-items-center'>
                            <img src={Message} alt="" className='w-10 mr-2' />
                            <a href="#" className='pr-6 text-gray-400'>documentengine@gmail.com</a>
                        </div>

                        <div className='Image flex flex-row top-12 w-56  mt-2'>
                            <div className="img1 pr-12">
                                <img src={Face} alt="" className='' />
                            </div>
                            <div className="img2 pr-12 ">
                                <img src={Tele} alt="" />
                            </div>
                            <div className="img3">
                                <img src={IG} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    )
}
