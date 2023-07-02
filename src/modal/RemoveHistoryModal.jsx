import React from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import deletedocument from "../assets/document_image/deletedocument.svg";
import { removeHistoryByHistoryId } from "../redux/service/historyService/historyService";
import { useDispatch } from "react-redux";
import { removeHistorySuccess } from "../redux/slice/historySlice/historySlice";
import { toast } from "react-toastify";

export const RemoveHistory = ({
  historyId,
  documentId,
  removeHistory,
  setRemoveHistory,
}) => {
  const dispatch = useDispatch();

  const handleRemoveHistory = async () => {
    try {
      const history = await removeHistoryByHistoryId(historyId, documentId);
      dispatch(removeHistorySuccess(history));
      toast.success("Create Workspace Successfully", {
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
      toast.error(error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        zIndex: 10000,
      });
    }
    setRemoveHistory(!removeHistory);
  };

  return (
    <div className="w-full">
      <Modal
        open={removeHistory}
        onClickBackdrop={() => setRemoveHistory(!removeHistory)}
      >
        <div className="w-[540px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setRemoveHistory(!removeHistory)}
            >
              <img src={close} />
            </button>
          </div>
          <div className="px-14 space-y-3 text-accent">
            <div className="flex justify-center items-center">
              <img src={deletedocument} />
            </div>
            <h1 className="font-bold text-24px leading-9 text-primary text-center">
              Remove History!
              <p className="font-normal text-accent text-18px text-center">
                Are you sure want to delete this history?
              </p>
            </h1>

            <div className="flex justify-center items-center gap-5 text-16px font-semibold pb-5">
              <button
                className="px-10 py-3 border-[1px] rounded-lg"
                onClick={() => setRemoveHistory(!removeHistory)}
              >
                No, cancel
              </button>
              <button
                className="bg-red-500 text-white  px-10 py-3 rounded-lg"
                onClick={handleRemoveHistory}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
