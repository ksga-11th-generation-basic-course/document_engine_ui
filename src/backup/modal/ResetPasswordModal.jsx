import React from "react";
import { Modal } from "react-daisyui";
import close from "../../assets/dashboard_image/close.svg";
import resetpasswordIcon from "../../assets/dashboard_image/resetpassword.svg";

export const ResetPasswordModal = ({ resetPassword, setResetPassword }) => {
  return (
    <div className="w-full">
      <Modal open={resetPassword}>
        <div className="w-[540px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setResetPassword(!resetPassword)}
            >
              <img src={close} />
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent">
            <div className="flex justify-center items-center">
              <img src={resetpasswordIcon} />
            </div>
            <h1 className="font-bold text-24px text-primary text-center">
              Reset Account Password
            </h1>
            <form className="flex flex-col gap-y-2 font-semibold text-18px">
              <p>Current Password</p>
              <input
                type="text"
                placeholder="Current Password"
                className="rounded-lg py-3 border-primary focus:ring-btn-primary focus:border-btn-primary"
              />
              <p>New Password</p>
              <input
                type="text"
                placeholder="New Password"
                className="rounded-lg py-3 border-primary focus:ring-btn-primary focus:border-btn-primary"
              />
              <p>Confirm New Password</p>
              <input
                type="text"
                placeholder="Confirm New Password"
                className="rounded-lg py-3 border-primary focus:ring-btn-primary focus:border-btn-primary"
              />
            </form>
            <div className="text-16px font-semibold pb-5 w-full">
              <button className="bg-primary text-white w-full py-3 rounded-lg ">
                Save Change
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
