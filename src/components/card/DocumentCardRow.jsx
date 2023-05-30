import React, { useState } from "react";
import dotmenu from "../../assets/dashboard_image/dotmenu.png";
import pencil from "../../assets/dashboard_image/pencil.svg";
import { DropDownDocument } from "../DropDownDocument";

export const DocumentCardRow = ({ documentname, editDate, status }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center gap-x-5 w-full px-5 py-4 shadow-md rounded-lg cursor-pointer">
      <div>
        <div className="flex justify-center items-center gap-x-5">
          <h3 className="font-semibold text-20px text-black">{documentname}</h3>
          {status ? (
            <div className="flex text-primary gap-x-1 px-3 justify-center rounded-2xl bg-[#EDF9FF]">
              <p>Editing...</p>
              <img src={pencil} className="w-4 h-4" />
            </div>
          ) : null}
        </div>
        <p className="text-accent text-18px text-left">{editDate}</p>
      </div>
      <div className="relative">
        <button type="button" onClick={() => setOpen(!open)}>
          <img src={dotmenu} />
        </button>
        {open ? <DropDownDocument open={open} setOpen={setOpen} /> : null}
      </div>
    </div>
  );
};
