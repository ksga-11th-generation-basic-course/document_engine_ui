import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import deleteprofile from "../assets/dashboard_image/deleteprofile.svg";
import { useDispatch } from "react-redux";
import { deleteProfileImage } from "../redux/service/userService/userService";
import { deleteProfileImageSuccess } from "../redux/slice/userSlice/userSlice";

export const DeleteProfileModal = ({
  openDeleteProfile,
  setOpenDeleteProfile,
}) => {
  const dispatch = useDispatch();

  const handleDeleteProfileImage = async () => {
    try {
      const user = await deleteProfileImage();
      dispatch(deleteProfileImageSuccess(user));
      setOpenDeleteProfile(!openDeleteProfile);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <Modal
        open={openDeleteProfile}
        onClickBackdrop={() => setOpenDeleteProfile(!openDeleteProfile)}
      >
        <div className="w-[540px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setOpenDeleteProfile(!openDeleteProfile)}
            >
              <img src={close} />
            </button>
          </div>
          <div className="px-14 space-y-3 text-accent">
            <div className="flex justify-center items-center">
              <img src={deleteprofile} />
            </div>
            <h1 className="font-bold text-24px leading-9 text-primary text-center">
              Remove Profile!
              <p className="font-normal text-accent text-18px text-center">
                Are you sure want to delete your profile <br /> photo from this
                workspace?
              </p>
            </h1>

            <div className="flex justify-center items-center gap-5 text-16px font-semibold pb-5">
              <button
                className="px-10 py-3 border-[1px] rounded-lg"
                onClick={() => setOpenDeleteProfile(!openDeleteProfile)}
              >
                No, cancel
              </button>
              <button
                className="bg-red-500 text-white px-10 py-3 rounded-lg"
                onClick={handleDeleteProfileImage}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};