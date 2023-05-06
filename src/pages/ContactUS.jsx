import React from 'react'
import Logo from "../assets/images/Logo.svg";
import Contact from "../assets/images/Contact.svg"
import Navbar from './Navbar';
import Message from'../assets/images/Contact/Message.svg'
import IG from'../assets/images/Contact/IG.svg'
import Face from'../assets/images/Contact/Facebook.svg'
import Tele from'../assets/images/Contact/Telegram .svg'
// import Telegram from'../assets/images/Contact/Telegram.svg'
export default function () {
  return (
   
    <div className='contact'>
        {/* <Navbar></Navbar> */}
        <div>
        <Navbar></Navbar>
        </div>
        <div>
        <div className='navbar'>
            <div className="form">
            {/* <!-- Container for demo purpose --> */}
            <div class="container my-24 px-6 mx-auto">

            {/* <!-- Section: Design Block --> */}
            <section class="mb-32 text-gray-800 relative">
                <div className="  relative">
                   <div className='bg-blue-500 px-2 py-0.5  rounded-r-lg absolute left-6 w-32' >
                   </div>
                </div>
           
                <div class="flex flex-left pt-5">
                    
                    <div class="text-center lg:max-w-3xl md:max-w-xl">
                        <h2 class="text-3xl font-bold  px-6 pt-2 pb-5">Let's <span className='text-blue-400'>Talk!</span></h2>
                        <div className='text text-justify absolute left-6 '>
                            <p>To request  a quote or what to meet up for coffee, </p>
                            <p>contact us directly or fill out the form we will get back to <br />your promptly </p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap">
                <div class="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
                    <form>
                    <div class="form-group mb-6  text-gray-600 pt-24">
                        <label htmlFor="">Your Email <span className='h-5 mb-5'>@</span></label>
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                        />
                    </div>
                    
                    <div class="form-group mb-6">
                        <div className='flex flex-row '>
                            <div className='email text-gray-600 '>
                                <label>Your Message</label>
                            </div>
                            <div className='text-gray-500 pl-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1Z"/></svg>
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
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    " id="exampleFormControlTextarea13" rows="3" ></textarea>
                    </div>
                    <button type="submit" class="
                   
                    px-12
                    py-2.5
                    bg-blue-500
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                   
          rounded
          shadow-xl
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Send</button>
                </form>
            </div>
            <div class="grow-0 shrink-0 basis-auto  relative lg:w-7/12">
                <div class="flex flex-wrap">
                    <img src={Contact} className='h-96 absolute  left-64 bottom-36'  />
                </div>
                <div className="link pt-10">
                    <div className='img'>
                        <img src="" alt="" />
                    </div>
                    <div className='icon relative'>
                        <div className='message absolute top-96 left-80 flex flex-row'>
                            <img src={Message} alt=""  className='w-10'/>
                            <a href="#" className='pr-6 text-gray-400'>documentengine@gmail.com</a>
                            <div className='Image flex flex-row absolute top-16 w-50 '>
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
            </div>
        </section>
        {/* <!-- Section: Design Block --> */}
</div>
{/* <!-- Container for demo purpose --> */}
            </div>
        </div>
        </div>
      
        
    </div>
  )
}
