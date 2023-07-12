import React, { useEffect, useState } from "react";
import close from "../assets/dashboard_image/close.svg";
import workspacesetting from "../assets/workspace_image/workspacesetting.svg";
import trush from "../assets/dashboard_image/trush.svg";
import advance from "../assets/dashboard_image/advance.png";
import dropdown from "../assets/images/popUp/dropdown.svg";
import reverse_dropdown from "../assets/images/popUp/reverse_dropdown.svg";
import { RemoveWorkspaceModal } from "../modal/RemoveWorkspaceModal";
import { editWorkspaceSuccess } from "../redux/slice/workspaceSlice/workspaceSlice";
import { editWorkspace } from "../redux/service/workspaceService/workspaceService";
import { storage } from "../firebase/firebase.utils";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { Button } from "rsuite";
import { RemoveWorkspacePhotoModal } from "../modal/RemoveWorkspacePhotoModal";
import { toast } from "react-toastify";

export const SettingContent = ({
  open,
  setOpen,
  openWorkspaceSetting,
  setOpenWorkspaceSetting,
  workspace,
}) => {
  const [removeWorkspace, setRemoveWorkspace] = useState(false);
  const [removePhoto, setRemovePhoto] = useState(false);

  const [openWorkspace, setOpenWorkspace] = useState(false);
  const [openAdvance, setOpenAdvance] = useState(false);

  const [workspaceName, setWorkspaceName] = useState();

  const [workspaceImage, setWorkspaceImage] = useState(null);

  const [url, setUrl] = useState(workspace && workspace.workspaceImage);
  const dispatch = useDispatch();

  let workspaceId = workspace?.workspaceId;

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

  useEffect(() => {
    setWorkspaceName(workspace?.workspaceName);
    setUrl(workspace?.workspaceImage);
    return () => {
      setWorkspaceName("");
      setUrl(null);
    };
  }, [workspace]);

  const handleEditWorkspaceInformation = async () => {
    try {
      const workspace = await editWorkspace(workspaceId, workspaceName, url);
      dispatch(editWorkspaceSuccess(workspace));
      setOpenWorkspaceSetting(!openWorkspaceSetting);
      setOpen(!open);
      toast.success("Workspace Information is updated Successfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[70px] ">
      {/* Close button */}
      <div className="flex w-full justify-end p-1">
        <button
          type="button"
          onClick={() => {setOpenWorkspaceSetting(!openWorkspaceSetting),setOpen(!open)}}
        >
          <img
            src={close}
            className="w-9 lg:w-7 lg:right-7 lg:absolute md:-mt-2  md:w-6"
          />
        </button>
      </div>

      <div className="px-16 md:px-8 space-y-5 lg:mt-8 md:mt-3">
        {/* Header title */}
        <div className="text-accent">
          <h1 className="font-bold text-34px md:text-22px">
            Workspace’s Setting
          </h1>
          <p className="md:text-12px md:-mt-3">
            Manage permissions and invite people in your workspace
          </p>
        </div>

        {/* Workspace setting for laptop and mobile*/}
        <div className="md:hidden">
          <div className="md:px-3 md:py-3 flex justify-between border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg">
            <div className="flex justify-center items-center gap-x-3 md:gap-x">
              <img className="md:w-7" src={workspacesetting} />
              <p className="font-bold text-24px md:text-18px text-black">
                Your Workspace
              </p>
            </div>
            <Button
              type="button"
              className="font-semibold text-white text-18px md:text-16px md:px-5 md:py-1 px-7 py-1 bg-primary rounded-lg"
              onClick={handleEditWorkspaceInformation}
            >
              Save
            </Button>
          </div>
          <div className="px-6 border-[1px] py-4 space-y-4 rounded-b-lg">
            <div className="w-full space-y-2">
              <h3 className="font-bold text-20px text-black">Workspace Name</h3>
              <input
                type="text"
                value={workspaceName}
                placeholder={workspaceName}
                className="w-96 md:w-72 py-3 md:py-2 rounded-lg border-gray-300 focus:ring-primary focus:border-primary text-18px font-semibold"
                onChange={(e) => setWorkspaceName(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center w-full space-y-4">
              <div>
                <h3 className="font-bold text-20px text-black">
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
                    files={workspaceImage}
                    onChange={(e) => setWorkspaceImage(e.target.files[0])}
                  />
                  <p className="md:w-[110px] md:text-center md:align-middle md:h-[33px] font-semibold text-18px md:text-14px border-[1px] rounded-lg px-3 py-1 cursor-pointer">
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
            <div className="overflow-hidden rounded-lg w-[300px] md:w-[210px]">
              <label className="cursor-pointer">
                <input
                  className="text-sm w-36 hidden"
                  type="file"
                  multiple
                  onChange={(e) => {
                    setWorkspaceImage(e.target.files[0]);
                  }}
                />
                <div className="overflow-hidden rounded-lg w-[270px] h-[150px]">
                  {workspaceImage === null ? (
                    <img src="https://firebasestorage.googleapis.com/v0/b/docengine-7e623.appspot.com/o/images%2Fworkspace%2F3036d816-8b3f-4c2e-8725-8b0d0944b4f3_4014085.jpg?alt=media&token=1c310982-d56b-49bc-929f-693812978256" />
                  ) : workspaceImage ? (
                    <img src={URL.createObjectURL(workspaceImage)} />
                  ) : (
                    <img src={workspace && workspace.workspaceImage} />
                  )}
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Advance setting for laptop and mobile */}
        <div className="md:hidden">
          <div className="flex justify-between border-l-[1px] border-r-[1px] border-t-[1px] px-6 md:py-2 py-3 md:px-2 rounded-t-lg">
            <div className="flex justify-center items-center gap-x-3">
              <img className="md:w-7" src={advance} />
              <p className="font-bold text-24px md:text-18px text-black">
                Advanced
              </p>
            </div>
          </div>
          <div className="md:px-3 md:py-2 px-6 border-[1px] py-4 space-y-4 rounded-b-lg">
            <div className="flex justify-between items-center w-full space-y-4">
              <div>
                <h3 className="font-bold text-20px md:text-md text-black">
                  Remove Workspace
                </h3>
                <p className="md:text-sm">
                  Remove your workspace form your account
                </p>
              </div>
              <button
                className="font-semibold text-18px md:text-14px text-red-500 border-[1px] rounded-lg px-3 py-1"
                onClick={() => setRemoveWorkspace(!removeWorkspace)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Workspace setting for mobile phone */}
        <div>
          {/* Header */}
          {openWorkspace ? (
            <div
              className={
                openWorkspace
                  ? "hidden md:flex md:justify-between md:border-r-[1px] md:border-t-[1px] md:border-l-[1px] md:py-3 md:rounded-t-lg md:px-4"
                  : "hidden md:flex md:justify-between md:border-[1px] md:py-3 md:rounded-lg md:px-4"
              }
            >
              <div className="flex justify-center items-center gap-x-3">
                <img src={workspacesetting} className="md:w-6" />
                <p className="font-bold text-24px text-black md:text-16px">
                  Your Workspace
                </p>
                <span className="hidden md:inline-block md:-mt-1">
                  <button
                    type="button"
                    className="font-semibold text-white text-18px px-7 py-1.5 bg-primary rounded-lg md:text-12px md:px-5 md:py-1 md:mt-1 md:ml-16"
                    onClick={() => {
                      handleEditWorkspaceInformation;
                      setOpenWorkspace(false);
                      setOpenAdvance(false);
                    }}
                  >
                    Save
                  </button>
                </span>
              </div>
            </div>
          ) : (
            <button
              className={
                openWorkspace
                  ? "hidden md:flex md:justify-between md:border-r-[1px] md:border-t-[1px] md:border-l-[1px] md:py-3 md:rounded-t-lg md:px-4 md:w-full"
                  : "hidden md:flex md:justify-between md:border-[1px] md:py-3 md:rounded-lg md:px-4 md:w-full"
              }
              onClick={() => {
                setOpenWorkspace(true);
                setOpenAdvance(false);
              }}
            >
              <div className="flex justify-center items-center gap-x-3">
                <img src={workspacesetting} className="md:w-6" />
                <p className="font-bold text-24px text-black md:text-16px">
                  Your Workspace
                </p>
                <span className="hidden md:inline-block md:-mt-1 md:ml-5">
                  {!openWorkspace ? (
                    <img
                      src={dropdown}
                      className="md:mt-2 md:w-4 md:ml-24"
                      onClick={() => setOpenWorkspace(!openWorkspace)}
                    />
                  ) : null}
                </span>
              </div>
            </button>
          )}

          {/* Content mobile */}
          <span className="hidden md:inline-block">
            {openWorkspace ? (
              <div className="px-6 border-[1px] py-4 space-y-4 rounded-b-lg lg:space-y-7 md:px-4 md:space-y-5 md:mb-5">
                {/* Change workspace name */}
                <div className="w-full space-y-2">
                  <h3 className="font-bold text-18px text-black md:text-14px">
                    Workspace Name
                  </h3>
                  <input
                    type="text"
                    value={workspaceName}
                    placeholder={workspaceName}
                    className="w-full py-2.5 rounded-lg border-gray-300 focus:ring-primary focus:border-primary text-16px font-semibold lg:w-60 md:text-14px md:py-1.5"
                    onChange={(e) => setWorkspaceName(e.target.value)}
                  />
                </div>

                {/* Change profile */}
                <div>
                  <div className="md:grid md:grid-cols-12 md:gap-y-2 md:items-center">
                    <div className="md:col-span-5">
                      <h3 className="font-bold text-18px text-black md:text-14px">
                        Workspace Photo
                      </h3>
                    </div>
                    <div className="md:col-span-6 flex justify-center items-center gap-x-3 md:w-40 md:ml-2">
                      <label>
                        <input
                          className="text-sm cursor-pointer w-36 hidden md:w-full"
                          type="file"
                          multiple
                          files={workspaceImage}
                          onChange={(e) => setWorkspaceImage(e.target.files[0])}
                        />
                        <p className="font-semibold text-16px border-[1px] rounded-lg px-3 py-1 cursor-pointer md:text-14px">
                          Choose Photo
                        </p>
                      </label>
                      <div>
                        <button
                          type="button"
                          className="px-3 py-2 border-[1px] rounded-lg md:px-2.5"
                          onClick={() => setRemovePhoto(!removePhoto)}
                        >
                          <img src={trush} className="md:w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg w-[300px] md:w-[210px] md:mt-3">
                    {workspaceImage === null ? (
                      <img src="https://firebasestorage.googleapis.com/v0/b/docengine-7e623.appspot.com/o/images%2Fworkspace%2F3036d816-8b3f-4c2e-8725-8b0d0944b4f3_4014085.jpg?alt=media&token=1c310982-d56b-49bc-929f-693812978256" />
                    ) : workspaceImage ? (
                      <img src={URL.createObjectURL(workspaceImage)} />
                    ) : (
                      <img src={workspace && workspace.workspaceImage} />
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </span>
        </div>

        {/* Advance setting for mobile phone */}
        <div className="pt-14">
          {/* Header */}
          <button
            className={
              openAdvance
                ? "hidden md:flex md:justify-between md:border-l-[1px] md:border-r-[1px] md:border-t-[1px] md:px-6 md:py-3 md:rounded-t-lg md:w-full md:-mt-20"
                : "hidden md:flex  md:justify-between  md:border-l-[1px]  md:border-r-[1px]  md:border-t-[1px]  md:px-6  md:py-3  md:rounded-t-lg  md:border-[1px] md:rounded-lg  md:w-full md:-mt-20"
            }
            onClick={() => {
              setOpenAdvance(!openAdvance);
              setOpenWorkspace(false);
            }}
          >
            <div className="flex justify-center items-center gap-x-3">
              <img src={advance} className="md:w-6 md:-ml-2" />
              <p className="font-bold text-24px text-black md:text-16px">
                Advanced
              </p>
              <span className="hidden md:inline-block md:-mt-1 md:ml-12">
                {!openAdvance ? (
                  <img
                    src={dropdown}
                    className="md:mt-2 md:w-4 md:ml-[110px]"
                  />
                ) : (
                  <img
                    src={reverse_dropdown}
                    className="md:mt-2 md:w-4 md:ml-[110px]"
                  />
                )}
              </span>
            </div>
          </button>

          {/* Content */}
          <span className="hidden lg:hidden md:inline-block">
            {openAdvance ? (
              <div className="px-6 border-[1px] py-4 space-y-4 rounded-b-lg md:px-4">
                {/* Remove workspace */}
                <div className="grid grid-cols-12 justify-center items-center">
                  <div className="col-span-10 lg:col-span-9 md:col-span-6">
                    <h3 className="font-bold text-18px text-black md:text-16px">
                      Remove Workspace
                    </h3>
                  </div>
                  <div className="col-span-2 ml-6 lg:col-span-3 lg:ml-12 md:col-span-6 md:mr-20 md:ml-16">
                    <button
                      className="font-semibold text-16px text-red-500 border-[1px] rounded-lg px-4 py-2 md:text-14px md:w-20 md:px-2 md:py-1.5"
                      onClick={() => setRemoveWorkspace(!removeWorkspace)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </span>
        </div>
      </div>

      <div>
        <RemoveWorkspaceModal
          removeWorkspace={removeWorkspace}
          setRemoveWorkspace={setRemoveWorkspace}
          workspaceId={workspaceId}
        />
        <RemoveWorkspacePhotoModal
          workspaceId={workspaceId}
          workspaceName={workspaceName}
          removePhoto={removePhoto}
          setRemovePhoto={setRemovePhoto}
        />
      </div>
    </div>
  );
};
