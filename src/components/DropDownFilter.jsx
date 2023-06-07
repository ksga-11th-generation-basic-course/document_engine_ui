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
      <div className="absolute left-0 mt-1 w-full md:w-[170px] text-accent rounded-lg shadow-md bg-white xs:w-36">
        <div className="flex items-center px-6 gap-x-4 bg-[#FAFAF9] border-b-[1px] py-3 rounded-t-lg xs:w-36">
          <input
            type="radio"
            id="product"
            name="radioOptions"
            value="product"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="product" className="cursor-pointer">
            Product
          </label>
        </div>
        <div className="flex items-center px-6 gap-x-4 py-3 rounded-lg">
          <input
            type="radio"
            id="technology"
            name="radioOptions"
            value="technology"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="technology" className="cursor-pointer">
            Technology
          </label>
        </div>
        <div className="flex items-center px-6 gap-x-4 py-3 rounded-lg">
          <input
            type="radio"
            id="document"
            name="radioOptions"
            value="document"
            className="focus:bg-accent focus:ring-accent"
          />
          <label htmlFor="document" className="cursor-pointer">
            Document
          </label>
        </div>
      </div>
    </div>
  );
};
