import React, { useState } from "react";
import pencil from "../../assets/workspace_image/pencil.svg";
import chevrondown from "../../assets/workspace_image/chevrondown.svg";
import { DropDownDocumentPermission } from "../DropDownDocumentPermission";
import view from "../../assets/document_image/view.svg";
import noaccess from "../../assets/document_image/noaccess.svg";

export const MemberDocumentPermissionCard = ({
  username,
  status,
  isOwner,
  currentuser,
  accessibility,
}) => {
  const [permissiom, setPermission] = useState(false);

  const character = username.split("");

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center gap-x-3">
          <div
            className={`w-9 h-9 ${randomColor} flex justify-center items-center rounded-full`}
          >
            <p className="font-semibold text-18px text-white">{character[0]}</p>
          </div>
          <h3 className="font-semibold text-18px">
            {username} {currentuser ? <span>(You)</span> : null}
          </h3>
          {isOwner ? (
            <span className="px-6 text-primary bg-[#EDF9FF] rounded-lg">
              Owner
            </span>
          ) : null}
        </div>
        {!status ? (
          <div className="flex justify-center items-center gap-x-4">
            <div className="relative">
              <button
                type="button"
                className="text-18px border-[1px] rounded-lg w-[190px] py-2 flex px-5 justify-between items-center gap-x-2"
                onClick={() => setPermission(!permissiom)}
              >
                {accessibility === "Editor" ? (
                  <div className="flex justify-center items-center gap-x-3">
                    <img src={pencil} />
                    <p>{accessibility}</p>
                  </div>
                ) : accessibility === "Viewer" ? (
                  <div className="flex justify-center items-center gap-x-3">
                    <img src={view} />
                    <p>{accessibility}</p>
                  </div>
                ) : (
                  <div className="flex justify-center items-center gap-x-3 text-red-500">
                    <img src={noaccess} />
                    <p>{accessibility}</p>
                  </div>
                )}
                <img src={chevrondown} className="ml-3" />
              </button>
              <div>
                {permissiom ? (
                  <DropDownDocumentPermission
                    permissiom={permissiom}
                    setPermission={setPermission}
                  />
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
