import React from "react";

export const DropDownSort = ({ openSort, setOpenSort }) => {
  return (
    <div>
      {openSort && (
        <div className="fixed inset-0" onClick={() => setOpenSort(!openSort)}></div>
      )}
      <div className="absolute left-0 mt-1 w-full md:w-[170px] text-accent rounded-lg shadow-md bg-white">
        <div className="flex items-center px-6 gap-x-4 bg-[#FAFAF9] border-b-[1px] py-3 rounded-t-lg">
          <input
            type="radio"
            id="lastupdate"
            name="radioOptions"
            value="lastupdate"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="lastupdate" className="cursor-pointer">
            Last Update
          </label>
        </div>
        <div className="flex items-center px-6 gap-x-4 py-3 rounded-lg">
          <input
            type="radio"
            id="thisweek"
            name="radioOptions"
            value="thisweek"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="thisweek" className="cursor-pointer">
            This Week
          </label>
        </div>
        <div className="flex items-center px-6 gap-x-4 py-3 rounded-lg">
          <input
            type="radio"
            id="thismonth"
            name="radioOptions"
            value="thismonth"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="thismonth" className="cursor-pointer">
            This Month
          </label>
        </div>
        <div className="flex items-center px-6 gap-x-4 py-3 rounded-lg">
          <input
            type="radio"
            id="thisyear"
            name="radioOptions"
            value="thisyear"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="thisyear" className="cursor-pointer">
            This year
          </label>
        </div>
      </div>
    </div>
  );
};
