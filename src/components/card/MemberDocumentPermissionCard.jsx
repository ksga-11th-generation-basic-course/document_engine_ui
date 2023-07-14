import React, { useState } from "react";
import pencil from "../../assets/workspace_image/pencil.svg";
import chevrondown from "../../assets/workspace_image/chevrondown.svg";
import { DropDownDocumentPermission } from "../DropDownDocumentPermission";
import view from "../../assets/document_image/view.svg";
import noaccess from "../../assets/document_image/noaccess.svg";
import {
  Menu,
  MenuHandler,
  MenuList,
  select,
  // MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { setAccessibilitySuccess } from "../../redux/slice/documentSlice/documentSlice";
import { useDispatch } from "react-redux";
import { setAccessibility } from "../../redux/service/documentService/documentService";
import Button from "@mui/material/Button";
import Menu2 from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import key from "../../assets/document_image/key.svg";
import dotmenu from "../../assets/workspace_image/dotmenu.svg";

export const MemberDocumentPermissionCard = ({
  username,
  status,
  isOwner,
  currentuser,
  accessibility,
  documentId,
  userId,
  workspaceId,
}) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  // const [permissiom, setPermission] = useState(false);

  const character = username.split("");

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const accessibilityStatus = (status) => {
    switch (status) {
      case "EDITOR":
        return (
          <p className="text-18px text-black font-ssp flex gap-x-2">
            <img src={pencil} alt="" />
            Editor
          </p>
        );
      case "VIEWER":
        return (
          <p className="text-18px text-black font-ssp flex gap-x-2">
            <img src={view} alt="" />
            Viewer
          </p>
        );
      case "NO_ACCESS":
        return (
          <p className="text-18px text-red-500 font-ssp flex gap-x-2">
            <img src={noaccess} alt="" />
            No access
          </p>
        );
    }
  };

  const dispatch = useDispatch();

  const setAccess = async (accessibilityStatus) => {
    const accessibility = await setAccessibility(
      documentId,
      userId,
      accessibilityStatus
    );
    dispatch(setAccessibilitySuccess(accessibility));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [anchorE2, setAnchorE2] = React.useState(null);
  const open2 = Boolean(anchorE2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const secondHandleClick = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const secondHandleClose = () => {
    setAnchorE2(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center gap-x-3">
          <div
            className={`w-9 h-9 ${randomColor} flex justify-center items-center rounded-full md:w-7 md:h-7`}
          >
            <p className="font-semibold text-18px text-white md:text-14px">{character[0]}</p>
          </div>
          <h3 className="font-semibold text-18px">
            {username} {currentuser ? null : <span>(You)</span>}
          </h3>
          {isOwner ? (
            <span className="px-6 text-primary bg-[#EDF9FF] rounded-lg md:hidden">
              Owner
            </span>
          ) : null}
        </div>
        {!status ? (
          <div className="flex justify-center items-center gap-x-4 md:hidden">
            <div className="relative">
              {/* <button
                type="button"
                className="text-18px border-[1px] rounded-lg w-[190px] py-2 flex px-5 justify-between items-center gap-x-2"
                onClick={() => setPermission(!permissiom)}
              >
                {accessibility === "EDITOR" ? (
                  <div className="flex justify-center items-center gap-x-3">
                    <img src={pencil} />
                    <p>{accessibility}</p>
                  </div>
                ) : accessibility === "VIEWER" ? (
                  <div className="flex justify-center items-center gap-x-3">
                    <img src={view} />
                    <p>{accessibility}</p>
                  </div>
                ) : (
                  <div className="flex justify-center items-center gap-x-3 text-red-500">
                    <img src={noaccess} />
                    <p>{accessibility}</p>
                  </div>
                )}
                <img src={chevrondown} className="ml-3" />
              </button> */}
              <Menu open={openMenu} handler={setOpenMenu}>
                <MenuHandler>
                  <button className="flex items-center justify-between w-[190px] border-[1px] py-2 px-3 rounded-lg">
                    {accessibilityStatus(accessibility)}
                    <ChevronDownIcon
                      strokeWidth={3}
                      className={`h-4 w-4 transition-transform ${
                        openMenu ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </MenuHandler>
                <MenuList className="rounded-lg p-2 w-[190px] font-ssp z-[9999]">
                  <MenuItem
                    className="flex justify-start items-center p-3 hover:bg-gray-200 rounded-lg gap-x-2"
                    onClick={() => setAccess("EDITOR")}
                  >
                    <img src={pencil} alt="" />
                    <p className="text-18px text-black">Editor</p>
                  </MenuItem>
                  <MenuItem
                    className="flex justify-start p-3 hover:bg-gray-200 rounded-lg gap-x-2"
                    onClick={() => setAccess("VIEWER")}
                  >
                    <img src={view} alt="" />
                    <p className="text-18px text-black">Viewer</p>
                  </MenuItem>
                  <MenuItem
                    className="flex justify-start items-center p-3 hover:bg-gray-200 rounded-lg gap-x-2"
                    onClick={() => setAccess("NO_ACCESS")}
                  >
                    <img src={noaccess} alt="" />
                    <p className="text-18px text-red-500">No access</p>
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* <div>
                {permissiom ? (
                  <DropDownDocumentPermission
                    workspaceId={workspaceId}
                    documentId={documentId}
                    userId={userId}
                    permissiom={permissiom}
                    setPermission={setPermission}
                  />
                ) : null}

              </div> */}
            </div>
          </div>
        ) : null}

            {/* For Mobile */}
            {!status ? (
          <div className="hidden lg:hidden md:inline-block">
            <img
              src={dotmenu}
              className="w-3 h-3"
              onClick={handleClick}
            />
            <Menu2
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              className="-ml-16 hidden lg:hidden md:inline-block"
            >
              {/* Permission */}
              <MenuItem>
              <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    className="px-4"
                  >
                    <FormControlLabel
                      value="editor"
                      control={<Radio />}
                      label="Editor"
                      onClick={() => setAccess("EDITOR")}
                      checked={accessibilityStatus(accessibility) === "EDITOR" ?  select : null}
                    />
                    <FormControlLabel
                      value="viewer"
                      control={<Radio />}
                      label="Viewer"
                      // onClick={() => setAccess("VIEWER")}
                      // checked={accessibilityStatus(accessibility) === "VIEWER" ?  select : null}
                    />
                    <FormControlLabel
                      value="no_access"
                      control={<Radio />}
                      label="No access"
                      // onClick={() => setAccess("NO_ACCESS")}
                      // checked={accessibilityStatus(accessibility) === "NO_ACCESS" ?  select : null}
                    />
                  </RadioGroup>
              </MenuItem>
            </Menu2>
          </div>
        ) : null}

      </div>
    </div>
  );
};
