import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import leaveworkspace from "../assets/workspace_image/leaveworkspace.svg";
import { leaveWorkspaceService } from "../redux/service/workspaceService/workspaceService";
import { useDispatch } from "react-redux";
import { leaveWorkspaceSuccess } from "../redux/slice/workspaceSlice/workspaceSlice";

export const LeaveWorkspaceModal = ({
  leaveWorkspace,
  setLeaveWorkspace,
  workspaceId,
}) => {
  const dispatch = useDispatch();

  const leaveWorkspaceFunc = async () => {
    try {
      const workspace = await leaveWorkspaceService(workspaceId);
      dispatch(leaveWorkspaceSuccess(workspace));
      setLeaveWorkspace(!leaveWorkspace);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <Modal
        open={leaveWorkspace}
        onClickBackdrop={() => setLeaveWorkspace(!leaveWorkspace)}
      >
        <div className="w-[540px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setLeaveWorkspace(!leaveWorkspace)}
            >
              <img src={close} />
            </button>
          </div>
          <div className="px-14 space-y-3 text-accent">
            <div className="flex justify-center items-center">
              <img src={leaveworkspace} />
            </div>
            <h1 className="font-bold text-24px leading-9 text-primary text-center">
              Leave Workspace!
              <p className="font-normal text-accent text-18px text-center">
                Are you sure want to leave from this workspace?
              </p>
            </h1>

            <div className="flex justify-center items-center gap-5 text-16px font-semibold pb-5">
              <button
                className="px-10 py-3 border-[1px] rounded-lg"
                onClick={() => setLeaveWorkspace(!leaveWorkspace)}
              >
                No, cancel
              </button>
              <button
                className="bg-red-500 text-white  px-10 py-3 rounded-lg "
                onClick={leaveWorkspaceFunc}
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
