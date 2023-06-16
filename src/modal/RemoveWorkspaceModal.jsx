import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import romoveworkspace from "../assets/workspace_image/romoveworkspace.svg";

export const RemoveWorkspaceModal = ({removeWorkspace, setRemoveWorkspace}) => {
  return (
    <div className="w-full">
      <Modal open={removeWorkspace} onClickBackdrop={() => setRemoveWorkspace(!removeWorkspace)}>
        <div className="w-[540px] bg-white rounded-lg p-3 md:w-[330px]">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setRemoveWorkspace(!removeWorkspace)}
            >
              <img src={close} className="md:w-6"/>
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent md:px-5">
            <div className="flex justify-center items-center">
              <img src={romoveworkspace} className="md:w-16"/>
            </div>
            <p className="font-normal text-accent text-22px text-center md:text-16px">
                    Are you sure to remove this workspace?
            </p>

            <div className="flex justify-center items-center gap-5 text-18px font-semibold pb-5 md:text-14px">
              <button
                className="px-10 py-3 border-[1px] rounded-lg md:px-4 md:py-2.5"
                onClick={() => setRemoveWorkspace(!removeWorkspace)}
              >
                No, cancel
              </button>
              <button className="bg-red-500 text-white  px-10 py-3 rounded-lg md:px-5 md:py-2.5">
                Remove
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
