import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import deleteprofile from "../assets/dashboard_image/deleteprofile.svg";
import sendMessageSuccess from '../assets/reset_pw_popup/sendMessageSuccess.svg'
import CloseIcon from '../assets/reset_pw_popup/closeIcon.svg'

export const SendMessageSuccessModal = ({
  openSendMessageSuccess,
  setOpenSendMessageSuccess,
}) => {
  return (
    <div className="w-full">
      <Modal open={openSendMessageSuccess} onClickBackdrop={() => setOpenSendMessageSuccess(!openSendMessageSuccess)}>
        <div className="w-[540px] bg-white rounded-lg p-3 md:w-[300px]">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setOpenSendMessageSuccess(!openSendMessageSuccess)}
            >
              <img src={close} className="md:w-6"/>
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent md:px-5">
            <div className="flex justify-center items-center">
              <img src={sendMessageSuccess} className="md:w-16"/>
            </div>
            <p className="font-normal text-accent text-22px leading-7 py-3 text-center md:text-14px md:leading-6">
                        Thank you for reaching out to us! We have received your message and will get back to you as soon as possible. 
            </p>

            <div className="flex justify-center items-center gap-5 text-18px font-semibold pb-5 md:text-14px">
              <button className="bg-primary text-white  px-10 py-3 rounded-lg md:px-5 md:py-2.5" onClick={() => setOpenSendMessageSuccess(!openSendMessageSuccess)}>
                      Thank you
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};