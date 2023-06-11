import React, { useState } from "react";
import Contact from "../assets/images/Contact.svg";
import Message from "../assets/images/Contact/Message.svg";
import IG from "../assets/images/Contact/IG.svg";
import Face from "../assets/images/Contact/Facebook.svg";
import Tele from "../assets/images/Contact/Telegram .svg";
import { NavBar } from "../components/NavBar";
import SendMessageSuccessModal from "../modal/SendMessageSuccessModal";

export const ContactUs = () => {
  const [visible, setVisble] = useState(false);
  
  return (
    <div className="min-h-screen bg-white">
      <div>
        <NavBar />
      </div>

      {/* grid 1 block title */}
      <div className=" grid grid-cols-2 overflow-hidden  md:flex md:flex-col">
        <div className=" px-12  md:px-8 pt-32 sm:px-10 md:pt-24">
          <div>
            <div className="bg-primary px-2 py-0.5  rounded-r-lg  w-40"></div>
          </div>
          <div className="text pt-8 lg:pt-5 px-0">
            <h2 className="text-4xl font-bold pb-5 text-accent">
              Let's <span className="text-primary">Talk!</span>
            </h2>
            <div className="text-justify text-12px xl:text-10px lg:text-12px   md:text-16px md:whitespace-nowrap sm:pr-16 sm:text-12px text-xl text-accent font-semibold">
              <p>To request a quote or what to meet up for coffee, </p>
              <p>
                contact us directly or fill out the form we will get back to
              </p>
              <p>your promptly </p>
            </div>
          </div>
          <div className="form relative  top-10 lg:top-2">
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
                                "
            />
            <div className="flex flex-row pt-10">
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
                            "
                    onClick={() => setVisble(!visible)}
            >
              Send
            </button>
          </div>
        </div>

        {/* grid 2 block images*/}

        <div className="flex flex-col justify-center items-center ">
          <img
            src={Contact}
            alt=""
            className=" md:w-[560px] md:px-8  sm:px-10 mt-28"
          />
          <div className="">
            <div className="flex mt-12 sm:flex justify-center items-center">
              <img src={Message} alt="" className="w-7 mr-2 " />
              <a href="#" className="pr-6 sm:pr-8 text-accent_secondary text-20px">
                docengine@gmail.com
              </a>
            </div>
            <div className="Image flex flex-row sm:justify-center sm:w-58 sm:ml-3 top-12 md:top-10 w-56  mt-6 md:pb-10">
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

          {visible ? <SendMessageSuccessModal/> : null}
    </div>
  );
};
