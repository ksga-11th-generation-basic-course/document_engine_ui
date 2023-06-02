import React, { useState } from "react";
import close from "../assets/dashboard_image/close.svg";
import avatar from "../assets/dashboard_image/avatar.svg";
import setting from "../assets/dashboard_image/setting.svg";
import signout from "../assets/dashboard_image/signout.svg";
import { SignOutModal } from "../modal/SignOutModal";
import { AccountSettingModal } from "../modal/AccountSettingModal";

export const DropDownProfile = ({ open, setOpen}) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  const [openSetting, setOpenSetting] = useState(false);

  return (
    <div className="relative">
      <div className="absolute right-0 mt-3 p-3 text-accent rounded-lg shadow-custom bg-white z-50 w-80">
        <div className="flex justify-end">
          <button type="button" onClick={() => setOpen(!open)}>
            <img src={close} className="h-7 w-7 md:w-5" />
          </button>
        </div>
        <div className="flex flex-col gap-y-5 px-5">
          <p className="font-bold text-[26px] text-primary md:text-22px">Profile</p>
          <div className="relative flex items-center gap-x-3">
            <div className="overflow-hidden w-14 h-14 flex bg-primary rounded-full md:w-12 md:h-12">
              <img src={avatar} className="bg-cover" />
            </div>
            <div>
              <h3 className="font-bold text-22px">Ouddom</h3>
              <p className="text-[#9CA3AF]">tith.ouddom@gmail.com</p>
            </div>
          </div>
          <div className="border-[1px] border-[#E7E7E7]"></div>
          <div className="flex flex-col gap-y-5 py-5">
            <button
              className="flex items-center text-18px gap-x-4"
              onClick={() => setOpenSetting(!openSetting)}
            >
              <img src={setting} />
              <span>Setting</span>
            </button>
            <button
              className="flex items-center text-18px gap-x-4 text-red-500"
              onClick={toggleVisible}
            >
              <img src={signout} />
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
