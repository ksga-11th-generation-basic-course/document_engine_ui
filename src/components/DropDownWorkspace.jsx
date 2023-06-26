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
    <div >
      {open && (
        <div className="fixed inset-0" onClick={() => setOpen(!open)}></div>
      )}
      <div className="absolute right-0 px-2 md:p-0 w-[200px] md:w-[160px] text-accent rounded-lg shadow-custom hover:shadow-hover bg-white">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-0.5 py-2 md:ml-1 md:px-2">
            <Link
              className="flex items-center text-20px md:text-18px gap-x-4 hover:bg-[#f4f4f4] px-3  py-3 rounded-lg md:px-2 md:py-2 md:gap-x-3"
              onClick={() => setOpenWorkspaceSetting(!openWorkspaceSetting)}
            >
              <img src={setting} className="w-6 h-6 md:w-5 md:h-5" />
              <span>Setting </span>
            </Link>
            <Link
              className="flex items-center text-20px gap-x-4 md:text-18px text-red-500 hover:bg-[#f4f4f4]  px-3  py-3 rounded-lg md:px-2 md:py-2 md:gap-x-3"
              onClick={() => setRemoveWorkspace(!removeWorkspace)}
            >
              <img src={trush} className="w-5 h-5  md:w-4 md:h-4" />
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
