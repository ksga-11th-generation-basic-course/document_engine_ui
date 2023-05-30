import React, { useState } from "react";
import trush from "../../assets/dashboard_image/trush.svg";
import pencil from "../../assets/workspace_image/pencil.svg";
import chevrondown from "../../assets/workspace_image/chevrondown.svg";
import { DropWorkspaceEdit } from "../DropWorkspaceEdit";
import { RemoveMemberModal } from "../../modal/RemoveMemberModal";

export const MemberWorkspaceCard = ({
  username,
  status,
  isOwner,
  currentuser,
}) => {
  const [removeMember, setRemoveMember] = useState(false);

  const [openEditor, setOpenEditor] = useState(false);

  const character = username.split("");

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
            className={`w-9 h-9 ${randomColor} flex justify-center items-center rounded-full`}
          >
            <p className="font-semibold text-18px text-white">{character[0]}</p>
          </div>
          <h3 className="font-semibold text-18px">
            {username} {currentuser ? <span>(You)</span> : null}
          </h3>
          {isOwner ? (
            <span className="px-6 text-primary bg-[#EDF9FF] rounded-lg">
              Owner
            </span>
          ) : null}
        </div>
        {!status ? (
          <div className="flex justify-center items-center gap-x-4">
            <div className="relative">
              <button
                type="button"
                className="text-18px border-[1px] rounded-lg px-3 py-1 flex justify-center items-center gap-x-2"
                onClick={() => setOpenEditor(!openEditor)}
              >
                <img src={pencil} />
                <p>Editor</p>
                <img src={chevrondown} />
              </button>
              <div>
                {openEditor ? (
                  <DropWorkspaceEdit
                    openEditor={openEditor}
                    setOpenEditor={setOpenEditor}
                  />
                ) : null}
              </div>
            </div>
            <button
              type="button"
              className="px-3 py-2 border-[1px] rounded-lg"
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
