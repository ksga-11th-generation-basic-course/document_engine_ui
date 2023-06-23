import React, { useEffect, useState } from "react";
import dotmenu from "../../assets/dashboard_image/dotmenu.png";
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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  duplicateDocument,
  getMemberInEachDocument,
} from "../../redux/service/documentService/documentService";
import { duplicateDocumentSuccess } from "../../redux/slice/documentSlice/documentSlice";
import { ButtonToolbar, Dropdown } from "rsuite";
import { saveAs } from "file-saver";
import FileSaver from "file-saver";
// import HtmlDocx from 'html-docx-js';
import ReactMarkdown from "react-markdown";

export const DocumentCard = ({ document, workspaceId }) => {
  const navigate = useNavigate();
  const [openPermission, setOpenPermission] = useState(false);
  const [openDocumentHistory, setOpenDocumentHistory] = useState(false);
  const [deleteDocument, setDeleteDocument] = useState(false);
  const [documentId, setdocumentId] = useState();
  const { members } = useSelector((state) => state.document);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMemberInEachDocument(document.documentId));
  }, []);

  const handleNavigate = () => {
    setTimeout(() => {
      navigate(`/createdocument/${document.documentId}/${workspaceId}`);
    }, 1000);
  };

  const handleRemoveDocument = () => {
    setDeleteDocument(!deleteDocument);
    setdocumentId(document?.documentId);
    // console.log(document.documentId);
  };
  const handleHistory = () => {
    setOpenPermission(!openPermission);
    // setdocumentId(document?.documentId);
    // console.log(document.documentId);
  };
  const handleDuplicateDocument = async () => {
    const duplicate = await duplicateDocument(document.documentId);
    dispatch(duplicateDocumentSuccess(duplicate));
    toast.success("Duplicate Document Successfully", {
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

  const viewPage = () => {
    navigate(`/createdocument/${document.documentId}`);
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
    <div className="shadow-md rounded-lg text-black cursor-pointer border-[1px] p-4 space-y-3">
      <div onClick={handleNavigate}>
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-20px">{document.title}</h4>
          {document.status ? (
            <div className="flex text-primary gap-x-1 px-3 justify-center rounded-2xl bg-[#EDF9FF]">
              <p className="text-14px 2xl:text-12px">Editing...</p>
              <img src={pencil} className="w-3 h-3" />
            </div>
          ) : null}
        </div>
        <div>
          <h3 className="font-semibold">{document.title}</h3>
          <p className="text-sm h-[120px]"></p>
        </div>
      </div>
      <div className="border-[1px]"></div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-22px text-primary">{document.title}</h3>
          <p className="text-14px font-semibold text-accent">
            Edited <span>{document.editDate}</span>
          </p>
        </div>
        <div className="relative">
          <div className="relative">
            <ButtonToolbar>
              <Dropdown className="p-2"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5"
                    height="16"
                    viewBox="0 0 5 16"
                    fill="none"
                  >
                    <path
                      d="M1.79199 2C1.79199 2.55228 2.23971 3 2.79199 3C3.34428 3 3.79199 2.55228 3.79199 2C3.79199 1.44772 3.34428 1 2.79199 1C2.23971 1 1.79199 1.44772 1.79199 2Z"
                      stroke="#526581"
                      stroke-width="2"
                    />
                    <path
                      d="M1.79199 8C1.79199 8.55228 2.23971 9 2.79199 9C3.34428 9 3.79199 8.55228 3.79199 8C3.79199 7.44772 3.34428 7 2.79199 7C2.23971 7 1.79199 7.44772 1.79199 8Z"
                      stroke="#526581"
                      stroke-width="2"
                    />
                    <path
                      d="M1.79199 14C1.79199 14.5523 2.23971 15 2.79199 15C3.34428 15 3.79199 14.5523 3.79199 14C3.79199 13.4477 3.34428 13 2.79199 13C2.23971 13 1.79199 13.4477 1.79199 14Z"
                      stroke="#526581"
                      stroke-width="2"
                    />
                  </svg>
                }
                noCaret
              >
                <Dropdown.Item
                  onClick={viewPage}
                  eventKey="a"
                  className="flex gap-x-3 w-52 hover:rounded-lg font-semibold"
                >
                  <img src={view} />
                  <span>View page</span>
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="b"
                  onClick={() => setOpenPermission(!openPermission)}
                  className="flex gap-x-3 hover:rounded-lg font-semibold"
                >
                  <img src={permission} />
                  <span>Permission</span>
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="c"
                  onClick={() => setOpenDocumentHistory(!openDocumentHistory)}
                  className="flex gap-x-3 p-2.5 hover:rounded-lg font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="23"
                    viewBox="0 0 26 23"
                    fill="none"
                  >
                    <path
                      d="M0.887053 9.24006C-0.00902021 9.24006 -0.238783 9.88575 0.255206 10.5426L3.03534 14.2831C3.42593 14.8063 4.02331 14.7952 4.40241 14.2831L7.18254 10.5314C7.65355 9.89689 7.43528 9.24006 6.55069 9.24006H4.88491C5.91885 5.22118 9.65249 2.27105 14.1328 2.27105C19.4175 2.27105 23.6681 6.37898 23.6681 11.5C23.6681 16.621 19.4175 20.7511 14.1328 20.7401C11.0425 20.7288 8.34284 19.3262 6.61963 17.1219C6.1601 16.5987 5.4823 16.4318 4.93088 16.8213C4.40241 17.1887 4.29902 17.9012 4.8045 18.4912C6.9298 21.1853 10.4107 23 14.1328 23C20.6352 23 26 17.801 26 11.5C26 5.21006 20.6352 0 14.1328 0C8.43475 0 3.59825 3.9966 2.50687 9.24006H0.887053ZM13.7078 5.04307C13.1449 5.04307 12.7083 5.47724 12.7083 6.01161V12.0677C12.7083 12.3238 12.8002 12.5687 12.9955 12.8248L15.7412 16.3314C16.1433 16.8547 16.7407 16.9438 17.2346 16.5987C17.7057 16.287 17.7401 15.697 17.3726 15.2183L14.7073 11.7338V6.01161C14.7073 5.47724 14.2592 5.04307 13.7078 5.04307Z"
                      fill="#1E9CEF"
                    />
                  </svg>
                  <span>Document History</span>
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={handleDuplicateDocument}
                  eventKey="c"
                  className="flex gap-x-3 hover:rounded-lg font-semibold"
                >
                  <img src={duplicate} />
                  <span>Duplicate </span>
                </Dropdown.Item>
                <Dropdown.Menu
                  className="flex gap-x-3 w-40 hover:rounded-lg font-semibold"
                  title="Export File"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                    >
                      <path
                        d="M7.65039 4.68801L10.8503 1.5L14.0503 4.68801"
                        stroke="#1E9CEF"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.8496 14.2524V1.58752"
                        stroke="#1E9CEF"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 11.5375C1 17.0418 4.75 21.5 11 21.5C17.25 21.5 21 17.0418 21 11.5375"
                        stroke="#1E9CEF"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                >
                  <Dropdown.Item
                    eventKey="e-1"
                    onClick={handleExport}
                    className="flex gap-x-4 hover:rounded-lg font-semibold"
                  >
                    <img src={file} />
                    Export as .doc
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="e-2"
                    onClick={exportMarkdown}
                    className="flex gap-x-4 hover:rounded-lg font-semibold"
                  >
                    <img src={file} /> Export as .md
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="d"
                    onClick={() => exportHTML()}
                    className="flex gap-x-4 hover:rounded-lg font-semibold" 
                  >
                    <img src={file} />
                    Export as .html
                  </Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Item
                  onClick={handleRemoveDocument}
                  eventKey="c"
                  className="flex gap-x-3 hover:rounded-lg font-semibold"
                >
                  <img src={delet} />
                  <span>Delete</span>
                </Dropdown.Item>
              </Dropdown>
            </ButtonToolbar>
          </div>
          <DocumentPermissionModal
            openPermission={openPermission}
            setOpenPermission={setOpenPermission}
            documentId={document.documentId}
            workspaceId={workspaceId}
            members={members}
          />
          <DocumentHistoryModal
            openDocumentHistory={openDocumentHistory}
            setOpenDocumentHistory={setOpenDocumentHistory}
            documentId={document.documentId}
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
    </div>
  );
};
