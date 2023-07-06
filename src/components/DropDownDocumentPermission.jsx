import React, { useId } from "react";
import pencil from "../assets/workspace_image/pencil.svg";
import view from "../assets/document_image/view.svg";
import noaccess from "../assets/document_image/noaccess.svg";
import { setAccessibilitySuccess } from "../redux/slice/documentSlice/documentSlice";
import { useDispatch } from "react-redux";
import { setAccessibility } from "../redux/service/documentService/documentService";

export const DropDownDocumentPermission = ({
  permissiom,
  setPermission,
  documentId,
  workspaceId,
  userId,
}) => {
  const dispatch = useDispatch();

  const setAccess = async (accessibilityStatus) => {
    console.log(documentId);
    const accessibility = await setAccessibility(
      documentId,
      userId,
      accessibilityStatus
    );
    dispatch(setAccessibilitySuccess(accessibility));
  };
  return (
    <div >
      {permissiom && (
        <div
          className="fixed inset-0"
          onClick={() => setPermission(!permissiom)}
        ></div>
      )}
      <div className="absolute left-0 mt-1  w-full text-accent rounded-lg shadow-md bg-white z-50">
        <div className="px-4 py-2 space-y-3">
          <button
            onClick={() => setAccess("EDITOR")}
            type="button"
            className="flex items-center text-18px gap-x-2"
          >
            <img src={pencil} />
            <span>EDITOR</span>
          </button>
          <button
            onClick={() => setAccess("VIEWER")}
            className="flex items-center text-18px gap-x-2"
          >
            <img src={view} />
            <span>VIEWER</span>
          </button>
          <button
            onClick={() => setAccess("NO_ACCESS")}
            className="flex items-center text-18px gap-x-2"
          >
            <img src={noaccess} />
            <span className="text-red-500">NO_ACCESS</span>
          </button>
        </div>
      </div>
    </div>
  );
};
