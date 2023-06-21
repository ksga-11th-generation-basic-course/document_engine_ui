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
import { DropDownDocument } from "../../components/DropDownDocument";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-daisyui";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { duplicateDocument, getMemberInEachDocument } from "../../redux/service/documentService/documentService";
import { duplicateDocumentSuccess } from "../../redux/slice/documentSlice/documentSlice";

export const DocumentCard = ({ document,workspaceId }) => {
  const navigate = useNavigate();
  const [openPermission, setOpenPermission] = useState(false);
  const [openDocumentHistory, setOpenDocumentHistory] = useState(false);
  const [deleteDocument, setDeleteDocument] = useState(false);
  const [documentId, setdocumentId] = useState();
  const members = useSelector((state) => state.document.members);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMemberInEachDocument(document.documentId))
  }, []);

  const handleNavigate = () => {
    setTimeout(()=>{
      navigate(`/createdocument/${document.documentId}`);
    },1000)
  };

  const handleRemoveDocument = () => {
    setDeleteDocument(!deleteDocument);
    setdocumentId(document.documentId);
  };
  const handleDuplicateDocument=async()=>{
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
  }

  const viewPage=()=>{
    navigate(`/createdocument/${document.documentId}`);
  }


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
          <p className="text-sm h-[120px]">
          </p>
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
            <Dropdown className="dropdown-right">
              <Dropdown.Toggle>
                <img src={dotmenu} />
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-60 bg-white rounded-lg text-base">
                <Dropdown.Item onClick={viewPage}>
                  <img src={view} />
                  <span>View page</span>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setOpenPermission(!openPermission)}>
                  <img src={permission} />
                  <span>Permission</span>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setOpenDocumentHistory(!openDocumentHistory)}>
                  <img src={history} />
                  <span>Document History</span>
                </Dropdown.Item>
                <Dropdown.Item onClick={handleDuplicateDocument}>
                  <img src={duplicate} />
                  <span>Duplicate </span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <img src={file} />
                  <span> Export file</span>
                </Dropdown.Item>
                <Dropdown.Item onClick={handleRemoveDocument}>
                  <img src={delet} />
                  <span>Delete</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <DocumentPermissionModal
          openPermission={openPermission}
          setOpenPermission={setOpenPermission}
          documentId={document.documentId}
          workspaceId={workspaceId}
          members={members}
        />
        <DocumentHistoryModal
          documentId={document.documentId}
          openDocumentHistory={openDocumentHistory}
          setOpenDocumentHistory={setOpenDocumentHistory}
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
