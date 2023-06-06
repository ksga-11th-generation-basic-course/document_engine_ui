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
import { DocumentPermissionModal } from "../modal/DocumentPermissionModal";
import next from "../assets/images/Dashboard/Next.svg";

export const DropDownDocument = ({ open, setOpen }) => {
  const [openExport, setOpenExport] = useState(false);

  const [openDocumentHistory, setOpenDocumentHistory] = useState(false);

  const [deleteDocument, setDeleteDocument] = useState(false);

  const [openPermission, setOpenPermission] = useState(false);

  return (
    <div>
      {open && (
        <div className="fixed inset-0" onClick={() => setOpen(!open)}></div>
      )}
      <div className="absolute right-0 w-[280px] text-accent rounded-lg shadow-custom bg-white z-10 hover:shadow-hover">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col py-3">
            <div className=" hover:bg-[#f4f4f4] w-full">
              <Link className="flex items-center text-18px gap-x-4 px-5 py-3">
                <img src={view} />
                <span>View page</span>
              </Link>
            </div>

            {/* Permission */}
            <button
              className="flex w-full items-center text-18px gap-x-4 px-5 py-3 hover:bg-[#f4f4f4]"
              type="button"
              onClick={() => setOpenPermission(!openPermission)}
            >
              <img src={permission} />
              <span>Permission</span>
            </button>

            {/* Document History */}
            <button
              className="flex items-center text-18px gap-x-4 px-5 py-3 hover:bg-[#f4f4f4]"
              type="button"
              onClick={() => setOpenDocumentHistory(!openDocumentHistory)}
            >
              <img src={history} />
              <span>Document History</span>
            </button>

            {/* Duplicate */}
            <button className="flex items-center text-18px gap-x-4 px-5 py-3 hover:bg-[#f4f4f4]">
              <img src={duplicate} />
              <span>Duplicate </span>
            </button>

            {/* Export File */}
            <div className="relative">
              <button
                className={openExport ? "flex items-center text-18px gap-x-4 px-5 py-3 w-full bg-[#f4f4f4]" : "flex items-center text-18px gap-x-4 px-5 py-3 w-full hover:bg-[#f4f4f4]"}
                onClick={() => setOpenExport(!openExport)}
              >
                <img src={file} />
                <span> Export file</span>
                <span className="absolute right-5 fill-primary">
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.355291 0.420947C0.242666 0.553514 0.153312 0.710979 0.0923468 0.884328C0.0313812 1.05768 0 1.2435 0 1.43118C0 1.61885 0.0313812 1.80468 0.0923468 1.97802C0.153312 2.15137 0.242666 2.30884 0.355291 2.44141L5.06911 8.00125L0.355291 13.5611C0.128132 13.829 0.000514428 14.1924 0.000514428 14.5713C0.000514428 14.9502 0.128132 15.3136 0.355291 15.5816C0.582451 15.8495 0.890546 16 1.2118 16C1.53305 16 1.84114 15.8495 2.0683 15.5816L7.64471 9.00431C7.75734 8.87175 7.84669 8.71428 7.90765 8.54093C7.96862 8.36758 8 8.18176 8 7.99408C8 7.80641 7.96862 7.62058 7.90765 7.44724C7.84669 7.27389 7.75734 7.11642 7.64471 6.98385L2.0683 0.406617C1.60664 -0.137904 0.829104 -0.137904 0.355291 0.420947Z"
                    />
                  </svg>
                </span>
              </button>
              {openExport ? (
                <span className="absolute -right-40 -top-56 mt-2 -mr-2 lg:right-72 lg:mr-0">
                  <DropDownExport
                    openExport={openExport}
                    setOpenExport={setOpenExport}
                  />
                </span>
              ) : null}
            </div>

            {/* Delete File */}
            <button
              className="flex items-center text-18px gap-x-4 text-red-500 px-5 py-3 hover:bg-[#f4f4f4] w-full"
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
        <DocumentPermissionModal
          openPermission={openPermission}
          setOpenPermission={setOpenPermission}
        />
      </div>
    </div>
  );
};
