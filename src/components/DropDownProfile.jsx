import React, { useState } from "react";
import close from "../assets/dashboard_image/close.svg";
import avatar from "../assets/dashboard_image/avatar.svg";
import setting from "../assets/dashboard_image/setting.svg";
import signout from "../assets/dashboard_image/signout.svg";
import { SignOutModal } from "../modal/SignOutModal";
import { AccountSettingModal } from "../modal/AccountSettingModal";

export const DropDownProfile = ({ open, setOpen }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  const [openSetting, setOpenSetting] = useState(false);

  return (
    <div className="relative">
      <div className="absolute right-0 mt-3 p-3 text-accent rounded-lg shadow-custom bg-white z-50 w-80 md:w-52 md:p-2">
        <div className="flex justify-end">
          <button type="button" onClick={() => setOpen(!open)}>
            <img src={close} className="h-7 w-7 md:w-5" />
          </button>
        </div>
        <div className="flex flex-col gap-y-5 md:gap-y-3">
          <div className="px-5 md:px-2.5">
                  <p className="font-bold text-24px text-primary md:text-18px pb-3 md:-mt-2">Profile</p>
                  <div className="relative flex items-center gap-x-3">
                        <button
                          onClick={() => {setOpenSetting(!openSetting); setOpen(open)}}
                        >
                                <img src={avatar} className="bg-cover overflow-hidden w-14 h-14 flex bg-primary rounded-full md:inline-block md:w-9 md:h-9"/>
                        </button>
                    <div>
                      <h3 className="font-bold text-24px md:text-16px">Ouddom</h3>
                      <p className="text-[#9CA3AF]  md:text-10px">tith.ouddom@gmail.com</p>
                    </div>
                  </div>
          </div>
          <div className="px-5 md:px-2.5"><div className="px-5 border-[1px] border-[#E7E7E7]"></div></div>
          <div className="flex flex-col gap-y-2 px-0 -mt-1.5 md:py-0 md:gap-y-1 md:-mt-1">
            <button
              className="flex items-center text-18px gap-x-4 md:text-14px hover:bg-[#f4f4f4] py-2.5 px-5 md:px-2.5 rounded-lg md:py-1.5"
              onClick={() => {setOpenSetting(!openSetting); setOpen(open)}}
            >
              <img src={setting} className="md:w-4"/>
              <span>Setting</span>
            </button>
            <button
              className="flex items-center text-18px gap-x-4 text-red-500 md:text-14px hover:bg-[#f4f4f4] py-2.5 px-5 md:px-2.5 rounded-lg md:py-1.5"
              onClick={toggleVisible}
            >
              <img src={signout} className="md:w-4"/>
              <span>Sign out</span>
            </button>
          </div>
        </div>
        <div>
           <SignOutModal visible={visible} toggleVisible={toggleVisible} />
          <AccountSettingModal
            openSetting={openSetting}
            setOpenSetting={setOpenSetting}
          />
        </div>
      </div>
    </div>
  );
};
