import React from "react";

export const CollaboratorOwner = ({
  collaborator,
  setCollaborator,
  setting,
  setSetting,
  openInviteMember,
  setOpenInviteMember,
}) => {
  return (
    <div>
      {/* Collaborators */}
      <button
        className={
          collaborator
            ? "flex items-center gap-x-3 text-primary bg-[#F6F6F6] rounded-lg w-full py-3 px-3"
            : "flex items-center gap-x-3 rounded-lg w-full py-3 px-3"
        }
        onClick={() => {
          setSetting(false);
          setCollaborator(true);
          setOpenInviteMember(false)
        }}
      >
        {collaborator ? (
          <svg
            width="21"
            height="21"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_597_8631)">
              <path
                d="M1.1875 17.8125V13.0625C1.1875 11.7508 2.25082 10.6875 3.5625 10.6875H7.125C8.43668 10.6875 9.5 11.7508 9.5 13.0625V17.8125M14.2586 13.0625H15.4375C16.7492 13.0625 17.8125 14.1258 17.8125 15.4375V17.8125M5.34375 1.1875C6.89348 1.1875 8.3125 2.375 8.3125 4.15625C8.3125 5.9375 6.89348 7.125 5.34375 7.125C3.79402 7.125 2.375 5.9375 2.375 4.15625C2.375 2.375 3.79402 1.1875 5.34375 1.1875ZM14.25 3.5625C13.0464 3.5625 11.875 4.51008 11.875 5.9375C11.875 7.36492 13.0464 8.3125 14.25 8.3125C15.4536 8.3125 16.625 7.36492 16.625 5.9375C16.625 4.51008 15.4536 3.5625 14.25 3.5625Z"
                stroke="#1E9CEF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_597_8631">
                <rect width="19" height="19" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
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
                stroke="#526581"
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
        )}
        <p className="font-semibold text-18px md:text-[16px]">Collaborators</p>
      </button>
    </div>
  );
};
