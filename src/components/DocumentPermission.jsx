import React from "react";
import key from "../assets/document_image/key.svg";

export const DocumentPermission = () => {
  return (
    <div>
      <div className="relative">
        <button className="flex items-center gap-x-3 text-primary bg-[#F6F6F6] rounded-lg w-full py-3 px-3">
          {" "}
          <img src={key} />
          <p className="font-semibold text-18px">Document Permission</p>
        </button>
      </div>
    </div>
  );
};
