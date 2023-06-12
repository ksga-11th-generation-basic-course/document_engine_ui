import React from "react";
import view from "../assets/workspace_image/view.svg";
import pencil from "../assets/workspace_image/pencil.svg";

export const DropWorkspaceEdit = ({ openEditor, setOpenEditor }) => {
  return (
    <div>
      {openEditor && (
        <div
          className="fixed inset-0"
          onClick={() => setOpenEditor(!openEditor)}
        ></div>
      )}
      <div className="absolute left-0 mt-1 w-full text-accent rounded-lg shadow-md bg-white z-50">
        <div className=" px-4 py-2 space-y-3">
          <button className="flex items-center text-18px md:text-16px gap-x-2">
            <img className="md:w-4" src={pencil} />
            <span>Editor</span>
          </button>
          <button className="flex items-center text-18px md:text-16px gap-x-2">
            <img className="md:w-4" src={view} />
            <span>Viewer</span>
          </button>
        </div>
      </div>
    </div>
  );
};
