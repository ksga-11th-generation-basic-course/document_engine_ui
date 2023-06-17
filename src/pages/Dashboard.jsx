import React from "react";
import documenticon from "../assets/dashboard_image/documenticon.svg";
import { DocumentCardRow } from "../components/card/DocumentCardRow";
import { Hint } from "../components/Hint";

export const Dashboard = () => {
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
    <div className="space-y-7 bg-white ">
      <div>
        <Hint />
      </div>
      <div className="flex items-center gap-x-3 lg:ml-4">
        <img src={documenticon} className="shadow-md p-2 rounded-lg" />
        <p className="font-semibold text-20px text-accent">Recently</p>
      </div>
      <div className="space-y-8">
        {documentRecentlyUpdated &&
          documentRecentlyUpdated.map((document, index) => (
            <div key={index}>
              <DocumentCardRow document={document} />
            </div>
          ))}
      </div>
    </div>
  );
};
