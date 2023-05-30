import React from "react";
import logo from "../assets/landing_image/logo.svg";
import { CollaboratorMemberContent } from "../components/CollaboratorMemberContent";
import { CollaboratorMember } from "../components/CollaboratorMember";
import { Modal } from "react-daisyui";

export const WorkspaceViewForMemberModal = ({
  openCollaborator,
  setOpenCollaborator,
}) => {
  return (
    <div className="w-full">
      <Modal
        open={openCollaborator}
        onClickBackdrop={() => setOpenCollaborator(!openCollaborator)}
      >
        <div className="w-[1200px] h-[810px] bg-white rounded-lg grid grid-cols-12 relative">
          <div className="col-span-3 bg-[#FAFAF9] rounded-lg">
            <div className="space-y-3">
              <div className="flex justify-center p-5 rounded-tl-lg shadow-md">
                <img src={logo} />
              </div>
              <div className="w-full px-3">
                <CollaboratorMember />
              </div>
            </div>
          </div>
          <div className="col-span-9 p-3 shadow-xl">
            <div>
              <CollaboratorMemberContent
                openCollaborator={openCollaborator}
                setOpenCollaborator={setOpenCollaborator}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
