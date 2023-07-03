import React from "react";
import close from "../assets/dashboard_image/close.svg";
import signouticon from "../assets/dashboard_image/signouticon.svg";
import { Modal } from "react-daisyui";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutSuccess } from "../redux/slice/authenticationSlice/authenticationSlice";

export const SignOutModal = ({ openSignOut, setOpenSignOut }) => {
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
      <Modal open={openSignOut}>
        <div className="w-[540px] bg-white rounded-lg p-3 md:w-[300px] md:p-2.5">
          <div className="flex justify-end">
            <button type="button" onClick={() => setOpenSignOut(!openSignOut)}>
              <img src={close}  className="w-8 md:w-6"/>
            </button>
          </div>
          <div className="px-14 space-y-2 text-accent md:space-y-0 md:px-2">
            <div className="flex justify-center items-center">
              <img src={signouticon} className="w-52 md:w-28"/>
            </div>
            <h1 className="font-bold text-24px text-primary text-center md:text-20px md:mb-3">
              Comeback soon!
              <p className="font-normal text-accent text-24px text-center md:text-15px md:-mt-5">
                Are you sure to sign out?
              </p>
            </h1>

            <div className="flex justify-center space-x-4 items-center text-18px font-semibold pb-3 md:text-13px md:mt-2">
              <button
                className="px-10 py-3 border-[1px] rounded-lg md:px-7 md:py-2"
                onClick={() => setOpenSignOut(!openSignOut)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white  px-10 py-3 rounded-lg md:px-7 md:py-2 "
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