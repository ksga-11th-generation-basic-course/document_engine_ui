import React, { useState } from "react";
import restore from "../assets/document_image/restore.svg";
import trush from "../assets/document_image/delete.svg";
import { RemoveHistory } from "../modal/RemoveHistoryModal";

export const DropDownHistory = ({ openHistory, setOpenHistory }) => {
  const [removeHistory, setRemoveHistory] = useState(false);

  return (
    <div>
      {open && (
        <div
          className="fixed inset-0"
          onClick={() => setOpenHistory(!openHistory)}
        ></div>
      )}
      <div className="absolute right-0 p-2 w-[160px] text-accent rounded-lg shadow-md bg-white z-50">
        <div className="flex flex-col gap-y-4 px-3">
          <button className="flex items-center text-18px gap-x-4">
            <img src={restore} />
            <span>Restore</span>
          </button>
          <button
            className="flex items-center text-18px gap-x-4 lg:w-5"
            type="button"
            onClick={() => setRemoveHistory(!removeHistory)}
          >
            <img src={trush} />
            <span className="text-red-500">Remove</span>
          </button>
        </div>
      </div>
      <div>
        <RemoveHistory
          removeHistory={removeHistory}
          setRemoveHistory={setRemoveHistory}
        />
      </div>
    </div>
  );
};
