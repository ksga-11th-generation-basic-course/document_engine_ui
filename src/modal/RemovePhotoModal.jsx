import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import removephoto from "../assets/workspace_image/removephoto.svg";

export const RemovePhotoModal = ({ removePhoto, setRemovePhoto }) => {
  return (
    <div className="w-full">
      <Modal
        open={removePhoto}
        onClickBackdrop={() => setRemovePhoto(!removePhoto)}
      >
        <div className="w-[540px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button type="button" onClick={() => setRemovePhoto(!removePhoto)}>
              <img src={close} />
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent">
            <div className="flex justify-center items-center">
              <img src={removephoto} />
            </div>
            <p className="font-normal text-accent text-18px text-center">
              Are you sure want to delete your workspace photo?
            </p>

            <div className="flex justify-center items-center gap-5 text-16px font-semibold pb-5">
              <button
                className="px-10 py-3 border-[1px] rounded-lg"
                onClick={() => setRemovePhoto(!removePhoto)}
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
