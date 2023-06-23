import React from "react";
import close from "../assets/dashboard_image/close.svg";
import { DocumentHistoryCard } from "./card/DocumentHistoryCard";

export const DocumentHistoryContent = ({
  openDocumentHistory,
  setOpenDocumentHistory,
}) => {
  return (
    <div>
      <div className="flex w-full justify-end">
        <button
          type="button"
          onClick={() => setOpenDocumentHistory(!openDocumentHistory)}
        >
          <img src={close} />
        </button>
      </div>
      <div className="px-16 space-y-5">
        <div className="text-accent">
          <h1 className="font-bold text-34px">Document History</h1>
          <p>Manage history of document and rollback to specific version</p>
        </div>
        <div>
          <div className="border-[1px] px-6 py-3 rounded-lg space-y-3 overflow-auto h-[600px]">
            <DocumentHistoryCard editby={"Ruos Raksa"} time={"2:30 PM"} />
            <DocumentHistoryCard editby={"Chhum Lyheng"} time={"May 5, 2:55 PM"} />
            <DocumentHistoryCard editby={"Yan Sovanseyha"} time={"May 02, 7:37 AM"} />
            <DocumentHistoryCard editby={"Yan Sovanseyha"} time={"May 02, 7:37 AM"} />
            <DocumentHistoryCard editby={"Yan Sovanseyha"} time={"May 02, 7:37 AM"} />
            <DocumentHistoryCard editby={"Yan Sovanseyha"} time={"May 02, 7:37 AM"} />
            <DocumentHistoryCard editby={"Yan Sovanseyha"} time={"May 02, 7:37 AM"} />
            <DocumentHistoryCard editby={"Yan Sovanseyha"} time={"May 02, 7:37 AM"} />
            <DocumentHistoryCard editby={"Yan Sovanseyha"} time={"May 02, 7:37 AM"} />
            <DocumentHistoryCard editby={"Yan Sovanseyha"} time={"May 02, 7:37 AM"} />
            <DocumentHistoryCard editby={"Yan Sovanseyha"} time={"May 02, 7:37 AM"} />
            <DocumentHistoryCard editby={"Yan Sovanseyha"} time={"May 02, 7:37 AM"} />
            <DocumentHistoryCard editby={"Yan Sovanseyha"} time={"May 02, 7:37 AM"} />
            <DocumentHistoryCard editby={"Yan Sovanseyha"} time={"May 02, 7:37 AM"} />
            <DocumentHistoryCard editby={"Yan Sovanseyha"} time={"May 02, 7:37 AM"} />
          </div>
        </div>
      </div>
    </div>
  );
};
