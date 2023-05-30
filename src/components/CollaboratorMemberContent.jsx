import React from "react";
import close from "../assets/dashboard_image/close.svg";
import { MemberWorkspaceCard } from "./card/MemberWorkspaceCard";

export const CollaboratorMemberContent = ({
  openWorkspaceSetting,
  setOpenWorkspaceSetting,
}) => {
  return (
    <div>
      <div className="flex w-full justify-end">
        <button
          type="button"
          onClick={() => setOpenWorkspaceSetting(!openWorkspaceSetting)}
        >
          <img src={close} />
        </button>
      </div>
      <div className="px-16 space-y-5">
        <div className="text-accent">
          <h1 className="font-bold text-34px">Collaborators & permissions</h1>
          <p>Manage permissions and invite people in your workspace</p>
        </div>
        <div>
          <div className="flex justify-between items-center border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg">
            <div className="flex justify-center items-center gap-x-3">
              <p className="font-semibold text-18px">Collaborators</p>
            </div>
          </div>
          <div className="px-6 border-[1px] py-4 space-y-4 rounded-b-lg">
            <MemberWorkspaceCard
              username={"Tith Ouddom"}
              status={true}
              isOwner={true}
              currentuser={false}
            />
            <MemberWorkspaceCard username={"Kheng Sovannak"} status={true} isOwner={false} currentuser={true}/>
            <MemberWorkspaceCard username={"Yan Sovanseyha"} status={true} isOwner={false} currentuser={false}/>
          </div>
        </div>
      </div>
    </div>
  );
};
