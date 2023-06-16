import React from "react";

export const DropDownFilterWorkspace = ({ openFilter, setOpenFilter }) => {
  return (
    <div>
      {openFilter && (
        <div
          className="fixed inset-0"
          onClick={() => setOpenFilter(!openFilter)}
        ></div>
      )}
      <div className="text-18px absolute z-50 left-0 mt-1 w-full text-accent rounded-lg shadow-md bg-white xs:w-36 md:w-52 2xs:w-32 lg:w-full md:text-12px">
        <div className="flex items-center px-6 gap-x-4 bg-[#FAFAF9] border-b-[1px] py-3 rounded-t-lg xs:w-36 xs:px-0 xs:pl-4 xs:py-2 xs:justify-start xs:gap-x-2 2xs:w-32 lg:w-full lg:px-0 lg:pl-4 lg:py-2 lg:justify-start lg:gap-x-2">
          <input
            type="radio"
            id="allworkspaces"
            name="radioOptions"
            value="product"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="product" className="cursor-pointer">
            All Workspaces
          </label>
        </div>
        <div className="flex items-center px-6 gap-x-4 py-3 rounded-lg xs:px-0 xs:pl-4 xs:py-2 xs:justify-start xs:gap-x-2 lg:px-0 lg:pl-4 lg:py-2 lg:justify-start lg:gap-x-2">
          <input
            type="radio"
            id="myworkspaces"
            name="radioOptions"
            value="technology"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="technology" className="cursor-pointer">
          My Workspaces
          </label>
        </div>
        <div className="flex items-center px-6 gap-x-4 py-3 rounded-lg xs:px-0 xs:pl-4 xs:py-2 xs:justify-start xs:gap-x-2 lg:px-0 lg:pl-4 lg:py-2 lg:justify-start lg:gap-x-2">
          <input
            type="radio"
            id="otherworkspaces"
            name="radioOptions"
            value="document"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="document" className="cursor-pointer">
          Other Workspaces
          </label>
        </div>
      </div>
    </div>
  );
};
