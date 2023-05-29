import React from "react";
import workspaceicon from "../assets/workspace_image/workspaceicon.png";
import sort from "../assets/workspace_image/sort.svg";
import chevrondown from "../assets/workspace_image/chevrondown.svg";
import filter from "../assets/workspace_image/filter.svg";

export const Workspace = () => {
  return (
    <div className="text-accent space-y-5">
      <div className="flex items-center gap-x-3">
        <img src={workspaceicon} className="p-2 shadow-md rounded-lg" />
        <p className="font-semibold text-20px">Workspaces</p>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-4 flex items-center gap-x-5">
          <div className="flex items-center gap-x-3">
            <img src={sort} className="w-7 h-7" />
            <h4 className="font-semibold text-20px">Sort : </h4>
          </div>
          <button className="flex items-center gap-x-10">
            <p className="text-18px text-black">Last Update</p>
            <img src={chevrondown} />
          </button>
        </div>
        <div className="col-span-4 flex items-center gap-x-5">
          <div className="flex items-center gap-x-3">
            <img src={filter} className="w-6 h-6" />
            <h4 className="font-semibold text-20px">Filter : </h4>
          </div>
          <button className="flex items-center gap-x-10">
            <p className="text-18px text-black">All Workspaces</p>
            <img src={chevrondown} />
          </button>
        </div>
        <div className="col-span-4">a</div>
      </div>
    </div>
  );
};
