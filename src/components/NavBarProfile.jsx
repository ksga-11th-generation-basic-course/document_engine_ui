import React, { useState } from "react";
import avatar from "../assets/dashboard_image/avatar.svg";
import { JoinWorkspaceModal } from "../modal/JoinWorkspaceModal";
import { DropDownProfile } from "../components/DropDownProfile";

export const NavBarProfile = () => {
  const [visible, setVisible] = useState(false);
  const [signOut, setSignOut] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end items-center py-5 px-14 2xs:gap-x-3 2xs:px-10 gap-x-5 bg-white">
      {signOut ? "True" : "False"}
      <div>
        <JoinWorkspaceModal visible={visible} toggleVisible={toggleVisible} />
      </div>
      <div className="relative">
        <div className="relative inline-block">
          <button
            className="overflow-hidden mt-1.5 rounded-full"
            onClick={() => setOpen(!open)}
          >
            <img src={avatar} className="w-12 md:w-9" />
          </button>

          {open && (<span>{!signOut ? <DropDownProfile open={open} setOpen={setOpen} signOut={signOut} setSignOut={setSignOut} /> : null}</span>)}
        </div>
      </div>
    </div>
  );
};
