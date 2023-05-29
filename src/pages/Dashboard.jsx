import React from "react";
import documenticon from "../assets/dashboard_image/documenticon.svg";
import { DocumentCardRow } from "../components/card/DocumentCardRow";
import { Hint } from "../components/Hint";

export const Dashboard = () => {
  return (
    <div className="space-y-7">
      <div>
        <Hint />
      </div>
      <div className="flex items-center gap-x-3">
        <img src={documenticon} className="shadow-md p-2 rounded-lg" />
        <p className="font-semibold text-20px text-accent">Recently</p>
      </div>
      <div>
        <DocumentCardRow
          documentname={"Spring Profile"}
          editDate={"Edited 5days ago"}
          status={true}
        />
      </div>
      <div>
        <DocumentCardRow
          documentname={"Spring Profile"}
          editDate={"Edited 9days ago"}
          status={false}
        />
      </div>
      <div>
        <DocumentCardRow
          documentname={"Laravel"}
          editDate={"Edited 17days ago"}
          status={true}
        />
      </div>
    </div>
  );
};
