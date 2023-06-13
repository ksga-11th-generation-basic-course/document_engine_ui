import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import romoveworkspace from "../assets/workspace_image/romoveworkspace.svg";

export const RemoveWorkspaceModal = ({ removeWorkspace, setRemoveWorkspace }) => {
  return (
    <div className="w-full">
      <Modal
        open={removeWorkspace}
        onClickBackdrop={() => setRemoveWorkspace(!removeWorkspace)}
      >
        <div className="w-[540px] md:w-[430px] bg-white rounded-lg p-3 md:p-0">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setRemoveWorkspace(!removeWorkspace)}
            >
              <img className="md:w-10 md:h-10 md:p-2" src={close} />
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent">
            <div className="flex justify-center items-center">
              <img className="md:w-20 md:h-20" src={romoveworkspace} />
            </div>
            <p className="font-normal text-accent text-18px text-center">
              Are you sure to remove this workspace?
            </p>

            <div className="flex justify-center items-center gap-5 text-16px font-semibold pb-5">
              <button
                className="px-10 py-3 border-[1px] rounded-lg"
                onClick={() => setRemoveWorkspace(!removeWorkspace)}
              >
                No, cancel
              </button>
              <button className="bg-red-500 text-white  px-10 py-3 rounded-lg ">
                Remove
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
