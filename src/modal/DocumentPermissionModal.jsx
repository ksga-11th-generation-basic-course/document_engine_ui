import React from "react";
import logo from "../assets/landing_image/logo.svg";
import { Modal } from "react-daisyui";
import { DocumentPermission } from "../components/DocumentPermission";
import { DocumentPermissionContent } from "../components/DocumentPermissionContent";

export const DocumentPermissionModal = ({
  openPermission,
  setOpenPermission,
  documentId,
  workspaceId,
}) => {
  return (
    <div className="w-full z-30">
      <Modal
        open={openPermission}
        onClickBackdrop={() => setOpenPermission(!openPermission)}
      >
        <div className="w-[1200px] h-[810px] bg-white rounded-lg grid grid-cols-12 relative lg:w-[700px] md:w-[350px] md:h-[700px]">
          <div className="col-span-3 bg-[#FAFAF9] rounded-lg lg:hidden">
            <div className="space-y-3">
              <div className="flex justify-center p-5 rounded-tl-lg shadow-md">
                <img src={logo} />
              </div>
              <div className="w-full px-3">
                <DocumentPermission />
              </div>
            </div>
          </div>
          <div className="col-span-9 p-3 shadow-xl z-50 lg:col-span-12">
            <div>
              <DocumentPermissionContent
                openPermission={openPermission}
                setOpenPermission={setOpenPermission}
                documentId={documentId}
                workspaceId={workspaceId}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
