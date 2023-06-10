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
    <div className="w-full">
          <img src={bg_footer} className="w-full md:absolute md:-mt-[50px]" />
          <div className="bg-primary h-36 lg:h-[600px] md:h-[400px]"></div>
          <div className="-mt-72 space-x-20 grid grid-cols-12 px-52 lg:px-20 lg:-mt-[750px] md:-mt-[500px] md:-ml-20 md:space-x-0 md:absolute">
                    <div className="col-span-4 mt-32 lg:col-span-12 lg:ml-56 md:ml-10"> 
                          <div className="font-semibold text-white text-24px mb-5 ml-7 lg:ml-6 md:text-20px md:ml-0">FOLLOW US</div>
                          <div className="flex gap-x-10 mt-7 md:-mt-12 md:ml-36 md:gap-x-8">
                                <img src={facebook} className="w-5 md:w-4" />
                                <img src={instagram} className="w-8 md:w-7" />
                                <img src={telegram} className="w-9 md:w-8" />
                                      
                          </div>
                    </div>

                    <div className="col-span-4 mt-20 lg:col-span-12 md:mt-10">
                             <img src={logo} className="w-32 ml-28 lg:ml-40 lg:w-24 md:w-20 md:ml-10"/>
                             <div className="font-semibold text-20px text-white mt-5 lg:ml-10 md:-mt-14 md:ml-36 md:text-16px">© 2023 DocEngine Inc. All rights reserved.</div>
                    </div>
                    <div className="col-span-4 items-center lg:mt-40 md:mt-44">
                              <span className="absolute mt-20 ml-20 lg:-mt-10 lg:ml-16 md:ml-32 md:-mt-16"><img src={text} className="w-[470px] lg:w-[280px] md:w-[150px]" /></span>
                              <span className="-mt-10 ml-60 absolute lg:ml-40 lg:-mt-32 md:ml-44"><img src={pic_footer_right} className="w-28 lg:w-20 md:w-14" /></span>
                    </div>
          </div>
    </div>
  );
};
