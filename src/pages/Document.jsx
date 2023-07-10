import React, { useEffect, useState } from "react";
import documenticon from "../assets/document_image/documenticon.svg";
import { DocumentCard } from "../components/card/DocumentCard";
import { DocumentList } from "../components/card/DocumentList";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createDocument,
  getAllDocumentInEachWorkspace,
  searchDocumentByTagName,
} from "../redux/service/documentService/documentService";
import {
  checkAccessibility,
  checkIsOwnerWorkspaceCurrent,
  getWorkspaceByWorkspaceId,
} from "../redux/service/workspaceService/workspaceService";
import setting from "../assets/document_image/settings.svg";
import { WorkspaceSettingModal } from "../modal/WorkspaceSettingModal";
import usericon from "../assets/workspace_image/usericon.svg";
import { WorkspaceViewForMemberModal } from "../modal/WorkspaceViewForMemberModal";
import { getCurrentUser } from "../redux/service/userService/userService";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Radio } from "@material-tailwind/react";

import { getTagInEachWorkspace } from "../redux/service/tagService/tagService";
import { createDocumentSuccess } from "../redux/slice/documentSlice/documentSlice";
import "../App.css";
import { Checkbox } from "@material-tailwind/react";
import { DocumentCardSkeleton } from "../components/DocumentCardSkeleton";
import { toast } from "react-toastify";

