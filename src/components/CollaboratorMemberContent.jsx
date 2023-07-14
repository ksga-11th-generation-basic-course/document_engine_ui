import React, { useEffect } from "react";
import close from "../assets/dashboard_image/close.svg";
import { MemberWorkspaceCard } from "./card/MemberWorkspaceCard";
import { useDispatch, useSelector } from "react-redux";
import { getMemberInEachWorkspace } from "../redux/service/workspaceService/workspaceService";
import { MemberWorkspaceForMemberViewCard } from "./card/MemberWorkspaceForMemberViewCard ";

export const CollaboratorMemberContent = ({
  openCollaboratorForMember,
  setOpenCollaboratorForMember,
  workspace,
}) => {
  const members = useSelector((state) => state.workspace.members);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemberInEachWorkspace(workspace.workspaceId));
  }, []);
  return (
    <div>
      <div className="flex w-full justify-end">
        <button
          type="button"
          onClick={() =>
            setOpenCollaboratorForMember(!openCollaboratorForMember)
          }
        >
          <img src={close} className="md:w-7"/>
        </button>
      </div>
      <div className="px-16 space-y-5 md:px-3">
        <div className="text-accent">
          <h1 className="font-bold text-34px md:text-22px">Collaborators & permissions</h1>
          <p className="md:text-12px md:-mt-3">Manage permissions and invite people in your workspace</p>
        </div>
        <div>
          <div className="flex justify-between items-center border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg md:px-4">
            <div className="flex justify-center items-center gap-x-3">
              <p className="font-semibold text-22px md:text-18px">Collaborators</p>
            </div>
          </div>
          <div className="px-6 border-[1px] py-4 space-y-4 rounded-b-lg md:px-4">
            {members &&
              members.map((member, index) => (
                <div key={index}>
                  <MemberWorkspaceForMemberViewCard member={member} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
