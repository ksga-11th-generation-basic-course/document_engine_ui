import React from "react";
import { Button, Modal } from "react-daisyui";
import close from "../../assets/dashboard_image/close.svg";
import group from "../../assets/dashboard_image/group.svg";
import worksapacephoto from "../../assets/dashboard_image/worksapacephoto.svg";

export const CreateWorkspaceModal = ({ visible, toggleVisible }) => {
  return (
    <div className="w-full">
      <button
        onClick={toggleVisible}
        className="bg-primary w-full py-3 text-white rounded-lg text-16px font-semibold mt-5"
      >
        New Workspace
      </button>
      <Modal open={visible}>
        <div className="w-[540px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button type="button" onClick={toggleVisible}>
              <img src={close} />
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent gap-y-4">
            <div className="flex justify-center items-center">
              <img src={group} />
            </div>
            <h1 className="font-bold text-24px text-primary text-center">
              Create Workspace
            </h1>
            <div className="flex flex-col gap-y-2 font-semibold text-18px">
              <p>Worksapce Name</p>
              <input
                type="text"
                placeholder="Workspace Name"
                className="rounded-lg py-3 border-primary focus:ring-btn-primary focus:border-btn-primary"
              />
              <p>Workspace Photo</p>
              <label>
                <input
                  class="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  multiple
                />
                <img src={worksapacephoto} className="cursor-pointer" />
              </label>
            </div>
            <p className="text-end text-[#9CA3AF]">(optional)</p>
            <div className="flex justify-end items-center gap-5 text-16px font-semibold pb-5">
              <button className="px-10 py-3 border-[1px] rounded-lg" onClick={toggleVisible}>
                Cancel
              </button>
              <button className="bg-primary text-white  px-10 py-3 rounded-lg ">
                Create
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
