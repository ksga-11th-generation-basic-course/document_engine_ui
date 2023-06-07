import React, { useState } from "react";
import trush from "../assets/dashboard_image/trush.svg";
import { Link } from "react-router-dom";
import setting from "../assets/dashboard_image/setting.svg";
import { RemoveWorkspaceModal } from "../modal/RemoveWorkspaceModal";
import { WorkspaceSettingModal } from "../modal/WorkspaceSettingModal";

export const DropDownWorkspace = ({ open, setOpen, workspaceId }) => {
  const [removeWorkspace, setRemoveWorkspace] = useState(false);
  const [openWorkspaceSetting, setOpenWorkspaceSetting] = useState(false);

  const handleOpenDropDownWorkspace = () => {
    setRemoveWorkspace(!removeWorkspace);
    setWorkspaceId(workspace.workspaceId);
  };

  return (
    <div>
      {open && (
        <div className="fixed inset-0" onClick={() => setOpen(!open)}></div>
      )}
      <div className="absolute right-0 p-2 md:p-0 w-[250px] md:w-[150px] text-accent rounded-lg shadow-md bg-white">
        <div className="flex flex-col gap-y-5 px-5">
          <div className="flex flex-col gap-y-5 py-5">
            <Link
              className="flex items-center text-18px gap-x-4"
              onClick={() => setOpenWorkspaceSetting(!openWorkspaceSetting)}
            >
              <img src={setting} className="w-6 h-6" />
              <span>Setting </span>
            </Link>
            <Link
              className="flex items-center text-18px gap-x-4 text-red-500"
              onClick={() => {
                setRemoveWorkspace(!removeWorkspace);
              }}
            >
              <img src={trush} className="w-5 h-5" />
              <span>Remove</span>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <RemoveWorkspaceModal
          removeWorkspace={removeWorkspace}
          setRemoveWorkspace={setRemoveWorkspace}
          workspaceId={workspaceId}
        />
        <WorkspaceSettingModal
          openWorkspaceSetting={openWorkspaceSetting}
          setOpenWorkspaceSetting={setOpenWorkspaceSetting}
        />
      </div>
    </div>
  );
};
