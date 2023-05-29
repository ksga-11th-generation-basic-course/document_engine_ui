import React, { useState } from "react";
import avatar from "../assets/dashboard_image/avatar.svg";
import { JoinWorkspaceModal } from "../modal/JoinWorkspaceModal";
import { DropDownProfile } from "../components/DropDownProfile";

export const NavBarProfile = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end items-center py-5 px-14 gap-x-5">
      <div>
        <JoinWorkspaceModal visible={visible} toggleVisible={toggleVisible} />
      </div>
      <div className="relative">
        <div className="relative inline-block">
          <button
            className="overflow-hidden w-10 rounded-full"
            onClick={() => setOpen(!open)}
          >
            <img src={avatar} />
          </button>

          {open ? <DropDownProfile open={open} setOpen={setOpen}/> : null}
        </div>
      </div>
    </div>
  );
};
