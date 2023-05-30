import React, { useState } from "react";
import Plus from "../assets/images/Dashboard/Plus.svg";
import CreateBy from "../assets/images/Dashboard/CreateBy.svg";
import CreateDate from "../assets/images/Dashboard/CreateDate.svg";
import ViewHistory from "../assets/images/Dashboard/ViewHistory.svg";
import ViewMember from "../assets/images/Dashboard/ViewMember.svg";
import ExportFile from "../assets/images/Dashboard/ExportFile.svg";
import Tag from "../assets/images/Dashboard/Tag.svg";
import arrow from "../assets/document_image/arrow.svg";
import icon from "../assets/document_image/icon.svg";
import { Link } from "react-router-dom";
import doc from "../assets/document_image/doc.svg";
import { DocumentPermissionModal } from "../modal/DocumentPermissionModal";
import { DocumentHistoryModal } from "../modal/DocumentHistoryModal";
import { DropDownExport } from "../components/DropDownExport";

export const CreateDocument = () => {
  const [openPermission, setOpenPermission] = useState(false);
  const [openDocumentHistory, setOpenDocumentHistory] = useState(false);
  const [openExport, setOpenExport] = useState(false);

  return (
    <div className="w-full">
      <div className="absolute z-10 right-0 rounded-lg shadow h-auto p-2 top-[45%]">
        <div className="grid grid-rows-1 gap-3">
          <button
            className="w-[30px] h-[30px] rounded-[10px] shadow bg-white flex justify-center items-center"
            type="button"
            onClick={() => setOpenPermission(!openPermission)}
          >
            <img src={ViewMember} alt="" />
          </button>
          <button
            className="w-[30px] h-[30px] rounded-[10px] shadow bg-white flex justify-center items-center"
            type="button"
            onClick={() => setOpenDocumentHistory(!openDocumentHistory)}
          >
            <img src={ViewHistory} alt="" />
          </button>
          <div className="relative">
            <button
              className="w-[30px] h-[30px] rounded-[10px] shadow bg-white flex justify-center items-center"
              type="button"
              onClick={() => setOpenExport(!openExport)}
            >
              <img src={ExportFile} alt="" />
            </button>
            {openExport ? (
              <DropDownExport
                openExport={openExport}
                setOpenExport={setOpenExport}
              />
            ) : null}
          </div>
        </div>
      </div>
      <div className="text-[#9CA3AF] grid grid-rows-1 gap-2">
        <div className="w-full h-auto">
          <nav className="flex items-center text-sm">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center gap-x-2">
                <img src={icon} />
                <Link className="text-black">React Developer</Link>
                <span className="mx-2">
                  <img src={arrow} className="w-2" alt="" />
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <img src={doc} />
                <Link className="text-primary">Untitle</Link>
              </li>
            </ol>
          </nav>
          <span className="font-semibold ">
            <input
              className="text-5xl p-0 text-black w-auto py-2 focus:ring-0 focus:border-0 border-0"
              type="text"
              placeholder="Untitle"
            />
          </span>
          <div className="w-[40%] grid grid-rows-1 gap-y-2">
            <div className="grid grid-cols-2 text-sm">
              <div className="flex gap-2">
                <img src={CreateBy} className="w-[17px]" alt="" />
                <p>Create By</p>
              </div>
              <p className="text-black">Tith Ouddom</p>
            </div>
            <div className="grid grid-cols-2 text-sm">
              <div className="flex gap-2">
                <img src={CreateDate} className="w-[17px]" alt="" />
                <p>Create Date</p>
              </div>
              <p className="text-black">April 21, 2023 4:01 PM</p>
            </div>
            <div className="grid grid-cols-2 text-sm">
              <div className="flex items-center gap-2">
                <img src={Tag} className="w-[16px]" alt="" />
                <p>Tag</p>
              </div>
              <button className="w-20 h-6 gap-1 text-primary shadow flex justify-center items-center rounded-md">
                <p>Add tag</p>
                <img src={Plus} className="w-[15px] " alt="" />
              </button>
            </div>
          </div>
          <hr className="mt-3" />
        </div>

        {/* Editor */}
        <div className="w-full h-auto">{/* <Editor/> */}</div>
      </div>
      <div>
        <DocumentPermissionModal
          openPermission={openPermission}
          setOpenPermission={setOpenPermission}
        />
        <DocumentHistoryModal
          openDocumentHistory={openDocumentHistory}
          setOpenDocumentHistory={setOpenDocumentHistory}
        />
      </div>
    </div>
  );
};
