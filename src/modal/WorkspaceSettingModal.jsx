import React, { useEffect, useState } from "react";
import { Modal } from "react-daisyui";
import { RemoveWorkspaceModal } from "./RemoveWorkspaceModal";
import { SideBarSettingWorkspace } from "../components/SideBarSettingWorkspace";
import { SettingContent } from "../components/SettingContent";
import { CollaboratorOwnerContent } from "../components/CollaboratorOwnerContent";
import { useDispatch, useSelector } from "react-redux";
import { getWorkspaceByWorkspaceId } from "../redux/service/workspaceService/workspaceService";

export const WorkspaceSettingModal = ({
  openWorkspaceSetting,
  setOpenWorkspaceSetting,
  workspace,
}) => {
  const [removeWorkspace, setRemoveWorkspace] = useState(false);

  const [setting, setSetting] = useState(true);

  const [collaborator, setCollaborator] = useState(false);

  return (
    <div className="w-full">
      <Modal
        open={openWorkspaceSetting}
        onClickBackdrop={() => setOpenWorkspaceSetting(!openWorkspaceSetting)}
      >
        <div className="w-[1200px] md:w-[600px] h-[810px] md:h-[710px] bg-white rounded-lg grid grid-cols-12 relative">
          <div className="col-span-3 md:col-span-3 bg-[#FAFAF9] rounded-lg">
            <SideBarSettingWorkspace
              collaborator={collaborator}
              setCollaborator={setCollaborator}
              setting={setting}
              setSetting={setSetting}
            />
          </div>
          <div className="col-span-9 md:col-span-9 p-3 shadow-xl">
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
