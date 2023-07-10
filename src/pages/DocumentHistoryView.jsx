import React, { useEffect, useRef, useState } from "react";
import Plus from "../assets/images/Dashboard/Plus.svg";
import CreateBy from "../assets/images/Dashboard/CreateBy.svg";
import CreateDate from "../assets/images/Dashboard/CreateDate.svg";
import ViewHistory from "../assets/images/Dashboard/ViewHistory.svg";
import ViewMember from "../assets/images/Dashboard/ViewMember.svg";
import ExportFile from "../assets/images/Dashboard/ExportFile.svg";
import Tag from "../assets/images/Dashboard/Tag.svg";
import arrow from "../assets/document_image/arrow.svg";
import icon from "../assets/document_image/icon.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import doc from "../assets/document_image/doc.svg";
import { DocumentPermissionModal } from "../modal/DocumentPermissionModal";
import { DocumentHistoryModal } from "../modal/DocumentHistoryModal";
import { DropDownExport } from "../components/DropDownExport";
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import CheckList from "@editorjs/checklist";
import InlineCode from "@editorjs/inline-code";
import { useDispatch, useSelector } from "react-redux";
import {
  getDocumentByDocumentId,
  getDocumentByPageId,
  getUsername,
  getWorkspaceName,
} from "../redux/service/documentService/documentService";
import { Editor } from "../components/editor/Editor";
import { updateDocument } from "../redux/service/documentService/documentService";
import { updateDocumentSuccess } from "../redux/slice/documentSlice/documentSlice";
import { date } from "yup";
import { getBlockBydoucmentId } from "../redux/service/blockService/blockService";
import {
  addTagToDocument,
  createTag,
  deleteTagFromDocument,
  getTagByDocumentId,
  getTagInEachWorkspace,
} from "../redux/service/tagService/tagService";
import { BlockUI } from "primereact/blockui";
import {
  getBlockHistory,
  getHistoryByHistoryId,
  restoreDocument,
} from "../redux/service/historyService/historyService";
import { EditorHisotry } from "../components/editor/EditorHisotry";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { restoreDocumentSuccess } from "../redux/slice/historySlice/historySlice";

