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
        <div className="w-[540px] bg-white rounded-lg p-3 md:w-[300px]">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setLeaveWorkspace(!leaveWorkspace)}
            >
              <img src={close} className="md:w-7" />
            </button>
          </div>
          <div className="px-14 space-y-3 text-accent md:px-7 md:ml-2">
            <div className="flex justify-center items-center">
              <img src={leaveworkspace} className="md:w-16" />
            </div>
            <h1 className="font-bold text-24px leading-9 text-primary text-center md:text-20px">
              Leave Workspace!
              <p className="font-normal text-accent text-18px text-center md:text-16px md:-ml-3 md:leading-7">
                Are you sure want to leave from this workspace?
              </p>
            </h1>

            <div className="flex justify-center space-x-4 items-center text-18px font-semibold pb-3 md:text-13px md:-mt-10">
              <button
                className="px-10 py-3 border-[1px] rounded-lg md:px-7 md:py-2.5 md:text-14px"
                onClick={() => setLeaveWorkspace(!leaveWorkspace)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white  px-10 py-3 rounded-lg md:px-7 md:py-2.5 md:text-14px"
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
