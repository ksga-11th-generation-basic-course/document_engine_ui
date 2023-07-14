import React, { useEffect, useState } from "react";
import {
  Card,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import logo from "../assets/landing_image/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllWorkspace } from "../redux/service/workspaceService/workspaceService";
import { CreateWorkspaceModal } from "../modal/CreateWorkspaceModal";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { CreatePageModal } from "../modal/CreatePageModal";
import {
  createDocument,
  getAllDocumentInEachWorkspace,
} from "../redux/service/documentService/documentService";
import { createDocumentSuccess } from "../redux/slice/documentSlice/documentSlice";
import { toast } from "react-toastify";
import setting from "../assets/dashboard_image/setting.svg";
import trush from "../assets/dashboard_image/trush.svg";
import { WorkspaceSettingModal } from "../modal/WorkspaceSettingModal";
import { RemoveWorkspaceModal } from "../modal/RemoveWorkspaceModal";
import { DeleteDocumentModal } from "../modal/DeleteDocumentModal";
import { api } from "../utils/constant";
import close from "../assets/dashboard_image/close.svg";

export const SecondSideBar = ({ handleClick,sideBar,setSideBar, }) => {
  const [open, setOpen] = React.useState(0);

  const { workspaces } = useSelector((state) => state.workspace);

  const { documents } = useSelector((state) => state.document);

  // const [documents, setDocuments] = useState([]);

  const dispatch = useDispatch();

  const [no, setNo] = useState(1);

  const [size, setSize] = useState(6);

  const [asc, setAsc] = useState(true);

  const [desc, setDesc] = useState(false);

  const [sortbydatetime, setSortbydatetime] = useState("DEFAULT");

  const [visible, setVisible] = useState(false);

  const [visiblePage, setVisiblePage] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [removeWorkspace, setRemoveWorkspace] = useState(false);

  const [openWorkspaceSetting, setOpenWorkspaceSetting] = useState(false);

  const [workspaceId, setWorkspaceId] = useState();

  const [workspace, setWorkspace] = useState();

  const [documentId, setdocumentId] = useState();

  const [deleteDocument, setDeleteDocument] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const secondhandleClick = (status) => {
    handleClick(status);
  };

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getAllWorkspace({
        no: no,
        size: size,
        asc: asc,
        desc: desc,
        sortbydatetime: sortbydatetime,
      })
    );
  }, [dispatch, no, size, asc, desc, sortbydatetime]);

  const handleGetDocumentInEachWorkspace = (workspaceId) => {
    // navigate(`/document/${workspaceId}`);
    console.log(workspaceId);
    dispatch(
      getAllDocumentInEachWorkspace({
        workspaceId,
        no: 1,
        size: 1000,
        sortbydatetime: "DEFAULT",
      })
    );
  };

  // const getAllDocumentInEachWorkspace = async (workspaceId) => {
  //   try {
  //     const response = await api.get(
  //       `documents/workspaces/${workspaceId}?pageNo=1&pageSize=1000&eSortCurrentDateTime=DEFAULT`,
  //       {
  //         headers: {
  //           Authorization: "Bearer " + localStorage.getItem("token"),
  //           "Content-Type ": "application/json",
  //         },
  //       }
  //     );
  //     setDocuments(response.data.payload);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const [documentData, setDocumentData] = useState();

  const handleCreatePage = async (documentId, workspaceId) => {
    const document = await createDocument(
      "Untitled",
      false,
      documentId,
      workspaceId
    );
    // setDocumentData(document);
    dispatch(createDocumentSuccess(document));
    navigate(
      `/createdocument/${document?.documentId}/${document?.workspaceId}`
    );
    toast.success("Create Document Successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleCreateDocument = async (workspaceId) => {
    const document = await createDocument("Untitled", false, null, workspaceId);
    dispatch(createDocumentSuccess(document));
    navigate(
      `/createdocument/${document?.documentId}/${document?.workspaceId}`
    );
    toast.success("Create Document Successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  function renderPages(pages, documentIndex) {
    return (
      <div>
        {pages.map((page, index) => (
          <AccordionBody className="py-0" key={index}>
            <List className="px-5 py-1">
              <ListItem
                className="p-0 hover:bg-gray-200"
                onMouseEnter={() =>
                  handleMouseEnter(index + documentIndex + 10000)
                }
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to={`/createdocument/${page?.documentId}/${page?.workspaceId}`}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center w-full gap-x-3 text-primary py-3 rounded-lg px-4 focus:text-primary focus:bg-gray-200 hover:text-primary "
                      : "flex items-center w-full gap-x-3 py-3 text-accent rounded-lg px-4 focus:text-accent hover:text-accent"
                  }
                  style={{ textDecoration: "none" }}
                >
                  <div className="flex gap-x-2">
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
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <path d="M13 2v7h7"></path>
                    </svg>
                    <p className="font-semibold text-18px line-clamp-1">
                      {page?.title}
                    </p>
                  </div>
                </NavLink>
                {index + documentIndex + 10000 === hoveredIndex && (
                  <div className="flex gap-x-2 mr-2">
                    <Menu placement="right-start">
                      <MenuHandler>
                        <button
                          type="submit"
                          className="hover:bg-gray-300 rounded-sm p-[1px]"
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
                            <path d="M12 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                            <path d="M19 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                            <path d="M5 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                          </svg>
                        </button>
                      </MenuHandler>
                      <MenuList className="p-2 w-44 z-50 rounded-lg space-y-1">
                        <MenuItem className="flex items-center gap-x-3 p-3 hover:bg-gray-200 rounded-md">
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="#1E9CEF"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                          </svg>
                          <p className="text-16px">Rename</p>
                        </MenuItem>
                        <MenuItem
                          className="flex items-center gap-x-3 p-3 hover:bg-gray-200 rounded-lg"
                          onClick={() => {
                            setDeleteDocument(!deleteDocument);
                            setdocumentId(page?.documentId);
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            fill="none"
                            stroke="#f44336"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <path d="M14 2v6h6"></path>
                            <path d="M9 15h6"></path>
                          </svg>

                          <p className="text-16px text-red-500">Delete</p>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                )}
              </ListItem>
            </List>
          </AccordionBody>
        ))}
      </div>
    );
  }

  function renderDocuments(documents) {
    return (
      <div>
        {documents &&
          documents.map((document, index) =>
            document?.pageId === null ? (
              <AccordionBody className="py-0" key={index}>
                <List className="px-2 py-1">
                  <ListItem
                    className="p-0 hover:bg-gray-200"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to={`/createdocument/${document?.documentId}/${document?.workspaceId}`}
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center w-full gap-x-3 text-primary py-3 rounded-lg px-4 focus:text-primary focus:bg-gray-200 hover:text-primary "
                          : "flex items-center w-full gap-x-3 py-3 text-accent rounded-lg px-4 focus:text-accent hover:text-accent"
                      }
                      style={{ textDecoration: "none" }}
                    >
                      <div className="flex gap-x-2">
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
                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                          <path d="M13 2v7h7"></path>
                        </svg>
                        <p className="font-semibold text-18px line-clamp-1">
                          {document?.title}
                        </p>
                      </div>
                    </NavLink>
                    {index === hoveredIndex && (
                      <div className="flex gap-x-2 mr-2">
                        <Menu placement="right-start">
                          <MenuHandler>
                            <button
                              type="submit"
                              className="hover:bg-gray-300 rounded-sm p-[1px]"
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
                                <path d="M12 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                                <path d="M19 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                                <path d="M5 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                              </svg>
                            </button>
                          </MenuHandler>
                          <MenuList className="p-2 w-44 z-50 rounded-lg space-y-1">
                            <MenuItem className="flex items-center gap-x-3 p-3 hover:bg-gray-200 rounded-md">
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                stroke="#1E9CEF"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                              <p className="text-16px">Rename</p>
                            </MenuItem>
                            <MenuItem
                              className="flex items-center gap-x-3 p-3 hover:bg-gray-200 rounded-lg"
                              onClick={() => {
                                setDeleteDocument(!deleteDocument);
                                setdocumentId(document?.documentId);
                              }}
                            >
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                stroke="#f44336"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <path d="M14 2v6h6"></path>
                                <path d="M9 15h6"></path>
                              </svg>

                              <p className="text-16px text-red-500">Delete</p>
                            </MenuItem>
                          </MenuList>
                        </Menu>
                        <button
                          type="button"
                          className="hover:bg-gray-300 rounded-sm p-[1px]"
                          onClick={() => {
                            handleClick(true);
                            handleCreatePage(
                              document?.documentId,
                              document?.workspaceId
                            );
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
                            <path d="M12 5v14"></path>
                            <path d="M5 12h14"></path>
                          </svg>
                        </button>
                      </div>
                    )}
                  </ListItem>
                </List>
                {document?.pages && renderPages(document?.pages, index)}
              </AccordionBody>
            ) : null
          )}
      </div>
    );
  }

  return (
    <Card className="fixed h-screen w-[18rem] p-6 md:w-[13rem] z-0">
      {/* Close Button */}
      <div className="hidden lg:flex lg:right-0 lg:-mt-5 items-end">
        <div className="hidden lg:inline-block ">
          <button type="button" onClick={() => setSideBar(!sideBar)}>
            <img src={close} className="w-8  lg:absolute lg:top-5 lg:right-5 md:w-5" />
          </button>
        </div>
      </div>

      <div className="p-4 flex justify-center">
        <NavLink
          style={{ textDecoration: "none" }}
          to={`/dashboard`}
          className="flex flex-col justify-center items-center md:mt-1"
        >
          <img src={logo} className="w-24 h-24 md:w-20 md:h-20" />
        </NavLink>
      </div>
      <List className="p-0 space-y-2 mt-2">
        <div className="text-18px text-gray-400 md:text-16px">DASHBOARD</div>
        <Button
          className="bg-primary rounded-lg p-3 shadow-none font-semibold flex items-center justify-center gap-x-2 md:text-14px md:gap-x-1.5"
          onClick={() => {
            setVisible(!visible);
            handleClick(true);
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
            <path d="M12 5v14"></path>
            <path d="M5 12h14"></path>
          </svg>
          New Workspace
        </Button>
        <CreateWorkspaceModal
          visible={visible}
          setVisible={setVisible}
          secondhandleClick={secondhandleClick}
        />
        <ListItem className="p-0">
          <NavLink
            style={{ textDecoration: "none" }}
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center w-full gap-x-3 text-primary bg-[#EFEFEF] py-3 rounded-lg px-4 focus:text-primary hover:text-primary focus:bg-gray-200"
                : "flex items-center w-full gap-x-3 py-3 rounded-lg text-accent px-4 focus:text-accent hover:text-accent hover:bg-gray-200"
            }
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
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <path d="M9 22V12h6v10"></path>
            </svg>
            <p className="font-semibold text-18px">Home</p>
          </NavLink>
        </ListItem>
        <ListItem className="p-0">
          <NavLink
            style={{ textDecoration: "none" }}
            to={"/workspace"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center w-full gap-x-3 text-primary bg-[#EFEFEF] py-3 rounded-lg px-4 focus:text-primary hover:text-primary focus:bg-gray-200"
                : "flex items-center w-full gap-x-3 py-3 text-accent rounded-lg px-4 focus:text-accent hover:text-accent hover:bg-gray-200"
            }
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33333 10.8333H3.33333C3.11232 10.8333 2.90036 10.9211 2.74408 11.0774C2.5878 11.2337 2.5 11.4457 2.5 11.6667V16.6667C2.5 16.8877 2.5878 17.0996 2.74408 17.2559C2.90036 17.4122 3.11232 17.5 3.33333 17.5H8.33333C8.55435 17.5 8.76631 17.4122 8.92259 17.2559C9.07887 17.0996 9.16667 16.8877 9.16667 16.6667V11.6667C9.16667 11.4457 9.07887 11.2337 8.92259 11.0774C8.76631 10.9211 8.55435 10.8333 8.33333 10.8333ZM7.5 15.8333H4.16667V12.5H7.5V15.8333ZM16.6667 2.5H11.6667C11.4457 2.5 11.2337 2.5878 11.0774 2.74408C10.9211 2.90036 10.8333 3.11232 10.8333 3.33333V8.33333C10.8333 8.55435 10.9211 8.76631 11.0774 8.92259C11.2337 9.07887 11.4457 9.16667 11.6667 9.16667H16.6667C16.8877 9.16667 17.0996 9.07887 17.2559 8.92259C17.4122 8.76631 17.5 8.55435 17.5 8.33333V3.33333C17.5 3.11232 17.4122 2.90036 17.2559 2.74408C17.0996 2.5878 16.8877 2.5 16.6667 2.5ZM15.8333 7.5H12.5V4.16667H15.8333V7.5ZM16.6667 13.3333H15V11.6667C15 11.4457 14.9122 11.2337 14.7559 11.0774C14.5996 10.9211 14.3877 10.8333 14.1667 10.8333C13.9457 10.8333 13.7337 10.9211 13.5774 11.0774C13.4211 11.2337 13.3333 11.4457 13.3333 11.6667V13.3333H11.6667C11.4457 13.3333 11.2337 13.4211 11.0774 13.5774C10.9211 13.7337 10.8333 13.9457 10.8333 14.1667C10.8333 14.3877 10.9211 14.5996 11.0774 14.7559C11.2337 14.9122 11.4457 15 11.6667 15H13.3333V16.6667C13.3333 16.8877 13.4211 17.0996 13.5774 17.2559C13.7337 17.4122 13.9457 17.5 14.1667 17.5C14.3877 17.5 14.5996 17.4122 14.7559 17.2559C14.9122 17.0996 15 16.8877 15 16.6667V15H16.6667C16.8877 15 17.0996 14.9122 17.2559 14.7559C17.4122 14.5996 17.5 14.3877 17.5 14.1667C17.5 13.9457 17.4122 13.7337 17.2559 13.5774C17.0996 13.4211 16.8877 13.3333 16.6667 13.3333ZM8.33333 2.5H3.33333C3.11232 2.5 2.90036 2.5878 2.74408 2.74408C2.5878 2.90036 2.5 3.11232 2.5 3.33333V8.33333C2.5 8.55435 2.5878 8.76631 2.74408 8.92259C2.90036 9.07887 3.11232 9.16667 3.33333 9.16667H8.33333C8.55435 9.16667 8.76631 9.07887 8.92259 8.92259C9.07887 8.76631 9.16667 8.55435 9.16667 8.33333V3.33333C9.16667 3.11232 9.07887 2.90036 8.92259 2.74408C8.76631 2.5878 8.55435 2.5 8.33333 2.5ZM7.5 7.5H4.16667V4.16667H7.5V7.5Z"
                fill="currentColor"
              />
            </svg>

            <p className="font-semibold text-18px">Workspaces</p>
          </NavLink>
        </ListItem>
        <hr className="my-2 border-blue-gray-50" />
        <div className="text-18px text-gray-400 md:text-16px">WORKSPACE</div>
        {workspaces && workspaces.length > 0 ? (
          workspaces &&
          workspaces.map((workspace, index) => (
            <Accordion
              key={index}
              open={open === index + 1}
              onClick={
                () => handleGetDocumentInEachWorkspace(workspace?.workspaceId)
                // getAllDocumentInEachWorkspace(workspace?.workspaceId)
              }
            >
              <ListItem className="p-0" selected={open === index + 1}>
                <ChevronDownIcon
                  strokeWidth={5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === index + 1 ? "rotate-180" : ""
                  }`}
                />
                <AccordionHeader
                  onClick={() => handleOpen(index + 1)}
                  className="border-b-0 px-3 py-2"
                >
                  <p className="font-semibold text-18px text-accent line-clamp-1">
                    {workspace.workspaceName}
                  </p>
                </AccordionHeader>
                <div className="flex gap-x-2 mr-2">
                  <Menu placement="right-start">
                    <MenuHandler>
                      <button
                        type="button"
                        className="hover:bg-gray-300 rounded-sm p-[1px]"
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
                          <path d="M12 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                          <path d="M19 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                          <path d="M5 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
                        </svg>
                      </button>
                    </MenuHandler>
                    <MenuList className="p-2 w-44 z-50 rounded-lg space-y-1">
                      <MenuItem
                        className="flex items-center gap-x-3 p-3 hover:bg-gray-200 rounded-md"
                        onClick={() => {
                          setOpenWorkspaceSetting(!openWorkspaceSetting);
                          setWorkspace(workspace);
                        }}
                      >
                        <img src={setting} className="w-6 h-6" />
                        <p className="text-16px">Setting</p>
                      </MenuItem>
                      <MenuItem
                        className="flex items-center gap-x-3 p-3 hover:bg-gray-200 rounded-lg"
                        onClick={() => {
                          setRemoveWorkspace(!removeWorkspace);
                          setWorkspaceId(workspace?.workspaceId);
                        }}
                      >
                        <img src={trush} className="w-5 h-5" />
                        <p className="text-16px text-red-500">Remove</p>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  <button
                    type="button"
                    className="hover:bg-gray-300 rounded-sm p-[1px]"
                    onClick={() => {
                      handleCreateDocument(workspace?.workspaceId);
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
                      <path d="M12 5v14"></path>
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                </div>
              </ListItem>
              {documents && renderDocuments(documents)}
            </Accordion>
          ))
        ) : (
          <div className="absolute bottom-[30%] left-[30%]">
            <div className="flex flex-col items-center justify-center gap-y-1">
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
              <p className="font-semibold text-accent text-base md:text-sm">
                No Workspace
              </p>
            </div>
          </div>
        )}
      </List>
      {/* <CreatePageModal
        // documentData={documentData}
        visiblePage={visiblePage}
        setVisiblePage={setVisiblePage}
        secondhandleClick={secondhandleClick}
      /> */}
      <RemoveWorkspaceModal
        removeWorkspace={removeWorkspace}
        setRemoveWorkspace={setRemoveWorkspace}
        workspaceId={workspaceId}
      />
      <WorkspaceSettingModal
        openWorkspaceSetting={openWorkspaceSetting}
        setOpenWorkspaceSetting={setOpenWorkspaceSetting}
        workspace={workspace}
      />
      <DeleteDocumentModal
        deleteDocument={deleteDocument}
        setDeleteDocument={setDeleteDocument}
        documentId={documentId}
      />
    </Card>
  );
};