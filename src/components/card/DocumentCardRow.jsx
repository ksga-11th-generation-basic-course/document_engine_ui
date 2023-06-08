import React, { useState } from "react";
import dotmenu from "../../assets/dashboard_image/dotmenu.png";
import pencil from "../../assets/dashboard_image/pencil.svg";
import { DropDownDocument } from "../DropDownDocument";

export const DocumentCardRow = ({ documentname, editDate, status }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center gap-x-5 w-full px-5 py-4 shadow-custom rounded-lg cursor-pointer hover:shadow-hover lg:w-full md:-ml-5 md:px-4 md:w-[350px] md:py-2.5 md:pl-5">
      <div>
        <div className="flex justify-center items-center gap-x-5">
          <h3 className="font-semibold text-22px text-black w-44 md:text-12px md:w-24">{documentname}</h3>
          {status ? (
            <div className="flex text-primary gap-x-1 px-3 justify-center items-center rounded-2xl bg-[#EDF9FF]">
              <p className="xl:text-14px mr-2 md:text-10px">Editing...</p>
              <img src={pencil} className="w-4 h-4 md:w-2 md:h-2" />
            </div>
          ) : null}
        </div>
        <p className="text-accent text-16px text-left md:text-10px">{editDate}</p>
      </div>
      <div className="relative">
        <button type="button" onClick={() => setOpen(!open)} className="h-fit">
          <img src={dotmenu} className="md:w-6"/>
        </button>
        {open ? <DropDownDocument open={open} setOpen={setOpen} /> : null}
      </div>
    </div>
  );
};
