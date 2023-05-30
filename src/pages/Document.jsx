import React, { useState } from "react";
import sort from "../assets/workspace_image/sort.svg";
import chevrondown from "../assets/workspace_image/chevrondown.svg";
import filter from "../assets/workspace_image/filter.svg";
import search from "../assets/workspace_image/search.svg";
import { DropDownSort } from "../components/DropDownSort";
import { DropDownFilter } from "../components/DropDownFilter";
import documenticon from "../assets/document_image/documenticon.svg";
import bulletlist from "../assets/document_image/bulletlist.svg";
import dotshorizontal from "../assets/document_image/dotshorizontal.svg";
import grid from "../assets/document_image/grid.svg";
import { DocumentCard } from "../components/card/DocumentCard";
import { DocumentList } from "../components/card/DocumentList";
import { DropDownWorkspaceSetting } from "../components/DropDownWorkspaceSetting";
import { Link } from "react-router-dom";

export const Document = () => {
  const [openSort, setOpenSort] = useState(false);

  const [openFilter, setOpenFilter] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);

  const [openGrid, setOpenGrid] = useState(true);

  const [openBulletList, setOpenBulletList] = useState(false);

  const [workspaceSetting, setWorkspaceSetting] = useState(false);

  return (
    <div className="text-accent space-y-5">
      <div>
        <h1 className="font-bold text-accent text-44px">React & NodeJS</h1>
        <p className="text-accent text-18px">
          Welcome to React & NodeJS workspace
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <img src={documenticon} className="p-2 shadow-md rounded-lg" />
          <p className="font-semibold text-20px">Documents</p>
        </div>
        <Link
          to={"/createdocument"}
          className="font-semibold bg-primary px-5 py-3 rounded-lg text-white"
        >
          Create Document
        </Link>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-4 flex items-center gap-x-5 h-11">
          <div className="flex items-center gap-x-3">
            <img src={sort} className="w-7 h-7" />
            <h4 className="font-semibold text-20px">Sort: </h4>
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-x-20"
              onClick={() => setOpenSort(!openSort)}
            >
              <p className="text-18px text-black">Last Update</p>
              <img src={chevrondown} />
            </button>
            <div>
              {openSort ? (
                <DropDownSort openSort={openSort} setOpenSort={setOpenSort} />
              ) : null}
            </div>
          </div>
        </div>
        <div className="col-span-4 flex items-center gap-x-5 h-11">
          <div className="flex items-center gap-x-3">
            <img src={filter} className="w-7 h-7" />
            <h4 className="font-semibold text-20px">Filter: </h4>
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-x-20"
              onClick={() => setOpenFilter(!openFilter)}
            >
              <p className="text-18px text-black">Product</p>
              <img src={chevrondown} />
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
        <div className="col-span-4 flex items-center justify-end">
          {openSearch ? (
            <div className="flex justify-end items-center relative">
              {openSearch ? (
                <input
                  type="text"
                  placeholder="search"
                  className="rounded-lg text-18px border-gray-200 border-[1px] w-[280px] focus:ring-accent focus:border-accent"
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
          ) : (
            <div className="flex justify-center items-center gap-x-5">
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setOpenGrid(true);
                    setOpenBulletList(false);
                  }}
                >
                  <img src={grid} />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setOpenGrid(false);
                    setOpenBulletList(true);
                  }}
                >
                  <img src={bulletlist} />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setOpenSearch(!openSearch)}
                >
                  <img src={search} />
                </button>
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setWorkspaceSetting(!workspaceSetting)}
                >
                  <img src={dotshorizontal} />
                </button>
                {workspaceSetting ? (
                  <DropDownWorkspaceSetting
                    workspaceSetting={workspaceSetting}
                    setWorkspaceSetting={setWorkspaceSetting}
                  />
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
      {openGrid ? (
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <DocumentCard
              title={"Redux Toolkit"}
              header={"1. Introduction to Redux Toolkit"}
              status={false}
              text={``}
              editdate={9}
            />
          </div>
          <div className="col-span-4">
            <DocumentCard
              title={"Node Js"}
              header={"1. Introduction to Node Js"}
              status={true}
              text={`In this tutorial, we'll focus on introducing Profiles in Spring.
      Profiles are a core feature of the framework — allowing us to map our
      beans to different profiles — for example, dev, test, and prod. We can
      then activate different profiles in different environments to
      bootstrap only the beans we need.`}
              editdate={12}
            />
          </div>
          <div className="col-span-4">
            <DocumentCard
              title={"Spring Profile"}
              header={"1. Introduction to Spring Profile"}
              status={true}
              text={`In this tutorial, we'll focus on introducing Profiles in Spring.
      Profiles are a core feature of the framework — allowing us to map our beans to different profiles — for example, dev, test, and prod.
      We can then activate different profiles in different environments to bootstrap only the beans we need.`}
              editdate={15}
            />
          </div>
        </div>
      ) : null}
      {openBulletList ? (
        <div className="space-y-6">
          {" "}
          <DocumentList
            title={"Redux Tookit"}
            status={true}
            editdate={"Apr 24 12:15 PM"}
          />{" "}
          <DocumentList
            title={"Node JS"}
            status={true}
            editdate={"Apr 24 12:15 PM"}
          />{" "}
          <DocumentList
            title={"Spring Profile"}
            status={false}
            editdate={"Apr 24 12:15 PM"}
          />{" "}
        </div>
      ) : null}
    </div>
  );
};
