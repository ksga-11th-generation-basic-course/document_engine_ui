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

export const DocumentCardRow = ({ document, documentId}) => {
  const navigate=useNavigate();
  const [open, setOpen] = useState(false);
  const handleNavigate = () => {
      navigate(`/createdocument/${documentId}`);
  };
  return (
    <div className="flex justify-between items-center gap-x-5 w-full px-5 py-4 shadow-custom rounded-lg cursor-pointer hover:shadow-hover lg:ml-4 lg:w-[620px]">
      <div>
        <div className="flex items-center gap-x-5">
          <h3 className="font-semibold text-20px text-black w-32">
            {document && document.title}
          </h3>
          {document && document.status ? (
            <div className="flex text-primary gap-x-1 px-3 justify-center rounded-2xl bg-[#EDF9FF]">
              <p className="text-14px">Editing...</p>
              <img src={pencil} className="w-4 h-4" />
            </div>
          ) : null}
        </div>
        <p className="text-accent text-16px text-left md:text-10px">
          Edited {document && document.editDate}
        </p>
      </div>
      <div className="relative z-10">
      <Dropdown className="dropdown-end ">
              <Dropdown.Toggle>
              <img src={dotmenu} className="md:w-6" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-60 bg-white border rounded-lg text-base">
                <Dropdown.Item>
                  <img src={view} />
                  <span>View page</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <img src={permission} />
                  <span>Permission</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <img src={history} />
                  <span>Document History</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <img src={duplicate} />
                  <span>Duplicate </span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <img src={file} />
                  <span> Export file</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <img src={delet} />
                  <span>Delete</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
      </div>
    </div>
  );
};
