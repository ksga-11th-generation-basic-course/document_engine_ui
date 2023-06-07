import React, { useState } from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import group from "../assets/dashboard_image/group.svg";
import workspacephoto from "../assets/dashboard_image/worksapacephoto.svg";
import { useDispatch } from "react-redux";
import { createWorkspace } from "../redux/service/workspaceService/workspaceService";
import { createWorkspaceSuccess } from "../redux/slice/workspaceSlice/workspaceSlice";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/firebase.utils";
import { v4 as uuidv4 } from "uuid";

export const CreateWorkspaceModal = ({ visible, setVisible }) => {
  const [workspaceName, setWorkspaceName] = useState();

  const dispatch = useDispatch();

  const [workspaceImage, setWorkspaceImage] = useState();

  const handleSubmit = () => {
    try {
      if (!workspaceImage) return;
      const imageRef = ref(
        storage,
        `images/workspace/${uuidv4()}_${workspaceImage.name}`
      );

      uploadBytes(imageRef, workspaceImage).then(async (snapshot) => {
        getDownloadURL(snapshot.ref).then(async (url) => {
          const workspace = await createWorkspace(workspaceName, url);
          dispatch(createWorkspaceSuccess(workspace));
        });
      });
      setVisible(!visible);
      document.getElementById("createworkspace").reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={() => setVisible(!visible)}
        className="bg-primary w-full py-3 text-white rounded-lg text-16px font-semibold mt-5"
      >
        New Workspace
      </button>
      <Modal open={visible} onClickBackdrop={() => setVisible(!visible)}>
        <div className="w-[540px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button type="button" onClick={() => setVisible(!visible)}>
              <img src={close} />
            </button>
          </div>

          <div className="px-14 space-y-5 text-accent gap-y-4">
            <div className="flex justify-center items-center">
              <img src={group} />
            </div>
            <h1 className="font-bold text-28px text-primary text-center">
              Create Workspace
            </h1>
            <form
              className="flex flex-col gap-y-2 font-semibold text-18px"
              id="createworkspace"
            >
              <p>Worksapce Name</p>
              <input
                type="text"
                placeholder="Workspace Name"
                className="rounded-lg py-3 border-primary focus:ring-btn-primary focus:border-btn-primary"
                onChange={(e) => setWorkspaceName(e.target.value)}
              />
              <p>Workspace Photo</p>
              <label>
                <input
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  multiple
                  onChange={(e) => {
                    setWorkspaceImage(e.target.files[0]);
                  }}
                />
                <img src={workspacephoto} className="cursor-pointer" />
              </label>
              <div className="space-y-3 mt-2">
                <p className="text-end text-[#9CA3AF] font-normal">
                  (optional)
                </p>
                <div className="flex justify-end items-center gap-5 text-16px font-semibold pb-5">
                  <button
                    className="px-10 py-3 border-[1px] rounded-lg"
                    type="button"
                    onClick={() => setVisible(!visible)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-primary text-white  px-10 py-3 rounded-lg"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
