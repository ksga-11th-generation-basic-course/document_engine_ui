import React, { useState } from "react";
import dotmenu from "../../assets/dashboard_image/dotmenu.png";
import { DropDownWorkspace } from "../DropDownWorkspace";

export const WorkspaceCard = ({
  workspacename,
  isOwner,
  workspacephoto,
  total,
  createdate,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md rounded-lg text-accent cursor-pointer sm:w-[290px]">
      <div className="flex justify-between items-center p-3">
        <h4 className="font-semibold text-18px">{workspacename}</h4>
        {isOwner ? (
          <p className="border-[1px] rounded-full px-3">Owner</p>
        ) : null}
      </div>
      <div>
        <img src={workspacephoto} />
      </div>
      <div className="flex justify-between items-center p-3">
        <div>
          <h3 className="font-semibold text-18px">{total} Documents</h3>
          <p className="text-14px">
            Create date: <span>{createdate}</span>
          </p>
        </div>
        <div className="relative">
          <button type="button" onClick={() => setOpen(!open)}>
            <img src={dotmenu} className="w-8 h-8" />
          </button>
          {open ? <DropDownWorkspace open={open} setOpen={setOpen} /> : null}
        </div>
      </div>
    </div>
  );
};
