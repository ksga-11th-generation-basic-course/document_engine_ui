import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import romoveworkspace from "../assets/workspace_image/romoveworkspace.svg";
import { useDispatch } from "react-redux";
import { removeWorkspaceService } from "../redux/service/workspaceService/workspaceService";

export const RemoveWorkspaceModal = ({
  removeWorkspace,
  setRemoveWorkspace,
  workspaceId,
}) => {
  const dispatch = useDispatch();

  const handleRemoveWorkspace = () => {
    dispatch(removeWorkspaceService(workspaceId));
    setRemoveWorkspace(!removeWorkspace);
  };

  return (
    <div className="w-full">
      <Modal
        open={removeWorkspace}
        onClickBackdrop={() => setRemoveWorkspace(!removeWorkspace)}
      >
        <div className="w-[540px] md:w-[430px] bg-white rounded-lg p-3 md:p-0">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setRemoveWorkspace(!removeWorkspace)}
            >
              <img className="md:w-10 md:h-10 md:p-2" src={close} />
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent">
            <div className="flex justify-center items-center">
              <img className="md:w-20 md:h-20" src={romoveworkspace} />
            </div>
            <h1 className="font-bold text-24px text-primary text-center">
              Remove Workspace!
              <p className="font-normal text-accent text-18px text-center">
                Are you sure to remove this workspace?
              </p>
            </h1>

            <div className="flex justify-center items-center gap-5 text-16px font-semibold pb-5">
              <button
                className="px-10 py-3 border-[1px] rounded-lg"
                type="button"
                onClick={() => setRemoveWorkspace(!removeWorkspace)}
              >
                No, cancel
              </button>
              <button
                className="bg-red-500 text-white  px-10 py-3 rounded-lg"
                type="button"
                onClick={handleRemoveWorkspace}
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
