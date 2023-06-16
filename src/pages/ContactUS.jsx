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
      <div className="pt-5 pl-10 grid grid-cols-2 overflow-hidden   md:flex md:flex-col md:pl-0">
        <div className=" px-12  md:px-8 pt-32 sm:px-10 md:pt-24">
          <div>
            <div className="bg-primary px-2 py-0.5  rounded-r-lg  w-40"></div>
          </div>
          <div className="text pt-8 lg:pt-5 px-0">
            <h2 className="text-4xl font-bold pb-5 text-accent">
              Let's <span className="text-primary">Talk!</span>
            </h2>
            <div className="text-justify text-12px xl:text-10px lg:text-16px lg:mt-0 lg:mb-8 lg:w-72 md:text-14px md:leading-6 text-xl text-accent font-semibold">
                    To request a quote or what to meet up for coffee, 
                      contact us directly or fill out the form we will get back to
                    your promptly 
            </div>
          </div>

          <div className="form relative  top-10 lg:top-2 md:top-0">
            <label
              htmlFor=""
              className="text-xl sm:text-14px text-[#575E69] font-semibold"
            >
              Your Email @
            </label>
            <input
              type="text"
              className="form-control block mt-2
                                w-full
                                px-3
                                py-3
                                text-base
                                bg-white bg-clip-padding
                                border border-solid border-accent
                                rounded
                                transition
                                ease-in-out
                                m-0
                                resize
                                text-accent
                                font-semibold
                                md:py-2
                                "
            />
            <div className="flex flex-row pt-10 lg:pt-5">
              <div className="email text-[#575E69] mb-2">
                <label className="text-xl  sm:text-14px font-semibold">
                  Your Message
                </label>
              </div>
              <div className="text-gray-500 pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.891 1 4.127L3 21l4.873-1c1.236.64 2.64 1 4.127 1Z"
                  />
                </svg>
              </div>
            </div>
            <textarea
              className="
                                form-control
                                block
                                w-full
                                px-4
                                lg:py-2
                                py-8
                                text-base
                                font-normal
                                text-[#575E69]
                                bg-white bg-clip-padding
                                border border-solid border-accent
                                rounded
                                transition
                                ease-in-out
                            "
            ></textarea>
            <button
              type="submit"
              className="
                            mt-5
                            px-12
                            py-3
                            text-lg
                            bg-primary
                            text-white
                            font-semibold
                            rounded-lg
                            hover:bg-primary/90
                            md:text-14px
                            md:py-1.5
                            md:px-9
                            "
                    onClick={() => setOpenSendMessageSuccess(!openSendMessageSuccess)}
            >
              Send
            </button>
          </div>
        </div>

        {/* grid 2 block images*/}

        <div className="mt-20 flex flex-col justify-center items-center ">
          <img
            src={Contact}
            alt=""
            className="md:hidden"
          />
          <div className="">
            <div className="flex mt-12 sm:flex justify-center items-center md:ml-10">
              <img src={Message} alt="" className="w-7 mr-2 " />
              <a href="#" className="pr-6 sm:pr-8 text-accent_secondary text-20px md:text-16px">
                docengine@gmail.com
              </a>
            </div>
            <div className="Image flex flex-row space-x-5 lg:pl-7 sm:justify-center sm:w-58 sm:ml-5 top-12 w-56  mt-6 md:pb-10">
              <div className="img1">
                <img src={Face} alt="" className="lg:w-12 md:w-8" />
              </div>
              <div className="img2">
                <img src={Tele} alt="" className="lg:w-12 md:w-8"/>
              </div>
              <div className="img3">
                <img src={IG} alt="" className="lg:w-12 md:w-8"/>
              </div>
            </div>
          </div>
        </div>
      </div>

        {openSendMessageSuccess ? <SendMessageSuccessModal openSendMessageSuccess={openSendMessageSuccess} setOpenSendMessageSuccess={setOpenSendMessageSuccess} /> : null}
    </div>
  );
};
