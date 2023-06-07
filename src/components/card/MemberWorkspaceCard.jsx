import React, { useState } from "react";
import trush from "../../assets/dashboard_image/trush.svg";
import pencil from "../../assets/workspace_image/pencil.svg";
import chevrondown from "../../assets/workspace_image/chevrondown.svg";
import { RemoveMemberModal } from "../../modal/RemoveMemberModal";
import { Dropdown } from "react-daisyui";
import view from "../../assets/workspace_image/view.svg";

export const MemberWorkspaceCard = ({ member }) => {
  const [removeMember, setRemoveMember] = useState(false);

  const [openEditor, setOpenEditor] = useState(false);

  const character = member.username.split("");

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div>
      <div className="flex justify-between items-center w-full space-y-4">
        <div className="flex justify-center items-center gap-x-3">
          <div
            className={`w-9 h-9 ${randomColor} flex justify-center items-center rounded-full overflow-hidden`}
          >
            {member.profileImage === null ? (
              <p className="font-semibold text-18px text-white">
                {character[0]}
              </p>
            ) : (
              <img src={member.profileImage} className="w-full h-full" />
            )}
          </div>
          <h3 className="font-semibold text-18px">{member.username}</h3>
          {member.isOwner ? (
            <span className="px-6 md:px-2 text-primary bg-[#EDF9FF] rounded-lg">
              Owner
            </span>
          ) : null}
        </div>
        {!member.isOwner ? (
          <div className="flex justify-center items-center gap-x-4 md:gap-x-2">
            <div className="relative">
              <Dropdown>
                <Dropdown.Toggle>
                  <div className="text-18px md:text-16px md:gap-x-1 md:px-2 border-[1px] rounded-lg px-3 py-1 flex justify-center items-center gap-x-2">
                    <img className="w-4" src={pencil} />
                    <p>Editor</p>
                    <img className="md:w-4" src={chevrondown} />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-[125px] bg-white rounded-lg">
                  <Dropdown.Item className="flex items-center text-18px md:text-16px">
                    <img className="md:w-4" src={pencil} />
                    <span>Editor</span>
                  </Dropdown.Item>
                  <Dropdown.Item className="flex items-center text-18px md:text-16px">
                    <img className="md:w-4" src={view} />
                    <span>Viewer</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <button
              type="button"
              className="px-3 py-2 md:p-1.5 border-[1px] rounded-lg"
              onClick={() => setRemoveMember(!removeMember)}
            >
              <img src={trush} />
            </button>
          </div>
        ) : null}
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
