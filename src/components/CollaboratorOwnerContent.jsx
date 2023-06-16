import React, { useState } from "react";
import copy from "../assets/workspace_image/copy.svg";
import CopyToClipboard from "react-copy-to-clipboard";
import tick from "../assets/workspace_image/tick.svg";
import close from "../assets/dashboard_image/close.svg";
import { MemberWorkspaceCard } from "./card/MemberWorkspaceCard"
import workspacesetting from "../assets/workspace_image/workspacesetting.svg";

export const CollaboratorOwnerContent = ({
  openWorkspaceSetting,
  setOpenWorkspaceSetting,
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div>
      <div className="flex w-full justify-end p-1">
        <button
          type="button"
          onClick={() => setOpenWorkspaceSetting(!openWorkspaceSetting)}
        >
          <img src={close} className="w-9 lg:w-7 lg:mr-7 md:w-6 md:mr-6 md:-mt-2"/>
        </button>
      </div>
      <div className="px-16 space-y-5 md:px-8 lg:mt-7 md:mt-5">
        <div className="text-accent">
          <h1 className="font-bold text-34px md:text-22px">Collaborators & permissions</h1>
          <p className="md:text-12px">Manage permissions and invite people in your workspace</p>
        </div>
        <div>
          <div className="flex justify-between items-center border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg md:px-4">
            <div className="flex justify-center items-center gap-x-3">
            <img src={workspacesetting} className="md:w-6" />
              <p className="font-semibold text-22px md:text-18px">Collaborators</p>
            </div>
            <div className="flex justify-center items-center gap-x-3 md:gap-3 md:px-0 shadow-md px-3 p-1 rounded-lg relative">
              <span className="flex gap-x-3">
                  <span className="text-18px text-primary md:text-12px ml-1">DK2jd82GA1</span>
                  <CopyToClipboard text={"DK2jd82GA1"} onCopy={handleCopy}>
                    <img src={copy} className="md:w-3"/>
                  </CopyToClipboard>
              </span>
              <div>
                {copied ? (
                  <div className="absolute left-0 mt-4 text-accent rounded-lg shadow-md bg-white z-50">
                    <div className="flex items-center gap-x-3 rounded-lg">
                      <div className="bg-[#DCFFD9] py-2 px-2 rounded-l-lg">
                        <img src={tick} className="md:w-3"/>
                      </div>
                      <p className="pr-2 md:text-10px">Code Copied</p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="px-6 md:p-3 border-[1px] py-4 space-y-2 rounded-b-lg">
            <MemberWorkspaceCard username={"Tith Ouddom"} status={true} isOwner={true} currentuser={true} />
            <MemberWorkspaceCard username={"Kheng Sovannak"} status={false} isOwner={false} currentuser={false} />
            <MemberWorkspaceCard username={"Yan Sovanseyha"} status={false} isOwner={false} currentuser={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
