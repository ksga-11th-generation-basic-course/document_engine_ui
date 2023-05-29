import React from "react";

export const DropDownFilter = ({ openFilter, setOpenFilter }) => {
  return (
    <div>
      {openFilter && (
        <div
          className="fixed inset-0"
          onClick={() => setOpenFilter(!openFilter)}
        ></div>
      )}
      <div className="absolute left-0 mt-1 w-full text-accent rounded-lg shadow-md bg-white">
        <div className="flex items-center px-6 gap-x-4 bg-[#FAFAF9] border-b-[1px] py-3 rounded-t-lg">
          <input
            type="radio"
            id="allworkspace"
            name="radioOptions"
            value="allworkspace"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="allworkspace" className="cursor-pointer">
            All Workspaces
          </label>
        </div>
        <div className="flex items-center px-6 gap-x-4 py-3 rounded-lg">
          <input
            type="radio"
            id="myworkspace"
            name="radioOptions"
            value="myworkspace"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="myworkspace" className="cursor-pointer">
            My Workspaces
          </label>
        </div>
        <div className="flex items-center px-6 gap-x-4 py-3 rounded-lg">
          <input
            type="radio"
            id="otherworkspace"
            name="radioOptions"
            value="otherworkspace"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="otherworkspace" className="cursor-pointer">
            Other Workspaces
          </label>
        </div>
      </div>
    </div>
  );
};
