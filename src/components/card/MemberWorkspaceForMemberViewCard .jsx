import React, { useState } from "react";

export const MemberWorkspaceForMemberViewCard = ({ member }) => {
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
      </div>
    </div>
  );
};
