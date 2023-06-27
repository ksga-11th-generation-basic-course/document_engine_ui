import React, { useState } from "react";
import dotmenu from "../../assets/workspace_image/dotmenu.svg";
import { useNavigate } from "react-router-dom";
import { RemoveWorkspaceModal } from "../../modal/RemoveWorkspaceModal";
import setting from "../../assets/dashboard_image/setting.svg";
import trush from "../../assets/dashboard_image/trush.svg";
import { WorkspaceSettingModal } from "../../modal/WorkspaceSettingModal";
import { LeaveWorkspaceModal } from "../../modal/LeaveWorkspaceModal";
import { Dropdown } from "react-daisyui";

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
            <Menu>
              <MenuHandler>
                <Button>Open Menu</Button>
              </MenuHandler>
              <MenuList>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
              </MenuList>
            </Menu>
            {/* <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton> */}
            {/* <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem
                onClick={handleSettingWorkspace}
                className="flex items-center w-40 hover:bg-gray-200 hover:text-accent gap-x-3 p-3"
              >
                {" "}
                <img src={setting} className="w-6 h-6" />
                <span className=" font-semibold text-16px text-accent">Setting</span>
              </MenuItem>
              <MenuItem
                onClick={handleRemoveWorkspace}
                className="flex items-center w-40 hover:bg-gray-200 hover:text-accent gap-x-3 p-3"
              >
                {" "}
                <img src={trush} className="w-5 h-5" />
                <span className="text-red-500 font-semibold text-16px">
                  Remove
                </span>
              </MenuItem>
            </Menu> */}
            {/* <Dropdown
              icon={
                <svg
                  width="5"
                  height="14"
                  viewBox="0 0 5 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.40202 13.8626C1.94369 13.8626 1.55119 13.6993 1.22452 13.3726C0.897853 13.046 0.734797 12.6537 0.735353 12.196C0.735353 11.7376 0.898687 11.3451 1.22535 11.0185C1.55202 10.6918 1.94424 10.5287 2.40202 10.5293C2.86035 10.5293 3.25285 10.6926 3.57952 11.0193C3.90619 11.346 4.06924 11.7382 4.06869 12.196C4.06869 12.6543 3.90535 13.0468 3.57869 13.3735C3.25202 13.7001 2.8598 13.8632 2.40202 13.8626ZM2.40202 8.86263C1.94369 8.86263 1.55119 8.6993 1.22452 8.37263C0.897853 8.04596 0.734797 7.65374 0.735353 7.19596C0.735353 6.73763 0.898687 6.34513 1.22535 6.01847C1.55202 5.6918 1.94424 5.52874 2.40202 5.5293C2.86035 5.5293 3.25285 5.69263 3.57952 6.0193C3.90619 6.34597 4.06924 6.73819 4.06869 7.19596C4.06869 7.6543 3.90535 8.0468 3.57869 8.37347C3.25202 8.70013 2.8598 8.86319 2.40202 8.86263ZM2.40202 3.86263C1.94369 3.86263 1.55119 3.6993 1.22452 3.37263C0.897853 3.04596 0.734797 2.65374 0.735353 2.19596C0.735353 1.73763 0.898687 1.34513 1.22535 1.01846C1.55202 0.691798 1.94424 0.528743 2.40202 0.529298C2.86035 0.529298 3.25285 0.692631 3.57952 1.0193C3.90619 1.34596 4.06924 1.73819 4.06869 2.19596C4.06869 2.6543 3.90535 3.0468 3.57869 3.37347C3.25202 3.70013 2.8598 3.86319 2.40202 3.86263Z"
                    fill="#526581"
                  />
                </svg>
              }
              noCaret
            >
              <Dropdown.Item
                onClick={handleSettingWorkspace}
                className="flex items-center w-40 hover:bg-gray-200 hover:text-accent gap-x-3 p-3"
              >
                <img src={setting} className="w-6 h-6" />
                <span className="font-semibold text-16px">Setting</span>
              </Dropdown.Item>
              <Dropdown.Item
                onClick={handleRemoveWorkspace}
                className="flex items-center w-40 hover:bg-gray-200 hover:text-accent gap-x-3 p-3"
              >
                <img src={trush} className="w-5 h-5" />
                <span className="text-red-500 font-semibold text-16px">
                  Remove
                </span>
              </Dropdown.Item>
            </Dropdown> */}
            {/* <Dropdown className="dropdown-right">
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
            </Dropdown> */}
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
