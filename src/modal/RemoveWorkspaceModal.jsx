import React, { useEffect } from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import romoveworkspace from "../assets/workspace_image/romoveworkspace.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeWorkspaceService } from "../redux/service/workspaceService/workspaceService";
import "react-toastify/dist/ReactToastify.css";
import { removeWorkspaceServiceSuccess } from "../redux/slice/workspaceSlice/workspaceSlice";
// import { io } from "socket.io-client";

// const socket = io.connect("http://localhost:3001");

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
      // socket.emit("remove_workspace", workspace);
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
          <div className="px-14 text-accent space-y-3">
            <div className="flex justify-center items-center">
              <img className="md:w-20 md:h-20" src={romoveworkspace} />
            </div>
            <h1 className="font-bold text-24px leading-9 text-primary text-center">
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
