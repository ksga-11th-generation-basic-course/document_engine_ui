import React, { useEffect, useState } from "react";
import close from "../assets/dashboard_image/close.svg";
import iconemail from "../assets/workspace_image/email.svg";
import { inviteMemberViaEmail } from "../redux/service/workspaceService/workspaceService";
import { useDispatch } from "react-redux";
import { inviteMemberViaEmailSuccess } from "../redux/slice/workspaceSlice/workspaceSlice";
import { Button } from "rsuite";

export const InviteMemberByEmailContent = ({
  open,
  setOpen,
  openWorkspaceSetting,
  setOpenWorkspaceSetting,
  workspace,
}) => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  let workspaceId = workspace.workspaceId;

  const handleInviteMemberViaEmail = async () => {
    try {
      const workspace = await inviteMemberViaEmail(workspaceId, email);
      dispatch(inviteMemberViaEmailSuccess(workspace));
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Close button */}
      <div className="flex w-full justify-end p-1">
        <button
          type="button"
          onClick={() => {
            setOpenWorkspaceSetting(!openWorkspaceSetting), setOpen(!open);
          }}
        >
          <img
            src={close}
            className="w-9 lg:w-7 lg:right-7 lg:absolute md:-mt-2  md:w-6"
          />
        </button>
      </div>

      <div className="px-16 space-y-5 lg:mt-8  md:px-8 md:mt-3 md:-ml-4">
        <div className="text-accent">
          <h1 className="font-bold text-34px md:text-22px">Invite Via Email</h1>
          <p className="md:text-12px md:-mt-3">
            Manage permissions and invite people in your workspace
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center border-l-[1px] border-r-[1px] border-t-[1px] px-6 py-3 rounded-t-lg md:px-4">
            <div className="flex justify-center items-center gap-x-3">
              <img src={iconemail} className="md:w-5"/>
              <p className="font-semibold text-18px md:text-16px">Invite Members</p>
            </div>
            <div className="flex justify-center items-center gap-x-3 md:gap-3 md:px-0 shadow-sm rounded-lg relative">
              <Button
                className="font-semibold text-white text-18px md:text-14px md:px-5 md:py-1 px-7 py-2 bg-primary rounded-lg"
                type="button"
                onClick={handleInviteMemberViaEmail}
              >
                Invite
              </Button>
            </div>
          </div>
          <div className="px-6 md:p-3 border-[1px] py-4 space-y-2 rounded-b-lg md:px-4">
            <div className="flex flex-col gap-y-2">
              <label className="font-semibold">User Email</label>
              <div className="relative">
                <input
                  type="text"
                  value={email}
                  placeholder="example@gmail.com"
                  className="font-semibold w-full px-10 rounded-lg border-[1px] border-gray-300 focus:ring-gray-400 focus:border-gray-400 md:text-14px"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <img
                  src={iconemail}
                  className="w-6 h-6 absolute top-[10px] left-2 md:w-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
