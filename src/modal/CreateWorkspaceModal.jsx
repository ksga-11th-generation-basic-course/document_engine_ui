import React, { useEffect, useState } from "react";
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
import { Button } from "rsuite";

export const CreateWorkspaceModal = ({ visible, setVisible }) => {
  const [workspaceName, setWorkspaceName] = useState("");

  const dispatch = useDispatch();

  const [workspaceImage, setWorkspaceImage] = useState();

  const [url, setUrl] = useState(
    "https://firebasestorage.googleapis.com/v0/b/docengine-7e623.appspot.com/o/images%2Fworkspace%2F009e87fc-0298-4096-ad96-713ac96409ba_Monterey-dark.jpg?alt=media&token=8a49d5d6-c072-4617-a7bf-88bc3d229b7e"
  );

  useEffect(() => {
    if (!workspaceImage) return;

    const imageRef = ref(
      storage,
      `images/workspace/${uuidv4()}_${workspaceImage.name}`
    );

    uploadBytes(imageRef, workspaceImage).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setUrl(url);
      });
    });
  }, [workspaceImage]);

  const handleSubmit = async () => {
    try {
      const workspace = await createWorkspace(workspaceName, url);
      dispatch(createWorkspaceSuccess(workspace));
      toast.success("Create Workspace Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setWorkspaceName("");
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
    setVisible(!visible);
  };

  return (
    <div className="w-full z-50">
      <Modal open={visible} onClickBackdrop={() => setVisible(!visible)}>
        <div className="w-[540px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button type="button" onClick={() => setVisible(!visible)}>
              <img src={close} />
            </button>
          </div>

          <div className="px-14 space-y-3 text-accent">
            <div className="flex justify-center items-center">
              <img src={group} />
            </div>
            <h1 className="font-bold text-28px leading-9 text-primary text-center">
              Create Workspace
            </h1>
            <div className="flex flex-col gap-y-2 font-semibold text-18px">
              <p>Worksapce Name</p>
              <input
                type="text"
                placeholder="Workspace Name"
                value={workspaceName}
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
                  <Button
                    className="bg-primary text-white text-16px px-10 py-3 rounded-lg"
                    onClick={handleSubmit}
                  >
                    Create
                  </Button>
                  {/* <button
                    className="bg-primary text-white  px-10 py-3 rounded-lg"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Create
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
};
