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
    <div className="text-accent space-y-5 lg:ml-3 lg:mt-4 md:w-full ">
      {/* React & NodeJS */}
      <div className="lg:-ml-3 md:ml-3">
        <h1 className="font-bold text-accent text-44px md:text-xl">React & NodeJS</h1>
        <p className="text-accent text-18px md:text-sm">
          Welcome to React & NodeJS workspace
        </p>
        <div className="flex justify-between items-center pt-1 mt-5 md:w-[400px] md:grid md:grid-cols-2">
          <div className="flex items-center gap-x-3 2xl:gap-x-2 md:col-span-1">
            <img src={documenticon} className="p-2  shadow-custom rounded-lg lg:w-9 md:w-7 md:p-1.5" />
            <p className="font-semibold text-20px md:text-18px">Documents</p>
          </div>
          <div className="md:-ml-2">
          <Link
            to={"/createdocument"}
            className="font-semibold bg-primary px-4 py-2 rounded-lg text-white md:text-14px 
            lg:absolute lg:-mr-32 lg:-ml-24 lg:-mt-6 md:w-[140px] md:col-span- md:ml-36 " >
            Create Document
          </Link>
          </div>
         
        </div>
        <div className="grid grid-cols-12 mt-5 lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 md:mt-3 md:w-[400px] ">
        {/* Sort */}
        <div className="-mt-1 col-span-4 gap-x-3 flex items-center 
        lg:col-span-4 lg:w-72 md:w-36 md:col-span-4">
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
              <img className="mt-1 lg:-ml-6 md:w-4 md:h-4 md:ml-4" src={chevrondown} />
            </button>
            <div className="md:absolute ">
              {openSort ? (
                <DropDownSort openSort={openSort} setOpenSort={setOpenSort} />
              ) : null}
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="col-span-4  gap-x-3  flex items-center 
        lg:col-span-4 lg:w-80 lg:ml-20 md:col-span-4 md:w-40 md:ml-14">
          <div className="flex items-center gap-x-3">
            <img src={filter} className="w-7 h-7 lg:w-6 md:w-4 md:h-4" />
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
              <img className="mt-1 lg:-ml-6 md:w-4 md:h-4 md:ml-4" src={chevrondown} />
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
          <div className="col-span-4 flex items-center justify-end lg:col-span-4 lg:-mr-12 md:mr-44 md:w-[115px] md:col-span-4 md:ml-24">
            {openSearch ? (
              <div className="flex justify-end items-center absolute ">
                {openSearch ? (
                  <input
                    type="text"
                    placeholder="search"
                    className="rounded-lg text-18px border-gray-200 border-[1px] w-[280px] focus:ring-accent focus:border-accent"
                  />
                ) : null}
                <button
                  type="button"
                  className="absolute mr-2 "
                  onClick={() => setOpenSearch(!openSearch)}
                >
                  <img src={search} />
                </button>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-x-5 ">
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenGrid(true);
                      setOpenBulletList(false);
                    }}
                  >
                    <img src={grid} title="Grid"/>
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
                    <img src={bulletlist} title="Bullet List"/>
                  </button>
                </div>
                <div>
                  <button 
                    type="button"
                    onClick={() => setOpenSearch(!openSearch)}
                  >
                    <img src={search} title="Search" />
                  </button>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setWorkspaceSetting(!workspaceSetting)}
                  >
                    <img src={dotshorizontal} title="More"/>
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
        <div className="grid grid-cols-12 gap-8 lg:grid lg:grid-cols-12 lg:gap-14 md:w-[480px] md:ml-6 md:grid md:grid-cols-12 ">
            <div className=" col-span-4 lg:col-span-6 lg:w-[300px] md:col-span-12">
              <DocumentCard
                title={"Redux Toolkit"}
                header={"1. Introduction to Redux Toolkit"}
                status={false}
                text={``}
                editdate={9}
              />
            </div>
            <div className=" col-span-4 lg:w-[300px] lg:ml-6 md:col-span-12 md:ml-0  ">
              <DocumentCard
                title={"Node Js"}
                header={"1. Introduction to Node Js"}
                status={true}
                text={`In this tutorial, we'll focus on introducing in Spring. The
                profiles are a core feature of the framework — allowing us to map our
                beans to different profiles — for example, dev, test, and prod. We can
                then activate different profiles in different environments.`}
                editdate={12}
              />
            </div>
         
          <div className="col-span-4 lg:w-[200px] ">
            <DocumentCard
              title={"Spring Profile"}
              header={"1. Introduction to Spring Profile"}
              status={true}
              text={`In this tutorial, we'll focus on introducing in Spring. The
              profiles are a core feature of the framework — allowing us to map our beans to different profiles — for example, dev, test, and prod.
              We can then activate different profiles in different environments.`}
              editdate={15}
            />

          </div>
        </div>
      
      ) : null}
      {openBulletList ? (
        // Document List//
        <div className="space-y-6 lg: lg:w-[620px]  md:w-[480px] md:ml-4  md:mr-4  ">
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
