import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import removemember from "../assets/workspace_image/removemember.svg";

export const RemoveMemberModal = ({ removeMember, setRemoveMember }) => {
  return (
    <div className="w-full">
      <Modal
        open={removeMember}
        onClickBackdrop={() => setRemoveMember(!removeMember)}
      >
        <div className="w-[540px] md:w-[450px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setRemoveMember(!removeMember)}
            >
              <img src={close} />
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent">
            <div className="flex justify-center items-center">
              <img className="w-[80px]" src={removemember} />
            </div>
            <h1 className="font-bold text-24px text-primary text-center">
              Remove Member!
              <p className="font-normal text-accent text-18px text-center">
                Are you sure want to remove this member <br /> from this
                workspace?
              </p>
            </h1>
            <div className="flex justify-center items-center gap-5 text-16px font-semibold pb-5">
              <button
                className="px-10 py-3 border-[1px] rounded-lg"
                onClick={() => setRemoveMember(!removeMember)}
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
