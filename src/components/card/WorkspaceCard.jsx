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
    <div className="shadow-custom rounded-lg text-accent cursor-pointer hover:shadow-hover">
      <div className="flex  justify-between p-3">
        <h4 className="font-semibold text-20px md:text-16px">{workspacename}</h4>
        {isOwner ? (
          <p className="text-primary px-3 text-16px md:text-14px">Owner</p>
        ) : null}
      </div>
      <div>
        <img src={workspacephoto} className="w-fit"/>
      </div>
      <div className="flex justify-between items-center p-3">
        <div>
          <h3 className="font-semibold text-18px md:text-14px">{total} Documents</h3>
          <p className="text-14px md:text-10px">
            Create date: <span>{createdate}</span>
          </p>
        </div>
       {isOwner ? 
       <div className="relative">
       <button type="button" onClick={() => setOpen(!open)}>
         <img src={dotmenu} className="w-9 h-9" />
       </button>
       {open ? <DropDownWorkspace open={open} setOpen={setOpen} /> : null}
     </div> : null
      }
      </div>
    </div>
  );
};
