import React, { useState } from "react";
import documentIcon from "../../assets/document_image/document.svg";
import dotsvertical from "../../assets/document_image/dotsvertical.svg";
import pencil from "../../assets/dashboard_image/pencil.svg";
import view from "../../assets/dashboard_image/view.png";
import permission from "../../assets/dashboard_image/permission.png";
import history from "../../assets/dashboard_image/history.png";
import duplicate from "../../assets/dashboard_image/duplicate.png";
import file from "../../assets/dashboard_image/file.png";
import delet from "../../assets/dashboard_image/document.png";
import download from "../../assets/document_image/download.svg"
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export const DocumentList = ({ document }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center text-black text-18px xs:text-14px cursor-pointer">
      <div className="flex items-center gap-x-3">
        <span className="font-bold text-22px text-primary flex gap-x-3">
          <svg
            className="mt-2"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
          >
            <path
              d="M15.1368 6.4H9.2C8.97918 6.4 8.8 6.22082 8.8 6V0.0632031C8.65519 0.0232031 8.52 0 8.4 0H0.4C0.179219 0 0 0.179219 0 0.4V19.6C0 19.8208 0.179219 20 0.4 20H14.8C15.0208 20 15.2 19.8208 15.2 19.6V6.8C15.2 6.68 15.1768 6.5448 15.1368 6.4Z"
              fill="#1E9CEF"
            />
            <path
              d="M9.60059 0.411865V5.59987H14.7886C13.8246 3.84866 11.3518 1.37589 9.60059 0.411865Z"
              fill="#1E9CEF"
            />
          </svg>
          {document.title}
        </span>
        {document?.status ? (
          <div className="flex text-primary gap-x-1 px-3 justify-center rounded-2xl bg-[#EDF9FF] ml-5 xs:text-14px xs:ml-0 xs:px-2 xs:py-2 xs:gap-x-5">
            <p className="text-14px xs:hidden">Editing...</p>
            <img src={pencil} className="w-3 h-3" />
          </div>
        ) : null}
      </div>
      <div className="flex items-center gap-x-3 -z-0">
        <p>{document?.editDate}</p>
        <div className="relative">
          <Menu placement="right-start">
            <MenuHandler>
              <button type="button" onClick={() => setOpen(!open)}>
                <img
                  src={dotsvertical}
                  className="p-2 border-[1px] rounded-lg xs:p-1 xs:w-6"
                />
              </button>
            </MenuHandler>
            <MenuList className="font-semibold text-base text-accent rounded-lg space-y-1 p-2 w-56">
              <MenuItem className="hover:bg-gray-200 p-2 flex items-center gap-x-3">
                {" "}
                <img src={view} />
                <span>View page</span>
              </MenuItem>
              <MenuItem className="hover:bg-gray-200 p-2 flex items-center gap-x-3">
                {" "}
                <img src={permission} />
                <span>Permission</span>
              </MenuItem>
              <MenuItem className="hover:bg-gray-200 p-2 flex items-center gap-x-3">
                {" "}
                <img src={history} />
                <span>Document History</span>
              </MenuItem>
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="hover:bg-gray-200 p-2 flex items-center gap-x-3">
                    {" "}
                    <img src={file} />
                    <span> Export file</span>
                  </MenuItem>
                </MenuHandler>
                <MenuList className="font-semibold text-base text-accent rounded-lg space-y-1 p-2 w-36">
                  <MenuItem className="hover:bg-gray-200 p-2 flex items-center gap-x-3">
                    {" "}
                    <img src={download} />
              <span>.doc</span>
                  </MenuItem>
                  <MenuItem className="hover:bg-gray-200 p-2 flex items-center gap-x-3">
                    {" "}
                    <img src={download} />
              <span>.html</span>
                  </MenuItem>
                  <MenuItem className="hover:bg-gray-200 p-2 flex items-center gap-x-3">
                    {" "}
                    <img src={download} />
              <span>.md</span>
                  </MenuItem>
                </MenuList>
              </Menu>
              <MenuItem className="hover:bg-gray-200 p-2 flex items-center gap-x-3">
                {" "}
                <img src={duplicate} />
                <span>Duplicate </span>
              </MenuItem>
              <MenuItem className="hover:bg-gray-200 p-2 flex items-center gap-x-3">
                {" "}
                <img src={delet} />
                <span className="text-16px font-semibold text-red-500">
                  Delete
                </span>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};
