import React, { useEffect } from "react";
import close from "../assets/dashboard_image/close.svg";
import { DocumentHistoryCard } from "./card/DocumentHistoryCard";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryByDocumentId } from "../redux/service/historyService/historyService";

export const DocumentHistoryContent = ({
  documentId,
  openDocumentHistory,
  setOpenDocumentHistory,
}) => {
  
  const histories = useSelector((state) => state.history.histories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHistoryByDocumentId(documentId))
  }, [])
  console.log(histories);
  return (
    <div>
      <div className="flex w-full justify-end">
        <button
          type="button"
          className="fixed"
          onClick={() => setOpenDocumentHistory(!openDocumentHistory)}
        >
          <img src={close} />
        </button>
      </div>
      <div className="px-16 space-y-5 relative">
        <div className="text-accent fixed bg-white top-0 pt-7 pb-3 w-[62%] z-10">
          <h1 className="font-bold text-34px">Document History</h1>
          <p>Manage history of document and rollback to specific version</p>
        </div>
        <div>
            <div className="w-full h-24"></div>
          <div className="border-[1px] px-6 py-3 rounded-lg space-y-3">
            {histories === null ? null : histories.length > 0 ? (
              histories
                .map((history, index) => (
                  <div className="col-span-4 " key={index}>
                    <DocumentHistoryCard history={history} documentId={documentId} editby={history.editedBy} time={history.editedDate} />
                  </div>
                ))
            ) : (
              <div className="col-span-12 absolute bottom-[45%] left-[58%]">
                <p className="font-semibold text-accent">No History</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
