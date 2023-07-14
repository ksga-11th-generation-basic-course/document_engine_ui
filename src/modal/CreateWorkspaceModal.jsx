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
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export const CreateWorkspaceModal = ({
  visible,
  setVisible,
  secondhandleClick,
}) => {
  // const [workspaceName, setWorkspaceName] = useState("");

  const dispatch = useDispatch();

  const [workspaceImage, setWorkspaceImage] = useState();

  const navigate = useNavigate();

  const [url, setUrl] = useState(
    "https://firebasestorage.googleapis.com/v0/b/docengine-7e623.appspot.com/o/images%2Fworkspace%2F3036d816-8b3f-4c2e-8725-8b0d0944b4f3_4014085.jpg?alt=media&token=1c310982-d56b-49bc-929f-693812978256"
  );

  useEffect(()=>{
    if(visible===false){
      setUrl("https://firebasestorage.googleapis.com/v0/b/docengine-7e623.appspot.com/o/images%2Fworkspace%2F3036d816-8b3f-4c2e-8725-8b0d0944b4f3_4014085.jpg?alt=media&token=1c310982-d56b-49bc-929f-693812978256"
      )
    }
  },[visible])

  useEffect(() => {
    if (!workspaceImage) return;
    else {
      const imageRef = ref(
        storage,
        `images/workspace/${uuidv4()}_${workspaceImage.name}`
        
      );
      console.log("Storage",storage);

      uploadBytes(imageRef, workspaceImage).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setUrl(url);
        });
      });
    }
    
  }, [workspaceImage]);

  const formik = useFormik({
    initialValues: {
      workspacename: "",
    },
    validationSchema: Yup.object({
      workspacename: Yup.string().required("Workspace Name is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setVisible(false);
        secondhandleClick(false);
        const workspace = await createWorkspace(values.workspacename, url);
        dispatch(createWorkspaceSuccess(workspace));
        resetForm({ values: "" });
        navigate(`/document/${workspace?.workspaceId}`);
        toast.success("Create Workspace Successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        console.error("Create Workspace failed:", error);
        setVisible(!visible);
        secondhandleClick(false);
      }
    },
  });


  return (
    <div className="w-full">
      <Modal open={visible} >
        <form
          className="w-[540px] bg-white rounded-lg p-3 md:w-[300px] md:p-2 z-50"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => {
                formik.resetForm({ values: "" });
                setVisible(!visible);
                secondhandleClick(false);
                setWorkspaceImage();
              }}
            >
              <img src={close} className="md:w-6"/>
            </button>
          </div>
          <div className="px-14 space-y-3 text-accent  gap-y-4 md:px-6 md:space-y-3">
            <div>
              <div className="flex justify-center items-center">
                <img src={group} className="md:w-16"/>
              </div>
              <h1 className="font-bold text-28px leading-9 text-primary text-center md:text-20px">
                Create Workspace
              </h1>
            </div>

            <div className="flex flex-col space-y-4  text-18px mt-2 md:text-14px">
              {/* Workspace Name */}
              <div className="space-y-2">
                <label className="font-semibold">Workspace Name</label>
                <div>
                  <input
                    type="text"
                    placeholder="Workspace Name"
                    className="rounded-lg py-3 border-primary focus:ring-btn-primary focus:border-btn-primary text-18px w-full md:text-14px md:py-2"
                    name="workspacename"
                    aria-label="Full name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.workspacename}
                  />
                  {formik.touched.workspacename &&
                  formik.errors.workspacename ? (
                    <div className=" mt-2 text-red-600 text-14px font-normal lg:text-12px md:text-sm">
                      {formik.errors.workspacename}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Workspace Photo */}
              <div className="space-y-2">
                <label className="font-semibold">
                  Workspace Photo{" "}
                  <span className="text-end text-[#9CA3AF] font-normal md:text-12px">
                    (optional)
                  </span>
                </label>
                <label>
                  <input
                    className="text-sm cursor-pointer w-36 hidden "
                    type="file"
                    multiple
                    onChange={(e) => {
                      setWorkspaceImage(e.target.files[0]);
                    }}
                  />
                  <div className="w-[410px] h-[165px] mt-1 overflow-hidden rounded-lg md:w-full">
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

              <div className="space-y-3 mt-2  ">
                <div className="flex justify-end items-center gap-5 text-16px font-semibold pb-5 md:text-12px md:gap-3 md:-mt-16">
                  <button
                    className="px-10 py-3 border-[1px] rounded-lg md:px-8 md:ml-12 md:py-2.5"
                    type="button"
                    onClick={() => {
                      formik.resetForm({ values: "" });
                      setVisible(!visible);
                      secondhandleClick(false);
                      setWorkspaceImage();
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-10 py-3 transition duration-200 bg-primary hover:bg-btn-primary focus:shadow-sm text-white rounded-lg 
                focus:outline-none shadow-sm hover:shadow-md text-center inline-block
                lg:h-13 md:h-[2px] md:pb-8 md:w-[280px] md:rounded-md  md:py-2.5"
                    type="submit"
                    onClick={() => setWorkspaceImage()}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
      <ToastContainer />
    </div>
  );
};
