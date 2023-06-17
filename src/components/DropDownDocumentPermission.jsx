import React, { useId } from "react";
import pencil from "../assets/workspace_image/pencil.svg";
import view from "../assets/document_image/view.svg";
import noaccess from "../assets/document_image/noaccess.svg";
import { setAccessibilitySuccess } from "../redux/slice/documentSlice/documentSlice";
import { useDispatch } from "react-redux";
import { setAccessibility } from "../redux/service/documentService/documentService";

export const DropDownDocumentPermission = ({ permissiom, setPermission ,documentId,workspaceId,userId}) => {
  const dispatch = useDispatch();
  

  console.log(
    'doc',documentId,
    'work',workspaceId,
    'user',userId
  );
  const setAccess = async()=>{
    const accessibility = await setAccessibility(documentId,userId,workspaceId,'EDITOR');
    dispatch(setAccessibilitySuccess(accessibility));
  };

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
          <button onClick={setAccess} type="button" className="flex items-center text-18px gap-x-2">
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
