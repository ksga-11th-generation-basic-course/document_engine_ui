import React, { useState } from "react";
import pencil from "../../assets/workspace_image/pencil.svg";
import chevrondown from "../../assets/workspace_image/chevrondown.svg";
import { RemoveMemberModal } from "../../modal/RemoveMemberModal";
import dotmenu from "../../assets/dashboard_image/dotmenu.png";
import { DropDownCollaborator } from "../DropDownCollaborator";
import { Dropdown } from "react-daisyui";
import view from "../../assets/workspace_image/view.svg";
import kickmember from "../../assets/workspace_image/kickmember.svg";
import { setAccessibility } from "../../redux/service/workspaceService/workspaceService";
import { useDispatch } from "react-redux";
import { setAccessibilitySuccess } from "../../redux/slice/workspaceSlice/workspaceSlice";

export const MemberWorkspaceCard = ({ member, workspaceId }) => {
  const [removeMember, setRemoveMember] = useState(false);

  const character = member.username.split("");

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  const [open, setOpen] = useState(false);

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const [workspaceIdProp, setWorkspaceIdProp] = useState();

  const dispatch = useDispatch();

  const [userId, setUserId] = useState();

  const hanldeKickMember = () => {
    setUserId(member.userId);
    setWorkspaceIdProp(workspaceId);
    setRemoveMember(!removeMember);
  };

  let userIdProp = member.userId;

  const handleSetAccessibility = async (status) => {
    try {
      const member = await setAccessibility(userIdProp, workspaceId, status);
      dispatch(setAccessibilitySuccess(member));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full space-y-4">
        <div className="flex justify-center items-center gap-x-3 md:gap-x-2.5">
          <div
            className={`w-9 h-9 ${randomColor} flex justify-center items-center rounded-full md:w-6 md:h-6 overflow-hidden`}
          >
            {member.profileImage === null ? (
              <p className="font-semibold text-18px text-white">
                {character[0]}
              </p>
            ) : (
              <img src={member.profileImage} className="w-full h-full" />
            )}
          </div>
          <h3 className="font-semibold text-18px md:text-15px">{member.username}</h3>
          {member.isOwner ? (
            <span className="px-6 md:px-2 text-primary bg-[#EDF9FF] rounded-lg md:text-12px">
              Owner
            </span>
          ) : null}
        </div>

        {!member.isOwner ? 
            <div className="hidden md:inline-block md:relative">
            <button type="button" onClick={() => setOpen(!open)}>
              <img src={dotmenu} className="md:w-6 md:h-6 md:-mt-6" />
            </button>
            {open ? <DropDownCollaborator open={open} setOpen={setOpen} /> : null}
          </div> : null  
        }


        {!member.isOwner ? (
          <div className="flex justify-center items-center gap-x-4 md:hidden">
            <div className="relative">
              <Dropdown>
                <Dropdown.Toggle>
                  {member.accessibility ? (
                    <div className="text-18px md:text-12px md:gap-x-1 md:px-2 border-[1px] rounded-lg px-3 py-1 flex justify-center items-center gap-x-2">
                      <img className="w-4 md:w-3" src={pencil} />
                      <p>Editor</p>
                      <img className="md:w-3" src={chevrondown} />
                    </div>
                  ) : (
                    <div className="text-18px md:text-16px md:gap-x-1 md:px-2 border-[1px] rounded-lg px-3 py-1 flex justify-center items-center gap-x-2">
                      <img className="w-4" src={view} />
                      <p>Viewer</p>
                      <img className="md:w-4" src={chevrondown} />
                    </div>
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-[125px] bg-white rounded-lg">
                  <Dropdown.Item
                    className="flex items-center text-18px md:text-16px"
                    onClick={() => handleSetAccessibility(true)}
                  >
                    <img className="md:w-4" src={pencil} />
                    <span>Editor</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="flex items-center text-18px md:text-16px"
                    onClick={() => handleSetAccessibility(false)}
                  >
                    <img className="md:w-4" src={view} />
                    <span>Viewer</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <button
              type="button"
              className="px-3 py-2 md:p-1.5 border-[1px] rounded-lg"
              onClick={hanldeKickMember}
            >
              <img src={kickmember} className="w-[19px] h-[19px]" />
            </button>
          </div>
        ) : null}
      </div>
      <div>
        <RemoveMemberModal
          removeMember={removeMember}
          setRemoveMember={setRemoveMember}
          userId={userId}
          workspaceIdProp={workspaceIdProp}
        />
      </div>
    </div>
  );
};
