import React, { useState } from "react";
import copy from "../assets/workspace_image/copy.svg";
import CopyToClipboard from "react-copy-to-clipboard";
import tick from "../assets/workspace_image/tick.svg";
import close from "../assets/dashboard_image/close.svg";
import { MemberWorkspaceCard } from "./card/MemberWorkspaceCard"
import workspacesetting from "../assets/workspace_image/workspacesetting.svg";
import invite from "../assets/workspace_image/invite.svg";
import email from "../assets/workspace_image/email.svg";
import dropdown from "../assets/images/popUp/dropdown.svg";

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

  const [openCollaborator, setOpenCollaborator] = useState(false);
  const [openInviteMember, setOpenInviteMember] = useState(false);


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

        {/* Collaborator */}
        <div>
          {/* Header */}
          <div className="flex justify-between items-center border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg md:px-4">
            <div className="flex justify-center items-center gap-x-3">
            <img src={workspacesetting} className="md:w-6" />
              <p className="font-bold text-22px md:text-18px">Collaborators</p>
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
          {/* Content */}
          <div className="px-6 md:p-3 border-[1px] py-4 space-y-2 rounded-b-lg">
            <MemberWorkspaceCard username={"Tith Ouddom"} status={true} isOwner={true} currentuser={true} />
            <MemberWorkspaceCard username={"Kheng Sovannak"} status={false} isOwner={false} currentuser={false} />
            <MemberWorkspaceCard username={"Yan Sovanseyha"} status={false} isOwner={false} currentuser={false} />
          </div>
        </div>

         {/* Invite Members */}
         <div className="pt-2">
        {/* For laptop and mobile*/}
         <div className="md:hidden">
          {/* Header */}
          <div className="md:px-3 md:py-3 flex justify-between border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg">
            <div className="flex justify-center items-center gap-x-4 md:gap-x">
              <img className="md:w-7" src={invite} />
              <p className="font-bold text-24px md:text-18px">
                Invite member
              </p>
            </div>
            <button
              type="button"
              className="font-semibold text-white text-18px md:text-16px md:px-5 md:py-1 px-7 py-1 bg-primary rounded-lg"
            >
              Invite
            </button>
          </div>
          <div className="px-6 border-[1px] py-4 space-y-4 rounded-b-lg">
            <div className="w-full space-y-2">
              <h3 className="font-semibold text-20px text-black">User Email</h3>
              <img className="absolute pt-4 pl-2.5 z-0 md:w-5" src={email} />
              <input
                type="text"
                className="pl-12 w-72 md:w-52 py-3 md:py-2 rounded-lg border-gray-300 focus:ring-primary focus:border-primary text-18px font-semibold"
                placeholder="example@gmail.com"
              />
            </div>
          </div>
        </div>

        {/* For mobile phone */}
        <div>
          {/* Header */}
            <div
              className="hidden md:flex md:justify-between md:border-r-[1px] md:border-t-[1px] md:border-l-[1px] md:py-3 md:rounded-t-lg md:px-4"
            >
              <div className="flex justify-center items-center gap-x-3">
                <img src={invite} className="md:w-6" />
                <p className="font-bold text-24px md:text-18px">
                Invite member
                </p>
                <span className="hidden md:inline-block md:-mt-1">
                  <button
                    type="button"
                    className="font-semibold text-white text-18px px-7 py-1.5 bg-primary rounded-lg md:text-12px md:px-5 md:py-1 md:mt-1 md:ml-[58px]"
                    onClick={() => {
                      setOpenInviteMember(false);
                      setOpenCollaborator(false);
                    }}
                  >
                    Invite
                  </button>
                </span>
              </div>
            </div>

          {/* Content mobile */}
          <span className="hidden md:inline-block md:w-full">
              <div className="px-6 border-[1px] py-4 space-y-4 rounded-b-lg lg:space-y-7 md:px-4 md:space-y-5 md:mb-5">
                <div className="w-full space-y-2">
                  <h3 className="font-semibold text-18px text-black md:text-14px">
                   User Email
                  </h3>

                  <img className="absolute pt-3 pl-2 z-0 md:w-7" src={email} />
                  <input
                    type="text"
                    className="pl-9 w-full py-2.5 rounded-lg border-gray-300 focus:ring-primary focus:border-primary text-16px font-semibold lg:w-60 md:text-14px md:py-1.5"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
          </span>
        </div>
        </div>
      </div>
    </div>
  );
};
