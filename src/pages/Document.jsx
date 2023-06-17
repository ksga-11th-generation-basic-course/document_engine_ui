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
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllDocumentInEachWorkspace } from "../redux/service/documentService/documentService";
import {
  checkIsOwnerWorkspace,
  getWorkspaceByWorkspaceId,
} from "../redux/service/workspaceService/workspaceService";
import { Checkbox, Dropdown, Radio } from "react-daisyui";
import setting from "../assets/document_image/settings.svg";
import group from "../assets/document_image/group.svg";
import { WorkspaceSettingModal } from "../modal/WorkspaceSettingModal";
import usericon from "../assets/workspace_image/usericon.svg";
import { WorkspaceViewForMemberModal } from "../modal/WorkspaceViewForMemberModal";
import { getCurrentUser } from "../redux/service/userService/userService";

export const Document = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const [openGrid, setOpenGrid] = useState(true);

  const [openBulletList, setOpenBulletList] = useState(false);

  const [openWorkspaceSetting, setOpenWorksapceSetting] = useState(false);

  const [openCollaboratorForMember, setOpenCollaboratorForMember] =
    useState(false);

  const documents = useSelector((state) => state.document.documents);

  const workspace = useSelector((state) => state.workspace.workspace);

  const dispatch = useDispatch();

  const param = useParams();

  const workspaceId = param.workspaceId;

  const isOwner = param.isOwner;

  useEffect(() => {
    dispatch(getAllDocumentInEachWorkspace(workspaceId));
    dispatch(getWorkspaceByWorkspaceId(workspaceId));
    dispatch(getCurrentUser());
  }, []);

  return (
    <div className="text-accent space-y-5">
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
            <Dropdown>
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
                    name="radioOptions"
                    value="lastupdate"
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>Last Update</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    defaultChecked
                    name="radioOptions"
                    value="thisweek"
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>This week</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    defaultChecked
                    name="radioOptions"
                    value="thismonth"
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>This month</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    defaultChecked
                    name="radioOptions"
                    value="thisyear"
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>This year</span>
                </Dropdown.Item>
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
                <Dropdown.Item>
                  <Checkbox className="checked:bg-primary" />
                  <span>Product</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Checkbox className="checked:bg-primary" />
                  <span>Technology</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Checkbox className="checked:bg-primary" />
                  <span>Document</span>
                </Dropdown.Item>
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
                {isOwner === "true" ? (
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
          {documents === null
            ? null
            : documents.map((document, index) => (
                <div className="col-span-4" key={index}>
                  <DocumentCard document={document} />
                </div>
              ))}
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
