import React, { useState } from "react";
import view from "../assets/dashboard_image/view.png";
import permission from "../assets/dashboard_image/permission.png";
import history from "../assets/dashboard_image/history.png";
import duplicate from "../assets/dashboard_image/duplicate.png";
import file from "../assets/dashboard_image/file.png";
import document from "../assets/dashboard_image/document.png";
import { Link } from "react-router-dom";
import { DropDownExport } from "./DropDownExport";
import { DocumentHistoryModal } from "../modal/DocumentHistoryModal";
import { DeleteDocumentModal } from "../modal/DeleteDocumentModal";

export const DropDownDocument = ({ open, setOpen }) => {
  const [openExport, setOpenExport] = useState(false);

  const [openDocumentHistory, setOpenDocumentHistory] = useState(false);

  const [deleteDocument, setDeleteDocument] = useState(false);

  return (
    <div>
      {open && (
        <div className="fixed inset-0" onClick={() => setOpen(!open)}></div>
      )}
      <div className="absolute right-0 p-2 w-[280px] text-accent rounded-lg shadow-md bg-white z-50">
        <div className="flex flex-col gap-y-5 px-5">
          <div className="flex flex-col gap-y-5 py-5">
            <Link className="flex items-center text-18px gap-x-4">
              <img src={view} />
              <span>View page</span>
            </Link>
            <button className="flex items-center text-18px gap-x-4">
              <img src={permission} />
              <span>Permission</span>
            </button>
            <button
              className="flex items-center text-18px gap-x-4"
              type="button"
              onClick={() => setOpenDocumentHistory(!openDocumentHistory)}
            >
              <img src={history} />
              <span>Document History</span>
            </button>
            <div className="relative">
              <button
                className="flex items-center text-18px gap-x-4"
                onClick={() => setOpenExport(!openExport)}
              >
                <img src={duplicate} />
                <span>Export file</span>
              </button>
              {openExport ? (
                <DropDownExport
                  openExport={openExport}
                  setOpenExport={setOpenExport}
                />
              ) : null}
            </div>
            <button className="flex items-center text-18px gap-x-4">
              <img src={file} />
              <span>Duplicate </span>
            </button>
            <button
              className="flex items-center text-18px gap-x-4 text-red-500"
              type="button"
              onClick={() => setDeleteDocument(!deleteDocument)}
            >
              <img src={document} />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <DocumentHistoryModal
          openDocumentHistory={openDocumentHistory}
          setOpenDocumentHistory={setOpenDocumentHistory}
        />
        <DeleteDocumentModal
          deleteDocument={deleteDocument}
          setDeleteDocument={setDeleteDocument}
        />
      </div>
    </div>
  );
};
