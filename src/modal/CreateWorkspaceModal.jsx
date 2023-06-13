import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import group from "../assets/dashboard_image/group.svg";
import workspacephoto from "../assets/dashboard_image/worksapacephoto.svg";

export const CreateWorkspaceModal = ({ visible, setVisible ,newWorkspace, setNewWorkspace }) => {
  const toggleVisible = () => {
        setVisible(!visible);
        setNewWorkspace(!newWorkspace);
  };
  return (
    <div className="w-full">
      <button
        onClick={toggleVisible }  
        className="bg-primary w-full py-3 text-white rounded-lg text-18px font-semibold mt-5 lg:w-60 md:text-11px md:w-32 md:py-2.5"
      >
        New Workspace
      </button>
      <Modal open={visible} >
        <div className="w-[540px] bg-white rounded-lg p-3 md:w-[300px] md:p-2">
          <div className="flex justify-end">
            <button type="button" onClick={toggleVisible}>
              <img src={close} className="md:w-6" />
            </button>
          </div>

          <div className="px-14 space-y-5 text-accent gap-y-4 md:px-6 md:space-y-3">
            <div className="flex justify-center items-center">
              <img src={group} className="md:w-16"/>
            </div>
            <h1 className="font-bold text-28px text-primary text-center md:text-20px">
                Create Workspace
            </h1>
            
            <div className="flex flex-col gap-y-2 font-semibold text-20px md:text-14px">
              <p>Workspace Name</p>
              <input
                type="text"
                placeholder="Workspace Name"
                className="rounded-lg py-3 border-primary font-normal focus:ring-btn-primary focus:border-btn-primary text-18px md:text-14px md:py-2"
              />
              <p>Workspace Photo</p>
              <label>
                <input
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  multiple
                />
                <img src={workspacephoto} className="cursor-pointer" />
              </label>
              <p className="mt-1 text-end text-[#9CA3AF] font-normal md:text-12px">(optional)</p>
            </div>

            <div className="flex justify-end items-center gap-5 text-18px font-semibold pb-3 md:text-12px md:gap-3">
              <button className="px-10 py-3 border-[1px] rounded-lg md:px-8 md:ml-12 md:py-2.5" onClick={toggleVisible}>
                Cancel
              </button>
              <button className="bg-primary text-white  px-10 py-3 rounded-lg md:py-2.5">
                Create
              </button>
            </div>
          </div>
          
        </div>
      </Modal>
    </div>
  );
};
