import React, { useState } from "react";
import { LeaveWorkspaceModal } from "../modal/LeaveWorkspaceModal";

export const CollaboratorMember = () => {

  const [leaveWorkspace, setLeaveWorkspace] = useState(false);

  return (
    <div>
      <div className="relative">
        <button className="flex items-center gap-x-3 text-primary bg-[#F6F6F6] rounded-lg w-full py-3 px-3">
          {" "}
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_15_10108)">
              <path
                d="M1.75 19.25V14.25C1.75 12.8693 2.86929 11.75 4.25 11.75H8C9.38071 11.75 10.5 12.8693 10.5 14.25V19.25M15.509 14.25H16.75C18.1307 14.25 19.25 15.3693 19.25 16.75V19.25M6.125 1.75C7.75629 1.75 9.25 3 9.25 4.875C9.25 6.75 7.75629 8 6.125 8C4.49371 8 3 6.75 3 4.875C3 3 4.49371 1.75 6.125 1.75ZM15.5 4.25C14.2331 4.25 13 5.24745 13 6.75C13 8.25255 14.2331 9.25 15.5 9.25C16.7669 9.25 18 8.25255 18 6.75C18 5.24745 16.7669 4.25 15.5 4.25Z"
                stroke="#1E9CEF"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_15_10108">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.5 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <p className="font-semibold text-18px">Collaborators</p>
        </button>
        <button
          className="flex items-center gap-x-3 text-red-500 rounded-lg w-full py-3 px-3 absolute top-[610px]"
          type="button"
          onClick={() => setLeaveWorkspace(!leaveWorkspace)}
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
        />
      </div>
    </div>
  );
};
