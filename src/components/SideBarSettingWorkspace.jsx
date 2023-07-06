import React from "react";
import logo from "../assets/landing_image/logo.svg";

export const SideBarSettingWorkspace = ({
  collaborator,
  setCollaborator,
  setting,
  setSetting,
  openInviteMember,
  setOpenInviteMember,
}) => {
  return (
    <div className="space-y-3 ">
      <div className="flex justify-center p-5 rounded-tl-lg shadow-md">
        <img className="md:w-16" src={logo} />
      </div>
      <div className="w-full px-3 md:p-0">
        <div>
          <button
            className={
              setting
                ? "flex items-center gap-x-3 text-primary bg-gray-200 rounded-lg w-full py-3 px-3"
                : "flex items-center gap-x-3 rounded-lg w-full py-3 px-3"
            }
            onClick={() => {
              setSetting(true);
              setCollaborator(false);
              setOpenInviteMember(false);
            }}
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.723 1.723 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065Z"></path>
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
            </svg>
            <p className="font-semibold text-18px md:text-[16px]">Setting</p>
          </button>
        </div>
        <div>
          <button
            className={
              collaborator
                ? "flex items-center gap-x-3 text-primary bg-gray-200 rounded-lg w-full py-3 px-3"
                : "flex items-center gap-x-3 rounded-lg w-full py-3 px-3"
            }
            onClick={() => {
              setSetting(false);
              setCollaborator(true);
              setOpenInviteMember(false);
            }}
          >
            <svg
              width="25"
              height="25"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
              <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
              <path d="M16 3.133a4 4 0 0 1 0 7.75"></path>
              <path d="M21 20.998v-2a4 4 0 0 0-3-3.85"></path>
            </svg>
            <p className="font-semibold text-18px md:text-[16px]">
              Collaborators
            </p>
          </button>
        </div>
        <div>
          <button
            className={
              openInviteMember
                ? "flex items-center gap-x-3 text-primary bg-gray-200 rounded-lg w-full py-3 px-3"
                : "flex items-center gap-x-3 rounded-lg w-full py-3 px-3"
            }
            onClick={() => {
              setOpenInviteMember(true);
              setSetting(false);
              setCollaborator(false);
            }}
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
              <path d="M4 13h3l3 3h4l3-3h3"></path>
            </svg>
            <p className="font-semibold text-18px md:text-[16px]">Invite</p>
          </button>
        </div>
      </div>
    </div>
  );
};
