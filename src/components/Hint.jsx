import React, { useState } from "react";
import star from "../assets/dashboard_image/star.svg";
import lightbulb from "../assets/dashboard_image/lightbulb.png";

export const Hint = () => {
  const [open, setOpen] = useState(false);
  const [joinWorkspace, setJoinWorkspace] = useState(false);
  const [createDocument, setCreateDocument] = useState(false);
  const [createWorkspace, setCreateWorkspace] = useState(false);
  const [visiteWorkspace, setVisiteWorkspace] = useState(false);

  return (
    <div>
      <div>
        <h1 className="font-bold text-accent text-44px">Hi, Ouddom!</h1>
        <p className="text-accent text-18px">Welcome to DocEngine</p>
      </div>
      <div className="relative">
        <button
          className={
            open
              ? "flex items-center gap-x-5 w-full px-5 py-4 border-r-[10px] border-r-primary shadow-md rounded-t-lg"
              : "flex items-center gap-x-5 w-full px-5 py-4 border-r-[10px] border-r-primary shadow-md rounded-lg"
          }
          onClick={() => setOpen(!open)}
        >
          <img src={star} />
          <div>
            <h3 className="font-semibold text-20px text-black">
              Ouddom, get started with DocEngine
            </h3>
            <p className="text-accent text-18px text-left">
              Hint! to create your Document
            </p>
          </div>
        </button>
        <div>
          {open && (
            <div
              className="fixed inset-0"
              onClick={() => {
                setOpen(!open);
                setVisiteWorkspace(false);
                setCreateDocument(false);
                setCreateWorkspace(false);
                setJoinWorkspace(false);
              }}
            ></div>
          )}
          {open ? (
            <div className="absolute w-full text-accent rounded-b-lg border-t-[1px] border-r-[10px] border-r-primary shadow-md bg-white">
              <div className="flex flex-col gap-y-3 py-5 px-5">
                <div>
                  <button
                    type="button"
                    className="w-full"
                    onClick={() => {
                      setJoinWorkspace(!joinWorkspace);
                      setCreateDocument(false);
                      setCreateWorkspace(false);
                      setVisiteWorkspace(false);
                    }}
                  >
                    <div className="flex items-center w-full text-18px gap-x-4 mb-3">
                      <img src={lightbulb} />
                      <span>Join workspace</span>
                    </div>
                    {joinWorkspace ? (
                      <p className="text-[#009521] font-bold text-sm px-9 text-left">
                        Hint :{" "}
                        <span className="text-accent text-sm font-normal ml-3">
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
                      setVisiteWorkspace(false);
                    }}
                  >
                    <div className="flex items-center w-full text-18px gap-x-4 mb-2">
                      <img src={lightbulb} />
                      <span>Create new document</span>
                    </div>
                    {createDocument ? (
                      <p className="text-[#009521] font-bold text-sm px-9 text-left">
                        Hint :{" "}
                        <span className="text-accent text-sm font-normal ml-3">
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
                      setVisiteWorkspace(false);
                    }}
                  >
                    <div className="flex items-center w-full text-18px gap-x-4 mb-2">
                      <img src={lightbulb} />
                      <span>Create new workspace</span>
                    </div>
                    {createWorkspace ? (
                      <p className="text-[#009521] font-bold text-sm px-9 text-left">
                        Hint :{" "}
                        <span className="text-accent text-sm font-normal ml-3">
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
                      setVisiteWorkspace(!visiteWorkspace);
                      setCreateDocument(false);
                      setCreateWorkspace(false);
                      setJoinWorkspace(false);
                    }}
                  >
                    <div className="flex items-center w-full text-18px gap-x-4 mb-2">
                      <img src={lightbulb} />
                      <span>Visit workspace code</span>
                    </div>
                    {visiteWorkspace ? (
                      <p className="text-[#009521] font-bold text-sm px-9 text-left">
                        Hint :{" "}
                        <span className="text-accent text-sm font-normal ml-3">
                          Click on “Workspaces” in sidebar and click one of
                          workspaces then visit at the right of workspace name
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
