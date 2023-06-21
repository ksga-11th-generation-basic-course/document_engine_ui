import React from "react";

export const DropDownSort = ({ openSort, setOpenSort }) => {
  return (
    <div>
      {openSort && (
        <div className="fixed inset-0" onClick={() => setOpenSort(!openSort)}></div>
      )}
      <div className="text-18px absolute left-0 mt-1 w-full text-accent rounded-lg shadow-md bg-white xs:w-36 md:w-52 2xs:w-32 md:text-12px">
        <div className="flex items-center xs:justify-start xs:px-0 xs:pl-4 xs:py-2 px-6 gap-x-4 bg-[#FAFAF9] border-b-[1px] py-3 xs:gap-x-2 rounded-t-lg xs:w-36 md:w-52 2xs:w-32 lg:px-0 lg:pl-4 lg:py-2 lg:justify-start lg:gap-x-2">
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
        <div className="flex items-center px-6 gap-x-4 py-3 rounded-lg xs:px-0 xs:pl-4 xs:py-2 xs:justify-start xs:gap-x-2 lg:px-0 lg:pl-4 lg:py-2 lg:justify-start lg:gap-x-2">
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
        <div className="flex items-center px-6 gap-x-4 py-3 rounded-lg xs:px-0 xs:pl-4 xs:py-2 xs:justify-start xs:gap-x-2 lg:px-0 lg:pl-4 lg:py-2 lg:justify-start lg:gap-x-2">
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
        <div className="flex items-center px-6 gap-x-4 py-3 rounded-lg xs:px-0 xs:pl-4 xs:py-2 xs:justify-start xs:gap-x-2 lg:px-0 lg:pl-4 lg:py-2 lg:justify-start lg:gap-x-2">
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
