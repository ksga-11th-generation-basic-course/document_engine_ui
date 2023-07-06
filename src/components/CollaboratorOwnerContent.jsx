import React, { useEffect, useState } from "react";
import copy from "../assets/workspace_image/copy.svg";
import CopyToClipboard from "react-copy-to-clipboard";
import tick from "../assets/workspace_image/tick.svg";
import close from "../assets/dashboard_image/close.svg";
import { MemberWorkspaceCard } from "./card/MemberWorkspaceCard";
import { useDispatch, useSelector } from "react-redux";
import { getMemberInEachWorkspace } from "../redux/service/workspaceService/workspaceService";

export const CollaboratorOwnerContent = ({
  openWorkspaceSetting,
  setOpenWorkspaceSetting,
  workspace,
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  let workspaceId = workspace.workspaceId;

  const members = useSelector((state) => state.workspace.members);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemberInEachWorkspace(workspace.workspaceId));
  }, []);

  return (
    <div>
      <div className="flex w-full justify-end">
        <button
          type="button"
          onClick={() => setOpenWorkspaceSetting(!openWorkspaceSetting)}
        >
          <img src={close} className="lg:mr-4 lg:-mt-1 lg:w-[40px] "/>
        </button>
      </div>
      <div className="px-16 space-y-5 md:px-3">
        <div className="text-accent">
          <h1 className="font-bold text-34px md:text-24px">
            Collaborators & permissions
          </h1>
          <p className="md:text-16px">
            Manage permissions and invite people in your workspace
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg">
            <div className="flex justify-center items-center gap-x-3">
              <p className="font-semibold text-18px">Collaborators</p>
            </div>
            <div className="flex justify-center items-center gap-x-3 md:gap-3 md:px-0 shadow-sm px-3 p-1 rounded-lg relative">
              <span className="text-primary">{workspace.workspaceCode}</span>
              <CopyToClipboard
                text={workspace.workspaceCode}
                onCopy={handleCopy}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#526581"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="13" height="13" x="9" y="9" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </CopyToClipboard>
              <div>
                {copied ? (
                  <div className="absolute left-0 mt-4 text-accent rounded-lg shadow-md bg-white z-50">
                    <div className="flex items-center gap-x-3 rounded-lg">
                      <div className="bg-[#DCFFD9] py-2 px-2 rounded-l-lg">
                        <img src={tick} />
                      </div>
                      <p className="pr-2 md:text-14px md:pr-2">Code Copied</p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="px-6 md:p-3 border-[1px] py-4 space-y-2 rounded-b-lg">
            {members &&
              members.map((member, index) => (
                <div key={index}>
                  <MemberWorkspaceCard
                    member={member}
                    workspaceId={workspaceId}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
