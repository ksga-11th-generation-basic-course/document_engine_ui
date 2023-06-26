import React, { useEffect, useState } from "react";
import sort from "../assets/workspace_image/sort.svg";
import chevrondown from "../assets/workspace_image/chevrondown.svg";
import filter from "../assets/workspace_image/filter.svg";
import search from "../assets/workspace_image/search.svg";
import documenticon from "../assets/document_image/documenticon.svg";
import bulletlist from "../assets/document_image/bulletlist.svg";
import dotshorizontal from "../assets/document_image/dotshorizontal.svg";
import grid from "../assets/document_image/grid.svg";
import { DocumentCard } from "../components/card/DocumentCard";
import { DocumentList } from "../components/card/DocumentList";
import { DropDownWorkspaceSetting } from "../components/DropDownWorkspaceSetting";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createDocument,
  getAllDocumentInEachWorkspace,
  searchDocumentByTagName,
} from "../redux/service/documentService/documentService";
import {
  checkAccessibility,
  checkIsOwnerWorkspace,
  checkIsOwnerWorkspaceCurrent,
  getWorkspaceByWorkspaceId,
} from "../redux/service/workspaceService/workspaceService";
import { Dropdown, Form } from "react-daisyui";
import setting from "../assets/document_image/settings.svg";
import group from "../assets/document_image/group.svg";
import { WorkspaceSettingModal } from "../modal/WorkspaceSettingModal";
import usericon from "../assets/workspace_image/usericon.svg";
import { WorkspaceViewForMemberModal } from "../modal/WorkspaceViewForMemberModal";
import { getCurrentUser } from "../redux/service/userService/userService";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { getTagInEachWorkspace } from "../redux/service/tagService/tagService";
import { createDocumentSuccess } from "../redux/slice/documentSlice/documentSlice";
import "../App.css";


export const Document = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const [openGrid, setOpenGrid] = useState(true);

  const [openBulletList, setOpenBulletList] = useState(false);

  const [openWorkspaceSetting, setOpenWorksapceSetting] = useState(false);

  const [openCollaboratorForMember, setOpenCollaboratorForMember] =
    useState(false);

  const { documents, loading } = useSelector((state) => state.document);

  const workspace = useSelector((state) => state.workspace.workspace);

  const accessibility = useSelector((state) => state.workspace.accessibility);

  const isOwner = useSelector((state) => state.workspace.isOwner);

  const tagsWorkspace = useSelector((state) => state.tag.tagsWorkspace);

  const dispatch = useDispatch();

  const param = useParams();

  const workspaceId = param.workspaceId;

  // const isOwner = param.isOwner;

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedTags, setSelectedTags] = useState([]);

  const [documentId, setDocumentId] = useState();

  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(searchDocumentByTagName({ workspaceId, selectedTags }));
  // }, [selectedTags]);

  useEffect(() => {
    dispatch(getAllDocumentInEachWorkspace(workspaceId));
    dispatch(getWorkspaceByWorkspaceId(workspaceId));
    dispatch(getCurrentUser());
    dispatch(checkAccessibility(workspaceId));
    dispatch(checkIsOwnerWorkspaceCurrent(workspaceId));
    dispatch(getTagInEachWorkspace(workspaceId));
  }, []);

  const now = new Date();
  const currentDateTime = now.toISOString();
  const handleCreateDocument = async () => {
    const document = await createDocument(
      "Untitled",
      false,
      currentDateTime,
      null,
      workspaceId
    );
    dispatch(createDocumentSuccess(document));
    navigate(`/createdocument/${document.documentId}/${workspaceId}`);
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

  return (
    <div className="text-accent space-y-5 h-screen">
      <div>
        <h1 className="font-bold text-accent text-44px">
          {workspace && workspace.workspaceName}
        </h1>
        <p className="text-accent text-18px">
          Welcome to {workspace && workspace.workspaceName} workspace
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <img src={documenticon} className="p-2 shadow-md rounded-lg" />
          <p className="font-semibold text-20px">Documents</p>
        </div>
        {accessibility ? (
          <button
            type="button"
            onClick={handleCreateDocument}
            className="font-semibold bg-primary px-5 py-3 rounded-lg text-white"
          >
            Create Document
          </button>
        ) : null}
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-4 flex items-center gap-x-5 h-11">
          <div className="flex items-center gap-x-3">
            <img src={sort} className="w-7 h-7" />
            <h4 className="font-semibold text-20px">Sort: </h4>
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
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="LAST_UPDATE"
                    name="radio-buttons-group"
                  >
                    <Dropdown.Item>
                      <FormControlLabel
                        value="LAST_UPDATE"
                        control={<Radio />}
                        label="Last Update"
                        className="h-5 w-full"
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <FormControlLabel
                        value="THIS_WEEK"
                        control={<Radio />}
                        label="This week"
                        className="h-5 w-full"
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <FormControlLabel
                        value="THIS_MONTH"
                        control={<Radio />}
                        label="This month"
                        className="h-5 w-full"
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <FormControlLabel
                        value="THIS_YEAR"
                        control={<Radio />}
                        label="This year"
                        className="h-5 w-full"
                      />
                    </Dropdown.Item>
                  </RadioGroup>
                </FormControl>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="col-span-4 flex items-center gap-x-5 h-11">
          <div className="flex items-center gap-x-3">
            <img src={filter} className="w-7 h-7" />
            <h4 className="font-semibold text-20px">Filter: </h4>
          </div>
          <div className="relative">
          
            <Dropdown>
              <Dropdown.Toggle>
                <div className="flex items-center gap-x-20">
                  <p className="text-18px text-black">Product</p>
                  <img src={chevrondown} />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-48 bg-white rounded-lg">
                {tagsWorkspace &&
                  tagsWorkspace.map((tag, index) => (
                    <Dropdown.Item key={index}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={tag?.tagName}
                        className="h-5 w-full"
                        value={tag?.tagName}
                        checked={selectedTags.includes(tag.tagName)}
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
                    </Dropdown.Item>
                    
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="col-span-4 flex items-center justify-end">
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
                {isOwner ? (
                  <Dropdown className="dropdown-left">
                    <Dropdown.Toggle>
                      <img src={dotshorizontal} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-56 mt-6 bg-white">
                      <Dropdown.Item
                        onClick={() =>
                          setOpenWorksapceSetting(!openWorkspaceSetting)
                        }
                      >
                        <img src={setting} />
                        <span>Setting Workspace</span>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <img src={group} />
                        <span>View member</span>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
          {documents === null ? null : documents?.length > 0 ? (
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
              .map((document, index) => (
                <div className="col-span-4" key={index}>
                  <DocumentCard document={document} workspaceId={workspaceId} />
                </div>
              ))
          ) : (
            <div className="col-span-12 absolute bottom-[45%] left-[55%]">
              <p className="font-semibold text-accent">No Document</p>
            </div>
          )}
        </div>
      ) : null}
      {openBulletList ? (
        <div className="space-y-6">
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
              .map((document, index) => (
                <div className="col-span-4" key={index}>
                  <DocumentList
                    title={document.title}
                    status={true}
                    editdate={"Apr 24 12:15 PM"}
                  />
                </div>
              ))
          ) : (
            <div className="col-span-12 absolute bottom-[45%] left-[55%]">
              <p className="font-semibold text-accent">No Document</p>
            </div>
          )}
        </div>
      ) : null}
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
