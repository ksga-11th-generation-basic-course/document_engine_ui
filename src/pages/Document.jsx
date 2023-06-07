import React, { useEffect, useState } from "react";
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
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllDocumentInEachWorkspace } from "../redux/service/documentService/documentService";
import { getWorkspaceByWorksapceId } from "../redux/service/workspaceService/workspaceService";
export const Document = () => {
  const [openSort, setOpenSort] = useState(false);

  const [openFilter, setOpenFilter] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);

  const [openGrid, setOpenGrid] = useState(true);

  const [openBulletList, setOpenBulletList] = useState(false);

  const [workspaceSetting, setWorkspaceSetting] = useState(false);

  const documents = useSelector((state) => state.document.documents);

  const workspace = useSelector((state) => state.workspace.workspace);

  const dispatch = useDispatch();

  const param = useParams();

  const workspaceId = param.id;

  useEffect(() => {
    dispatch(getAllDocumentInEachWorkspace(workspaceId));
    dispatch(getWorkspaceByWorksapceId(workspaceId));
  }, []);

  return (
    <div className="text-accent space-y-5">
      <div>
        <h1 className="font-bold text-accent text-44px">React & NodeJS</h1>
        <p className="text-accent text-18px">
          Welcome to React & NodeJS workspace
        </p>
        <div className="flex justify-between items-center pt-1 xs:pt-5 2xs:pt-5">
          <div className="flex items-center gap-x-3 2xl:gap-x-2">
            <img src={documenticon} className="p-2 lg:w-7 2xs:w-7 2xs:p-1 sm:w-8 shadow-md rounded-lg md:w-7 md:p-1.5" />
            <p className="font-semibold text-20px 2xs:text-18px sm:text-18px md:text-18px">Documents</p>
          </div>
          <Link
            to={"/createdocument"}
            className="font-semibold bg-primary px-4 py-2 rounded-lg text-white md:text-14px 2xs:text-15px 2xs:py-1.5 sm:text-15px sm:py-1.5 sm:px-3"
          >
            Create Document
          </Link>
        </div>
        <div className="grid grid-cols-12 pt-2 xs:gap-x-5 gap-x-3 2xl:gap-x-2 md:gap-x-8 sm:gap-x-5 2xs:gap-x-3 lg:gap-x-2">
          <div className="col-span-4 grid grid-cols-3 xs:grid-cols-4 2xs:grid-cols-4 lg:grid-cols-3 justify-between items-center gap-x-3 h-11 sm:col-span-6 xs:gap-x-0 md:col-span-6 xs:col-span-6 2xs:col-span-6">
            <div className="col-span-1 gap-x-1 2xs:col-span-1 xs:col-span-1 lg:col-span-1 xs:gap-x-3 flex">
              <img src={sort} className="w-7 h-7 sm:hidden md:w-5" />
              <h4 className="font-semibold text-20px xs:text-16px sm:text-16px md:text-16px lg:text-18px">Sort: </h4>
            </div>
            <div className="relative col-span-2 lg:col-span-2 2xs:col-span-3 xs:col-span-3">
              <button
                className="flex items-center justify-between sm:gap-10 xs:gap-2 p-1.5 xs:p-1 sm:p-1 border-2 rounded-lg xl:w-44 sm:w-44 xl:gap-x-0 xs:w-36 md:w-52 lg:w-full 2xl:gap-0 2xl:w-full 2xs:w-full"
                onClick={() => setOpenSort(!openSort)}
              >
                <p className="text-18px text-black xs:text-16px sm:text-16px md:text-16px">Last Update</p>
                <img src={chevrondown} className="" />
              </button>
              <div>
                {openSort ? (
                  <DropDownSort openSort={openSort} setOpenSort={setOpenSort} />
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-3 xs:grid-cols-4 2xs:grid-cols-4 lg:grid-cols-3 justify-between items-center gap-x-3 h-11 sm:col-span-6 xs:gap-x-0 md:col-span-6 xs:col-span-6 2xs:col-span-6">
            <div className="col-span-1 lg:col-span-1 flex items-center gap-x-2">
              <img src={filter} className="w-7 h-7 sm:hidden md:w-5" />
              <h4 className="font-semibold text-20px xs:text-16px sm:text-16px md:text-16px lg:text-18px">Filter: </h4>
            </div>
            <div className="relative col-span-2 lg:col-span-2 xs:col-span-3">
              <button
                className="flex items-center justify-between sm:gap-10 xs:gap-2 p-1.5 xs:p-1 sm:p-1 border-2 rounded-lg w-44 xl:w-44 sm:w-44 xl:gap-x-0 xs:w-full md:w-52 2xs:w-full lg:w-full 2xl:w-full"
                onClick={() => setOpenFilter(!openFilter)}
              >
                <p className="text-18px text-black xs:text-16px sm:text-16px md:text-16px">Product</p>
                <img src={chevrondown} className="" />
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
          <div className="col-span-4 flex items-center justify-end sm:col-span-12 sm:h-11 md:col-span-12 md:h-11 md:pt-4 2xs:col-span-12">
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
