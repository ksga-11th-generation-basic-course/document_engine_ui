import React, { useEffect, useState } from "react";
import workspaceicon from "../assets/workspace_image/workspaceicon.png";
import sort from "../assets/workspace_image/sort.svg";
import chevrondown from "../assets/workspace_image/chevrondown.svg";
import filter from "../assets/workspace_image/filter.svg";
import search from "../assets/workspace_image/search.svg";
import { WorkspaceCard } from "../components/card/WorkspaceCard";
import {
  filterWorkspace,
  getAllWorkspace,
} from "../redux/service/workspaceService/workspaceService";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Radio } from "react-daisyui";

export const Workspace = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const [checked, setChecked] = useState("allworkspaces");

  const workspaces = useSelector((state) => state.workspace.workspaces);

  const dispatch = useDispatch();

  useEffect(() => {
    switch (checked) {
      case "allworkspaces":
        dispatch(getAllWorkspace());
      case "myworkspaces":
        dispatch(filterWorkspace(true));
      case "otherworkspaces":
        dispatch(filterWorkspace(false));
    }
  }, [checked]);

  return (
    <div className="text-accent space-y-5 sm:h-full bg-white">
      <div className="flex items-center gap-x-3 ">
        <img src={workspaceicon} className="p-2 shadow-md rounded-lg" />
        <p className="font-semibold text-20px">Workspaces</p>
      </div>
      <div className="grid grid-cols-12 md:grid md:grid-cols-12 sm:grid sm:grid-cols-1">
        <div className="col-span-4 md:col-span-5 sm:grid-cols-1 flex items-center gap-x-5 h-11">
          <div className="flex items-center gap-x-3">
            <img src={sort} className="w-7 h-7 md:w-6 md:h-8" />
            <h4 className="font-semibold text-20px md:text-18px">Sort: </h4>
          </div>
          <div className="relative">
            <Dropdown>
              <Dropdown.Toggle>
                <div className="flex items-center gap-x-20">
                  <p className="text-18px text-black">Last Update</p>
                  <img src={chevrondown} />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-48 bg-white rounded-lg">
                <Dropdown.Item>
                  <Radio
                    defaultChecked
                    name="radioOptions"
                    value="lastupdate"
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>Last Update</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    defaultChecked
                    name="radioOptions"
                    value="thisweek"
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>This week</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    defaultChecked
                    name="radioOptions"
                    value="thismonth"
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>This month</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    defaultChecked
                    name="radioOptions"
                    value="thisyear"
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>This year</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="col-span-4 md:col-span-6 sm:grid-cols-1 flex items-center gap-x-5 h-11">
          <div className="flex items-center gap-x-3">
            <img src={filter} className="w-7 h-7 md:w-5 md:h-5" />
            <h4 className="font-semibold text-20px md:text-18px">Filter: </h4>
          </div>
          <div className="relative">
            <Dropdown>
              <Dropdown.Toggle>
                <div className="flex items-center gap-x-20">
                  <p className="text-18px text-black">All Workspaces</p>
                  <img src={chevrondown} />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-52 bg-white rounded-lg">
                <Dropdown.Item>
                  <Radio
                    defaultChecked
                    name="radioOptions"
                    value="allworkspaces"
                    onChange={(e) => setChecked(e.target.value)}
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>All Workspaces</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    name="radioOptions"
                    value="myworkspaces"
                    onChange={(e) => setChecked(e.target.value)}
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>My Workspaces</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    name="radioOptions"
                    value="otherworkspaces"
                    onChange={(e) => setChecked(e.target.value)}
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>Other Workspaces</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className=" md:col-span-1 col-span-4 h-11">
          <div className="flex justify-end relative">
            {openSearch ? (
              <input
                type="text"
                placeholder="search"
                className="md:mt-10 sm:m-0 rounded-lg text-18px border-gray-200 border-[1px] w-[280px] md:w-[150px] focus:ring-accent focus:border-accent"
              />
            ) : null}
            <button
              type="button"
              className="absolute mr-2 top-3"
              onClick={() => setOpenSearch(!openSearch)}
            >
              <img src={search} />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        {workspaces === null ? null : workspaces.length > 0 ? (
          workspaces.map((workspace, index) => (
            <div className="col-span-4" key={index}>
              <WorkspaceCard workspace={workspace} />
            </div>
          ))
        ) : (
          <div className="col-span-12 absolute bottom-[45%] left-[55%]">
            <p className="font-semibold text-accent">No Workspace</p>
          </div>
        )}
      </div>
    </div>
  );
};
