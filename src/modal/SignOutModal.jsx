import React from "react";
import close from "../assets/dashboard_image/close.svg";
import signouticon from "../assets/dashboard_image/signouticon.svg";
import { Modal } from "react-daisyui";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutSuccess } from "../redux/slice/authenticationSlice/authenticationSlice";

export const SignOutModal = ({ visible, toggleVisible }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(signOutSuccess());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="w-full">
      <Modal open={visible} onClickBackdrop={toggleVisible}>
        <div className="w-[540px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button type="button" onClick={toggleVisible}>
              <img src={close} />
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent">
            <div className="flex justify-center items-center">
              <img src={signouticon} />
            </div>
            <h1 className="font-bold text-24px text-primary text-center">
              Comeback soon!
              <p className="font-normal text-accent text-18px text-center">
                Are you sure want to sign out?
              </p>
            </h1>

            <div className="flex justify-center items-center gap-5 text-16px font-semibold pb-5">
              <button
                className="px-10 py-3 border-[1px] rounded-lg"
                onClick={toggleVisible}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white  px-10 py-3 rounded-lg "
                onClick={signOut}
              >
                Yes, Sign out
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};