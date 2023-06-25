import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import deletedocument from "../assets/document_image/deletedocument.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeDocumentSuccess } from "../redux/slice/documentSlice/documentSlice";
import { removeDocument } from "../redux/service/documentService/documentService";
import { useDispatch } from "react-redux";

export const DeleteDocumentModal = ({
  deleteDocument,
  setDeleteDocument,
  documentId,
}) => {
  const dispatch = useDispatch();
  const handleRemoveDocument = async () => {
    try {
      const document = await removeDocument(documentId);
      dispatch(removeDocumentSuccess(document));
      setDeleteDocument(!deleteDocument);
      toast.success("Remove Document Successfully", {
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
      setDeleteDocument(!deleteDocument),
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
  };

  return (
    <div className="w-full">
      <Modal
        open={deleteDocument}
        onClickBackdrop={() => setDeleteDocument(!deleteDocument)}
      >
        <div className="w-[540px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setDeleteDocument(!deleteDocument)}
            >
              <img src={close} />
            </button>
          </div>
          <div className="px-14 space-y-3 text-accent">
            <div className="flex justify-center items-center">
              <img src={deletedocument} />
            </div>
            <h1 className="font-bold text-24px leading-9 text-primary text-center">
              Delete Document!
              <p className="font-normal text-accent text-18px text-center">
                Are you sure want to delete this document?
              </p>
            </h1>

            <div className="flex justify-center items-center gap-5 text-16px font-semibold pb-5">
              <button
                className="px-10 py-3 border-[1px] rounded-lg"
                onClick={() => setDeleteDocument(!deleteDocument)}
              >
                No, cancel
              </button>
              <button
                onClick={handleRemoveDocument}
                className="bg-red-500 text-white  px-10 py-3 rounded-lg "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
