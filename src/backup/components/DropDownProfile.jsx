import React, { useState } from "react";
import close from "../../assets/dashboard_image/close.svg";
import avatar from "../../assets/dashboard_image/avatar.svg";
import setting from "../../assets/dashboard_image/setting.svg";
import signout from "../../assets/dashboard_image/signout.svg";
import { SignOutModal } from "../modal/SignOutModal";

export const DropDownProfile = ({ open, setOpen }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className="absolute right-0 mt-3 p-3 w-[350px] text-accent rounded-lg shadow-md ">
      <div className="flex justify-end">
        <button type="button" onClick={() => setOpen(!open)}>
          <img src={close} className="h-7 w-7" />
        </button>
      </div>
      <div className="flex flex-col gap-y-5 px-5">
        <p className="font-bold text-24px text-primary">Profile</p>
        <div className="relative flex items-center gap-x-3">
          <div className="overflow-hidden w-14 h-14 flex bg-primary rounded-full">
            <img src={avatar} className="bg-cover" />
          </div>
          <div>
            <h3 className="font-bold text-20px">Seiha</h3>
            <p className="text-[#9CA3AF]">yan.sovanseyha@gmail.com</p>
          </div>
        </div>
        <div className="border-[1px] border-[#E7E7E7]"></div>
        <div className="flex flex-col gap-y-5 py-5">
          <button className="flex items-center text-18px gap-x-4">
            <img src={setting} />
            <span>Setting</span>
          </button>
          <button className="flex items-center text-18px gap-x-4 text-red-500" onClick={toggleVisible}>
            <img src={signout} />
            <span>Sign out</span>
          </button>
        </div>
      </div>
      <div>
        <SignOutModal visible={visible} toggleVisible={toggleVisible} />
      </div>
    </div>
  );
};
