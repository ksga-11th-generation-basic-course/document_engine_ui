import React from "react";
import pencil from "../assets/workspace_image/pencil.svg";
import view from "../assets/document_image/view.svg";
import noaccess from "../assets/document_image/noaccess.svg";

export const DropDownDocumentPermission = ({ permissiom, setPermission }) => {
  return (
    <div>
      {permissiom && (
        <div
          className="fixed inset-0"
          onClick={() => setPermission(!permissiom)}
        ></div>
      )}
      <div className="absolute left-0 mt-1  w-full text-accent rounded-lg shadow-md bg-white z-50">
        <div className="px-4 py-2 space-y-3">
          <button className="flex items-center text-18px gap-x-2">
            <img src={pencil} />
            <span>Editor</span>
          </button>
          <button className="flex items-center text-18px gap-x-2">
            <img src={view} />
            <span>Viewer</span>
          </button>
          <button className="flex items-center text-18px gap-x-2">
            <img src={noaccess} />
            <span className="text-red-500">No Access</span>
          </button>
        </div>
      </div>
    </div>
  );
};
