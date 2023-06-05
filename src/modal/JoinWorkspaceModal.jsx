import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import joinworkspace from "../assets/dashboard_image/joinworkspace.svg";
import join from "../assets/dashboard_image/join.svg";

export const JoinWorkspaceModal = ({ visible, toggleVisible }) => {
  return (
    <div className="w-full ">
      <button
        className="flex justify-center items-center text-16px font-semibold gap-x-2 border-[1px] border-accent px-5 py-2 rounded-lg text-primary md:px-2.5 md:py-1.5 md:text-12px"
        onClick={toggleVisible}
      >
        <img src={join} className="w-4 h-4 md:w-3.5" />
        Join
      </button>
      <Modal open={visible} onClickBackdrop={toggleVisible}>
        <div className="w-[540px] md:w-[400px] md:h-[380px] md:p-0 bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button type="button" onClick={toggleVisible}>
              <img className="p-2" src={close} />
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent">
            <div className="flex justify-center items-center">
              <img className="md:w-[70px] md:h-[70px] " src={joinworkspace} />
            </div>
            <h1 className="font-bold text-24px md:text-22px text-primary text-center">
              Enter code to join workspaces
            </h1>
            <div className="flex flex-col gap-y-2 font-semibold text-18px md:text-16px">
              <p>Workspace Code</p>
              <input
                type="text"
                placeholder="Workspace Code"
                className="rounded-lg  py-3 border-primary focus:ring-btn-primary focus:border-btn-primary"
              />
            </div>
            <div className="flex justify-end items-center gap-5 text-16px font-semibold pb-5">
              <button
                className="px-10 py-3 md:px-5 border-[1px] rounded-lg"
                onClick={toggleVisible}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-10 md:px-7 py-3 rounded-lg ">
                Join
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};