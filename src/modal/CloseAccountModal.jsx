import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import closeaccount from "../assets/dashboard_image/closeaccount.svg";
import { disableAccount } from "../redux/service/userService/userService";
import { closeAccountSuccess } from "../redux/slice/userSlice/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CloseAccountModal = ({ closeAccount, setCloseAccount }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handelCloseAccount = async () => {
    try {
      const user = await disableAccount();
      dispatch(closeAccountSuccess(user));
      localStorage.removeItem("user");
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <Modal open={closeAccount} onClickBackdrop={() => setCloseAccount(!closeAccount)}>
        <div className="w-[540px] bg-white rounded-lg p-3 md:w-[300px]">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setCloseAccount(!closeAccount)}
            >
              <img src={close} className="md:w-6"/>
            </button>
          </div>
          <div className="px-14 space-y-2 text-accent md:px-5">
            <div className="flex justify-center items-center">
              <img src={closeaccount} className="md:w-16"/>
            </div>
            <h1 className="font-bold text-24px text-primary text-center">
              Close Account!
              <p className="font-normal text-accent text-22px text-center md:text-16px">
                Are you sure want to close your account?
              </p>
            </h1>

            <div className="flex justify-center items-center gap-5 text-18px font-semibold pb-5 md:text-14px">
              <button
                className="px-10 py-3 border-[1px] rounded-lg md:px-4 md:py-2.5"
                onClick={() => setCloseAccount(!closeAccount)}
              >
                No, cancel
              </button>
              <button className="bg-red-500 text-white  px-10 py-3 rounded-lg md:px-9 md:py-2.5" onClick={handelCloseAccount}>
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
