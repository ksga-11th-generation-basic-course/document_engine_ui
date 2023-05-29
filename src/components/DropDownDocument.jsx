import React from "react";
import view from "../assets/dashboard_image/view.png";
import permission from "../assets/dashboard_image/permission.png";
import history from "../assets/dashboard_image/history.png";
import duplicate from "../assets/dashboard_image/duplicate.png";
import file from "../assets/dashboard_image/file.png";
import document from "../assets/dashboard_image/document.png";
import { Link } from "react-router-dom";

export const DropDownDocument = ({ open, setOpen }) => {
  return (
    <div>
      {open && (
        <div
          className="fixed inset-0"
          onClick={() => setOpen(!open)}
        ></div>
      )}
      <div className="absolute right-72 p-2 w-[280px] text-accent rounded-lg shadow-md bg-white">
        <div className="flex flex-col gap-y-5 px-5">
          <div className="flex flex-col gap-y-5 py-5">
            <Link
              className="flex items-center text-18px gap-x-4"
              onClick={() => setOpen(!open)}
            >
              <img src={view} />
              <span>View page</span>
            </Link>
            <button
              className="flex items-center text-18px gap-x-4"
              onClick={() => setOpen(!open)}
            >
              <img src={permission} />
              <span>Permission</span>
            </button>
            <button
              className="flex items-center text-18px gap-x-4"
              onClick={() => setOpen(!open)}
            >
              <img src={history} />
              <span>Document History</span>
            </button>
            <button
              className="flex items-center text-18px gap-x-4"
              onClick={() => setOpen(!open)}
            >
              <img src={duplicate} />
              <span>Export file</span>
            </button>
            <button
              className="flex items-center text-18px gap-x-4"
              onClick={() => setOpen(!open)}
            >
              <img src={file} />
              <span>Duplicate </span>
            </button>
            <button
              className="flex items-center text-18px gap-x-4 text-red-500"
              onClick={() => setOpen(!open)}
            >
              <img src={document} />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
