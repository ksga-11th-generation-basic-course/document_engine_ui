import React, { useState } from "react";
import setting from "../assets/document_image/settings.svg";
import group from "../assets/document_image/group.svg";
import { WorkspaceSettingModal } from "../modal/WorkspaceSettingModal";
import { WorkspaceViewForMemberModal } from "../modal/WorkspaceViewForMemberModal";

export const DropDownWorkspaceSetting = ({
  workspaceSetting,
  setWorkspaceSetting,
}) => {
  const [openWorkspaceSetting, setOpenWorksapceSetting] = useState(false);

  const [openCollaborator, setOpenCollaborator] = useState(false);

  return (
    <div>
      {open && (
        <div
          className="fixed inset-0"
          onClick={() => setWorkspaceSetting(!workspaceSetting)}
        ></div>
      )}
      <div className="absolute -right-2 p-2 w-[300px] text-accent rounded-lg shadow-md bg-white z-50">
        <div className="flex flex-col gap-y-5 px-5">
          <div className="flex flex-col gap-y-5 py-5">
            <button
              className="flex items-center text-18px gap-x-4"
              type="button"
              onClick={() => setOpenWorksapceSetting(!openWorkspaceSetting)}
            >
              <img src={setting} />
              <span>Setting Workspace</span>
            </button>
            <button
              className="flex items-center text-18px gap-x-4"
              type="button"
              onClick={() => setOpenCollaborator(!openCollaborator)}
            >
              <img src={group} />
              <span>View member</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <WorkspaceSettingModal
          openWorkspaceSetting={openWorkspaceSetting}
          setOpenWorkspaceSetting={setOpenWorksapceSetting}
        />
        <WorkspaceViewForMemberModal
          openCollaborator={openCollaborator}
          setOpenCollaborator={setOpenCollaborator}
        />
      </div>
    </div>
  );
};
