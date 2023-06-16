import React, { useState } from "react";
import workspaceicon from "../assets/workspace_image/workspaceicon.png";
import sort from "../assets/workspace_image/sort.svg";
import chevrondown from "../assets/workspace_image/chevrondown.svg";
import filter from "../assets/workspace_image/filter.svg";
import search from "../assets/workspace_image/search.svg";
import { DropDownSort } from "../components/DropDownSort";
import { WorkspaceCard } from "../components/card/WorkspaceCard";
import docker from "../assets/workspace_image/docker.svg";
import spring from "../assets/workspace_image/spring.svg";
import reactjs from "../assets/workspace_image/reactjs.svg";
import { DropDownFilterWorkspace } from "../components/DropDownFilterWorkspace";

export const Workspace = () => {
  const [openSort, setOpenSort] = useState(false);

  const [openFilter, setOpenFilter] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);

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
          <img src={workspaceicon} className="p-2 shadow-custom rounded-lg md:w-7 md:h-7 md:p-1" />
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
            <img src={search}/>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 mt-7 md:mt-3">
        {/* Sort */}
        <div className="-mt-1 col-span-4 gap-x-2 lg:col-span-6  flex items-center lg:w-72 md:w-36 md:col-span-6">
          <div className="flex items-center gap-x-2">
            <img src={sort} className="w-7 h-7 md:w-6 md:h-8" />
            <h4 className="font-semibold text-20px md:text-16px md:hidden">Sort: </h4>
          </div>
          <div className="relative lg:inline-block">
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
          </div>
        </div>

        {/* Filter */}
        <div className="col-span-4  gap-x-3 lg:col-span-6 flex items-center lg:w-80 lg:ml-5 md:w-40 md:ml-0">
          <div className="flex items-center gap-x-3">
            <img src={filter} className="w-7 h-7 md:w-4 md:h-4" />
            <h4 className="font-semibold text-20px md:text-16px md:hidden">Filter: </h4>
          </div>
          <div className="relative">
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
          </div>
        </div>

        {/* Search button for laptop */}
        <div className="col-span-4 flex justify-end relative lg:hidden md:hidden">
          {openSearch ? (
            <input
              type="text"
              placeholder="search"
              className="-mt-2 absolute rounded-lg text-18px border-gray-200 border-[1px] w-[280px] md:w-[150px] focus:ring-accent focus:border-accent"
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
                <span className="absolute mt-2 ml-72"><img src={search} className="md:w-4 md:h-4"/></span>
          </div>
      </div>

      {/* Workspace card */}
      <div className="grid grid-cols-12 gap-10 mt-5 lg:w-[650px] lg:mb-10 md:pb-10 md:w-[310px] md:mt-12 md:space-y-7 md:gap-0">
        <div className="col-span-4 lg:col-span-6 md:col-span-12">
          <WorkspaceCard
            workspacename={"Docker"}
            isOwner={true}
            workspacephoto={docker}
            total={12}
            createdate={"12/01/2023"}
          />
        </div>

        <div className="col-span-4 lg:col-span-6 md:col-span-12">
          <WorkspaceCard
            workspacename={"Spring"}
            isOwner={false}
            workspacephoto={spring}
            total={15}
            createdate={"10/05/2023"}
          />
        </div>

        <div className="col-span-4 lg:col-span-6 md:col-span-12">
          <WorkspaceCard
            workspacename={"ReactJS"}
            isOwner={true}
            workspacephoto={reactjs}
            total={20}
            createdate={"11/05/2023"}
          />
        </div>

        <div className="col-span-4 lg:col-span-6 md:col-span-12">
          <WorkspaceCard
            workspacename={"ReactJS"}
            isOwner={true}
            workspacephoto={reactjs}
            total={20}
            createdate={"11/05/2023"}
          />
        </div>

        <div className="col-span-4 lg:col-span-6 md:col-span-12">
          <WorkspaceCard
            workspacename={"ReactJS"}
            isOwner={true}
            workspacephoto={reactjs}
            total={20}
            createdate={"11/05/2023"}
          />
        </div>
      </div>
    </div>
  );
};
