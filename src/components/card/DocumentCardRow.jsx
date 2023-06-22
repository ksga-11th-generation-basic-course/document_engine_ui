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

export const DocumentCardRow = ({ documentname, editDate, status, documentId}) => {
  const navigate=useNavigate();
  const [open, setOpen] = useState(false);
  const handleNavigate = () => {
      navigate(`/createdocument/${documentId}`);
  };
  return (
    <div className="animate-fade-left animate-once transition ease-out delay-75 hover:-translate-y-1 hover:scale-105 duration-300 flex justify-between items-center gap-x-5 w-full shadow-custom rounded-lg cursor-pointer lg:ml-4 lg:w-[620px]">
      <div className="w-full h-full px-5 py-4" onClick={handleNavigate}>
        <div className="flex gap-x-5">
          <h3 className="font-semibold text-20px text-black w-32 ">{documentname}</h3>
          {status ? (
            <div className="flex text-primary gap-x-1 px-3 justify-center rounded-2xl bg-[#EDF9FF]">
              <p className="text-14px">Editing...</p>
              <img src={pencil} className="w-4 h-4" />
            </div>
          ) : null}
        </div>
        <p className="text-accent text-16px text-left">{editDate}</p>
      </div>
      <div className="relative z-10">
      <Dropdown className="dropdown-end ">
              <Dropdown.Toggle>
              <img src={dotmenu} />
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-60 bg-white border rounded-lg text-base">
                <Dropdown.Item>
                  <img src={view} />
                  <span>View page</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
      </div>
    </div>
  );
};
