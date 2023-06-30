import React, { useEffect, useState } from "react";
import close from "../assets/dashboard_image/close.svg";
import { DocumentHistoryCard } from "./card/DocumentHistoryCard";
import { api } from "../utils/constant";

export const DocumentHistoryContent = ({
  openDocumentHistory,
  setOpenDocumentHistory,
  documentId,
}) => {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    const getHistoryByDocumentId = async () => {
      console.log(documentId);
      try {
        const response = await api.get(`histories/documents/${documentId}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type ": "application/json",
          },
        });
        setHistories(response.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    getHistoryByDocumentId();
  }, [documentId]);

  console.log(histories);

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
            {histories &&
              histories.map((history, index) => (
                <DocumentHistoryCard history={history} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
