import React from "react";
import documenticon from "../assets/dashboard_image/documenticon.svg";
import { DocumentCardRow } from "../components/card/DocumentCardRow";
import { Hint } from "../components/Hint";

export const Dashboard = () => {
  return (
    <div className="bg-white md:ml-16">
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
      <div className="space-y-8  md:space-y-5 ">
        <div>
          <DocumentCardRow
            documentname={"Spring Profile"}
            editDate={"Edited 5days ago"}
            status={true}
          />
        </div>
        <div>
          <DocumentCardRow
            documentname={"Redux Toolkit"}
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
    </div>
  );
};
