import React, { useEffect, useState } from "react";
import close from "../assets/dashboard_image/close.svg";
import workspacesetting from "../assets/workspace_image/workspacesetting.svg";
import trush from "../assets/dashboard_image/trush.svg";
import advance from "../assets/dashboard_image/advance.png";
import spring from "../assets/workspace_image/spring.svg";
import { RemoveWorkspaceModal } from "../modal/RemoveWorkspaceModal";
import { RemovePhotoModal } from "../modal/RemovePhotoModal";

export const SettingContent = ({
  openWorkspaceSetting,
  setOpenWorkspaceSetting,
  workspace,
}) => {
  const [removeWorkspace, setRemoveWorkspace] = useState(false);

  const [removePhoto, setRemovePhoto] = useState(false);

  return (
    <div>
      <div className="flex w-full justify-end">
        <button
          type="button"
          onClick={() => setOpenWorkspaceSetting(!openWorkspaceSetting)}
        >
          <img src={close} />
        </button>
      </div>
      <div className="px-16 md:px-3 space-y-5">
        <div className="text-accent">
          <h1 className="font-bold text-34px md:text-24px">
            Workspace’s Setting
          </h1>
          <p className="md:text-md">
            Manage permissions and invite people in your workspace
          </p>
        </div>
        <div>
          <div className="md:px-3 md:py-3 flex justify-between border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg">
            <div className="flex justify-center items-center gap-x-3 md:gap-x">
              <img className="md:w-7" src={workspacesetting} />
              <p className="font-bold text-22px md:text-18px text-black">
                Your Workspace
              </p>
            </div>
            <button
              type="button"
              className="font-semibold text-white text-18px md:text-16px md:px-5 md:py-1 px-7 py-1 bg-primary rounded-lg"
            >
              Save
            </button>
          </div>
          <div className="px-6 border-[1px] py-4 space-y-4 rounded-b-lg">
            <div className="w-full space-y-2">
              <h3 className="font-bold text-18px text-black">Workspace Name</h3>
              <input
                type="text"
                className="w-96 md:w-72 py-3 md:py-2 rounded-lg border-gray-300 focus:ring-primary focus:border-primary text-16px font-semibold"
                placeholder={workspace.workspaceName}
              />
            </div>
            <div className="flex justify-between items-center w-full space-y-4">
              <div>
                <h3 className="font-bold text-18px text-black">
                  Workspace Photo
                </h3>
                <p className="md:text-sm">
                  Displayed when collaborating with others.
                </p>
              </div>
              <div className="flex justify-center items-center md:gap-x-1 gap-x-4">
                <label>
                  <input
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    multiple
                  />
                  <p className="md:w-[110px] md:text-center md:align-middle md:h-[33px] font-semibold text-16px md:text-14px border-[1px] rounded-lg px-3 py-1 cursor-pointer">
                    Upload Photo
                  </p>
                </label>
                <button
                  type="button"
                  className="px-3 py-2 md:w-10 border-[1px] rounded-lg"
                  onClick={() => setRemovePhoto(!removePhoto)}
                >
                  <img src={trush} />
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg w-[300px] h-[210px]">
              <img src={workspace.workspaceImage} />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between border-l-[1px] border-r-[1px] border-t-[1px] px-6 md:py-2 py-3 md:px-2 rounded-t-lg">
            <div className="flex justify-center items-center gap-x-3">
              <img className="md:w-7" src={advance} />
              <p className="font-bold text-22px md:text-18px text-black">
                Advanced
              </p>
            </div>
          </div>
          <div className="md:px-3 md:py-2 px-6 border-[1px] py-4 space-y-4 rounded-b-lg">
            <div className="flex justify-between items-center w-full space-y-4">
              <div>
                <h3 className="font-bold text-18px md:text-md text-black">
                  Remove Workspace
                </h3>
                <p className="md:text-sm">
                  Remove your workspace form your account
                </p>
              </div>
              <button
                className="font-semibold text-16px md:text-14px text-red-500 border-[1px] rounded-lg px-3 py-1"
                onClick={() => setRemoveWorkspace(!removeWorkspace)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RemoveWorkspaceModal
          removeWorkspace={removeWorkspace}
          setRemoveWorkspace={setRemoveWorkspace}
        />
        <RemovePhotoModal
          removePhoto={removePhoto}
          setRemovePhoto={setRemovePhoto}
        />
      </div>
    </div>
  );
};
