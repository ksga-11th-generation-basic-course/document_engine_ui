import React from "react";
import logo from "../assets/landing_image/logo.svg";
import { Modal } from "react-daisyui";
import { DocumentPermission } from "../components/DocumentPermission";
import { DocumentPermissionContent } from "../components/DocumentPermissionContent";

export const DocumentPermissionModal = ({
  openPermission,
  setOpenPermission,
}) => {
  return (
    <div className="w-full ">
      <Modal
        open={openPermission}
        onClickBackdrop={() => setOpenPermission(!openPermission)}
      >
        <div className="w-[1200px] h-[810px] rounded-lg grid grid-cols-12 relative bg-white  lg:w-[700px] lg:h-[550px] md:bg-inherit md:ml-44">
          <div className="col-span-3 bg-[#FAFAF9] rounded-lg md:hidden">
            <div className="space-y-3 ">
              <div className="flex justify-center p-5 rounded-tl-lg shadow-md ">
                <img src={logo} />
              </div>
              <div className="w-full px-3 ">
                <DocumentPermission />
              </div>
            </div>
          </div>
          <div className="col-span-9 p-3 shadow-xl md:bg-white md:rounded-xl ">
            <div>
              <DocumentPermissionContent
                openPermission={openPermission}
                setOpenPermission={setOpenPermission}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
