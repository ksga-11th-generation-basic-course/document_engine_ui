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
    <div className="text-accent space-y-5 ">
      <div>
        <h1 className="font-bold text-accent text-44px 2xl:text-36px lg:text-34px sm:text-24px">React & NodeJS</h1>
        <p className="text-accent text-18px 2xl:text-16px lg:text-14px sm:text-12px">
          Welcome to React & NodeJS workspace
        </p>
        <div className="flex justify-between items-center pt-1">
          <div className="flex items-center gap-x-3 2xl:gap-x-2">
            <img src={documenticon} className="p-2 lg:w-7 sm:w-6 shadow-md rounded-lg 2xl:p-1.5 lg:p-1" />
            <p className="font-semibold text-20px 2xl:text-18px lg:text-16px sm:text-15px">Documents</p>
          </div>
          <Link
            to={"/createdocument"}
            className="font-semibold bg-primary px-4 py-2 rounded-lg text-white 2xl:px-2.5 2xl:py-1.5 2xl:text-15px lg:text-14px sm:py-1 sm:px-2 sm:text-12px"
          >
            Create Document
          </Link>
        </div>
        <div className="grid grid-cols-12 pt-2 xs:grid-cols-12 2xl:pt-0 2xl:gap-7 lg:gap-6 sm:gap-0 2xs:gap-4">
          <div className="col-span-4 justify-between sm:col-span-6 2xs:col-span-6 flex 2xs:justify-between items-center gap-x-5 h-11 md:gap-x-2 sm:gap-x-1">
            <div className="flex items-center gap-x-3 2xl:gap-x-1 md:gap-0 ">
              <img src={sort} className="2xs:hidden w-7 h-7 2xl:w-6 2xl:h-6 md:w-5 md:h-5 sm:hidden" />
              <h4 className="font-semibold text-20px 2xl:text-16px">Sort: </h4>
            </div>
            <div className="relative">
              <button
                className="flex items-center gap-20 xl:gap-9 xs:px-0 lg:gap-7 2xl:gap-16 2xl:px-6 md:gap-6 sm:gap-16 2xs:gap-10 xs:gap-10"
                onClick={() => setOpenSort(!openSort)}
              >
                <p className="text-18px text-black 2xl:text-16px md:text-14px">Last_Update</p>
                <img src={chevrondown} className="md:w-4 md:h-4"/>
              </button>
              <div>
                {openSort ? (
                  <DropDownSort openSort={openSort} setOpenSort={setOpenSort} />
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-span-4 justify-between sm:col-span-6 2xs:justify-between 2xs:col-span-6 flex items-center gap-x-5 h-11 ">
            <div className="flex items-center gap-x-3 md:gap-x-1.5 sm:gap-x-1">
              <img src={filter} className="2xs:hidden w-7 h-7 2xl:w-5 2xl:h-5 md:w-5 md:h-4 sm:hidden" />
              <h4 className="font-semibold text-20px 2xl:text-16px">Filter: </h4>
            </div>
            <div className="relative">
              <button
                className="flex items-center gap-20 xl:gap-9 xs:px-0 sm:gap-16 lg:gap-7 2xl:gap-16 2xl:px-6 md:gap-6 2xs:gap-10 xs:gap-10"
                onClick={() => setOpenFilter(!openFilter)}
              >
                <p className="text-18px text-black 2xl:text-16px md:text-14px">Product</p>
                <img src={chevrondown} className="md:w-4 md:h-4" />
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
          <div className="col-span-4 flex items-center sm:justify-end justify-end sm:col-span-12">
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
      </div>
      {openGrid ? (
        <div className="grid grid-cols-12 xs:grid-cols-6 gap-8 lg:gap-4 md:gap-10 2xs:gap-5">
          <div className="col-span-4 md:col-span-6 2xs:col-span-12 xs:col-span-6">
            <DocumentCard
              title={"Redux Toolkit"}
              header={"1. Introduction to Redux Toolkit"}
              status={false}
              text={``}
              editdate={9}
            />
          </div>
          <div className="col-span-4 md:col-span-6 2xs:col-span-12 xs:col-span-6">
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
          <div className="col-span-4 md:col-span-6 2xs:col-span-12 xs:col-span-6">
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
