import React, { useState } from "react";
import sort from "../assets/workspace_image/sort.svg";
import chevrondown from "../assets/workspace_image/chevrondown.svg";
import filter from "../assets/workspace_image/filter.svg";
import search from "../assets/workspace_image/search.svg";
import { DropDownSort } from "../components/DropDownSort";
import documenticon from "../assets/document_image/documenticon.svg";
import bulletlist from "../assets/document_image/bulletlist.svg";
import dotshorizontal from "../assets/document_image/dotshorizontal.svg";
import grid from "../assets/document_image/grid.svg";
import { DocumentCard } from "../components/card/DocumentCard";
import { DocumentList } from "../components/card/DocumentList";
import { DropDownWorkspaceSetting } from "../components/DropDownWorkspaceSetting";
import { Link } from "react-router-dom";
import { DropDownFilterDocument } from "../components/DropDownFilterDocument";

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
        <h1 className="font-bold text-accent text-44px 2xl:text-28px">React & NodeJS</h1>
        <p className="text-accent text-18px 2xl:text-15px">
          Welcome to React & NodeJS workspace
        </p>
        <div className="flex justify-between items-center pt-1 xs:pt-5 2xs:pt-5 mt-5">
          <div className="flex items-center gap-x-3 2xl:gap-x-2">
            <img src={documenticon} className="p-2 lg:w-7 2xs:w-7 2xs:p-1 sm:w-8 shadow-custom rounded-lg md:w-7 md:p-1.5" />
            <p className="font-semibold text-20px 2xs:text-18px sm:text-18px md:text-18px">Documents</p>
          </div>
          <Link
            to={"/createdocument"}
            className="font-semibold bg-primary px-4 py-2 rounded-lg text-white md:text-14px 2xs:text-15px 2xs:py-1.5 sm:text-15px sm:py-1.5 sm:px-3"
          >
            Create Document
          </Link>
        </div>


        <div className="grid grid-cols-12 mt-5 md:mt-3">
        {/* Sort */}
        <div className="-mt-1 col-span-4 gap-x-3 lg:col-span-6  flex items-center lg:w-72 md:w-36 md:col-span-6">
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
                Product
              </p>
              <img className="mt-1 md:w-4 md:h-4 md:ml-4" src={chevrondown} />
            </button>
            <div className="z-20">
              {openFilter ? (
                <DropDownFilterDocument
                  openFilter={openFilter}
                  setOpenFilter={setOpenFilter}
                />
              ) : null}
            </div>
          </div>
        </div>

        {/* Option Document */}
          <div className="col-span-4 flex items-center justify-end sm:col-span-12 sm:h-11 md:col-span-12 md:h-11 md:pt-4 2xs:col-span-12">
            {openSearch ? (
              <div className="flex justify-end items-center absolute">
                {openSearch ? (
                  <input
                    type="text"
                    placeholder="search"
                    className="rounded-lg text-18px border-gray-200 border-[1px] w-[280px] focus:ring-accent focus:border-accent"
                  />
                ) : null}
                <button
                  type="button"
                  className="absolute mr-2"
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
      </div>

      {/* Card Document */}
      {openGrid ? (
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-6 xs:col-span-12">
            <DocumentCard
              title={"Redux Toolkit"}
              header={"1. Introduction to Redux Toolkit"}
              status={false}
              text={``}
              editdate={9}
            />
          </div>
          <div className="col-span-4 sm:col-span-6 xs:col-span-12 ">
            <DocumentCard
              title={"Node Js"}
              header={"1. Introduction to Node Js"}
              status={true}
              text={`In this tutorial, we'll focus on introducing Profiles in Spring.
      Profiles are a core feature of the framework — allowing us to map our
      beans to different profiles — for example, dev, test, and prod. We can
      then activate different profiles in different environments`}
              editdate={12}
            />
          </div>
          <div className="col-span-4 sm:col-span-6 xs:col-span-12">
            <DocumentCard
              title={"Spring Profile"}
              header={"1. Introduction to Spring Profile"}
              status={true}
              text={`In this tutorial, we'll focus on introducing Profiles in Spring.
      Profiles are a core feature of the framework — allowing us to map our beans to different profiles — for example, dev, test, and prod.
      We can then activate different profiles in different environments`}
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
