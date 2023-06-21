import React, { useState } from "react";
import document from "../../assets/document_image/document.svg";
import dotsvertical from "../../assets/document_image/dotsvertical.svg";
import pencil from "../../assets/dashboard_image/pencil.svg";
import { DropDownDocument } from "../DropDownDocument";

export const DocumentList = ({ title, status, editdate }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center text-black text-18px lg:w-[675px] md:w-full md:text-lg ">
      <div className="flex items-center gap-x-3 ">
        <img src={document} className="md:w-5"/>
        <p>{title}</p>
        {status ? (
          <div className="flex text-primary gap-x-1 px-3 justify-center rounded-2xl bg-[#EDF9FF] ml-5 ">
            <p className="text-14px xs:hidden">Editing...</p>
            <img src={pencil} className="w-3 h-3 " />
          </div>
        ) : null}
      </div>
      <div className="flex items-center gap-x-3 md:ml-16">
        <p>{editdate}</p>
        <div className="relative ">
          <button type="button" onClick={() => setOpen(!open)}>
            <img src={dotsvertical} className="p-2 border-[1px] rounded-lg  md:w-8 " />
          </button>
          {open ? <DropDownDocument open={open} setOpen={setOpen} /> : null}
        </div>
      </div>
    </div>
  );
};
