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
        <div className="shadow-custom w-[1200px] h-[810px] lg:w-[700px] lg:rounded-xl lg:h-[850px] md:w-[500px] md:h-[650px] bg-white rounded-lg grid grid-cols-12 relative ">
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
          <div className="col-span-9 lg:col-span-12 p-3 shadow-xl lg:p-0  md:pl-3">
          <span className="hidden lg:inline-block md:inline-block">
              {open? null : 
                  <button onClick={() => setOpen(!open)}>
                  <img
                    src={menu}
                    alt="menu"
                    className="lg:absolute lg:mt-5 lg:ml-10 md:w-3.5 md:ml-8 md:mt-2"
                  />
                </button>
              }

              {open ? 
                  <div className="hidden lg:inline-block lg:z-20 lg:absolute lg:ml-[205px] lg:-mt-2  md:w-full md:ml-[145px]">
                  <div className="hidden lg:inline-block">
                    <button type="button" onClick={() => setOpen(!open)}>
                      <img src={close} className="w-7 md:w-5" />
                    </button>
                  </div>
                </div> : null  
            }

              {open ? (
                <span className="hidden lg:z-10 lg:inline-block lg:absolute lg:-mt-[18px]">
                  <SideBarSettingWorkspace
                    collaborator={collaborator}
                    setCollaborator={setCollaborator}
                    setting={setting}
                    setSetting={setSetting}
                  />
                </span>
              ) : null}
            </span>
            
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
    </div>
  );
};