import React from "react";
import close from "../assets/dashboard_image/close.svg";
import search from "../assets/document_image/search.svg";
import { MemberDocumentPermissionCard } from "./card/MemberDocumentPermissionCard";

export const DocumentPermissionContent = ({
  openPermission,
  setOpenPermission,
}) => {
  return (
    <div>
      <div className="flex w-full justify-end ">
        <button
          type="button"
          onClick={() => setOpenPermission(!openPermission)}
        >
          <img src={close} />
        </button>
      </div>
      <div className="px-16 space-y-5 lg:-ml-8 lg:-mr-10">
        <div className="text-accent">
          <h1 className="font-bold text-34px lg:text-2xl">Document Permission</h1>
          <p>Manage permissions of your members in workspace</p>
        </div>
        <div className="space-y-2">
          <div className="relative">
            <input
              type="text"
              className="border-[1px] text-accent border-gray-200 px-6 py-3 rounded-lg space-y-3 w-full font-semibold focus:ring-gray-200 focus:border-gray-200 "
              placeholder="Search member"
            />
            <div className="absolute right-5 top-4">
              <img src={search} />
            </div>
          </div>
          <div className="border-[1px] rounded-lg p-5 space-y-5 ">
          <MemberDocumentPermissionCard
              username={"Tith Ouddom"}
              status={true}
              isOwner={true}
              currentuser={true}
              accessibility={"Editor"}
            />
            <MemberDocumentPermissionCard
              username={"Kheang Sovannak"}
              status={false}
              isOwner={false}
              currentuser={false}
              accessibility={"Editor"}
            />
            <MemberDocumentPermissionCard
              username={"Ruos Raksa"}
              status={false}
              isOwner={false}
              currentuser={false}
              accessibility={"Viewer"}
            />
            <MemberDocumentPermissionCard
              username={"Chhum Lyheng"}
              status={false}
              isOwner={false}
              currentuser={false}
              accessibility={"No Access"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
