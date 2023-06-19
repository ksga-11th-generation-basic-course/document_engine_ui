import React, { useState } from "react";
import dotmenu from "../../assets/workspace_image/dotmenu.svg";
import { useNavigate } from "react-router-dom";
import { RemoveWorkspaceModal } from "../../modal/RemoveWorkspaceModal";
import setting from "../../assets/dashboard_image/setting.svg";
import trush from "../../assets/dashboard_image/trush.svg";
import { WorkspaceSettingModal } from "../../modal/WorkspaceSettingModal";
import { Dropdown } from "react-daisyui";
import { LeaveWorkspaceModal } from "../../modal/LeaveWorkspaceModal";

export const WorkspaceCard = ({ workspace }) => {
  const [workspaceId, setWorkspaceId] = useState();
  const [removeWorkspace, setRemoveWorkspace] = useState(false);
  const [openWorkspaceSetting, setOpenWorkspaceSetting] = useState(false);
  const [workspaceCode, setWorkspaceCode] = useState();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(
      `/document/${workspace.workspaceId}`
    );
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

  const [leaveWorkspace, setLeaveWorkspace] = useState(false);

  const handleLeaveWorkspace = () => {
    setWorkspaceId(workspace.workspaceId);
    setLeaveWorkspace(!leaveWorkspace);
  };

  return (
    <div className="shadow-md rounded-lg text-accent cursor-pointer sm:w-[300px] border-[1px]">
      <div className="flex justify-between items-center p-3">
        <h4 className="font-semibold text-18px">
          {workspace && workspace.workspaceName}
        </h4>
        {workspace && workspace.isOwner ? (
          <p className="border-[1px] rounded-full px-3">Owner</p>
        ) : null}
      </div>
      <div className="h-[200px] overflow-hidden" onClick={handleNavigate}>
        <img src={workspace && workspace.workspaceImage} className="w-full" />
      </div>
      <div className="flex justify-between items-center p-3">
        <div>
          <h3 className="font-semibold text-18px">
            {workspace && workspace.totalDocument} Documents
          </h3>
          <p className="text-14px">
            Create date: <span>{workspace && workspace.createdDate}</span>
          </p>
        </div>
        {workspace && workspace.isOwner ? (
          <div className="relative">
            <Dropdown className="dropdown-right">
              <Dropdown.Toggle>
                <img src={dotmenu} className="w-[6px]" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-52 bg-white rounded-lg text-base">
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
        ) : (
          <div className="relative">
            <Dropdown className="dropdown-right">
              <Dropdown.Toggle>
                <img src={dotmenu} className="w-[6px]" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-52 bg-white rounded-lg text-base">
                <Dropdown.Item onClick={handleLeaveWorkspace}>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_15_12278)">
                      <path
                        d="M12.5 5.25V1.3125H1.25M1.25 1.3125V14.4375L7.5 19.6875V6.5625L1.25 1.3125ZM11.25 13.125H18.75M18.75 13.125L15 9.1875M18.75 13.125L15 17.0625"
                        stroke="#FF5658"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_15_12278">
                        <rect width="20" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Leave Workspace</span>
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
        workspace={workspace}
      />
      <LeaveWorkspaceModal
        leaveWorkspace={leaveWorkspace}
        setLeaveWorkspace={setLeaveWorkspace}
        workspaceId={workspaceId}
      />
    </div>
  );
};
