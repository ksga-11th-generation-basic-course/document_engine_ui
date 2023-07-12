/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import footer from "../assets/landing_image/footer.svg";
import bg_footer from "../assets/landing_image/bg_footer.svg";
import facebook from "../assets/landing_image/facebook.svg";
import instagram from "../assets/landing_image/instagram.svg";
import telegram from "../assets/landing_image/telegram.svg";
import logo from "../assets/landing_image/logo_white.svg";
import text from "../assets/landing_image/text.svg";
import pic_footer_right from "../assets/landing_image/pic_footer_right.svg";

export const Footer = () => {
  return (
    <div className="w-full md:w-[406px]">
      <img src={bg_footer} className="w-full md:-mt-[50px]" />
      <div className="absolute z-20 mt-24 space-x-52 grid grid-cols-12 justify-center lg:px-20 md:-ml-20 md:space-x-0 md:absolute">
        {/* follow us */}
        <div className="pl-52 col-span-4 -mt-20  lg:h-[50px] lg:col-span-12 md:ml-6  ">
          <div className="font-semibold text-white text-24px mb-5 ml-7 lg:absolute lg:text-2xl lg:mt-48 lg:-ml-16  md:text-20px md:-ml-40 md:mt-28 md:text-base">
            FOLLOW US
          </div>
          <div className="flex gap-x-10 mt-7 lg:mt-48 lg:ml-24 md:mt-28 md:-ml-12 md:gap-x-8">
            <a href="https://www.facebook.com/profile.php?id=100093609306190" target="_blank">
              <img src={facebook} className="w-5 lg:w-[17px] md:w-3" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100093609306190" target="_blank">
              <img src={instagram} className="w-8 lg:w-[29px] md:w-5" />
            </a>
            <a href="https://t.me/docengine" target="_blank">
              <img src={telegram} className="w-9 lg:w-[31px] md:w-6" />
            </a>
          </div>
        </div>

        {/*logo  */}
        <div className="col-span-4 -mt-32 lg:-mt-16 lg:col-span-12 md:relative md:-mt-4">
          <img
            src={logo}
            className="w-32 ml-28 lg:ml-10 lg:w-24 md:w-14 md:ml-40 md:-mt-16"
          />
          <div className="font-semibold text-20px text-white mt-5 lg:-ml-20 md:w-[250px] md:absolute md:mt-4 md:ml-16 md:text-sm">
            © 2023 DocEngine Inc. All rights reserved.
          </div>
        </div>

        {/*Tittle  */}
        <div className="col-span-4 items-center -mt-44  md:mt-32">
          <span className="absolute lg:-mt-10 lg:-ml-48 md:-ml-5 md:-mt-16">
            <img
              src={text}
              className="ml-36 mt-10 lg:hidden lg:w-[280px] md:w-[150px]"
            />
          </span>
          <span className="-mt-24 absolute lg:ml-20 lg:mt-36 md:-mt-24 md:-ml-20">
            <img
              src={pic_footer_right}
              className="w-32 ml-60 lg:-mt-24 lg:w-20 md:ml-28 md:w-16"
            />
          </span>
        </div>
      </div>
      <div className="bg-primary h-[180px]  lg:h-[340px] md:h-[224px]  "></div>
    </div>
  );
};