export const Document = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const [openGrid, setOpenGrid] = useState(true);

  const [openWorkspaceSetting, setOpenWorksapceSetting] = useState(false);

  const [openCollaboratorForMember, setOpenCollaboratorForMember] =
    useState(false);

  const { documents } = useSelector((state) => state.document);

  const workspace = useSelector((state) => state.workspace.workspace);

  const accessibility = useSelector((state) => state.workspace.accessibility);

  const isOwner = useSelector((state) => state.workspace.isOwner);

  const { tagsWorkspace } = useSelector((state) => state.tag);

  const dispatch = useDispatch();

  const param = useParams();

  const workspaceId = param.workspaceId;

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedTags, setSelectedTags] = useState([]);

  const [openMenu, setOpenMenu] = React.useState(false);

  const [openMenuTwo, setOpenMenuTwo] = React.useState(false);

  const [status, setStatus] = useState("Ascending");

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedTags && selectedTags.length > 0) {
      dispatch(searchDocumentByTagName({ workspaceId, selectedTags }));
    } else {
      dispatch(
        getAllDocumentInEachWorkspace({
          workspaceId,
          no: 1,
          size: 6,
          sortbydatetime: "DEFAULT",
        })
      );
    }
  }, [dispatch, selectedTags, workspaceId]);

  const [no, setNo] = useState(1);

  const [size, setSize] = useState(1000);

  const [sortbydatetime, setSortbydatetime] = useState("DEFAULT");

  useEffect(() => {
    dispatch(
      getAllDocumentInEachWorkspace({ workspaceId, no, size, sortbydatetime })
    );
    dispatch(getWorkspaceByWorkspaceId(workspaceId));
    dispatch(getCurrentUser());
    dispatch(checkAccessibility(workspaceId));
    dispatch(checkIsOwnerWorkspaceCurrent(workspaceId));
    dispatch(getTagInEachWorkspace(workspaceId));
  }, [dispatch, no, size, sortbydatetime, workspaceId]);

  const handleCreateDocument = async () => {
    const document = await createDocument(
      "Untitled",
      false,
      null,
      workspaceId
    );
    dispatch(createDocumentSuccess(document));
    navigate(`/createdocument/${document.documentId}/${workspaceId}`);
    // navigate(`/dashboard`);
    toast.success("Create Document Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching delay
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="text-accent space-y-5 lg:ml-7 md:ml-1 md:mt-10">
      <div>
        <h1 className="font-bold text-accent text-44px ">
          {workspace && workspace.workspaceName}
        </h1>
        {openGrid ? (
          <p className="text-accent text-18px">
            Welcome to {workspace && workspace.workspaceName} workspace
          </p>
        ) : (
          <p className="text-accent text-18px lg:text-[14px]">
            Welcome to {workspace && workspace.workspaceName} workspace
          </p>
        )}
      </div>
      <div className="flex justify-between items-center pt-1 xs:pt-5 2xs:pt-5 mt-5 md:-mt-96">
        <div className="flex items-center gap-x-3 2xl:gap-x-2 md:-mt-5">
          <img
            src={documenticon}
            className="p-2 lg:w-7 2xs:w-7 2xs:p-1 sm:w-8 shadow-custom rounded-lg md:w-7 md:p-1.5"
          />
          <p className="font-semibold text-20px 2xs:text-18px sm:text-18px md:text-18px">
            Documents
          </p>
        </div>
        {accessibility ? (
          <Button
            type="button"
            onClick={handleCreateDocument}
            className={openGrid ? "font-semibold bg-primary px-4 py-3 text-base rounded-lg text-white lg:absolute lg:-mr-[270px] lg:text-14px md:absolute md:mt-24 md:w-72"
          : "font-semibold bg-primary px-4 py-3 text-base rounded-lg text-white lg:absolute lg:-mr-[400px] lg:text-14px  md:absolute md:mt-24 md:w-72"}
          >
            Create Document
          </Button>
        ) : null}
      </div>
      <div className="grid grid-cols-12 lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 md:text-sm">
        {/* Sort */}
        <div className="col-span-4 flex items-center gap-x-5 h-11 lg:ml-2  lg:w-72 md:w-36 md:col-span-12 md:mt-16">
          <div className="flex items-center gap-x-3">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.5 6.75h21"></path>
              <path d="M5.25 12h13.5"></path>
              <path d="M9.75 17.25h4.5"></path>
            </svg>
            <h4 className="font-semibold text-20px md:text-16px">Sort: </h4>
          </div>
          <div className="relative">
            <Menu
              open={openMenu}
              handler={setOpenMenu}
              dismiss={{
                itemPress: false,
              }}
            >
              <MenuHandler>
                <button className="flex items-center justify-between w-[200px] z-20">
                  <p className="text-18px text-black font-ssp">{status}</p>
                  <ChevronDownIcon
                    strokeWidth={3}
                    className={`h-4 w-4 transition-transform md:absolute md:ml-36 ${
                      openMenu ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </MenuHandler>
              <MenuList className="rounded-lg p-2 w-[200px] font-ssp z-20 md:w-[180px] md:absolute md:-ml-8">
                <MenuItem className="flex justify-start p-0 hover:bg-gray-200 rounded-lg">
                  <Radio
                    id="Ascending"
                    name="type"
                    label={<span className="text-18px">Ascending</span>}
                    className="checked:bg-primary"
                    onClick={() => {
                      setAsc(true);
                      setDesc(false);
                      setStatus("Ascending");
                    }}
                  />
                </MenuItem>
                <MenuItem className="flex justify-start p-0 hover:bg-gray-200 rounded-lg">
                  <Radio
                    id="Descending"
                    name="type"
                    label={<span className="text-18px">Descending</span>}
                    className="checked:bg-primary"
                    onClick={() => {
                      setAsc(false);
                      setDesc(true);
                      setStatus("Descending");
                    }}
                  />
                </MenuItem>
                <hr className="my-2 border-blue-gray-50" />
                <MenuItem className="flex justify-start p-0 hover:bg-gray-200 rounded-lg">
                  <Radio
                    id="This week"
                    name="this"
                    label={<span className="text-18px">This week</span>}
                    className="checked:bg-primary"
                    onClick={() => {
                      setSortbydatetime("THIS_WEEK");
                      setStatus("THIS_WEEK");
                    }}
                  />
                </MenuItem>
                <MenuItem className="flex justify-start p-0 hover:bg-gray-200 rounded-lg">
                  <Radio
                    id="This month"
                    name="this"
                    label={<span className="text-18px">This month</span>}
                    className="checked:bg-primary"
                    onClick={() => {
                      setSortbydatetime("THIS_MONTH");
                      setStatus("THIS_MONTH");
                    }}
                  />
                </MenuItem>
                <MenuItem className="flex justify-start p-0 hover:bg-gray-200 rounded-lg">
                  <Radio
                    id="This year"
                    name="this"
                    label={<span className="text-18px">This year</span>}
                    className="checked:bg-primary"
                    onClick={() => {
                      setSortbydatetime("THIS_YEAR");
                      setStatus("THIS_YEAR");
                    }}
                  />
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>

        {/* Filter */}
        <div className={openGrid ? "col-span-4 flex items-center gap-x-5 h-11 lg:ml-[275px] md:col-span-12 md:w-40 md:ml-3"
        : "col-span-4 flex items-center gap-x-5 h-11 lg:ml-[328px] md:col-span-4 md:w-40 md:ml-3"}>
          <div className="flex items-center gap-x-3">
            <svg
              width="20"
              height="20"
              className="lg:w-6 md:w-4 md:h-4"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"></path>
            </svg>
            <h4 className="font-semibold text-20px md:text-16px">Filter: </h4>
          </div>
          <div className="relative">
            <Menu
              open={openMenuTwo}
              handler={setOpenMenuTwo}
              dismiss={{
                itemPress: false,
              }}
            >
              <MenuHandler>
                <button className="flex items-center justify-between w-[200px]">
                  <p className="text-18px text-black font-ssp">Product</p>
                  <ChevronDownIcon
                    strokeWidth={3}
                    className={`h-4 w-4 transition-transform md:text-14px text-accent lg:mr-24 ${
                      openMenuTwo ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </MenuHandler>
              <MenuList className="rounded-lg p-2 w-[200px] font-ssp">
                {tagsWorkspace &&
                  tagsWorkspace.map((tag, index) => {
                    return (
                      <MenuItem className="flex justify-start p-0 hover:bg-gray-200 rounded-lg">
                        <Checkbox
                          id={tag?.tagName}
                          label={
                            <span className="text-18px">{tag?.tagName}</span>
                          }
                          className="checked:bg-primary"
                          checked={selectedTags.includes(tag?.tagName)}
                          onChange={(event) => {
                            const tagName = tag.tagName;
                            if (event.target.checked) {
                              setSelectedTags([...selectedTags, tagName]);
                            } else {
                              setSelectedTags(
                                selectedTags.filter(
                                  (selectedTag) => selectedTag !== tagName
                                )
                              );
                            }
                          }}
                        />
                      </MenuItem>
                    );
                  })}
              </MenuList>
            </Menu>
          </div>
        </div>

        {/* Option */}
        <div className="lg:absolute col-span-4 flex items-center justify-end lg:-mt-32 lg:right-24 md:col-span-3 md:right-56 md:-ml-96 md:mt-40">
          {openSearch ? (
            <div className="flex justify-end items-center relative">
              {openSearch ? (
                <input
                  type="text"
                  placeholder="search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="rounded-lg text-18px border-gray-200 border-[1px] w-[280px] focus:ring-accent focus:border-accent"
                />
              ) : null}
              <button
                type="button"
                className="absolute mr-2 top-3"
                onClick={() => setOpenSearch(!openSearch)}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-x-5">
              {openGrid ? (
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenGrid(false);
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3h7v7H3z"></path>
                      <path d="M14 3h7v7h-7z"></path>
                      <path d="M14 14h7v7h-7z"></path>
                      <path d="M3 14h7v7H3z"></path>
                    </svg>
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenGrid(true);
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 6h13"></path>
                      <path d="M8 12h13"></path>
                      <path d="M8 18h13"></path>
                      <path d="M3 6h.01"></path>
                      <path d="M3 12h.01"></path>
                      <path d="M3 18h.01"></path>
                    </svg>
                  </button>
                </div>
              )}
              <div>
                <button
                  type="button"
                  onClick={() => setOpenSearch(!openSearch)}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </button>
              </div>
              <div className="relative">
                {isOwner ? (
                  <Menu>
                    <MenuHandler>
                      <button type="button">
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                          <path d="M19 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                          <path d="M5 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                        </svg>
                      </button>
                    </MenuHandler>
                    <MenuList className="text-accent rounded-lg space-y-1 p-2 w-56 font-ssp lg:z-40 md:z-40">
                      <MenuItem
                        className="hover:bg-gray-200 p-2 flex items-center gap-x-3"
                        onClick={() =>
                          setOpenWorksapceSetting(!openWorkspaceSetting)
                        }
                      >
                        {" "}
                        <img src={setting} />
                        <span className="text-18px">Setting Workspace</span>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                ) : (
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenCollaboratorForMember(!openCollaboratorForMember)
                      }
                    >
                      <img src={usericon} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {openGrid ? (
        <div className="grid grid-cols-12 gap-8">
          {loading ? (
            documents &&
            documents.map((document, index) =>
              document?.pageId === null ? (
                <div className="col-span-4" key={index}>
                  <DocumentCardSkeleton />
                </div>
              ) : null
            )
          ) : documents === null ? null : documents?.length > 0 ? (
            documents
              .filter((document) => {
                if (searchTerm === "") {
                  return document;
                } else if (
                  document.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return document;
                }
              })
              .map((document, index) =>
                document?.pageId === null ? (
                  <div className="col-span-4" key={index}>
                    <DocumentCard
                      document={document}
                      workspaceId={workspaceId}
                    />
                  </div>
                ) : null
              )
          ) : (
            <div className="col-span-12 absolute px-64 md:px-0 md:-ml-5 z-0">
              <div className="flex flex-col justify-center gap-y-1 items-center h-[400px] w-[570px] lg:w-[170px] lg:h-96 md:w-[330px] md:h-60">
              <svg
                  width="64"
                  height="41"
                  viewBox="0 0 64 41"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
                    <ellipse
                      fill="#F5F5F5"
                      cx="32"
                      cy="33"
                      rx="32"
                      ry="7"
                    ></ellipse>
                    <g fill-rule="nonzero" stroke="#526581">
                      <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                      <path
                        d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                        fill="#FAFAFA"
                      ></path>
                    </g>
                  </g>
                </svg>
                <p className="font-semibold text-accent text-base md:text-12px">
                  No Document
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-5">
          {documents === null ? null : documents.length > 0 ? (
            documents
              .filter((document) => {
                if (searchTerm === "") {
                  return document;
                } else if (
                  document.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return document;
                }
              })
              .map((document, index) =>
                document?.pageId === null ? (
                  <div className="col-span-4" key={index}>
                    <DocumentList
                      document={document}
                      workspaceId={workspaceId}
                    />
                  </div>
                ) : null
              )
          ) : (
            <div className="col-span-12 absolute px-64 md:px-0 md:-ml-5 z-0">
              <div className="flex flex-col justify-center gap-y-1 items-center h-[400px] w-[570px] lg:w-[170px] lg:h-96 md:w-[330px] md:h-60">
                <svg
                  width="64"
                  height="41"
                  viewBox="0 0 64 41"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
                    <ellipse
                      fill="#F5F5F5"
                      cx="32"
                      cy="33"
                      rx="32"
                      ry="7"
                    ></ellipse>
                    <g fill-rule="nonzero" stroke="#D9D9D9">
                      <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                      <path
                        d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                        fill="#FAFAFA"
                      ></path>
                    </g>
                  </g>
                </svg>
                <p className="font-semibold text-accent text-base">
                  No Document
                </p>
              </div>
            </div>
          )}
        </div>
      )}
      <div>
        {workspace && isOwner && (
          <WorkspaceSettingModal
            openWorkspaceSetting={openWorkspaceSetting}
            setOpenWorkspaceSetting={setOpenWorksapceSetting}
            workspace={workspace}
          />
        )}
        {workspace && openCollaboratorForMember && (
          <WorkspaceViewForMemberModal
            openCollaboratorForMember={openCollaboratorForMember}
            setOpenCollaboratorForMember={setOpenCollaboratorForMember}
            workspace={workspace}
          />
        )}
      </div>
    </div>
  );
};
