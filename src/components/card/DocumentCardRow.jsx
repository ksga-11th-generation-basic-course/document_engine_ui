import React, { useEffect, useState } from "react";
import pencil from "../../assets/dashboard_image/pencil.svg";
import dotmenu from "../../assets/dashboard_image/dotmenu.png";
import view from "../../assets/dashboard_image/view.png";
import permission from "../../assets/dashboard_image/permission.png";
import history from "../../assets/dashboard_image/history.png";
import duplicate from "../../assets/dashboard_image/duplicate.png";
import file from "../../assets/dashboard_image/file.png";
import delet from "../../assets/dashboard_image/document.png";
import { DropDownDocument } from "../DropDownDocument";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown } from "react-daisyui";

export const DocumentCardRow = ({
  documentname,
  editDate,
  status,
  documentId,
  workspaceId,
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleNavigate = () => {
    navigate(`/createdocument/${documentId}/${workspaceId}`);
  };

  return (
    <div className="flex justify-between items-center px-3 gap-x-5 w-full shadow-custom rounded-lg cursor-pointer lg:w-full md:-ml-5 md:w-[330px] md:py-0 md:px-0 z-0 hover:shadow-hover">
      <div className="w-full h-full px-5 py-4" onClick={handleNavigate}>
        <div className="flex gap-x-5">
          <h3 className="font-semibold text-22px text-black w-44 md:text-16px md:w-24 line-clamp-1 md:-mt-4">
            {documentname}
          </h3>
          {status ? (
            <div className="flex text-primary gap-x-1 px-3 justify-center items-center rounded-2xl bg-[#EDF9FF]">
              <p className="xl:text-14px mr-2 md:text-10px">Editing...</p>
              <img src={pencil} className="w-3 h-3 -ml-1 md:w-2 md:h-2" />
            </div>
          ) : null}
        </div>
        <p className="text-accent text-16px text-left md:text-12px md:-mt-2">
          Edited 
          {editDate > 0 ?
                <span className="ml-1">
                {editDate >= 60 ? Math.trunc(editDate/60) : editDate}  
                {editDate >= 2880 ? "days ago" : editDate >= 1440 ? "day ago" : editDate >= 120 ? " hours ago" : editDate >= 60 ? " hour ago"  : editDate > 1 ? " minutes ago" : " minute ago"}
                </span> : " Just Now"  
        }
        </p>
      </div>
      <div className="relative">
        <Dropdown className="dropdown relative">
          <Button
            className="bg-white hover:bg-gray-50 border-none rounded-xl"
            onClick={() => setVisible(!visible)}
          >
            <img src={dotmenu} className="w-12 " />
          </Button>
          {visible ? (
            <Dropdown.Menu className="w-52 bg-white border rounded-lg absolute right-0 md:w-40">
              <Dropdown.Item onClick={handleNavigate}>
                <img src={view} className="md:w-4" />
                <span className="text-20px md:text-16px">View page</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          ) : null}
        </Dropdown>
      </div>
    </div>
  );
};