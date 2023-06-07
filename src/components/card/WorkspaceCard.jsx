import React, { useState } from "react";
import dotmenu from "../../assets/dashboard_image/dotmenu.png";
import { DropDownWorkspace } from "../DropDownWorkspace";
import { Link } from "react-router-dom";
import { Document } from "../../pages/Document";

export const WorkspaceCard = ({ workspace }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md rounded-lg text-accent">
      <Link
        to={`/document/${workspace.workspaceId}`}
      >
        <div className="flex justify-between items-center p-3">
          <h4 className="font-semibold text-18px">{workspace.workspaceName}</h4>
          {workspace.isOwner ? (
            <p className="border-[1px] rounded-full px-3">Owner</p>
          ) : null}
        </div>
        <div className="w-[340px] h-[215px] overflow-hidden">
          <img src={workspace.workspaceImage} />
        </div>
        <div className="flex justify-between items-center p-3">
          <div>
            <h3 className="font-semibold text-18px">
              {workspace.totalDocument} Documents
            </h3>
            <p className="text-14px">
              Create date: <span>{workspace.createdDate}</span>
            </p>
          </div>
          <div className="relative">
            <button type="button" onClick={() => setOpen(!open)}>
              <img src={dotmenu} className="w-8 h-8" />
            </button>
            {open ? <DropDownWorkspace open={open} setOpen={setOpen} /> : null}
          </div>
        </div>
      </Link>
    </div>
  );
};
