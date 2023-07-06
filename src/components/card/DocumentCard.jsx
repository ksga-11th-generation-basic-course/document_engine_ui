import React, { useEffect, useState } from "react";
import dotmenu from "../../assets/workspace_image/dotmenu.svg";
import pencil from "../../assets/dashboard_image/pencil.svg";
import view from "../../assets/dashboard_image/view.png";
import permission from "../../assets/dashboard_image/permission.png";
import history from "../../assets/dashboard_image/history.png";
import duplicate from "../../assets/dashboard_image/duplicate.png";
import file from "../../assets/dashboard_image/file.png";
import delet from "../../assets/dashboard_image/document.png";
import { DocumentPermissionModal } from "../../modal/DocumentPermissionModal";
import { DocumentHistoryModal } from "../../modal/DocumentHistoryModal";
import { DeleteDocumentModal } from "../../modal/DeleteDocumentModal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  duplicateDocument,
  setCurrentEditing,
} from "../../redux/service/documentService/documentService";
import { duplicateDocumentSuccess } from "../../redux/slice/documentSlice/documentSlice";
import { saveAs } from "file-saver";
import FileSaver from "file-saver";
import download from "../../assets/document_image/download.svg";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { getBlockBydoucmentId } from "../../redux/service/blockService/blockService";

