import React, { useState } from "react";
import workspaceicon from "../assets/workspace_image/workspaceicon.png";
import sort from "../assets/workspace_image/sort.svg";
import chevrondown from "../assets/workspace_image/chevrondown.svg";
import filter from "../assets/workspace_image/filter.svg";
import search from "../assets/workspace_image/search.svg";
import { DropDownSort } from "../components/DropDownSort";
import { DropDownFilter } from "../components/DropDownFilter";
import { WorkspaceCard } from "../components/card/WorkspaceCard";
import docker from "../assets/workspace_image/docker.svg";
import spring from "../assets/workspace_image/spring.svg";
import reactjs from "../assets/workspace_image/reactjs.svg";

export const Workspace = () => {
  const [openSort, setOpenSort] = useState(false);

  const [openFilter, setOpenFilter] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);

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
            <button
              className="flex items-center gap-x-20 md:gap-x-1"
              onClick={() => setOpenSort(!openSort)}
            >
              <p className="text-18px md:text-16px text-black">Last Update</p>
              <img className="md:w-4 md:h-4 md:ml-4" src={chevrondown} />
            </button>
            <div>
              {openSort ? (
                <DropDownSort openSort={openSort} setOpenSort={setOpenSort} />
              ) : null}
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-6 sm:grid-cols-1 flex items-center gap-x-5 h-11">
          <div className="flex items-center gap-x-3">
            <img src={filter} className="w-7 h-7 md:w-5 md:h-5" />
            <h4 className="font-semibold text-20px md:text-18px">Filter: </h4>
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-x-20 md:gap-x-1"
              onClick={() => setOpenFilter(!openFilter)}
            >
              <p className="text-18px md:text-16px text-black">All Workspaces</p>
              <img className="md:w-4 md:h-4 md:ml-4" src={chevrondown} />
            </button>
            <div>
              {openFilter ? (
                <DropDownFilter
                  openFilter={openFilter}
                  setOpenFilter={setOpenFilter}
                />
              ) : null}
            </div>
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
      <div className="grid grid-cols-12 gap-8 md:px-6 sm:grid sm:grid-cols-1">
        <div className="col-span-4 md:col-span-6 md:w-[250px]">
          <WorkspaceCard
            workspacename={"Docker"}
            isOwner={true}
            workspacephoto={docker}
            total={12}
            createdate={"12/01/2023"}
          />
        </div>
        <div className="col-span-4 md:col-span-6 md:w-[250px]">
          <WorkspaceCard
            workspacename={"Spring"}
            isOwner={false}
            workspacephoto={spring}
            total={15}
            createdate={"10/05/2023"}
          />
        </div>
        <div className="col-span-4 md:col-span-6 md:w-[250px]">
          <WorkspaceCard
            workspacename={"ReactJS"}
            isOwner={true}
            workspacephoto={reactjs}
            total={20}
            createdate={"11/05/2023"}
          />
        </div>
        <div className="col-span-4 md:col-span-6 md:w-[250px]">
          <WorkspaceCard
            workspacename={"ReactJS"}
            isOwner={true}
            workspacephoto={reactjs}
            total={20}
            createdate={"11/05/2023"}
          />
        </div>
        <div className="col-span-4 md:col-span-6 md:w-[250px]">
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
