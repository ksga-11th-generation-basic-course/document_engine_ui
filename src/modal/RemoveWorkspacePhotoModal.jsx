import React, { useState } from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import removephoto from "../assets/workspace_image/removephoto.svg";
import { useDispatch } from "react-redux";
import { editWorkspace, removeWorkspaceImage } from "../redux/service/workspaceService/workspaceService";
import { editWorkspaceSuccess, removeWorkspaceImageSuccess } from "../redux/slice/workspaceSlice/workspaceSlice";

export const RemoveWorkspacePhotoModal = ({removePhoto,setRemovePhoto,workspaceId,workspaceName }) => {
  const [url, setUrl] = useState(
    "https://firebasestorage.googleapis.com/v0/b/docengine-7e623.appspot.com/o/images%2Fworkspace%2F3036d816-8b3f-4c2e-8725-8b0d0944b4f3_4014085.jpg?alt=media&token=1c310982-d56b-49bc-929f-693812978256"
  );
  const dispatch = useDispatch();

  const handleRemoveWorkspaceImage = async () => {
    try {
      const workspace = await editWorkspace(workspaceId, workspaceName, url);
      dispatch(editWorkspaceSuccess(workspace));
      setRemovePhoto(!removePhoto);
      setDefaultPhoto(!defaultPhoto);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <Modal
        open={removePhoto}
        onClickBackdrop={() => setRemovePhoto(!removePhoto)}
      >
        <div className="w-[540px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button type="button" onClick={() => setRemovePhoto(!removePhoto)}>
              <img src={close} />
            </button>
          </div>
          <div className="px-14 space-y-3 text-accent">
            <div className="flex justify-center items-center">
              <img src={removephoto} />
            </div>
            <h1 className="font-bold text-24px leading-9 text-primary text-center">
              Delete Photo!
              <p className="font-normal text-accent text-18px text-center">
                Are you sure want to delete your workspace photo?
              </p>
            </h1>

            <div className="flex justify-center items-center gap-5 text-16px font-semibold pb-5">
              <button
                className="px-10 py-3 border-[1px] rounded-lg"
                onClick={() => setRemovePhoto(!removePhoto)}
              >
                No, cancel
              </button>
              <button
                className="bg-red-500 text-white  px-10 py-3 rounded-lg "
                onClick={handleRemoveWorkspaceImage}
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