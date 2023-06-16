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
          <div className="absolute z-20 mt-24 space-x-52 grid grid-cols-12 justify-center lg:px-20 md:-ml-20 md:space-x-0 md:absolute">
                  {/*  */}
                    <div className="pl-52 col-span-4 -mt-20 lg:col-span-12"> 
                          <div className="font-semibold text-white text-24px mb-5 ml-7 lg:ml-6 md:text-20px md:-ml-40">FOLLOW US</div>
                          <div className="flex gap-x-10 mt-7 md:-mt-12 md:-ml-5 md:gap-x-8">
                                <img src={facebook} className="w-5 md:w-4" />
                                <img src={instagram} className="w-8 md:w-7" />
                                <img src={telegram} className="w-9 md:w-8" />
                                      
                          </div>
                    </div>
                  
                  {/*  */}
                    <div className="col-span-4 -mt-32 lg:col-span-12 lg:mt-20 md:mt-0">
                                    <img src={logo} className="w-32 ml-28 lg:ml-10 lg:w-24 md:w-20 md:ml-10"/>
                                    <div className="font-semibold text-20px text-white mt-5 lg:-ml-20 md:-mt-14 md:ml-36 md:text-16px">© 2023 DocEngine Inc. All rights reserved.</div>
                    </div>

                    {/*  */}
                    <div className="col-span-4 items-center -mt-44 lg:mt-52 md:mt-32">
                              <span className="absolute  lg:-mt-10 lg:-ml-48 md:-ml-5 md:-mt-16"><img src={text} className="ml-36 mt-10 lg:w-[280px] md:w-[150px]" /></span>
                              <span className="-mt-24 absolute lg:-ml-48 lg:-mt-32 md:-mt-24 md:-ml-20"><img src={pic_footer_right} className="w-32 ml-60 lg:w-20 md:w-16" /></span>
                    </div>
          </div>
          <div className="bg-primary h-[180px]  lg:h-[700px] md:h-[400px]"></div>
    </div>
  );
};