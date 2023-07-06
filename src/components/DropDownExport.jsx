import React from "react";
import download from "../assets/document_image/download.svg"

export const DropDownExport = ({openExport, setOpenExport}) => {
  return (
    <div className="">
      {open && (
        <div
          className="fixed inset-0"
          onClick={() => {
              setOpenExport(!openExport);
          }}
        ></div>
      )}
      
      <div className="absolute right-0 py-3 w-[160px] text-accent rounded-lg shadow-custom bg-white z-50">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <button
              className="flex items-center text-18px px-5 py-2 gap-x-4 hover:bg-[#f4f4f4]"
            >
              <img src={download} />
              <span>.doc</span>
            </button>
            <button
              className="flex items-center text-18px px-5 py-2 gap-x-4 hover:bg-[#f4f4f4]"
            >
              <img src={download} />
              <span>.html</span>
            </button>
            <button
              className="flex items-center text-18px px-5 py-2 gap-x-4 hover:bg-[#f4f4f4]"
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
