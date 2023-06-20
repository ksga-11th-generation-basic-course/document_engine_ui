import React, { useState } from "react";
import dotmenu from "../../assets/dashboard_image/dotmenu.png";
import pencil from "../../assets/dashboard_image/pencil.svg";
import {DropDownDocument} from "../../components/DropDownDocument";

export const DocumentCard = ({ title, status, editdate, header, text }) => {

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-custom mt-3 hover:shadow-hover rounded-lg text-black cursor-pointer p-3 space-y-3 2xl:p-0 2xl:px-3 2xl:py-1 2xl:space-y-1
    lg:-mr-10 lg:-ml-2 lg:-mb-6 lg:w-[320px]">
      {/*Editing... */}
      <div className="flex ml-3 justify-between items-center">
        <h4 className="font-bold text-xl line-clamp-1 2xl:text-18px mt-3 -mb-2 lg:mt-8">{title}</h4>
        {status ? (
          <div className="flex  text-primary gap-x-1 px-3 justify-center rounded-2xl bg-[#EDF9FF]">
            <p className="text-14px 2xl:text-12px">Editing...</p>
            <img src={pencil} className="w-3 h-3"/>
          </div>
        ) : null}
      </div>
      <div className="m-4 w-[295px]  lg:w-[100px]">
        <h3 className="font-bold  lg:text-14px line-clamp-1">{header}</h3>
        <p className="text-sm w-[295px] text-[#000000] pr-2 h-[120px] 2xl:text-12px 2xl:h-[100px] lg:h-[80px] 2xl:line-clamp-5 lg:line-clamp-4">{text}</p>
      </div>
      <div className="border-[1px]"></div>
      <div className="flex justify-between ml-4 items-center">
        <div>
          <h3 className="font-bold text-22px text-primary 2xl:text-18px line-clamp-1">{title}</h3>
          <p className="text-14px font-semibold text-accent 2xl:text-12px">
            Edited <span>{editdate} days ago</span>
          </p>
        </div>
        <div className="relative">
          <button type="button" onClick={() => setOpen(!open)}>
            <img src={dotmenu} className="w-8 h-8" />
          </button>
          {open ? <DropDownDocument open={open} setOpen={setOpen} /> : null}
        </div>
      </div>
    </div>
  );
};
