import React from "react";
import logo from "../assets/landing_image/logo.svg";
import { Modal } from "react-daisyui";
import { DocumentHistoryContent } from "../components/DocumentHistoryContent";
import { CollaboratorMember } from "../components/CollaboratorMember";
import { DocumentHistory } from "../components/DocumentHistory";
import { RemoveHistory } from "./RemoveHistoryModal";

export const DocumentHistoryModal = ({
  openDocumentHistory,
  setOpenDocumentHistory,
  documentId,

}) => {
  return (
    <div className="w-full">
      <Modal
        open={openDocumentHistory}
        onClickBackdrop={() => setOpenDocumentHistory(!setOpenDocumentHistory)}
      >
        <div className="w-[1200px] h-[810px] bg-white rounded-lg grid grid-cols-12 relative">
          <div className="col-span-3 bg-[#FAFAF9] rounded-lg">
            <div className="space-y-3">
              <div className="flex justify-center p-5 rounded-tl-lg shadow-md">
                <img src={logo} />
              </div>
              <div className="w-full px-3">
                <DocumentHistory />
              </div>
            </div>
          </div>
          <div className="col-span-9 p-3 shadow-xl">
            <div>
              <DocumentHistoryContent
                openDocumentHistory={openDocumentHistory}
                setOpenDocumentHistory={setOpenDocumentHistory}
                documentId={documentId}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
