import React from "react";

export const DropDownMemberPermission = ({ openPermission, setOpenPermission }) => {
  return (
    <div>
      {openPermission && (
        <div className="fixed inset-0" onClick={() => setOpenPermission(!openPermission)}></div>
      )}
      <div className="absolute left-0 mt-1 w-full text-accent rounded-lg shadow-custom bg-white md:w-28 md:text-12px">
        <div className="flex items-center px-6 gap-x-4 py-3 rounded-lg xs:px-0 xs:pl-4 xs:py-2 xs:justify-start xs:gap-x-2 lg:px-0 lg:pl-4 lg:py-2 lg:justify-start lg:gap-x-2">
          <input
            type="radio"
            id="editor"
            name="radioOptions"
            value="editor"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="editor" className="cursor-pointer">
            Editor
          </label>
        </div>
        <div className="flex items-center px-6 gap-x-4 py-3 rounded-lg xs:px-0 xs:pl-4 xs:py-2 xs:justify-start xs:gap-x-2 lg:px-0 lg:pl-4 lg:py-2 lg:justify-start lg:gap-x-2">
          <input
            type="radio"
            id="viewer"
            name="radioOptions"
            value="viewer"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="viewer" className="cursor-pointer">
            Viewer
          </label>
        </div>
      </div>
    </div>
  );
};
