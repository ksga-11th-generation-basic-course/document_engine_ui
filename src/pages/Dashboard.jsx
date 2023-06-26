import React, { useEffect } from "react";
import documenticon from "../assets/dashboard_image/documenticon.svg";
import { DocumentCardRow } from "../components/card/DocumentCardRow";
import { Hint } from "../components/Hint";
import { useDispatch, useSelector } from "react-redux";
import { getDocumentRecently } from "../redux/service/documentService/documentService";

export const Dashboard = () => {
  // const documentRecentlyUpdated = [
  //   {
  //     documentId: "b69d1d83-21b1-4a1b-a00b-bbe11429d563",
  //     title: "Laravel",
  //     status: false,
  //     createdDate: "16-06-2023",
  //     pages: [],
  //     workspaceId: "b91e387c-4399-4ff4-adf1-c5b455012f8a",
  //     tags: [],
  //     blocks: [],
  //     editDate: "25 minutes ago",
  //   },
  //   {
  //     documentId: "b69d1d83-21b1-4a1b-a00b-bbe11429d563",
  //     title: "Spring",
  //     status: true,
  //     createdDate: "16-06-2023",
  //     pages: [],
  //     workspaceId: "b91e387c-4399-4ff4-adf1-c5b455012f8a",
  //     tags: [],
  //     blocks: [],
  //     editDate: "25 minutes ago",
  //   },
  //   {
  //     documentId: "b69d1d83-21b1-4a1b-a00b-bbe11429d563",
  //     title: "Java",
  //     status: false,
  //     createdDate: "16-06-2023",
  //     pages: [],
  //     workspaceId: "b91e387c-4399-4ff4-adf1-c5b455012f8a",
  //     tags: [],
  //     blocks: [],
  //     editDate: "25 minutes ago",
  //   },
  // ];

  const dispatch = useDispatch();
  const recentlies = useSelector((state) => state.document.recently);
  useEffect(() => {
    dispatch(getDocumentRecently());
  }, []);

  // console.log(recentlies)

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
        {recentlies === null ? null : recentlies.length > 0 ? (
          recentlies.map((recently, index) => (
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
