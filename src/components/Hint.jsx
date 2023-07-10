import React, { useEffect, useState } from "react";
import star from "../assets/dashboard_image/star.svg";
import lightbulb from "../assets/dashboard_image/lightbulb.png";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../redux/service/userService/userService";

export const Hint = () => {
  const [open, setOpen] = useState(false);
  const [joinWorkspace, setJoinWorkspace] = useState(false);
  const [createDocument, setCreateDocument] = useState(false);
  const [createWorkspace, setCreateWorkspace] = useState(false);
  const [visitWorkspace, setVisitWorkspace] = useState(false);
  

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <div className="md:-ml-5 ">
      <div className="mb-5 mt-7">
        <h1 className="font-bold text-accent text-44px md:text-22px">
          Hi, {user && user.userName}!
        </h1>
        <p className="-mt-1 text-accent text-20px md:text-12px md:-mt-4">
          Welcome to DocEngine
        </p>
      </div>

      <div className="relative lg:w-[680px] md:w-[330px]">
        {open && (
          <div className="fixed inset-0" onClick={() => setOpen(!open)}></div>
        )}
        <button
          className={
            open
              ? "flex items-center gap-x-5 w-full px-5 py-4 border-r-[15px] border-r-primary shadow-custom  rounded-t-lg md:pb-2 md:pt-0 md:px-3.5"
              : "flex items-center gap-x-5 w-full px-5 py-4 border-r-[15px] border-r-primary shadow-custom rounded-lg hover:shadow-hover md:pb-2 md:pt-0 md:px-3.5"
          }
          onClick={() => setOpen(!open)}
        >
          <img src={star} className="md:w-6" />
          <div className="md:-ml-2 ">
            <h3 className="font-semibold text-24px text-black md:text-14px md:text-left md:leading-7">
              {user && user.userName}, get started with DocEngine
            </h3>
            <p className="text-accent text-20px text-left md:text-14px">
              Hint! to create your Document
            </p>
          </div>
        </button>
        <div>

{open ? (
            <div className="absolute w-full text-accent rounded-b-lg border-t-[1px] border-r-[15px] border-r-primary shadow-custom bg-white z-20">
              <div className="flex flex-col gap-y-3 py-5 px-5 md:py-2.5 md:gap-y-2">
                <div>
                  <button
                    type="button"
                    className="w-full"
                    onClick={() => {
                      setJoinWorkspace(!joinWorkspace);
                      setCreateDocument(false);
                      setCreateWorkspace(false);
                      setVisitWorkspace(false);
                    }}
                  >
                    <div className="flex items-center font-semibold w-full text-20px gap-x-4 mb-2 md:text-14px md:mb-0">
                      <img src={lightbulb} className="md:w-3.5"/>
                      <span>Join workspace</span>
                    </div>
                    {joinWorkspace ? (
                      <p className="text-[#009521] text-16px font-bold px-9 text-left md:text-[10px] md:pl-8 md:w-80">
                        Hint :{" "}
                        <span className="text-accent font-normal ml-1">
                          Click on “+ Join” near profile and enter workspace
                          code then click “join”{" "}
                        </span>
                      </p>
                    ) : null}
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    className="w-full"
                    onClick={() => {
                      setCreateDocument(!createDocument);
                      setJoinWorkspace(false);
                      setCreateWorkspace(false);
                      setVisitWorkspace(false);
                    }}
                  >
                    <div className="flex items-center font-semibold w-full text-20px gap-x-4 mb-2 md:text-14px md:mb-0">
                      <img src={lightbulb} className="md:w-3.5"/>
                      <span>Create new document</span>
                    </div>
                    {createDocument ? (
                      <p className="text-[#009521] text-16px font-bold px-9 text-left md:text-[10px] md:pl-8 md:w-80">
                        Hint :{" "}
                        <span className="text-accent font-normal ml-1">
                          Click on “Workspaces” in sidebar and click one of
                          workspaces then click “Create new document”
                        </span>
                      </p>
                    ) : null}
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    className="w-full"
                    onClick={() => {
                      setCreateWorkspace(!createWorkspace);
                      setCreateDocument(false);
                      setJoinWorkspace(false);
                      setVisitWorkspace(false);
                    }}
                  >
                    <div className="flex items-center w-full font-semibold text-20px gap-x-4 mb-2 md:text-14px md:mb-0">
                      <img src={lightbulb} className="md:w-3.5"/>
                      <span>Create new workspace</span>
                    </div>
                    {createWorkspace ? (
                      <p className="text-[#009521] text-16px font-bold px-9 text-left md:text-[10px] md:pl-8 md:w-80">
                        Hint :{" "}
                        <span className="text-accent font-normal ml-1">
                          Click on “New workspace” in the top of sidebar and
                          enter name and profile picture of workspace
                        </span>
                      </p>
                    ) : null}
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    className="w-full"
                    onClick={() => {
                      setVisitWorkspace(!visitWorkspace);
                      setCreateDocument(false);
                      setCreateWorkspace(false);
                      setJoinWorkspace(false);
                    }}
                  >
                    <div className="flex items-center w-full font-semibold text-20px gap-x-4 mb-2 md:text-14px md:mb-0">
                      <img src={lightbulb} className="md:w-3.5"/>
                      <span>Visit workspace code</span>
                    </div>
                    {visitWorkspace ? (
                      <p className="text-[#009521] text-16px font-bold px-9 text-left md:text-[10px] md:pl-8 md:w-80">
                        Hint :{" "}
                        <span className="text-accent font-normal ml-1">
                        Click on “Setting Workspaces” and click on “Collaborators”
                      in sidebar ,you will see the workspace code on the top of
                      all collaborators.
                        </span>
                      </p>
                    ) : null}
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