export const DocumentCard = ({ document, workspaceId }) => {
  const navigate = useNavigate();
  const [openPermission, setOpenPermission] = useState(false);
  const [openDocumentHistory, setOpenDocumentHistory] = useState(false);
  const [deleteDocument, setDeleteDocument] = useState(false);
  const [documentId, setdocumentId] = useState();
  const dispatch = useDispatch();

  const blockData = useSelector((state) => state.block.blocks);

  const handleExportFile = (documentId) => {
    // console.log(documentId);
    dispatch(getBlockBydoucmentId(documentId));
  };

  const handleNavigate = () => {
    navigate(
      `/createdocument/${document?.documentId}/${document?.workspaceId}`
    );
  };

  const handleRemoveDocument = () => {
    setDeleteDocument(!deleteDocument);
    setdocumentId(document?.documentId);
  };

  const handleDuplicateDocument = async () => {
    const duplicate = await duplicateDocument(document.documentId);
    dispatch(duplicateDocumentSuccess(duplicate));
    toast.success("Duplicate Document Successfully", {
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

  const hanleDocumentHistory = (id) => {
    setdocumentId(id);
    setOpenDocumentHistory(!openDocumentHistory);
  };

  const viewPage = () => {
    dispatch(
      setCurrentEditing({ documentId: document?.documentId, status: false })
    );
    navigate(`/createdocument/${document?.documentId}/${workspaceId}`);
  };

  const handleExport = () => {
    const blob = new Blob([blockData], { type: "application/msword" });
    saveAs(blob, "example.doc");
  };
  const exportMarkdown = (markdown) => {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    FileSaver.saveAs(blob, "document.md");
  };
  const exportHTML = () => {
    const htmlContent = "<html><body><h1>Hello World!</h1></body></html>";
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "example.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="shadow-md rounded-lg text-black cursor-pointer border-[1px] p-1 flex relative lg:w-[280px] md:w-[320px] md:h-32 md:-ml-1">
      <div onClick={handleNavigate} className="w-full p-3 ">
        <div className="flex justify-between items-center ">
          {/* <h4 className="font-semibold text-20px">{document.title}</h4> */}
          {document.status ? (
            <div className="flex text-primary gap-x-1 px-3 justify-center rounded-2xl bg-[#EDF9FF] absolute right-2 top-3 ">
              <p className="text-14px 2xl:text-12px">Editing...</p>
              <img src={pencil} className="w-3 h-3" />
            </div>
          ) : null}
        </div>
        <div className="flex justify-between items-center">
          <div className="md:mt-4">
            <span className="font-bold text-22px text-primary flex gap-x-3">
              <svg
                className="mt-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
              >
                <path
                  d="M15.1368 6.4H9.2C8.97918 6.4 8.8 6.22082 8.8 6V0.0632031C8.65519 0.0232031 8.52 0 8.4 0H0.4C0.179219 0 0 0.179219 0 0.4V19.6C0 19.8208 0.179219 20 0.4 20H14.8C15.0208 20 15.2 19.8208 15.2 19.6V6.8C15.2 6.68 15.1768 6.5448 15.1368 6.4Z"
                  fill="#1E9CEF"
                />
                <path
                  d="M9.60059 0.411865V5.59987H14.7886C13.8246 3.84866 11.3518 1.37589 9.60059 0.411865Z"
                  fill="#1E9CEF"
                />
              </svg>
              <p className="line-clamp-1">{document.title}</p>
            </span>
            <span className="text-14px font-semibold leading-8 text-accent ">
              Edited {document.editDate > 0 ?
                <span className="ml-1">
                {document.editDate >= 60 ? Math.trunc(document.editDate/60) : document.editDate}  
                {document.editDate >= 120 ? " hours ago" : document.editDate >= 60 ? " hour ago"  : document.editDate > 1 ? " minutes ago" : " minute ago"}
                </span> : " Just Now"  
        }
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1 right-0 ">
        <div className="relative">
          <Menu placement="right-start">
            <MenuHandler>
              <button type="button" className="px-1 py-6">
                <img src={dotmenu} className="w-4 h-4" />
              </button>
            </MenuHandler>
            <MenuList className="text-accent rounded-lg space-y-1 p-2 w-56 font-ssp lg:z-40 md:z-40">
              <MenuItem
                className="hover:bg-gray-200 p-2 flex items-center gap-x-3"
                onClick={viewPage}
              >
                {" "}
                <img src={view} />
                <span className="text-18px">View page</span>
              </MenuItem>
              <MenuItem
                className="hover:bg-gray-200 p-2 flex items-center gap-x-3 "
                onClick={() => setOpenPermission(!openPermission)}
              >
                {" "}
                <img src={permission} />
                <span className="text-18px">Permission</span>
              </MenuItem>
              <MenuItem
                className="hover:bg-gray-200 p-2 flex items-center gap-x-3 "
                onClick={() => hanleDocumentHistory(document?.documentId)}
              >
                {" "}
                <img src={history} />
                <span className="text-18px ">Document History</span>
              </MenuItem>
              <Menu placement="right-start" offset={15}>
                <MenuHandler>
                  <MenuItem className="hover:bg-gray-200 p-2 flex items-center gap-x-3 lg:w-[400px] ">
                    {" "}
                    <img src={file} />
                    <span className="text-18px"> Export file</span>
                  </MenuItem>
                </MenuHandler>
                <MenuList className="text-accent rounded-lg space-y-1 p-2 w-36 lg:z-40 ">
                  <MenuItem
                    className="hover:bg-gray-200 p-2 flex items-center gap-x-3"
                    onClick={() => handleExportFile(document?.documentId)}
                  >
                    {" "}
                    <img src={download} />
                    <span className="text-18px">.doc</span>
                  </MenuItem>
                  <MenuItem className="hover:bg-gray-200 p-2 flex items-center gap-x-3">
                    {" "}
                    <img src={download} />
                    <span className="text-18px">.html</span>
                  </MenuItem>
                  <MenuItem className="hover:bg-gray-200 p-2 flex items-center gap-x-3">
                    {" "}
                    <img src={download} />
                    <span className="text-18px">.md</span>
                  </MenuItem>
                </MenuList>
              </Menu>
              <MenuItem
                className="hover:bg-gray-200 p-2 flex items-center gap-x-3"
                onClick={handleDuplicateDocument}
              >
                {" "}
                <img src={duplicate} />
                <span className="text-18px">Duplicate </span>
              </MenuItem>
              <MenuItem
                className="hover:bg-gray-200 p-2 flex items-center gap-x-3"
                onClick={handleRemoveDocument}
              >
                {" "}
                <img src={delet} />
                <span className="text-18px text-red-500">Delete</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <DocumentPermissionModal
          openPermission={openPermission}
          setOpenPermission={setOpenPermission}
          documentId={document?.documentId}
          workspaceId={document?.workspaceId}
        />
        <DocumentHistoryModal
          openDocumentHistory={openDocumentHistory}
          setOpenDocumentHistory={setOpenDocumentHistory}
          documentId={documentId}
        />
        <DeleteDocumentModal
          deleteDocument={deleteDocument}
          setDeleteDocument={setDeleteDocument}
          documentId={documentId}
        />
        {/* <button type="button" onClick={() => setOpen(!open)}>
        <img src={dotmenu} className="w-8 h-8" />
      </button>
      {open ? <DropDownDocument open={open} setOpen={setOpen} /> : null} */}
      </div>
    </div>
  );
};
