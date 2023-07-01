import React, { useEffect, useState } from "react";
import documenticon from "../assets/dashboard_image/documenticon.svg";
import { DocumentCardRow } from "../components/card/DocumentCardRow";
import { Hint } from "../components/Hint";
import { useDispatch, useSelector } from "react-redux";
import { getDocumentRecently } from "../redux/service/documentService/documentService";
import SkeletonDocumentRow from "../components/SkeletonDocumentRow";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const recentlies = useSelector((state) => state.document.recently);
  useEffect(() => {
    dispatch(getDocumentRecently());
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="space-y-7 bg-white ">
      <div>
        <Hint />
      </div>
      <div className="flex items-center gap-x-3 lg:ml-4">
        <img src={documenticon} className="shadow-md p-2 rounded-lg" />
        <p className="font-semibold text-20px text-accent">Recently</p>
      </div>
      <div className="space-y-8">
        {loading ? (
          recentlies === null ? null : recentlies.length > 0 ? (
            [...recentlies].map((recently, index) => (
              <SkeletonDocumentRow key={index} />
            ))
          ) : (
            <p className="font-semibold text-accent">No Recently</p>
          )
        ) : recentlies === null ? null : recentlies.length > 0 ? (
          [...recentlies]
            .sort((a, b) => a.editDate - b.editDate)
            .map((recently, index) => (
              <div key={index}>
                <DocumentCardRow
                  documentId={recently.documentId}
                  workspaceId={recently.workspaceId}
                  documentname={recently.title}
                  editDate={recently.editDate}
                  status={recently.status}
                />
              </div>
            ))
        ) : (
          <p className="font-semibold text-accent">No Recently</p>
        )}
      </div>
    </div>
  );
};
