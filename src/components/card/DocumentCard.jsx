import React, { useState } from "react";
import dotmenu from "../../assets/dashboard_image/dotmenu.png";
import pencil from "../../assets/dashboard_image/pencil.svg";
import { DropDownDocument } from "../../components/DropDownDocument";
import { Link } from "react-router-dom";

export const DocumentCard = ({ document }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md rounded-lg text-black cursor-pointer border-[1px] p-4 space-y-3">
      <Link to={`/createdocument/${document.documentId}`}>
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-20px">{document.title}</h4>
          {document.status ? (
            <div className="flex text-primary gap-x-1 px-3 justify-center rounded-2xl bg-[#EDF9FF]">
              <p className="text-14px">Editing...</p>
              <img src={pencil} className="w-3 h-3" />
            </div>
          ) : null}
        </div>
        <div>
          <h3 className="font-semibold">Introduction to Redux Toolkit</h3>
          <p className="text-sm h-[120px]"></p>
        </div>
        <div className="border-[1px]"></div>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-22px text-primary">
              {document.title}
            </h3>
            <p className="text-14px font-semibold text-accent">
              Edited <span>Edited 9days ago</span>
            </p>
          </div>
          <div className="relative">
            <button type="button" onClick={() => setOpen(!open)}>
              <img src={dotmenu} className="w-8 h-8" />
            </button>
            {open ? <DropDownDocument open={open} setOpen={setOpen} /> : null}
          </div>
        </div>
      </Link>
    </div>
  );
};
