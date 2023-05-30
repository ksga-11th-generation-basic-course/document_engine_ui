import React, { useState } from "react";
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
      <div className="px-16 space-y-5">
        <div className="text-accent">
          <h1 className="font-bold text-34px">Workspace’s Setting</h1>
          <p>Manage permissions and invite people in your workspace</p>
        </div>
        <div>
          <div className="flex justify-between border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg">
            <div className="flex justify-center items-center gap-x-3">
              <img src={workspacesetting} />
              <p className="font-bold text-22px text-black">Your Workspace</p>
            </div>
            <button
              type="button"
              className="font-semibold text-white text-18px px-7 py-1 bg-primary rounded-lg"
            >
              Save
            </button>
          </div>
          <div className="px-6 border-[1px] py-4 space-y-4 rounded-b-lg">
            <div className="w-full space-y-2">
              <h3 className="font-bold text-18px text-black">Workspace Name</h3>
              <input
                type="text"
                className="w-96 py-3 rounded-lg border-gray-300 focus:ring-primary focus:border-primary text-16px font-semibold"
                placeholder="PHP Developer"
              />
            </div>
            <div className="flex justify-between items-center w-full space-y-4">
              <div>
                <h3 className="font-bold text-18px text-black">
                  Workspace Photo
                </h3>
                <p>Displayed when collaborating with others.</p>
              </div>
              <div className="flex justify-center items-center gap-x-4">
                <label>
                  <input
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    multiple
                  />
                  <p className="font-semibold text-16px border-[1px] rounded-lg px-3 py-1 cursor-pointer">
                    Upload Photo
                  </p>
                </label>
                <button
                  type="button"
                  className="px-3 py-2 border-[1px] rounded-lg"
                  onClick={() => setRemovePhoto(!removePhoto)}
                >
                  <img src={trush} />
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg w-[300px]">
              <img src={spring} />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg">
            <div className="flex justify-center items-center gap-x-3">
              <img src={advance} />
              <p className="font-bold text-22px text-black">Advanced</p>
            </div>
          </div>
          <div className="px-6 border-[1px] py-4 space-y-4 rounded-b-lg">
            <div className="flex justify-between items-center w-full space-y-4">
              <div>
                <h3 className="font-bold text-18px text-black">
                  Remove Workspace
                </h3>
                <p>Remove your workspace form your account</p>
              </div>
              <button
                className="font-semibold text-16px text-red-500 border-[1px] rounded-lg px-3 py-1"
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
