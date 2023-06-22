import React from "react";
import download from "../assets/document_image/download.svg"

export const DropDownExport = ({openExport, setOpenExport}) => {
  return (
    <div>
      {open && (
        <div
          className="fixed inset-0"
          onClick={() => {
              setOpenExport(!openExport);
          }}
        ></div>
      )}
      
      <div className="absolute right-0 py-3 w-[160px] text-accent rounded-lg shadow-custom bg-white z-50 
      lg:-mr-80 lg:mt-16 md:w-[95px] md:py-2">
        <div className="flex flex-col">
          <div className="flex flex-col">
            {/* doc */}
            <button
              className="flex items-center text-20px px-5 py-2 gap-x-4 hover:bg-[#f4f4f4] md:text-12px md:px-3 md:py-1 md:gap-x-3"
            >
              <img src={download} className="md:w-3"/>
              <span>.doc</span>
            </button>
            {/* html */}
            <button
              className="flex items-center text-20px px-5 py-2 gap-x-4 hover:bg-[#f4f4f4] md:text-12px md:px-3 md:py-1 md:gap-x-3"
            >
              <img src={download} className="md:w-3"/>
              <span>.html</span>
            </button>
            {/* md */}
            <button
              className="flex items-center text-20px px-5 py-2 gap-x-4 hover:bg-[#f4f4f4] md:text-12px md:px-3 md:py-1 md:gap-x-3"
            >
              <img src={download} className="md:w-3"/>
              <span>.md</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
