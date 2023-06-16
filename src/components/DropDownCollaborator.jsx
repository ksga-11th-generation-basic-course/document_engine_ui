import React, { useState } from "react";
import trush from "../assets/dashboard_image/trush.svg";
import { Link } from "react-router-dom";
import collaborator from "../assets/workspace_image/collaborators.svg"
import { RemoveMemberModal } from "../modal/RemoveMemberModal";
import { DropDownMemberPermission } from "./DropDownMemberPermission";

export const DropDownCollaborator = ({ open, setOpen }) => {
  const [removeMember, setRemoveMember] = useState(false);
  const [openPermission, setOpenPermission] = useState(false);

  return (
    <div>
      {open && (
        <div className="fixed inset-0" onClick={() => setOpen(!open)}></div>
      )}
      <div className="absolute right-0 p-2 md:p-0 w-[200px] md:w-[160px] text-accent rounded-lg shadow-custom hover:shadow-hover bg-white md:z-20 md:top-16">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-0.5 py-2 md:ml-1 md:px-1">
            <button
              className="flex items-center text-20px md:text-18px gap-x-4 hover:bg-[#f4f4f4] px-3  py-2.5 rounded-lg md:px-2 md:py-2 md:gap-x-3"
              onClick={() => setOpenPermission(!openPermission)}
            >
              <img src={collaborator} className="md:w-4 md:h-4"/>
              <span className="text-14px">Permission </span>
              <span className="absolute right-5 fill-accent md:w-[6px] md:h-[14px]">
                  <svg
                    viewBox="0 0 8 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.355291 0.420947C0.242666 0.553514 0.153312 0.710979 0.0923468 0.884328C0.0313812 1.05768 0 1.2435 0 1.43118C0 1.61885 0.0313812 1.80468 0.0923468 1.97802C0.153312 2.15137 0.242666 2.30884 0.355291 2.44141L5.06911 8.00125L0.355291 13.5611C0.128132 13.829 0.000514428 14.1924 0.000514428 14.5713C0.000514428 14.9502 0.128132 15.3136 0.355291 15.5816C0.582451 15.8495 0.890546 16 1.2118 16C1.53305 16 1.84114 15.8495 2.0683 15.5816L7.64471 9.00431C7.75734 8.87175 7.84669 8.71428 7.90765 8.54093C7.96862 8.36758 8 8.18176 8 7.99408C8 7.80641 7.96862 7.62058 7.90765 7.44724C7.84669 7.27389 7.75734 7.11642 7.64471 6.98385L2.0683 0.406617C1.60664 -0.137904 0.829104 -0.137904 0.355291 0.420947Z"
                    />
                  </svg>
                </span>

                {openPermission ? (
                <span className="absolute -right-40 -top-56 -mr-2 lg:right-72 lg:mr-0 md:right-72 md:-top-5 md:mt-4 md:mr-">
                  <DropDownMemberPermission
                          openPermission={openPermission}
                          setOpenPermission={setOpenPermission}
                  />
                </span>
              ) : null}
            </button>

            <button
              className="flex items-center text-20px gap-x-4 md:text-18px text-red-500 hover:bg-[#f4f4f4]  px-3  py-2.5 rounded-lg md:px-2 md:py-2 md:gap-x-3"
              onClick={() => setRemoveMember(!removeMember)}
            >
              <img src={trush} className="md:w-4 md:h-4" />
              <span className="text-14px">Remove Member</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <RemoveMemberModal
          removeMember={removeMember}
          setRemoveMember={setRemoveMember}
        />
      </div>
    </div>
  );
};
