import React, { useEffect, useState } from "react";
import avatar from "../assets/dashboard_image/avatar.svg";
import { JoinWorkspaceModal } from "../modal/JoinWorkspaceModal";
import { DropDownProfile } from "../components/DropDownProfile";

export const NavBarProfile = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  const [open, setOpen] = useState(false);

  const user = localStorage.getItem("user");

  const parseUserObj = JSON.parse(user);

  return (
    <div className="flex justify-end items-center py-5 px-14 gap-x-5">
      <div>
        <JoinWorkspaceModal visible={visible} toggleVisible={toggleVisible} />
      </div>
      <div className="relative">
        <div className="relative inline-block">
          <button
            className="overflow-hidden w-11 h-11 rounded-full"
            onClick={() => setOpen(!open)}
          >
            {parseUserObj.profileImage === null ? (
              <img
                src="https://firebasestorage.googleapis.com/v0/b/upload-image-b8776.appspot.com/o/images%2Fphoto_2023-06-04_15-01-31.jpg?alt=media&token=f115ba63-1e31-4bc6-9f98-785ab3d729c8&_gl=1*6buxcb*_ga*MTYwNjUwODg3OS4xNjg1ODU0MzY2*_ga_CW55HF8NVT*MTY4NTg2NTU2My4zLjEuMTY4NTg2NTcwMS4wLjAuMA.."
                className="bg-cover"
              />
            ) : (
              <img
                src={parseUserObj.profileImage}
                className="h-full w-full bg-cover"
              />
            )}
          </button>

          {open ? (
            <DropDownProfile open={open} setOpen={setOpen} user={user} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
