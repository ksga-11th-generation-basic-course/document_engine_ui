import React from "react";
import download from "../assets/document_image/download.svg"

export const DropDownExport = ({openExport, setOpenExport}) => {
  return (
    <div>
      {open && (
        <div className="fixed inset-0" onClick={() => setOpenExport(!openExport)}></div>
      )}
      <div className="absolute left-32 p-2 w-[160px] text-accent rounded-lg shadow-md bg-white z-50">
        <div className="flex flex-col gap-y-5 px-5">
          <div className="flex flex-col gap-y-5 py-5">
            <button
              className="flex items-center text-18px gap-x-4"
            >
              <img src={download} />
              <span>.doc</span>
            </button>
            <button
              className="flex items-center text-18px gap-x-4"
            >
              <img src={download} />
              <span>.html</span>
            </button>
            <button
              className="flex items-center text-18px gap-x-4"
            >
              <img src={download} />
              <span>.md</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
