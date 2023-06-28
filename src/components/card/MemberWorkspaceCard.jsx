import React, { useEffect, useState } from "react";
import pencil from "../../assets/workspace_image/pencil.svg";
import chevrondown from "../../assets/workspace_image/chevrondown.svg";
import { RemoveMemberModal } from "../../modal/RemoveMemberModal";
import { Dropdown } from "react-daisyui";
import view from "../../assets/workspace_image/view.svg";
import kickmember from "../../assets/workspace_image/kickmember.svg";
import { setAccessibility } from "../../redux/service/workspaceService/workspaceService";
import { useDispatch, useSelector } from "react-redux";
import { setAccessibilitySuccess } from "../../redux/slice/workspaceSlice/workspaceSlice";
import { getCurrentUser } from "../../redux/service/userService/userService";
import dotmenu from "../../assets/dashboard_image/dotmenu.png";
import { DropDownCollaborator } from "../DropDownCollaborator";

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

  const user = useSelector((state) => state.user.user);

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

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center w-full space-y-4">
        <div className="flex justify-center items-center gap-x-3 md:gap-x-2.5">
          <div
            className={`w-9 h-9 ${randomColor} flex justify-center items-center rounded-full overflow-hidden md:w-6 md:h-6`}
          >
            {member.profileImage === null ? (
              <p className="font-semibold text-18px text-white md:text-12px">
                {character[0]}
              </p>
            ) : (
              <img src={member.profileImage} className="w-full h-full" />
            )}
          </div>
          <h3 className="font-semibold text-18px md:text-15px">{member.username}</h3>
          {member.isOwner ? (
            <div>
              <span className="px-6 md:px-2 text-primary bg-[#EDF9FF] rounded-lg md:text-12px">
                Owner
              </span>
            </div>
          ) : null}
          {user.userId === member.userId ? (
            <span>(You)</span>
          ) : null}
        </div>
        {!member.isOwner ? (
          <div className="flex justify-center items-center gap-x-4 md:gap-x-2">
            <div className="relative">
              <Dropdown>
                <Dropdown.Toggle>
                  {member.accessibility ? (
                    <div className="text-18px md:text-16px md:gap-x-1 md:px-2 border-[1px] rounded-lg px-3 py-1 flex justify-center items-center gap-x-2">
                      <img className="w-4" src={pencil} />
                      <p>Editor</p>
                      <img className="md:w-4" src={chevrondown} />
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
              <img src={kickmember} className="w-[19px] h-[19px] md:w-2.5"/>
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
