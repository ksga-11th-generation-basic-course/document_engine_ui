import React, { useState } from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import resetpasswordIcon from "../assets/dashboard_image/resetpassword.svg";
import { changePassword } from "../redux/service/userService/userService";
import { useDispatch } from "react-redux";
import { changePasswordSuccess } from "../redux/slice/userSlice/userSlice";

export const ResetPasswordModal = ({ resetPassword, setResetPassword }) => {
  const dispatch = useDispatch();

  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleChangePassword = async () => {
    try {
      const user = await changePassword(
        currentPassword,
        newPassword,
        confirmPassword
      );
      dispatch(changePasswordSuccess(user));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <Modal
        open={resetPassword}
        onClickBackdrop={() => {setResetPassword(!resetPassword), document.getElementById("changpassword").reset();}}
      >
        <div className="w-[540px] bg-white rounded-lg p-3 md:w-[350px]">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => {setResetPassword(!resetPassword), document.getElementById("changpassword").reset();}}
            >
              <img src={close} className="md:w-6" />
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent md:px-7">
            <div className="flex justify-center items-center">
              <img src={resetpasswordIcon} className="w-24 md:w-16"/>
            </div>
            <h1 className="font-bold text-28px text-primary text-center md:text-20px">
              Reset Account Password
            </h1>
            <form className="flex flex-col gap-y-2 font-semibold text-20px md:text-16px">
              <p>Current Password</p>
              <input
                type="password"
                placeholder="Current Password"
                className="rounded-lg py-3 border-primary focus:ring-btn-primary focus:border-btn-primary md:text-14px"
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <p>New Password</p>
              <input
                type="password"
                placeholder="New Password"
                className="text-18px rounded-lg py-3 border-primary focus:ring-btn-primary focus:border-btn-primary md:text-14px"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <p>Confirm New Password</p>
              <input
                type="password"
                placeholder="Confirm New Password"
                className="text-18px rounded-lg py-3 border-primary focus:ring-btn-primary focus:border-btn-primary md:text-14px"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </form>
            <div className="text-18px font-semibold pb-10 w-full  md:text-14px">
              <button className="bg-primary text-white w-full py-3 rounded-lg " 
                      onClick={handleChangePassword}
              >
                Save Change
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
