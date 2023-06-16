import React, { useState } from "react";
import { Modal } from "react-daisyui";
import { RemoveWorkspaceModal } from "./RemoveWorkspaceModal";
import { SideBarSettingWorkspace } from "../components/SideBarSettingWorkspace";
import { SettingContent } from "../components/SettingContent";
import { CollaboratorOwnerContent } from "../components/CollaboratorOwnerContent";
import { CollaboratorMemberContent } from "../components/CollaboratorMemberContent";
import menu from "../assets/images/Dashboard/menu.svg";
import close from "../assets/dashboard_image/close.svg";

export const WorkspaceSettingModal = ({
  openWorkspaceSetting,
  setOpenWorkspaceSetting,
}) => {
  const [removeWorkspace, setRemoveWorkspace] = useState(false);

  const [setting, setSetting] = useState(true);

  const [collaborator, setCollaborator] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <Modal
        open={openWorkspaceSetting}
        onClickBackdrop={() => setOpenWorkspaceSetting(!openWorkspaceSetting)}
      >
        <div className="w-[1200px] h-[810px] lg:w-[770px] lg:h-[850px] md:w-[390px] md:h-[650px] bg-white rounded-lg grid grid-cols-12 relative lg:rounded-none">
          <div className="col-span-3 rounded-lg lg:hidden md:hidden">
            <SideBarSettingWorkspace
              collaborator={collaborator}
              setCollaborator={setCollaborator}
              setting={setting}
              setSetting={setSetting}
            />
          </div>
          <div className="col-span-9 lg:col-span-12 p-3 shadow-xl lg:p-0">
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
                  <div className="hidden lg:inline-block lg:z-10 lg:absolute lg:ml-[205px] lg:-mt-2  md:w-full md:ml-[145px]">
                  <div className="hidden lg:inline-block">
                    <button type="button" onClick={() => setOpen(!open)}>
                      <img src={close} className="w-7 md:w-5" />
                    </button>
                  </div>
                </div> : null  
            }

              {open ? (
                <span className="hidden lg:inline-block lg:absolute lg:-mt-[18px]">
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
                  openWorkspaceSetting={openWorkspaceSetting}
                  setOpenWorkspaceSetting={setOpenWorkspaceSetting}
                />
              ) : null}
              {collaborator ? (
                <CollaboratorOwnerContent
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
