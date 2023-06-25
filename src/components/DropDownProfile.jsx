import React, { useState } from "react";
import close from "../assets/dashboard_image/close.svg";
import avatar from "../assets/dashboard_image/avatar.svg";
import setting from "../assets/dashboard_image/setting.svg";
import signout from "../assets/dashboard_image/signout.svg";
import { SignOutModal } from "../modal/SignOutModal";
import { AccountSettingModal } from "../modal/AccountSettingModal";

export const DropDownProfile = ({ open, setOpen, user }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  const [openSetting, setOpenSetting] = useState(false);

  return (
    <div className="relative">
      {open && (
        <div className="fixed inset-0" onClick={() => setOpen(!open)}></div>
      )}
      <div className="absolute right-0 w-[380px] mt-3 p-3 text-accent rounded-lg shadow border-[0.8px] bg-white z-50">
        <div className="flex justify-end">
          <button type="button" onClick={() => setOpen(!open)}>
            <img src={close} className="h-7 w-7 md:w-5" />
          </button>
        </div>
        <div className="flex flex-col gap-y-5 px-5">
          <p className="font-bold text-24px text-primary">Profile</p>
          <div
            className="relative flex items-center gap-x-3 cursor-pointer"
            onClick={() => {
              setOpenSetting(!openSetting);
              setOpen(open);
            }}
          >
            <div className="overflow-hidden w-14 h-14 rounded-full bg-primary">
              {user && user.profileImage === null ? (
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/upload-image-b8776.appspot.com/o/images%2Fphoto_2023-06-04_15-01-31.jpg?alt=media&token=f115ba63-1e31-4bc6-9f98-785ab3d729c8&_gl=1*6buxcb*_ga*MTYwNjUwODg3OS4xNjg1ODU0MzY2*_ga_CW55HF8NVT*MTY4NTg2NTU2My4zLjEuMTY4NTg2NTcwMS4wLjAuMA.."
                  className="h-full w-full bg-cover"
                />
              ) : (
                <img
                  src={user && user.profileImage}
                  className="h-full w-full bg-cover"
                />
              )}
            </div>
            <div>
              <h3 className="font-bold text-20px leading-9">{user && user.userName}</h3>
              <p className="text-[#9CA3AF]">{user && user.email}</p>
            </div>
          </div>
          <div className="border-[1px] border-[#E7E7E7]"></div>
          <div className="flex flex-col py-3 md:py-0">
            <button
              className="flex items-center text-18px gap-x-4 hover:bg-gray-200 p-3 rounded-lg"
              onClick={() => {
                setOpenSetting(!openSetting);
                setOpen(open);
              }}
            >
              <img src={setting} />
              <span>Setting</span>
            </button>
            <button
              className="flex items-center text-18px gap-x-4 text-red-500 hover:bg-gray-200 p-3 rounded-lg"
              onClick={toggleVisible}
            >
              <img src={signout} />
              <span>Sign out</span>
            </button>
          </div>
          <div>
            <SignOutModal visible={visible} toggleVisible={toggleVisible} />
            <AccountSettingModal
              openSetting={openSetting}
              setOpenSetting={setOpenSetting}
              user={user}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
