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

export const NavBarProfile = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  const [openSetting, setOpenSetting] = useState(false);
  const [openSignOut, setOpenSignOut] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <div className="flex justify-end items-center py-3 px-14 2xs:px-24 gap-x-5 bg-white">
      {param.documentId ? (
        <div>
          {/* <Menu as="div" className="relative inline-block text-left bg-white">
            <div>
              <Menu.Button className="inline-flex w-full gap-x-3 justify-center items-center rounded-lg border-[1px] bg-opacity-20 px-5 py-2 text-sm font-medium text-accent hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {document?.status ? (
                  <img src={pen} alt="" />
                ) : (
                  <img src={eyeview} alt="" />
                )}
                <span className="text-lg">
                  {document?.status ? "Editing" : "Viewer"}
                </span>
                <img src={drop} alt="" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-[2000]  mt-2 w-[250px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 bg-white">
                  <Menu.Item className=" hover:bg-gray-100">
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-accent" : "text-accent"
                        } group flex w-full flex-col justify-start text-sm rounded-md px-2 py-2`}
                        onClick={() => handleChangeStatus(true)}
                      >
                        <div className="flex gap-x-3">
                          <img src={pen} alt="" />
                          <span className="text-lg">Editing</span>
                        </div>
                        <p className="ml-[27.5px]">Edit document directly</p>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item className="hover:bg-gray-100">
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-accent" : "text-accent"
                        } group flex w-full flex-col gap-x-4 rounded-md px-2 py-2 text-sm`}
                        onClick={() => handleChangeStatus(false)}
                      >
                        <div className="flex gap-x-3">
                          <img src={eyeview} alt="" />
                          <span className="text-lg">Viewer</span>
                        </div>
                        <p className="ml-[27.5px]">
                          Read or export final document
                        </p>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu> */}
        </div>
      ) : null}
      <div>
        <JoinWorkspaceModal visible={visible} setVisible={setVisible} />
      </div>
      <div className="relative">
        {/* <div className="relative inline-block">
          <button
            className="overflow-hidden w-11 h-11 rounded-full"
            onClick={() => setOpen(!open)}
          >
            {user && user.profileImage === null ? (
              <img
                src="https://firebasestorage.googleapis.com/v0/b/upload-image-b8776.appspot.com/o/images%2Fphoto_2023-06-04_15-01-31.jpg?alt=media&token=f115ba63-1e31-4bc6-9f98-785ab3d729c8&_gl=1*6buxcb*_ga*MTYwNjUwODg3OS4xNjg1ODU0MzY2*_ga_CW55HF8NVT*MTY4NTg2NTU2My4zLjEuMTY4NTg2NTcwMS4wLjAuMA.."
                className="bg-cover"
              />
            ) : (
              <img
                src={user && user.profileImage}
                className="h-full w-full bg-cover"
              />
            )}
          </button>
          {open ? (
            <DropDownProfile open={open} setOpen={setOpen} user={user} />
          ) : null}
        </div> */}
        <Menu placement="bottom-end">
          <MenuHandler>
            <Avatar
              variant="circular"
              alt="candice wu"
              className="cursor-pointer rounded-full"
              src={user && user.profileImage}
            />
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
                  src="https://firebasestorage.googleapis.com/v0/b/upload-image-b8776.appspot.com/o/images%2Fphoto_2023-06-04_15-01-31.jpg?alt=media&token=f115ba63-1e31-4bc6-9f98-785ab3d729c8&_gl=1*6buxcb*_ga*MTYwNjUwODg3OS4xNjg1ODU0MzY2*_ga_CW55HF8NVT*MTY4NTg2NTU2My4zLjEuMTY4NTg2NTcwMS4wLjAuMA.."
                />
              ) : (
                <Avatar
                  variant="circular"
                  alt="candice wu"
                  className="cursor-pointer rounded-full mt-4"
                  src={user && user.profileImage}
                />
              )}
              <div>
                <h3 className="font-bold text-20px text-left">
                  {user && user.userName}
                </h3>
                <p className="text-[#9CA3AF] leading-3 text-base text-left">{user && user.email}</p>
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
