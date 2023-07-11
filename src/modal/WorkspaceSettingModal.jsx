import React, { useEffect, useState } from "react";
import { Modal } from "react-daisyui";
import { RemoveWorkspaceModal } from "./RemoveWorkspaceModal";
import { SideBarSettingWorkspace } from "../components/SideBarSettingWorkspace";
import { SettingContent } from "../components/SettingContent";
import { CollaboratorOwnerContent } from "../components/CollaboratorOwnerContent";
import { InviteMemberByEmailContent } from "../components/InviteMemberByEmailContent";
import menu from "../assets/images/Dashboard/menu.svg";
import close from "../assets/dashboard_image/close.svg";

export const WorkspaceSettingModal = ({
  openWorkspaceSetting,
  setOpenWorkspaceSetting,
  workspace,
}) => {
  const [removeWorkspace, setRemoveWorkspace] = useState(false);

  const [setting, setSetting] = useState(true);

  const [collaborator, setCollaborator] = useState(false);

  const [openInviteMember, setOpenInviteMember] = useState(false);

  return (
    <div className="w-full">
      <Modal
        open={openWorkspaceSetting}
        onClickBackdrop={() => setOpenWorkspaceSetting(!openWorkspaceSetting)}
      >
        <div className="shadow-custom w-[1200px] h-[850px] lg:w-[700px] lg:rounded-xl lg:h-[850px] md:w-[500px] md:h-[650px] bg-white rounded-lg grid grid-cols-12 relative ">
          <div className="col-span-3 md:col-span-3 rounded-lg lg:hidden md:hidden">
            <SideBarSettingWorkspace
              collaborator={collaborator}
              setCollaborator={setCollaborator}
              setting={setting}
              setSetting={setSetting}
              openInviteMember={openInviteMember}
              setOpenInviteMember={setOpenInviteMember}
            />
          </div>
          <div className="col-span-9 p-3 shadow-xl lg:col-span-12 lg:p-0  md:pl-3 md:col-span-9 ">
            <div>
              {setting ? (
                <SettingContent
                  workspace={workspace}
                  openWorkspaceSetting={openWorkspaceSetting}
                  setOpenWorkspaceSetting={setOpenWorkspaceSetting}
                />
              ) : null}
              {collaborator ? (
                <CollaboratorOwnerContent
                  workspace={workspace}
                  openWorkspaceSetting={openWorkspaceSetting}
                  setOpenWorkspaceSetting={setOpenWorkspaceSetting}
                />
              ) : null}
              {openInviteMember ? (
                <InviteMemberByEmailContent
                  workspace={workspace}
                  openWorkspaceSetting={openWorkspaceSetting}
                  setOpenWorkspaceSetting={setOpenWorkspaceSetting}
                  setCollaborator={setCollaborator}
                  setOpenInviteMember={setOpenInviteMember}
                />
              ) : null}
            </div>
          </div>
        </div>
      </Modal>
      <div>
        <RemoveWorkspaceModal
          removeWorkspace={removeWorkspace}
          setRemoveWorkspace={setRemoveWorkspace}
        />
      </div>
    </div>
  );
};