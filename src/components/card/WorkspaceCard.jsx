import React, { useState } from "react";
import dotmenu from "../../assets/workspace_image/dotmenu.svg";
import { useNavigate } from "react-router-dom";
import { RemoveWorkspaceModal } from "../../modal/RemoveWorkspaceModal";
import setting from "../../assets/dashboard_image/setting.svg";
import trush from "../../assets/dashboard_image/trush.svg";
import { WorkspaceSettingModal } from "../../modal/WorkspaceSettingModal";
import { LeaveWorkspaceModal } from "../../modal/LeaveWorkspaceModal";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export const WorkspaceCard = ({ workspace }) => {
  const [workspaceId, setWorkspaceId] = useState();
  const [removeWorkspace, setRemoveWorkspace] = useState(false);
  const [openWorkspaceSetting, setOpenWorkspaceSetting] = useState(false);
  const [workspaceCode, setWorkspaceCode] = useState();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/document/${workspace.workspaceId}`);
  };

  const handleRemoveWorkspace = () => {
    setRemoveWorkspace(!removeWorkspace);
    setWorkspaceId(workspace.workspaceId);
    handleClose();
  };

  const handleSettingWorkspace = () => {
    setOpenWorkspaceSetting(!openWorkspaceSetting);
    setWorkspaceId(workspace.workspaceId);
    setWorkspaceCode(workspace.workspaceCode);
    handleClose();
  };

  const [leaveWorkspace, setLeaveWorkspace] = useState(false);

  const handleLeaveWorkspace = () => {
    setWorkspaceId(workspace.workspaceId);
    setLeaveWorkspace(!leaveWorkspace);
  };

  return (
    <div className="shadow-md rounded-lg text-accent cursor-pointer  border-[1px] hover:shadow-hover">
      <div className="flex justify-between items-center p-3">
        <h4 className="font-semibold text-18px w-44 line-clamp-1">
          {workspace && workspace.workspaceName}
        </h4>
        {workspace && workspace.isOwner ? (
          <p className="rounded-full text-primary">Owner</p>
        ) : null}
      </div>
      <div className="h-[200px] overflow-hidden md:h-[150px]" onClick={handleNavigate}>
        <img src={workspace && workspace.workspaceImage} className="w-full" />
      </div>
      <div className="flex justify-between items-center p-3">
        <div>
          <h3 className="font-semibold text-18px">
            {(workspace && workspace.totalDocument === 0) ||
            workspace.totalDocument === 1 ? (
              <p>{workspace.totalDocument} Document</p>
            ) : (
              <p>{workspace.totalDocument} Documents</p>
            )}
          </h3>
          <p className="text-14px leading-3 md:text-12px">
            Created date: <span>{workspace && workspace.createdDate}</span>
          </p>
        </div>
        {workspace && workspace.isOwner ? (
          <div className="relative">
            <Menu placement="right-start">
              <MenuHandler>
                <button>
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                    <path d="M12 4a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                    <path d="M12 18a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                  </svg>
                </button>
              </MenuHandler>
              <MenuList className="rounded-lg space-y-2 p-2 w-56 text-accent font-ssp z-20">
                <MenuItem
                  className="flex gap-x-3 items-center hover:bg-gray-200 p-2"
                  onClick={handleSettingWorkspace}
                >
                  <img src={setting} className="w-6 h-6" />
                  <span className="text-18px">Setting</span>
                </MenuItem>
                <MenuItem
                  className="flex gap-x-3 items-center hover:bg-gray-200 p-2"
                  onClick={handleRemoveWorkspace}
                >
                  {" "}
                  <img src={trush} className="w-5 h-5" />
                  <span className="text-red-500 text-18px ml-[3px]">
                    Remove
                  </span>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        ) : (
          <div className="relative">
            <Menu placement="right-start">
              <MenuHandler>
                <button type="button">
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                    <path d="M12 4a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                    <path d="M12 18a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                  </svg>
                </button>
              </MenuHandler>
              <MenuList className="rounded-lg space-y-2 p-2 w-56 text-accent font-ssp">
                <MenuItem
                  className="flex gap-x-3 items-center hover:bg-gray-200 p-2"
                  onClick={handleLeaveWorkspace}
                >
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
                  <span className="text-18px">Leave Workspace</span>
                </MenuItem>
              </MenuList>
            </Menu>
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