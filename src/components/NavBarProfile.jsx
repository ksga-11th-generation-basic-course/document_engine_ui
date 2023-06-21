import React, { Fragment, useEffect, useState } from "react";
import { JoinWorkspaceModal } from "../modal/JoinWorkspaceModal";
import { DropDownProfile } from "../components/DropDownProfile";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../redux/service/userService/userService";
import pen from "../assets/document_image/pen.svg";
import drop from "../assets/document_image/chevrondown.svg";
import eyeview from "../assets/document_image/eyeview.svg";
import { Menu, Transition } from "@headlessui/react";

export const NavBarProfile = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <div className="flex justify-end items-center py-3 px-14 2xs:px-24 gap-x-5 bg-white">
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full gap-x-3 justify-center items-center rounded-lg border-[1px] bg-opacity-20 px-5 py-2 text-sm font-medium text-accent hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <img src={pen} alt="" />
              <span className="text-lg">Editing</span>
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
            <Menu.Items className="absolute  mt-2 w-[250px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item className=" hover:bg-gray-100">
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-accent" : "text-accent"
                      } group flex w-full flex-col justify-start text-sm rounded-md px-2 py-2`}
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
        </Menu>
      </div>
      <div>
        <JoinWorkspaceModal visible={visible} setVisible={setVisible} />
      </div>
      <div className="relative">
        <div className="relative inline-block">
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
        </div>
      </div>
    </div>
  );
};
