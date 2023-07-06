import React, { useEffect, useState } from "react";
import { Modal } from "react-daisyui";
import { RemoveWorkspaceModal } from "./RemoveWorkspaceModal";
import { SideBarSettingWorkspace } from "../components/SideBarSettingWorkspace";
import { SettingContent } from "../components/SettingContent";
import { CollaboratorOwnerContent } from "../components/CollaboratorOwnerContent";
import menu from "../assets/images/Dashboard/menu.svg";
import { InviteMemberByEmailContent } from "../components/InviteMemberByEmailContent";

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
        <div className="w-[1200px] h-[820px]  bg-white rounded-lg grid grid-cols-12 relative  lg:w-[700px] lg:rounded-xl lg:h-[850px] md:w-[500px] md:h-[650px]">
          <div className="col-span-3 bg-[#FAFAF9] rounded-lg lg:hidden md:hidden ">
            <SideBarSettingWorkspace
              collaborator={collaborator}
              setCollaborator={setCollaborator}
              setting={setting}
              setSetting={setSetting}
              openInviteMember={openInviteMember}
              setOpenInviteMember={setOpenInviteMember}
            />
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
