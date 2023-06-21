import React from "react";
import documenticon from "../assets/dashboard_image/documenticon.svg";
import { DocumentCardRow } from "../components/card/DocumentCardRow";
import { Hint } from "../components/Hint";
import { useDispatch, useSelector } from "react-redux";
import { getDocumentRecently } from "../redux/service/documentService/documentService";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const recentlies = useSelector((state) => state.document.recently);
  useEffect(() => {
    dispatch(getDocumentRecently());
  }, [])
  const documentRecentlyUpdated = [
    {
      documentId: "b69d1d83-21b1-4a1b-a00b-bbe11429d563",
      title: "Laravel",
      status: false,
      createdDate: "16-06-2023",
      pages: [],
      workspaceId: "b91e387c-4399-4ff4-adf1-c5b455012f8a",
      tags: [],
      blocks: [],
      editDate: "25 minutes ago",
    },
    {
      documentId: "b69d1d83-21b1-4a1b-a00b-bbe11429d563",
      title: "Spring",
      status: true,
      createdDate: "16-06-2023",
      pages: [],
      workspaceId: "b91e387c-4399-4ff4-adf1-c5b455012f8a",
      tags: [],
      blocks: [],
      editDate: "25 minutes ago",
    },
    {
      documentId: "b69d1d83-21b1-4a1b-a00b-bbe11429d563",
      title: "Java",
      status: false,
      createdDate: "16-06-2023",
      pages: [],
      workspaceId: "b91e387c-4399-4ff4-adf1-c5b455012f8a",
      tags: [],
      blocks: [],
      editDate: "25 minutes ago",
    },
  ];

  return (
    <div className="bg-white">
      <div className="w-full lg:w-full">
        <Hint />
      </div>
      <div className="flex items-center mt-12 mb-7 gap-x-3 md:-ml-5 md:mt-7 md:mb-5">
        <img
          src={documenticon}
          className="shadow-custom p-2 rounded-lg md:w-7"
        />
        <p className="font-semibold text-22px text-accent md:text-14px">
          Recently
        </p>
      </div>
      <div>
        <div className="space-y-8  md:space-y-5 ">
          {recentlies === null ? null : recentlies.length > 0 ? (
            recentlies
              .map((recently, index) => (
                <div>
                  <DocumentCardRow
                  key={index}
                  documentId={recently.documentId}
                  documentname={recently.title}
                  editDate={"Edited 5days ago"}
                  status={recently.status}
                />
                </div>
              ))
          ) : (
            <p className="font-semibold text-accent">No Recently</p>
          )}

        </div>
      </div>
    </div>
  );
};
