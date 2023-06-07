import React, { useState } from "react";
import dotmenu from "../../assets/dashboard_image/dotmenu.png";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-daisyui";
import { RemoveWorkspaceModal } from "../../modal/RemoveWorkspaceModal";
import setting from "../../assets/dashboard_image/setting.svg";
import trush from "../../assets/dashboard_image/trush.svg";
import { WorkspaceSettingModal } from "../../modal/WorkspaceSettingModal";

export const WorkspaceCard = ({ workspace }) => {
  const [workspaceId, setWorkspaceId] = useState();
  const [removeWorkspace, setRemoveWorkspace] = useState(false);
  const [openWorkspaceSetting, setOpenWorkspaceSetting] = useState(false);
  const [workspaceCode, setWorkspaceCode] = useState();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/document/${workspace.workspaceId}`);
  };

  const handleRemoveWorkspace = () => {
    setRemoveWorkspace(!removeWorkspace);
    setWorkspaceId(workspace.workspaceId);
  };

  const handleSettingWorkspace = () => {
    setOpenWorkspaceSetting(!openWorkspaceSetting);
    setWorkspaceId(workspace.workspaceId);
    setWorkspaceCode(workspace.workspaceCode);
  };

  return (
    <div className="shadow-md rounded-lg text-accent cursor-pointer sm:w-[300px]">
      <div className="flex justify-between items-center p-3">
        <h4 className="font-semibold text-18px">{workspace.workspaceName}</h4>
        {workspace.isOwner ? (
          <p className="border-[1px] rounded-full px-3">Owner</p>
        ) : null}
      </div>
      <div className="h-[215px] overflow-hidden" onClick={handleNavigate}>
        <img src={workspace.workspaceImage} />
      </div>
      <div className="flex justify-between items-center p-3">
        <div>
          <h3 className="font-semibold text-18px">
            {workspace.totalDocument} Documents
          </h3>
          <p className="text-14px">
            Create date: <span>{workspace.createdDate}</span>
          </p>
        </div>
        {workspace.isOwner && (
          <div className="relative">
            <Dropdown horizontal="right" vertical="middle">
              <Dropdown.Toggle>
                <img src={dotmenu} />
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-52 bg-white rounded-lg">
                <Dropdown.Item onClick={handleSettingWorkspace}>
                  <img src={setting} className="w-6 h-6" />
                  <span>Setting</span>
                </Dropdown.Item>
                <Dropdown.Item onClick={handleRemoveWorkspace}>
                  <img src={trush} className="w-5 h-5" />
                  <span>Remove</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </div>
      <RemoveWorkspaceModal
        removeWorkspace={removeWorkspace}
        setRemoveWorkspace={setRemoveWorkspace}
        workspaceId={workspaceId}
      />
      <WorkspaceSettingModal
        openWorkspaceSetting={openWorkspaceSetting}
        setOpenWorkspaceSetting={setOpenWorkspaceSetting}
        workspaceCode={workspaceCode}
        workspaceId={workspaceId}
      />
    </div>
  );
};
