import React from "react";
import Contact from "../assets/images/Contact.svg";
import Message from "../assets/images/Contact/Message.svg";
import IG from "../assets/images/Contact/IG.svg";
import Face from "../assets/images/Contact/Facebook.svg";
import Tele from "../assets/images/Contact/Telegram .svg";
import { NavBar } from "../components/NavBar";

export const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <div>
        <NavBar />
      </div>

      {/* grid 1 block title */}
      <div className=" grid grid-cols-2 overflow-hidden lg:grid lg:grid-cols-2   md:flex md:flex-col">

        {/* Let's Talk */}
        <div className=" px-12 pt-32 lg:col-span-1 lg:w-[580px] md:px-8 sm:px-10 md:pt-24">
            <div>
              <div className="bg-primary px-2 py-0.5 rounded-r-lg w-40 md:w-[130px] md:h-0.5"></div>
            </div>
            <div className="text pt-8 lg:pt-5 px-0">
              <h2 className="text-3xl font-bold pb-5 text-accent">
                Let's <span className="text-primary">Talk!</span>
              </h2>
              <div className="text-justify text-xl text-accent font-semibold lg:text-xl md:text-sm md:whitespace-nowrap ">
                <p>To request a quote or what to meet up for coffee, </p>
                <p>
                  contact us directly or fill out the form we will get back to
                </p>
                <p>your promptly. </p>
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
              className="mt-5 px-10 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 lg:ml-64 lg:text-xl md:ml-24 md:h-9 md:pt-1.5 md:text-base">
              Send
            </button>
          </div>
        </div>

        {/* Contact images*/}
        <div className="flex flex-col justify-center items-center lg:col-span-2 ">
          <img
            src={Contact}
            alt=""
            className="mt-28 lg:hidden md:hidden "
          />
          <div className="">
            <div className="flex mt-12 sm:flex justify-center items-center md:ml-12">
              <img src={Message} alt="" className="w-7 mr-2 " />
              <a href="#" className="pr-6 sm:pr-8 text-gray-400 md:text-sm">
                documentengine@gmail.com
              </a>
            </div>
            {/* contact with facebook, Telegram and Instagram */}
            <div className="Image flex flex-row top-12 w-56 mt-6 lg:ml-4 md:ml-14 md:pb-10 md:w-[200px]">
              <div className="img1 pr-12 sm:pr-14 ">
                <img src={Face} alt="" className="" />
              </div>
              <div className="img2 pr-12  sm:pr-14">
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
  );
};