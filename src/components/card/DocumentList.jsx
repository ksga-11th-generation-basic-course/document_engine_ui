import React, { useState } from "react";
import documentIcon from "../../assets/document_image/document.svg";
import dotsvertical from "../../assets/document_image/dotsvertical.svg";
import pencil from "../../assets/dashboard_image/pencil.svg";
import { DropDownDocument } from "../DropDownDocument";

export const DocumentList = ({ document }) => {
  const [open, setOpen] = useState(false);

  console.log(document);

  return (
    <div className="flex justify-between items-center text-black text-18px xs:text-14px">
      <div className="flex items-center gap-x-3">
        <img src={documentIcon} />
        <p>{document?.title}</p>
        {document?.status ? (
          <div className="flex text-primary gap-x-1 px-3 justify-center rounded-2xl bg-[#EDF9FF] ml-5 xs:text-14px xs:ml-0 xs:px-2 xs:py-2 xs:gap-x-5">
            <p className="text-14px xs:hidden">Editing...</p>
            <img src={pencil} className="w-3 h-3" />
          </div>
        ) : null}
      </div>
      <div className="flex items-center gap-x-3 -z-0">
        <p>{document?.editDate}</p>
        <div className="relative -z-0">
          <button type="button" onClick={() => setOpen(!open)}>
            <img
              src={dotsvertical}
              className="p-2 border-[1px] rounded-lg xs:p-1 xs:w-6"
            />
          </button>
          {open ? <DropDownDocument open={open} setOpen={setOpen} /> : null}
        </div>
      </div>
    </div>
  );
};
