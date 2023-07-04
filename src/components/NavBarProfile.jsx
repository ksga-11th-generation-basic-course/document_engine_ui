import React, { Fragment, useEffect, useState } from "react";
import { JoinWorkspaceModal } from "../modal/JoinWorkspaceModal";
import { DropDownProfile } from "../components/DropDownProfile";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../redux/service/userService/userService";
import pen from "../assets/document_image/pen.svg";
import drop from "../assets/document_image/chevrondown.svg";
import eyeview from "../assets/document_image/eyeview.svg";
// import { Menu, Transition } from "@headlessui/react";
import { useParams } from "react-router-dom";
import {
  getDocumentByDocumentId,
  setCurrentEditing,
} from "../redux/service/documentService/documentService";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import setting from "../assets/dashboard_image/setting.svg";
import signout from "../assets/dashboard_image/signout.svg";
import close from "../assets/dashboard_image/close.svg";
import { SignOutModal } from "../modal/SignOutModal";
import { AccountSettingModal } from "../modal/AccountSettingModal";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const NavBarProfile = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  const [openSetting, setOpenSetting] = useState(false);
  const [openSignOut, setOpenSignOut] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);

  const user = useSelector((state) => state.user.user);

  const document = useSelector((state) => state.document.document);

  const dispatch = useDispatch();

  const param = useParams();

  let documentId = param?.documentId;

  useEffect(() => {
    dispatch(getCurrentUser());
    param.documentId && dispatch(getDocumentByDocumentId(param.documentId));
  }, []);

  const handleChangeStatus = (status) => {
    dispatch(setCurrentEditing({ documentId, status }));
  };

  const [openNav, setOpenNav] = useState(false);

  const handleClickNav = (status) => {
    setOpenNav(status);
  };

  return (
    <div
      className="w-full flex justify-end items-center py-3 px-14 2xs:px-24 gap-x-5 bg-white"
      // className={
      //   openNav
      //     ? "fixed right-0 w-[1650px] flex justify-end items-center py-3 px-14 2xs:px-24 gap-x-5 bg-white z-30"
      //     : "fixed right-0 w-[1650px] flex justify-end items-center py-3 px-14 2xs:px-24 gap-x-5 bg-white z-10"
      // }
    >
      {param.documentId ? (
        <div>
          <Menu open={openMenu} handler={setOpenMenu}>
            <MenuHandler>
              <button className="flex items-center justify-between w-[250px] border-[1px] rounded-lg p-3">
                <p className="text-18px text-black font-ssp flex gap-x-2">
                  <img src={pen} alt="" />
                  Editing
                </p>
                <ChevronDownIcon
                  strokeWidth={3}
                  className={`h-4 w-4 transition-transform ${
                    openMenu ? "rotate-180" : ""
                  }`}
                />
              </button>
            </MenuHandler>
            <MenuList className="rounded-lg p-2 font-ssp w-[250px] space-y-2">
              <MenuItem
                className="p-2 hover:bg-gray-200 rounded-lg"
                onClick={() => handleChangeStatus(true)}
              >
                {" "}
                <div className="flex gap-x-3">
                  <img src={pen} alt="" />
                  <span className="text-lg">Editing</span>
                </div>
                <p className="mr-6">Edit document directly</p>
              </MenuItem>
              <MenuItem
                className="p-2 hover:bg-gray-200 rounded-lg"
                onClick={() => handleChangeStatus(false)}
              >
                {" "}
                <div className="flex gap-x-3">
                  <img src={eyeview} alt="" />
                  <span className="text-lg">Viewing</span>
                </div>
                <p className="ml-4">Read or export final document</p>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      ) : null}
      <div>
        <JoinWorkspaceModal
          visible={visible}
          setVisible={setVisible}
          handleClickNav={handleClickNav}
        />
      </div>
      <div className="relative">
        <Menu placement="bottom-end">
          <MenuHandler>
            {user && user.profileImage === null ? (
              <Avatar
                variant="circular"
                alt="candice wu"
                className="cursor-pointer rounded-full"
                src="https://firebasestorage.googleapis.com/v0/b/docengine-7e623.appspot.com/o/images%2Fprofile%2Fcb6df344-7dd9-4323-8961-cbd55a606e77_user.png?alt=media&token=6eb13cc7-734c-4292-bc74-2ea2b4e6b5c2"
              />
            ) : (
              <Avatar
                variant="circular"
                alt="candice wu"
                className="cursor-pointer rounded-full"
                src={user && user.profileImage}
              />
            )}
          </MenuHandler>
          <MenuList className="rounded-lg text-accent w-[360px] p-5 font-ssp">
            <MenuItem>
              <p className="font-extrabold text-28px text-primary text-left">
                Profile
              </p>
            </MenuItem>
            <MenuItem
              className="flex items-center gap-x-3"
              onClick={() => setOpenSetting(!openSetting)}
            >
              {user && user.profileImage === null ? (
                <Avatar
                  variant="circular"
                  alt="candice wu"
                  className="cursor-pointer rounded-full mt-4"
                  src="https://firebasestorage.googleapis.com/v0/b/docengine-7e623.appspot.com/o/images%2Fprofile%2Fcb6df344-7dd9-4323-8961-cbd55a606e77_user.png?alt=media&token=6eb13cc7-734c-4292-bc74-2ea2b4e6b5c2"
                />
              ) : (
                <Avatar
                  variant="circular"
                  alt="candice wu"
                  className="cursor-pointer rounded-full"
                  src={user && user.profileImage}
                />
              )}
              <div>
                <h3 className="font-bold text-20px text-left">
                  {user && user.userName}
                </h3>
                <p className="text-[#9CA3AF] leading-3 text-base text-left">
                  {user && user.email}
                </p>
              </div>
            </MenuItem>
            <hr className="my-2 border-blue-gray-50 mt-2" />
            <MenuItem
              className="flex items-center gap-x-3 hover:bg-gray-200 p-2 mt-2"
              onClick={() => setOpenSetting(!openSetting)}
            >
              <img src={setting} />
              <span className="text-18px ml-1">Setting</span>
            </MenuItem>
            <MenuItem
              className="flex items-center gap-x-3 hover:bg-gray-200 p-2 mt-2"
              onClick={() => setOpenSignOut(!openSignOut)}
            >
              <img src={signout} />
              <span className="text-red-500 text-18px">Sign out</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div>
        <SignOutModal
          openSignOut={openSignOut}
          setOpenSignOut={setOpenSignOut}
        />
        <AccountSettingModal
          openSetting={openSetting}
          setOpenSetting={setOpenSetting}
          user={user}
        />
      </div>
    </div>
  );
};
