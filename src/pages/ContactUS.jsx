import React from 'react'
import Logo from "../assets/images/Logo.svg";
import Contact from "../assets/images/Contact.svg"
import Navbar from './Navbar';
import Message from'../assets/images/Contact/Message.svg'
import IG from'../assets/images/Contact/IG.svg'
import Face from'../assets/images/Contact/Facebook.svg'
import Tele from'../assets/images/Contact/Telegram .svg'
export default function () {
  return ( 
    <div className='contact'>
        <div className="navbar">
            <Navbar></Navbar>
        </div>
        <div className='px-20 flex flex-row max-sm:flex-col max-sm:px-5 max-sm:pt-24 justify-evenly pt-32'>
            <div className='left'>
                <div className='text '>
                    <div className='py-[1.5px] w-[7.5rem] max-sm:w-[16rem] bg-primary'></div>
                        <div className='pt-5'>
                            <h1 className='text-3xl pb-5 leading-10 font-bold max-sm:text-6xl'>Let's <span className='text-primary'>talk!</span> </h1>
                            <div className='text-2xl text-accent leading-10 max-sm:text-start max-sm:text-lg'>
                                <p>To request  a quote or what to meet up for coffee, <br className='max-sm:hidden'/>
                                contact us directly or fill out the form we will get back to<br className='max-sm:hidden'/>
                                your promptly.</p>
                            </div>
                    </div>
                </div>
                <div className="form pt-[60px] max-sm:pt-[40px] max-sm:">
                    <form>
                         <label htmlFor="" className='text-xl text-accent'>Your Email @</label>
                         <input type="text" className="form-control block rounded-lg border-2 w-full py-[10px] border-solid border-accent outline-primary" />
                         <div className='flex flex-row pt-5'>
                            <div className='email text-accent'>
                                <label className='text-xl'>Your Message</label>
                            </div>
                            <div className='text-accent pl-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1Z"/></svg>
                            </div>
                        </div>
                        <textarea className="form-control block w-full  px-4 py-8 text-base font-normal text-accent bg-white border border-solid border-accent rounded-lg  outline-primary"></textarea>
                    </form>
                </div>
            </div>
            <div className='right max-sm:px-10'>
                <img src={Contact} alt="" />
                <div className='flex flex-col justify-center items-center'>
                    <div className='link'>
                         <a href="#" className=' text-gray-400 text-center'>documentengine@gmail.com</a>
                    </div>
                    <div className='grid grid-cols-3 gap-16 pt-3 pb-10'>
                        <div className=' img1 col-1 '>
                            <img src={Face} alt="" className='w-12' />
                        </div>
                        <div className="img2 col-1">
                             <img src={Tele} alt="" className='w-12' />
                        </div>
                         <div className="img3 col-1">
                            <img src={IG} alt=""  className='w-12'/>   
                         </div>
                    </div>
                   
                </div>
            </div>
        </div>
     </div>
  )
}
