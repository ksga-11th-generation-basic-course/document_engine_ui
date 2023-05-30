import React from "react";
import logo from "../assets/landing_image/logo.svg";
import { SettingWorkspace } from "./SettingWorkspace";
import { CollaboratorOwner } from "./CollaboratorOwner";
import { CollaboratorMember } from "./CollaboratorMember";

export const SideBarSettingWorkspace = ({
  collaborator,
  setCollaborator,
  setting,
  setSetting,
}) => {
  return (
    <div className="space-y-3">
      <div className="flex justify-center p-5 rounded-tl-lg shadow-md">
        <img src={logo} />
      </div>
      <div className="w-full px-3">
        <SettingWorkspace
          collaborator={collaborator}
          setCollaborator={setCollaborator}
          setting={setting}
          setSetting={setSetting}
        />
      </div>
      <div className="w-full px-3">
        <CollaboratorOwner
          collaborator={collaborator}
          setCollaborator={setCollaborator}
          setting={setting}
          setSetting={setSetting}
        />
      </div>
    </div>
  );
};
