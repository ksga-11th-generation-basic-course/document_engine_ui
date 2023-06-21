import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import romoveworkspace from "../assets/workspace_image/romoveworkspace.svg";
import { useDispatch } from "react-redux";
import { removeWorkspaceService } from "../redux/service/workspaceService/workspaceService";
import "react-toastify/dist/ReactToastify.css";
import { removeWorkspaceServiceSuccess } from "../redux/slice/workspaceSlice/workspaceSlice";
import { toast } from "react-toastify";

export const RemoveWorkspaceModal = ({
  removeWorkspace,
  setRemoveWorkspace,
  workspaceId,
}) => {
  const dispatch = useDispatch();

  const handleRemoveWorkspace = async () => {
    try {
      const workspace = await removeWorkspaceService(workspaceId);
      dispatch(removeWorkspaceServiceSuccess(workspace));
      setRemoveWorkspace(!removeWorkspace);
      toast.success("Remove Workspace Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      setRemoveWorkspace(!removeWorkspace);
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="w-full">
      <Modal open={removeWorkspace} onClickBackdrop={() => setRemoveWorkspace(!removeWorkspace)}>
        <div className="w-[540px] bg-white rounded-lg p-3 md:w-[330px]">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setRemoveWorkspace(!removeWorkspace)}
            >
              <img src={close} className="md:w-6"/>
            </button>
          </div>
          <div className="px-14 space-y-5 text-accent md:px-5">
            <div className="flex justify-center items-center">
              <img src={romoveworkspace} className="md:w-16"/>
            </div>
            <p className="font-normal text-accent text-22px text-center md:text-16px">
                    Are you sure to remove this workspace?
            </p>

            <div className="flex justify-center items-center gap-5 text-18px font-semibold pb-5 md:text-14px">
              <button
                className="px-10 py-3 border-[1px] rounded-lg md:px-4 md:py-2.5"
                type="button"
                onClick={() => setRemoveWorkspace(!removeWorkspace)}
              >
                No, cancel
              </button>
              <button
                className="bg-red-500 text-white  px-10 py-3 rounded-lg md:px-5 md:py-2.5"
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
