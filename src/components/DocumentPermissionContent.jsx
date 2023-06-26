import React, { useState } from "react";
import close from "../assets/dashboard_image/close.svg";
import search from "../assets/document_image/search.svg";
import { MemberDocumentPermissionCard } from "./card/MemberDocumentPermissionCard";

export const DocumentPermissionContent = ({
  openPermission,
  setOpenPermission,
  members,
  workspaceId,
  documentId
}) => {
  const [searchTerm, setSearchTerm] = useState("");
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
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-5 top-4">
              <img src={search} />
            </div>
          </div>
          <div className="border-[1px] rounded-lg p-5 space-y-5">
            {members === null ? null : members.length > 0 ? (
              members.filter((member) => {
                if (searchTerm === "") {
                  return member;
                } else if (
                  member.username
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return member;
                }
              }).map((member, index) => (
                <div className="col-span-4" key={index}>
                  <MemberDocumentPermissionCard
                    username={member.username}
                    status={member.isOwner}
                    isOwner={member.isOwner}
                    currentuser={true}
                    accessibility={member.accessibility}
                    userId={member.userId}
                    workspaceId={workspaceId}
                    documentId={documentId}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-12 absolute bottom-[45%] left-[55%]">
                <p className="font-semibold text-accent">No Member</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
