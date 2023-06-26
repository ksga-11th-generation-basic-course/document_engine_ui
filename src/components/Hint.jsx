import React, { useEffect, useState } from "react";
import star from "../assets/dashboard_image/star.svg";
import lightbulb from "../assets/dashboard_image/lightbulb.png";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../redux/service/userService/userService";
import { Tooltip, Whisper, Button } from 'rsuite';

export const Hint = () => {
  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <div className="lg:ml-4 md:-ml-5">
      <div className="mb-5 mt-7">
        <h1 className="font-bold text-accent text-44px md:text-28px">
          Hi, {user && user.userName}!
        </h1>
        <p className="text-accent text-20px -mt-2 md:text-14px">
          Welcome to DocEngine
        </p>
      </div>
      <Whisper className="hover:bg-none" followCursor speaker={<Tooltip>Click Here to see Hint</Tooltip>}>
        <div className="relative lg:w-[620px]">
          {open && (
            <div className="fixed inset-0" onClick={() => setOpen(!open)}></div>
          )}
          <button
            className={
              open
                ? "flex items-center gap-x-5 w-full px-5 py-4 border-r-[15px] border-r-primary shadow-custom  rounded-t-lg md:px-3  md:w-fit"
                : "flex items-center gap-x-5 w-full px-5 py-4 border-r-[15px] border-r-primary shadow-custom rounded-lg hover:shadow-hover md:px-3 md:w-fit"
            }
            onClick={() => setOpen(!open)}
          >
            <img src={star} className="md:w-7" />
            <div className="md:-ml-2">
              <h3 className="font-semibold text-24px text-black md:text-16px">
                {user && user.userName}, get started with DocEngine
              </h3>
              <p className="text-accent text-20px text-left md:text-12px">
                Hint! to create your Document
              </p>
            </div>
          </button>
          <div>
            {open ? (
              <div className="absolute w-full text-accent rounded-b-lg border-t-[1px] border-r-[15px] border-r-primary shadow-custom bg-white z-50">
                <div className="flex flex-col gap-y-5 py-5 px-5">
                  {/* Join Workspace */}
                  <div>
                    <div className="flex items-center w-full text-18px font-semibold gap-x-4 mb-2">
                      <img src={lightbulb} />
                      <span>Join workspace</span> <br />
                    </div>
                    <p className="text-[#009521] font-bold px-9 text-left">
                      Hint :
                      <span className=" text-accent text-md font-normal ml-3">
                        Click on “+ Join” near profile and enter workspace code
                        then click “join” .
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
                        workspaces then click “Create new document” .
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
                        Click on “New workspace” in the top of sidebar and enter
                        name and profile picture of workspace.
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
                        Click on “Setting Workspaces” and click on “Collaborators”
                        in sidebar ,you will see the workspace code on the top of
                        all collaborators.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Whisper>
    </div>
  );
};
