import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import closeaccount from "../assets/signin_image/closeaccount.svg";
import { Link } from "react-router-dom";

export const EnableAccountModal = ({ enableAccount, setEnableAccount }) => {
  return (
    <div className="w-full">
      <Modal
        open={enableAccount}
        onClickBackdrop={() => setEnableAccount(!enableAccount)}
      >
        <div className="w-[540px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setEnableAccount(!enableAccount)}
            >
              <img src={close} />
            </button>
          </div>
          <div className="px-14 space-y-3 text-accent">
            <div className="flex justify-center items-center">
              <img src={closeaccount} />
            </div>
            <h1 className="font-bold text-24px leading-9  text-primary text-center">
              Account was closed!
              <p className="font-normal text-accent text-18px text-center">
                Your account was closed. <br /> Do you want to enable your
                account?
              </p>
            </h1>

            <div className="flex justify-center items-center gap-5 text-16px font-semibold pb-5">
              <button
                className="px-10 py-3 border-[1px] rounded-lg"
                onClick={() => setEnableAccount(!enableAccount)}
              >
                No, cancel
              </button>
              <Link
                to={"/enableaccount"}
                className="bg-primary text-white  px-10 py-3 rounded-lg "
              >
                Enable
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};