import React from "react";
import history from "../assets/document_image/history.svg";

export const DocumentHistory = () => {
  return (
    <div>
      <div className="relative">
        <button className="flex items-center gap-x-3 text-primary bg-[#F6F6F6] rounded-lg w-full py-3 px-3">
          {" "}
          <img src={history} />
          <p className="font-semibold text-18px">Document History</p>
        </button>
      </div>
    </div>
  );
};
