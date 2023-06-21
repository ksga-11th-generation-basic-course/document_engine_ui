import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import deleteprofile from "../assets/dashboard_image/deleteprofile.svg";
import { useDispatch } from "react-redux";

export const DeleteWorkspacePhotoModal = ({
  workspaceId,
  removePhoto,
  setRemovePhoto
}) => {

  const dispatch = useDispatch();

  const handleRemoveWorkspaceImage = async () => {
    try {
      const workspace = await removeWorkspaceImage(workspaceId);
      dispatch(removeWorkspaceImageSuccess(workspace));
      setRemovePhoto(!removePhoto);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <Modal open={removePhoto} onClickBackdrop={() => setRemovePhoto(!removePhoto)}>
        <div className="w-[540px] bg-white rounded-lg p-3 md:w-[330px]">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setRemovePhoto(!removePhoto)}
            >
              <img src={close} className="md:w-6"/>
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent md:px-5">
            <div className="flex justify-center items-center">
              <img src={deleteprofile} className="md:w-16"/>
            </div>
            <p className="font-normal text-accent text-22px text-center md:text-16px">
                    Are you sure want to delete your workspace photo?
            </p>

            <div className="flex justify-center items-center gap-5 text-18px font-semibold pb-5 md:text-14px">
              <button
                className="px-10 py-3 border-[1px] rounded-lg md:px-4 md:py-2.5"
                onClick={() => setRemovePhoto(!removePhoto)}
              >
                No, cancel
              </button>
              <button className="bg-red-500 text-white  px-10 py-3 rounded-lg md:px-5 md:py-2.5">
                Remove
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