export const DocumentHistoryView = () => {
  const document = useSelector((state) => state.document.document);
  const page = useSelector((state) => state.document.page);
  const username = useSelector((state) => state.document.username);
  const workspace = useSelector((state) => state.document.workspace);
  const { blockHistory } = useSelector((state) => state.history);
  const { tagsDocument } = useSelector((state) => state.tag);
  const { history } = useSelector((state) => state.history);

  const param = useParams();
  const historyId = param.historyId;
  const workspaceId = param.workspaceId;
  const documentId = history?.documentId;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const character = history?.editedBy.split("");

  useEffect(() => {
    dispatch(getDocumentByDocumentId(history?.documentId));
    dispatch(getWorkspaceName(history?.documentId));
    dispatch(getUsername(history?.documentId));
    dispatch(getBlockHistory(historyId));
    dispatch(getTagByDocumentId(history?.documentId));
    dispatch(getHistoryByHistoryId(historyId));
    dispatch(getDocumentByPageId(history?.pageId));
  }, [historyId, workspaceId, history?.pageId]);
  const [title, setTitle] = useState();

  const timestamp = document && document.createdDate;

  useEffect(() => {
    setTitle(history?.title);
    return () => {
      setTitle("");
    };
  }, [history]);

  const handleRestoreHistory = async () => {
    try {
      const history = await restoreDocument(historyId, documentId);
      dispatch(restoreDocumentSuccess(history));
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("Title : ", title);
  // console.log("title Document  : ", document);

  const breadcrumbsTwo = [
    <li className="flex items-center gap-x-2">
      <img src={icon} />
      <Link to={`/document/${workspaceId}`} className="text-black">
        {workspace}
      </Link>
    </li>,
    <li className="flex items-center gap-x-2">
      <img src={doc} />
      <p className="text-primary">{title ? title : "Loading..."}</p>
    </li>,
  ];

  const breadcrumbsThree = [
    <li className="flex items-center gap-x-2">
      <img src={icon} />
      <Link to={`/document/${workspaceId}`} className="text-black">
        {workspace}
      </Link>
    </li>,
    <li className="flex items-center gap-x-2">
      <img src={doc} />
      <Link
        className="text-black"
        to={`/createdocument/${page?.documentId}/${workspaceId}`}
      >
        {page?.title}
      </Link>
    </li>,
    <li className="flex items-center gap-x-2">
      <img src={doc} />
      <p className="text-primary">{title ? title : "Loading..."}</p>
    </li>,
  ];

  return (
    <div className="w-full">
      <div className="absolute top-6 flex items-center gap-x-2 text-16px text-accent">
        <span>Edited at</span>
        <span className="font-bold">{history?.editedDate}</span>
        <span>By</span>
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-500 text-white relative">
          {/* <span>{character[0]?.toUpperCase()}</span> */}
        </div>
        <span className="font-bold">{history?.editedBy}</span>
      </div>
      <div className="fixed z-10 right-0 rounded-lg shadow h-auto p-2 top-[45%]">
        <div className="grid grid-rows-1 gap-3">
          <button
            className="w-[30px] h-[30px] rounded-[10px] shadow bg-white flex justify-center items-center"
            type="button"
            // onClick={() => setOpenPermission(!openPermission)}
          >
            <img src={ViewMember} alt="" />
          </button>
          <button
            className="w-[30px] h-[30px] rounded-[10px] shadow bg-white flex justify-center items-center"
            type="button"
            onClick={handleRestoreHistory}
          >
            <img src={ViewHistory} alt="" />
          </button>
          <div className="relative">
            <button
              className="w-[30px] h-[30px] rounded-[10px] shadow bg-white flex justify-center items-center"
              type="button"
              // onClick={() => setOpenExport(!openExport)}
            >
              <img src={ExportFile} alt="" />
            </button>
            {/* {openExport ? (
              <DropDownExport
                openExport={openExport}
                setOpenExport={setOpenExport}
              />
            ) : null} */}
          </div>
        </div>
      </div>
      <nav className="flex items-center text-sm px-10">
        <ol className="list-none p-0 inline-flex">
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {document?.pageId === null ? breadcrumbsTwo : breadcrumbsThree}
            </Breadcrumbs>
          </Stack>
        </ol>
      </nav>
      <BlockUI blocked={false}>
        <div className="text-[#9CA3AF] grid grid-rows-1 gap-2 px-12">
          <div className="w-full h-auto">
            <span className="font-semibold ">
              <div className="text-5xl p-0 text-black w-auto py-2 focus:ring-0 focus:border-0 border-0">
                {title ? title : "Loading..."}
              </div>
            </span>
            <div className="w-full grid grid-cols-12 gap-y-2">
              <div className="col-span-12 text-sm">
                <div className="flex">
                  <span className="flex gap-x-3 w-36">
                    <img src={CreateBy} className="w-[17px]" alt="" />
                    <p>Created By</p>
                  </span>
                  <p className="text-black">{username}</p>
                </div>
              </div>
              <div className="col-span-12 text-sm">
                <div className="flex">
                  <span className="flex gap-x-3 w-36">
                    <img src={CreateDate} className="w-[17px]" alt="" />
                    <p>Created Date</p>
                  </span>
                  <p className="text-black">{timestamp}</p>
                </div>
              </div>
              <div className="col-span-12 text-sm relative">
                <div className="relative grid grid-cols-10">
                  <span className="col-span-1 gap-x-3 w-36">
                    <div className="flex gap-x-3">
                      <img src={Tag} className="w-[16px]" alt="" />
                      <p>Tags</p>
                    </div>
                  </span>
                  <button className="flex flex-wrap col-span-8 gap-2 h-auto w-full ml-10">
                    {tagsDocument &&
                      tagsDocument.map((tag, index) => (
                        <span
                          key={index}
                          className={`px-2 gap-1 items-center bg-gray-200 text-gray-800 rounded-md text-sm font-medium`}
                        >
                          <span className="flex gap">{tag?.tagName}</span>
                        </span>
                      ))}
                  </button>
                </div>
              </div>
            </div>
            <hr className="mt-3" />
          </div>
        </div>
        <div className="mt-2">
          {blockHistory === null ? null : blockHistory.length > 0 ? (
            <EditorHisotry />
          ) : (
            <div>
              <EditorHisotry />
            </div>
          )}
        </div>
        <div className="mt-[75vh]"></div>
      </BlockUI>
    </div>
  );
};