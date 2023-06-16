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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateWorkspaceModal = ({ visible, setVisible }) => {
  const [workspaceName, setWorkspaceName] = useState();

  const dispatch = useDispatch();

  const [workspaceImage, setWorkspaceImage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!workspaceImage) return;
    const imageRef = ref(
      storage,
      `images/workspace/${uuidv4()}_${workspaceImage.name}`
    );

    uploadBytes(imageRef, workspaceImage).then(async (snapshot) => {
      getDownloadURL(snapshot.ref).then(async (url) => {
        try {
          const workspace = await createWorkspace(workspaceName, url);
          dispatch(createWorkspaceSuccess(workspace));
          toast.success('Create Workspace Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        } catch (error) {
          toast.error(error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
    });
    setVisible(!visible);
    setWorkspaceImage(null);
    e.target.reset();
  };

  return (
    <div className="w-full">
      <button
        onClick={toggleVisible }  
        className="bg-primary w-full py-3 text-white rounded-lg text-18px font-semibold mt-5 lg:w-60 md:text-11px md:w-32 md:py-2.5"
      >
        New Workspace
      </button>
      <Modal open={visible} >
        <div className="w-[540px] bg-white rounded-lg p-3 md:w-[300px] md:p-2">
          <div className="flex justify-end">
            <button type="button" onClick={toggleVisible}>
              <img src={close} className="md:w-6" />
            </button>
          </div>

          <div className="px-14 space-y-5 text-accent gap-y-4 md:px-6 md:space-y-3">
            <div className="flex justify-center items-center">
              <img src={group} className="md:w-16"/>
            </div>
            <h1 className="font-bold text-28px text-primary text-center md:text-20px">
                Create Workspace
            </h1>
            
            <div className="flex flex-col gap-y-2 font-semibold text-20px md:text-14px">
              <p>Workspace Name</p>
              <input
                type="text"
                placeholder="Workspace Name"
                className="rounded-lg py-3 border-primary focus:ring-btn-primary focus:border-btn-primary text-18px md:text-14px md:py-2"
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
                <div className="w-[410px] h-[165px] overflow-hidden rounded-lg">
                  {workspaceImage ? (
                    <img
                      src={URL.createObjectURL(workspaceImage)}
                      className="cursor-pointer w-full object-cover h-full"
                    />
                  ) : (
                    <img src={workspacephoto} className="cursor-pointer" />
                  )}
                </div>
              </label>
            </div>
            <p className="text-end text-[#9CA3AF]">(optional)</p>
            <div className="flex justify-end items-center gap-5 text-16px font-semibold pb-5">
              <button className="px-10 py-3 border-[1px] rounded-lg" onClick={toggleVisible}>
                Cancel
              </button>
              <button className="bg-primary text-white px-10 py-3 rounded-lg " type="submit">
                Create
              </button>
            </div>
          </div>
          
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
};
