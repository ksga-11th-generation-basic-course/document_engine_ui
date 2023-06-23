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
import { Dropdown } from "react-daisyui";

export const DocumentCardRow = ({
  documentname,
  editDate,
  status,
  documentId,
  workspaceId
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleNavigate = () => {
    navigate(`/createdocument/${documentId}/${workspaceId}`);
  };
  return (
    <div className="flex justify-between items-center gap-x-5 w-full shadow-custom rounded-lg cursor-pointer lg:w-full md:-ml-5 md:px-4 md:w-[350px] md:py-2.5 md:pl-5">
      <div className="w-full h-full px-5 py-4" onClick={handleNavigate}>
        <div className="flex gap-x-5">
          <h3 className="font-semibold text-22px text-black w-44 md:text-12px md:w-24 ">
            {documentname}
          </h3>
          {status ? (
            <div className="flex text-primary gap-x-1 px-3 justify-center items-center rounded-2xl bg-[#EDF9FF]">
              <p className="xl:text-14px mr-2 md:text-10px">Editing...</p>
              <img src={pencil} className="w-4 h-4 md:w-2 md:h-2" />
            </div>
          ) : null}
        </div>
        <p className="text-accent text-16px text-left md:text-10px">
          Edited {editDate}
        </p>
      </div>
      <div className="relative z-10">
        <Dropdown className="dropdown">
          <Dropdown.Toggle>
            <img src={dotmenu} className="md:w-6" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-60 bg-white border rounded-lg text-base">
            <Dropdown.Item onClick={handleNavigate}>
              <img src={view} />
              <span>View page</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
