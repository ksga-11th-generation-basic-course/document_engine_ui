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
          <img src={bg_footer} className="w-full " />
          <div className="bg-primary h-36"></div>
          <div className="-mt-72 space-x-20 grid grid-cols-12 px-52">
                    <div className="col-span-4 mt-32">
                          <div className="font-semibold text-white text-24px mb-5 ml-7">FOLLOW US</div>
                          <div className="flex gap-x-10 mt-7">
                                <img src={facebook} className="w-5" />
                                <img src={instagram} className="w-8" />
                                <img src={telegram} className="w-9" />
                                      
                          </div>
                    </div>
                    <div className="col-span-4 mt-20">
                             <img src={logo} className="w-32 ml-28"/>
                             <div className="font-semibold text-20px text-white mt-5">© 2023 DocEngine Inc. All rights reserved.</div>
                    </div>
                    <div className="col-span-4 items-center">
                              <span className="absolute mt-20 ml-20"><img src={text} className="w-[470px]" /></span>
                              <span className="-mt-10 ml-60 absolute"><img src={pic_footer_right} className="w-28" /></span>
                    </div>
          </div>
    </div>
  );
};
