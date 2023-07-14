import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../../redux/service/userService/userService";
import { useDispatch, useSelector } from "react-redux";

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

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center w-full space-y-4">
        <div className="flex justify-center items-center gap-x-3">
          <div
            className={`w-9 h-9 ${randomColor} flex justify-center items-center rounded-full overflow-hidden md:w-7 md:h-7`}
          >
            {member.profileImage === null ? (
              <p className="font-semibold text-18px text-white md:text-14px">
                {character[0]}
              </p>
            ) : (
              <img src={member.profileImage} className="w-full h-full" />
            )}
          </div>
          <h3 className="font-semibold text-18px md:text-16px">{member.username}</h3>
          {member.isOwner ? (
            <span className="px-6 md:px-2 text-primary bg-[#EDF9FF] rounded-lg md:text-12px">
              Owner
            </span>
          ) : null}
          {user.userId === member.userId ? (
            <span>(You)</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
