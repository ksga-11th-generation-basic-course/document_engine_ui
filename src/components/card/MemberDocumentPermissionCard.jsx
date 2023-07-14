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
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { setAccessibilitySuccess } from "../../redux/slice/documentSlice/documentSlice";
import { useDispatch } from "react-redux";
import { setAccessibility } from "../../redux/service/documentService/documentService";

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
          <div className="flex justify-center items-center gap-x-4">
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
      </div>
    </div>
  );
};
