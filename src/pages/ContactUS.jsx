import React, { useState } from "react";
import Contact from "../assets/images/Contact.svg";
import Message from "../assets/images/Contact/Message.svg";
import IG from "../assets/images/Contact/IG.svg";
import Face from "../assets/images/Contact/Facebook.svg";
import Tele from "../assets/images/Contact/Telegram .svg";
import { NavBar } from "../components/NavBar";
import { SendMessageSuccessModal } from "../modal/SendMessageSuccessModal";

export const ContactUs = () => {
  const [openSendMessageSuccess, setOpenSendMessageSuccess] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <div>
        <NavBar />
      </div>

      {/* grid 1 block title */}
      <div className=" grid grid-cols-2 overflow-hidden ml-20 lg:grid lg:grid-cols-2 md:ml-2  md:flex md:flex-col">

        {/* Let's Talk */}
        <div className=" px-12 pt-32 lg:col-span-1 lg:w-[580px] md:px-8 sm:px-10 md:pt-24">
            <div>
              <div className="bg-primary px-2 py-0.5 rounded-r-lg w-32 lg:w-[130px] md:w-[130px] md:h-0.5"></div>
            </div>
            <div className="text pt-8 lg:pt-5 px-0">
              <h2 className="text-3xl font-bold pb-5 text-accent">
                Let's <span className="text-primary">Talk!</span>
              </h2>
              <div className="text-justify text-xl text-accent font-semibold lg:text-xl md:w-[270px] md:text-sm ">
                To request a quote or what to meet up for coffee, contact us directly or fill out the form we will get back to your promptly.
              </div>
            </div>

            {/* Your Email @ */}
          <div className="form relative top-10 lg:mt-4 md:w-[300px] md:-mt-6">
            <label
              htmlFor=""
              className="text-xl sm:text-14px text-[#575E69] font-semibold "
            >
              Your Email @
            </label>
            <input
              type="text"
              className="form-control block w-full px-3  py-3 text-base  bg-white bg-clip-padding  border border-solid border-accent  rounded transition  
              ease-in-out m-0 resize text-accent font-semibold md:h-9"/>
              {/*Write Message */}
            <div className="flex flex-row pt-5">
              <div className="email text-[#575E69] ">
                <label className="text-xl  sm:text-14px font-semibold">
                  Your Message
                </label>
              </div>
              {/* Form input */}
              <div className="text-gray-500 pl-2  ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                >
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1Z"/>
                </svg>
              </div>
            </div>
            <textarea
              className="form-control block w-full px-4 lg:py-2 py-8 text-base font-normal text-[#575E69] bg-white bg-clip-padding border border-solid
               border-accent  rounded  transition ease-in-out lg:h-36 md:h-24"
            ></textarea>
            {/* Button Send */}
            <button
              type="submit"
              className="mt-5 px-10 py-2.5 text-18px bg-primary text-white font-semibold rounded-lg hover:bg-primary/90  lg:text-xl lg:mb-14  md:-ml-0 md:h-9 md:pt-1.5 md:text-base"
              onClick={() => setOpenSendMessageSuccess(!openSendMessageSuccess)}
              >
              Send
            </button>
          </div>
        </div>

        {/* Contact images*/}
        <div className="flex flex-col justify-center w-[650px] ml-16 items-center lg:col-span-2 ">
          <img
            src={Contact}
            alt=""
            className="mt-28 lg:hidden md:hidden "
          />
          <div className="">
            <div className="flex mt-12 sm:flex justify-center items-center lg:mr-36 md:-ml-52">
              <img src={Message} alt="" className="w-7 mr-2 " />
              <a href="#" className="text-20px pr-6 sm:pr-8 text-gray-400 md:text-sm ">
                docengine@gmail.com
              </a>
            </div>
            {/* contact with facebook, Telegram and Instagram */}
            <div className="Image flex flex-row ml-8 top-12  mt-6 lg:ml-8 md:-ml-56 lg:mt-5 md:mt-3 md:pb-10">
              
              
            </div>

            <div className="Image flex gap-x-8 md:-ml-56 lg:mt-5 md:-mt-8 md:pb-10 md:gap-x-1">
            <a href="https://www.facebook.com/profile.php?id=100093609306190" target="_blank" rel="noreferrer">
              <img src={Face} className="w-14 md:ml-8 md:w-[30px]" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100093609306190" target="_blank" rel="noreferrer">
              <img src={Tele} className="w-14 md:w-[30px] md:ml-6 md:mr-6" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100093609306190" target="_blank" rel="noreferrer">
              <img src={IG} className="w-14 md:w-[30px] md:mr-8" />
            </a>
          </div>
          
          </div>
        </div>
      </div>
      {openSendMessageSuccess ? <SendMessageSuccessModal openSendMessageSuccess={openSendMessageSuccess} setOpenSendMessageSuccess={setOpenSendMessageSuccess} /> : null}
    </div>
  );
};