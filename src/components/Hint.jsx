import React, { useState } from "react";
import star from "../assets/dashboard_image/star.svg";
import lightbulb from "../assets/dashboard_image/lightbulb.png";

export const Hint = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:ml-4">
          <div className="mb-5 mt-7">
              <h1 className="font-bold text-accent text-44px">Hi, Ouddom!</h1>
              <p className="text-accent text-20px -mt-2">Welcome to DocEngine</p>
          </div>
          
          <div className="relative lg:w-[620px]">
                {open && (
                      <div className="fixed inset-0" onClick={() => setOpen(!open)}></div>
                )}
                <button
                  className={
                    open
                      ? "flex items-center gap-x-5 w-full px-5 py-4 border-r-[15px] border-r-primary shadow-custom  border-gray-500 rounded-t-lg hover:shadow-hover"
                      : "flex items-center gap-x-5 w-full px-5 py-4 border-r-[15px] border-r-primary shadow-custom rounded-lg hover:shadow-hover"
                  }
                  onClick={() => setOpen(!open)}
                >
                  <img src={star} />
                  <div>
                    <h3 className="font-semibold text-24px text-black">
                      Ouddom, get started with DocEngine
                    </h3>
                    <p className="text-accent text-20px text-left">
                      Hint! to create your Document
                    </p>
                  </div>
                </button>
                <div>
                      {open ? 
                        <div className="absolute w-full text-accent rounded-b-lg border-t-[1px] border-r-[15px] border-r-primary shadow-custom bg-white z-50">
                              <div className="flex flex-col gap-y-5 py-5 px-5">
                                    {/* Join Workspace */}
                                    <div>
                                            <div className="flex items-center w-full text-18px font-semibold gap-x-4 mb-2">
                                                    <img src={lightbulb} />
                                                    <span>Join workspace</span> <br />
                                            </div>
                                            <p className="text-[#009521] font-bold px-9 text-left md:grid md:grid-cols-12">
                                                 <span className="col-span-1"> Hint :</span>
                                                  <span className="col-span-11 text-accent text-md font-normal ml-3">
                                                          Click on “+ Join” near profile and enter workspace
                                                          code then click “join”
                                                  </span>
                                            </p>
                                    </div>

                                    {/* Create new document*/}
                                    <div>
                                            <div className="flex items-center w-full text-18px font-semibold gap-x-4 mb-2">
                                                    <img src={lightbulb} />
                                                    <span>Create new document</span> <br />
                                            </div>
                                            <p className="text-[#009521] font-bold px-9 text-left md:grid md:grid-cols-12">
                                                <span className="col-span-1">Hint :</span>
                                                  <span className="col-span-11 text-accent text-md font-normal ml-3">
                                                        Click on “Workspaces” in sidebar and click one of
                                                        workspaces then click “Create new document”
                                                  </span>
                                            </p>
                                    </div>

                                    {/* Create new workspace*/}
                                    <div>
                                            <div className="flex items-center w-full text-18px font-semibold gap-x-4 mb-2">
                                                    <img src={lightbulb} />
                                                    <span>Create new workspace</span> <br />
                                            </div>
                                            <p className="text-[#009521] font-bold px-9 text-left md:grid md:grid-cols-12">
                                                  <span className="col-span-1">Hint :</span>
                                                  <span className="col-span-11 text-accent text-md font-normal ml-3">
                                                          Click on “New workspace” in the top of sidebar and
                                                          enter name and profile picture of workspace
                                                  </span>
                                            </p>
                                    </div>

                                    {/* Visit workspace code*/}
                                    <div>
                                            <div className="flex items-center w-full text-18px font-semibold gap-x-4 mb-2">
                                                    <img src={lightbulb} />
                                                    <span>Visit workspace code</span> <br />
                                            </div>
                                            <p className="text-[#009521] font-bold px-9 text-left md:grid md:grid-cols-12">
                                                  <span className="col-span-1">Hint :</span>
                                                  <span className="col-span-11 text-accent text-md font-normal ml-3">
                                                          Click on “Workspaces” in sidebar and click one of
                                                          workspaces then visit at the right of workspace name
                                                  </span>
                                            </p>
                                    </div>
                              </div>
                        </div>
                       : null}
                </div>
          </div>
    </div>
  );
};
