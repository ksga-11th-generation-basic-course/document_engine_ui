import React, { useState } from "react";
import { LeaveWorkspaceModal } from "../modal/LeaveWorkspaceModal";
import group from "../assets/workspace_image/users.svg";

export const CollaboratorMember = ({ workspace }) => {
  const [leaveWorkspace, setLeaveWorkspace] = useState(false);
  const [workspaceId, setWorkspaceId] = useState();

  const handleLeaveWorkspace = () => {
    setWorkspaceId(workspace.workspaceId);
    setLeaveWorkspace(!leaveWorkspace);
  };

  return (
    <div>
      <div className="relative">
        <button className="flex items-center gap-x-3 text-primary bg-[#F6F6F6] rounded-lg w-full py-3 px-3">
          {" "}
          <img src={group} />
          <p className="font-semibold text-18px">Collaborators</p>
        </button>
        <button
          className="flex items-center gap-x-3 text-red-500 rounded-lg w-full py-3 px-3 absolute top-[610px]"
          type="button"
          onClick={handleLeaveWorkspace}
        >
          {" "}
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_15_12278)">
              <path
                d="M12.5 5.25V1.3125H1.25M1.25 1.3125V14.4375L7.5 19.6875V6.5625L1.25 1.3125ZM11.25 13.125H18.75M18.75 13.125L15 9.1875M18.75 13.125L15 17.0625"
                stroke="#FF5658"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_15_12278">
                <rect width="20" height="21" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="font-semibold text-18px">Leave Workspace</p>
        </button>
      </div>
      <div>
        <LeaveWorkspaceModal
          leaveWorkspace={leaveWorkspace}
          setLeaveWorkspace={setLeaveWorkspace}
          workspaceId={workspaceId}
        />
      </div>
    </div>
  );
};
