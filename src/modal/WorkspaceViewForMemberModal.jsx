import React from "react";
import logo from "../assets/landing_image/logo.svg";
import { CollaboratorMemberContent } from "../components/CollaboratorMemberContent";
import { CollaboratorMember } from "../components/CollaboratorMember";
import { Modal } from "react-daisyui";

export const WorkspaceViewForMemberModal = ({
  openCollaboratorForMember,
  setOpenCollaboratorForMember,
  workspace,
}) => {
  return (
    <div className="w-full">
      <Modal
        open={openCollaboratorForMember}
        onClickBackdrop={() =>
          setOpenCollaboratorForMember(!openCollaboratorForMember)
        }
      >
        <div className="w-[1200px] h-[810px] bg-white rounded-lg grid grid-cols-12 relative">
          <div className="col-span-3 bg-[#FAFAF9] rounded-lg">
            <div className="space-y-3">
              <div className="flex justify-center p-5 rounded-tl-lg shadow-md">
                <img src={logo} />
              </div>
              <div className="w-full px-3">
                <CollaboratorMember workspace={workspace}/>
              </div>
            </div>
          </div>
          <div className="col-span-9 p-3 shadow-xl">
            <div>
              <CollaboratorMemberContent
                openCollaboratorForMember={openCollaboratorForMember}
                setOpenCollaboratorForMember={setOpenCollaboratorForMember}
                workspace={workspace}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};