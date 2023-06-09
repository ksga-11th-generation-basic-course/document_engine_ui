import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import joinworkspace from "../assets/dashboard_image/joinworkspace.svg";
import join from "../assets/dashboard_image/join.svg";

export const JoinWorkspaceModal = ({ visible, toggleVisible }) => {
  return (
    <div className="w-full">
      <button
        className="flex justify-center items-center text-18px font-semibold gap-x-2 border-[1px] border-accent px-5 py-2 rounded-lg text-primary md:px-2.5 md:py-1.5 md:text-12px"
        onClick={toggleVisible}
      >
        <img src={join} className="w-5 h-5 md:w-3.5" />
        Join
      </button>
      <Modal open={visible}>
        <div className="w-[540px] bg-white rounded-lg p-3 md:w-[300px]">
          <div className="flex justify-end">
            <button type="button" onClick={toggleVisible}>
              <img src={close} className="md:w-6"/>
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent md:px-5 md:space-y-3">
            <div className="flex justify-center items-center">
              <img src={joinworkspace} className="md:w-14"/>
            </div>
            <h1 className="font-bold text-28px text-primary text-center md:text-18px">
              Enter code to join workspace
            </h1>
            <div className="flex flex-col gap-y-2 font-semibold text-20px md:text-12px">
              <p>Workspace Code</p>
              <input
                type="text"
                placeholder="Workspace Code"
                className="rounded-lg py-3 border-primary font-normal text-18px focus:ring-btn-primary focus:border-btn-primary md:text-12px md:py-1.5"
              />
            </div>
            <div className="flex justify-end items-center gap-5 text-18px font-semibold pb-2 md:text-11px">
              <button
                className="px-10 py-3 border-[1px] rounded-lg md:px-7 md:py-2"
                onClick={toggleVisible}
              >
                Cancel
              </button>
              <button className="bg-primary text-white  px-10 py-3 rounded-lg md:px-7 md:py-2">
                Join
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
