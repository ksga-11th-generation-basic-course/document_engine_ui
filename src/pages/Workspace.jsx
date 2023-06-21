import React, { useEffect, useState } from "react";
import workspaceicon from "../assets/workspace_image/workspaceicon.png";
import sort from "../assets/workspace_image/sort.svg";
import chevrondown from "../assets/workspace_image/chevrondown.svg";
import filter from "../assets/workspace_image/filter.svg";
import search from "../assets/workspace_image/search.svg";
import { DropDownSort } from "../components/DropDownSort";
import { WorkspaceCard } from "../components/card/WorkspaceCard";
import {
  filterWorkspace,
  getAllWorkspace,
} from "../redux/service/workspaceService/workspaceService";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Radio } from "react-daisyui";
import { DropDownFilterWorkspace } from "../components/DropDownFilterWorkspace";
import docker from "../assets/workspace_image/docker.svg";
import spring from "../assets/workspace_image/spring.svg";
import reactjs from "../assets/workspace_image/reactjs.svg";

export const Workspace = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const [checked, setChecked] = useState("allworkspaces");

  const [sortWorkspace, setSortWorkspace] = useState("asc");

  const workspaces = useSelector((state) => state.workspace.workspaces);

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const [openSort, setOpenSort] = useState(false);

  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    switch (checked) {
      case "allworkspaces":
        if (sortWorkspace === "asc") {
          dispatch(getAllWorkspace({ no: 1, size: 6, asc: true, desc: false }));
        } else if (sortWorkspace === "desc") {
          dispatch(getAllWorkspace({ no: 1, size: 6, asc: false, desc: true }));
        }
      case "myworkspaces":
        dispatch(filterWorkspace(true));
      case "otherworkspaces":
        dispatch(filterWorkspace(false));
    }
  }, [checked, sortWorkspace]);

  return (
    <div className="text-accent lg:ml-5 md:ml-0 md:mt-3">
      {/* Icon workspace */}
      <div className="flex items-center gap-x-3 lg:hidden md:hidden">
        <img src={workspaceicon} className="p-2 shadow-custom rounded-lg" />
        <p className="font-semibold text-20px">Workspaces</p>
      </div>

      {/* Title and search for tablet and mobile */}
      <div className="hidden lg:grid lg:grid-cols-12">
        {/* Icon */}
        <div className="hidden lg:col-span-6  lg:flex items-center gap-x-3 md:col-span-12">
          <img
            src={workspaceicon}
            className="p-2 shadow-custom rounded-lg md:w-7 md:h-7 md:p-1"
          />
          <p className="font-semibold text-20px md:text-16px">Workspaces</p>
        </div>

        {/* Search button for tablet */}
        <div className="hidden lg:col-span-6 lg:flex lg:justify-between lg:w-5 lg:h-5 lg:ml-[295px] md:hidden">
          {openSearch ? (
            <input
              type="text"
              placeholder="search"
              className="absolute rounded-lg text-18px border-gray-200 border-[1px] w-[280px] lg:-ml-[250px] focus:ring-accent focus:border-accent"
            />
          ) : null}
          <button
            type="button"
            className="mt-3 absolute"
            onClick={() => setOpenSearch(!openSearch)}
          >
            <img src={search} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 mt-7 md:mt-3">
        {/* Sort */}
        <div className="-mt-1 col-span-4 gap-x-3 lg:col-span-6  flex items-center lg:w-72 md:w-36 md:col-span-6">
          <div className="flex items-center gap-x-2">
            <img src={sort} className="w-7 h-7 md:w-6 md:h-8" />
            <h4 className="font-semibold text-20px md:text-16px md:hidden">
              Sort:{" "}
            </h4>
          </div>

          {/* <div className="relative lg:inline-block">
            <button
              className="flex items-center gap-x-20 lg:gap-x-14 md:gap-x-1"
              onClick={() => setOpenSort(!openSort)}
            >
              <p className="text-20px md:text-14px  text-accent">Last Update</p>
              <img className="mt-1 md:w-4 md:h-4 md:ml-4" src={chevrondown} />
            </button>
            <div className="md:absolute md:z-20">
              {openSort ? (
                <DropDownSort openSort={openSort} setOpenSort={setOpenSort} />
              ) : null}
            </div>
          </div> */}

          <div className="relative">
            <Dropdown className="bg-white">
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
                    name="sortOptions"
                    value="lastupdate"
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>Last Update</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    name="sortOptions"
                    value="asc"
                    onChange={(e) => setSortWorkspace(e.target.value)}
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>A-Z</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    name="sortOptions"
                    value="desc"
                    onChange={(e) => setSortWorkspace(e.target.value)}
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>Z-A</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* Filter */}
        <div className="col-span-4  gap-x-3 lg:col-span-6 flex items-center lg:w-80 lg:ml-5 md:w-40 md:ml-0">
          <div className="flex items-center gap-x-3">
            <img src={filter} className="w-7 h-7 md:w-4 md:h-4" />
            <h4 className="font-semibold text-20px md:text-16px md:hidden">
              Filter:{" "}
            </h4>
          </div>

          {/* <div className="relative">
            <button
              className="flex items-center gap-x-20 lg:gap-x-12 md:gap-x-1"
              onClick={() => setOpenFilter(!openFilter)}
            >
              <p className="text-20px md:text-14px text-accent">
                All Workspaces
              </p>
              <img className="mt-1 md:w-4 md:h-4 md:ml-4" src={chevrondown} />
            </button>
            <div className="z-20">
              {openFilter ? (
                <DropDownFilterWorkspace
                  openFilter={openFilter}
                  setOpenFilter={setOpenFilter}
                />
              ) : null}
            </div>
          </div> */}

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

        {/* Search button for laptop */}
        <div className="col-span-4 flex justify-end relative lg:hidden md:hidden">
          {openSearch ? (
            <input
              type="text"
              placeholder="search"
              className="-mt-2 absolute rounded-lg text-18px border-gray-200 border-[1px] w-[280px] md:w-[150px] focus:ring-accent focus:border-accent"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          ) : null}
          <button
            type="button"
            className="absolute top-1 right-2 w-5 h-5"
            onClick={() => setOpenSearch(!openSearch)}
          >
            <img src={search} />
          </button>
        </div>

        {/* Search button for mobile */}
        <div className="hidden lg:hidden md:inline-block md:col-span-12 md:mt-2">
          <input
            type="text"
            placeholder="search"
            className="absolute rounded-lg text-14px border-gray-200 border-[1px] w-[312px]  h-8 focus:ring-accent focus:border-accent"
          />
          <span className="absolute mt-2 ml-72">
            <img src={search} className="md:w-4 md:h-4" />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 md:px-6 sm:grid sm:grid-cols-1">
        {workspaces === null ? null : workspaces.length > 0 ? (
          workspaces
            .filter((workspace) => {
              if (searchTerm === "") {
                return workspace;
              } else if (
                workspace.workspaceName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return workspace;
              }
            })
            .map((workspace, index) => (
              <div className="col-span-4" key={index}>
                <WorkspaceCard workspace={workspace} />
              </div>
            ))
        ) : (
          <div className="col-span-12 absolute bottom-[45%] left-[55%]">
            <p className="font-semibold text-accent text-16px">No Workspace</p>
          </div>
        )}
      </div>
    </div>
  );
};
