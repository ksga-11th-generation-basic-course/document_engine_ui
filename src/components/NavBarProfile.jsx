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
<<<<<<< HEAD
    <div className="flex justify-end items-center py-5 px-14 gap-x-5 md:px-7">
=======
    <div className="flex justify-end items-center py-5 px-14 gap-x-5">
      {signOut ? "True" : "False"}
>>>>>>> 273f21b (responsive)
      <div>
        <JoinWorkspaceModal visible={visible} toggleVisible={toggleVisible} />
      </div>
      <div className="relative">
        <div className="relative inline-block">
          <button
<<<<<<< HEAD
            className="overflow-hidden w-10 md:w-9 md:mt-1.5 rounded-full"
=======
            className="overflow-hidden mt-1.5 rounded-full"
>>>>>>> 6d37ee2 (responsive)
            onClick={() => setOpen(!open)}
          >
            <img src={avatar} className="w-12 md:w-9"/>
          </button>
<<<<<<< HEAD
          {open ? <DropDownProfile open={open} setOpen={setOpen} /> : null}
=======

          {open  && (<span>{!signOut ? <DropDownProfile open={open} setOpen={setOpen}  signOut={signOut} setSignOut={setSignOut}/> : null}</span>)}
>>>>>>> 273f21b (responsive)
        </div>
      </div>
    </div>
  );
};
