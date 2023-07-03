import React, { useState } from "react";
import { Modal } from "react-daisyui";
import close from "../assets/dashboard_image/close.svg";
import joinworkspace from "../assets/dashboard_image/joinworkspace.svg";
import join from "../assets/dashboard_image/join.svg";
import { joinWorkspace } from "../redux/service/workspaceService/workspaceService";
import { useDispatch } from "react-redux";
import { joinWorkspaceSuccess } from "../redux/slice/workspaceSlice/workspaceSlice";
import { Button } from "rsuite";
import { useNavigate } from "react-router-dom";

export const JoinWorkspaceModal = ({ visible, setVisible, handleClickNav }) => {
  const [workspaceCode, setWorkspaceCode] = useState();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleJoinWorkspace = async () => {
    try {
      const workspace = await joinWorkspace(workspaceCode);
      dispatch(joinWorkspaceSuccess(workspace));
      navigate("/workspace");
      setVisible(!visible);
      handleClickNav(false);
      document.getElementById("joinWorkspaceByWorkspaceCode").reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full ">
      <Button
        className="flex justify-center items-center text-16px font-semibold gap-x-2 border-solid border-[1px] border-primary px-5 py-3 rounded-lg text-primary md:px-2.5 md:py-1.5 md:text-12px"
        onClick={() => {
          setVisible(!visible);
          document.getElementById("joinWorkspaceByWorkspaceCode").reset();
          handleClickNav(true);
        }}
      >
        <img src={join} className="w-4 h-4 md:w-3.5" />
        Join
      </Button>
      <Modal
        open={visible}
        onClickBackdrop={() => {
          setVisible(!visible);
          document.getElementById("joinWorkspaceByWorkspaceCode").reset();
          handleClickNav(false);
        }}
      >
        <div className="w-[540px] bg-white rounded-lg p-3">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => {
                setVisible(!visible);
                document.getElementById("joinWorkspaceByWorkspaceCode").reset();
                handleClickNav(false);
              }}
            >
              <img className="p-2" src={close} />
            </button>
          </div>
          <div className="px-14 space-y-3 text-accent">
            <div className="flex justify-center items-center">
              <img className="md:w-[70px] md:h-[70px] " src={joinworkspace} />
            </div>
            <h1 className="font-bold text-28px leading-9 text-primary text-center">
              Enter code to join workspace
            </h1>
            <form
              className="flex flex-col gap-y-2 font-semibold text-18px"
              id="joinWorkspaceByWorkspaceCode"
            >
              <p>Workspace Code</p>
              <input
                type="text"
                placeholder="Workspace Code"
                className="rounded-lg py-3 border-primary focus:ring-btn-primary focus:border-btn-primary"
                onChange={(e) => setWorkspaceCode(e.target.value)}
              />
            </form>
            <div className="flex justify-end items-center gap-5 text-16px font-semibold pb-5">
              <button
                className="px-10 py-3 md:px-5 border-[1px] rounded-lg"
                onClick={() => {
                  setVisible(!visible);
                  document
                    .getElementById("joinWorkspaceByWorkspaceCode")
                    .reset();
                  handleClickNav(false);
                }}
              >
                Cancel
              </button>
              <Button
                className="bg-primary text-16px font-semibold text-white  px-10 py-3 rounded-lg"
                onClick={handleJoinWorkspace}
              >
                Join
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
