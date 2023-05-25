import React from "react";
import CloseIcon from "../assets/reset_pw_popup/closeIcon.svg";
import AlertAccountIsClose from "../assets/reset_pw_popup/alertAccountIsClose.svg";

const EnableAccountPopup = ({ open, setOpen }) => {
  return (
    <div>
      <div>
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-200 bg-opacity-70 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className=" relative h-[340px] transform overflow-hidden rounded-lg bg-white text-left lg:shadow-xl transition-all sm:my-12 sm:w-full sm:max-w-[540px] ">
                <div
                  className="flex justify-end pt-4 pr-4 cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <img src={CloseIcon} alt="" className="" />
                </div>
                <div className="flex flex-col justify-center items-center px-4 ">
                  <img src={AlertAccountIsClose} alt="" className="md:w-24" />
                </div>
                <form className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex justify-center">
                    <div className="mt-2 text-center  sm:mt-0 sm:text-left">
                      <h3
                        className=" text-baseleading-12 text-20px text-accent flex flex-col justify-center font-normal"
                        id="modal-title"
                      >
                        <p className="text-center">Your account was closed. </p>
                        <p className="text-center">
                          Do you want to enable your account?
                        </p>
                      </h3>
                    </div>
                  </div>
                </form>

                <div className="mt-4 ml-2 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    class=" text-accent bg-[#FFFFFF] border focus:outline-none  font-bold rounded-lg text-16px px-8 py-2.5  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-10"
                  >
                    No, cancel
                  </button>
                  <button
                    type="button"
                    class="text-white bg-[#1E9CEF] hover:bg-[#1E9CEF]/80 focus:outline-none  font-bold rounded-lg text-16px px-12 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-10"
                  >
                    Yes
                  </button>
                </div>
                {/* flex-row-reverse rounded-md bg-[#1E9CEF] px-36 py-3 text-sm font-semibold text-white  hover:bg-blue-500 sm:ml-3 sm:w-auto */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnableAccountPopup;
