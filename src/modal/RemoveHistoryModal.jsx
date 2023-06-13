import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import deletedocument from "../assets/document_image/deletedocument.svg";

export const RemoveHistory = ({ removeHistory, setRemoveHistory }) => {
  return (
    <div className="w-full">
      <Modal
        open={removeHistory}
        onClickBackdrop={() => setRemoveHistory(!removeHistory)}
      >
        <div className="w-[540px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setRemoveHistory(!removeHistory)}
            >
              <img src={close} />
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent">
            <div className="flex justify-center items-center">
              <img src={deletedocument} />
            </div>
            <p className="font-normal text-accent text-18px text-center">
              Are you sure want to delete this history?
            </p>

            <div className="flex justify-center items-center gap-5 text-16px font-semibold pb-5">
              <button
                className="px-10 py-3 border-[1px] rounded-lg"
                onClick={() => setRemoveHistory(!removeHistory)}
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
