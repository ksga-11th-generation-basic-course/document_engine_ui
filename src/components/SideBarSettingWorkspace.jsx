import React from "react";
import logo from "../assets/landing_image/logo.svg";
import { SettingWorkspace } from "./SettingWorkspace";
import { CollaboratorOwner } from "./CollaboratorOwner";
import { CollaboratorMember } from "./CollaboratorMember";
import { InviteMemberByEmail } from "./InviteMemberByEmail";

export const SideBarSettingWorkspace = ({
  collaborator,
  setCollaborator,
  setting,
  setSetting,
  openInviteMember,
  setOpenInviteMember,
}) => {
  return (
    <div className="space-y-3">
      <div className="flex justify-center p-5 rounded-tl-lg shadow-md">
        <img className="md:w-16" src={logo} />
      </div>
      <div className="w-full px-3 md:p-0">
        <SettingWorkspace
          collaborator={collaborator}
          setCollaborator={setCollaborator}
          setting={setting}
          setSetting={setSetting}
          openInviteMember={openInviteMember}
          setOpenInviteMember={setOpenInviteMember}
        />
      </div>
      <div className="w-full px-3 md:p-0">
        <CollaboratorOwner
          collaborator={collaborator}
          setCollaborator={setCollaborator}
          setting={setting}
          setSetting={setSetting}
          openInviteMember={openInviteMember}
          setOpenInviteMember={setOpenInviteMember}
        />
      </div>
      <div className="w-full px-3 md:p-0">
        <InviteMemberByEmail
          collaborator={collaborator}
          setCollaborator={setCollaborator}
          setting={setting}
          setSetting={setSetting}
          openInviteMember={openInviteMember}
          setOpenInviteMember={setOpenInviteMember}
        />
      </div>
    </div>
  );
};
