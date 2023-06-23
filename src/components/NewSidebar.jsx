import { Sidenav, Nav, Toggle } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import PeoplesIcon from "@rsuite/icons/Peoples";
import PeopleBranchIcon from "@rsuite/icons/PeopleBranch";
import PageIcon from "@rsuite/icons/Page";
import ExpandOutlineIcon from "@rsuite/icons/ExpandOutline";
import React, { useEffect, useState } from "react";
import logo from "../assets/landing_image/logo.svg";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { CreateWorkspaceModal } from "../modal/CreateWorkspaceModal";
import documentIcon from "../assets/document_image/documents.svg";
import dropdowndocument from "../assets/document_image/dropdowndocuments.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  createDocument,
  getAllDocumentInEachWorkspace,
} from "../redux/service/documentService/documentService";
import { getWorkspaceByWorkspaceId } from "../redux/service/workspaceService/workspaceService";
import plus from "../assets/document_image/plus.svg";
import { createDocumentSuccess } from "../redux/slice/documentSlice/documentSlice";

export const NewSidebar = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };

  const param = useParams();

  const documents = useSelector((state) => state.document.documents);

  console.log(documents);

  const workspace = useSelector((state) => state.workspace.workspace);

  const [no, setNo] = useState(1);

  const [size, setSize] = useState(1000);

  const [sortbydatetime, setSortbydatetime] = useState("DEFAULT");

  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  let workspaceId = param?.workspaceId;

  useEffect(() => {
    dispatch(getWorkspaceByWorkspaceId(param.workspaceId));
    dispatch(
      getAllDocumentInEachWorkspace({ workspaceId, no, size, sortbydatetime })
    );
  }, [dispatch, no, size, sortbydatetime]);

  // console.log(documents);

  const handleCreatePage = async (documentId) => {
    const now = new Date();
    const currentDateTime = now.toISOString();
    const response = await createDocument(
      "Untitled",
      true,
      currentDateTime,
      documentId,
      param.workspaceId
    );
    dispatch(createDocumentSuccess(response));
  };

  const handleDocumentClick = (documentId, workspaceId) => {
    navigate(`/createdocument/${documentId}/${workspaceId}`, { replace: true });
    // window.location.reload();
  };

  const panelStyles = {
    padding: "15px 85px",
  };

  function renderSubpages(pages, level = 1, documentIndex) {
    // console.log(documentIndex)
    return (
      <div style={{ marginLeft: `${level}px` }}>
        {pages.map((page, pageIndex) => (
          <div key={pageIndex}>
            <div>
              <Nav.Item
                style={panelStyles}
                key={pageIndex}
                eventKey={`4-${documentIndex + 1}-${pageIndex + 1}`}
                icon={<PageIcon style={{ width: "21px", height: "21px" }} />}
                className="hover:rounded-lg text-accent font-semibold text-15px flex items-center relative"
                onClick={() =>
                  handleDocumentClick(page.documentId, page.workspaceId)
                }
              >
                {page?.title}
                {/* <div>
                <ExpandOutlineIcon
                  style={{ width: "21px", height: "21px" }}
                  className="absolute right-5 top-4"
                  onClick={() => handleCreatePage(page?.documentId)}
                />
              </div> */}
              </Nav.Item>
              {page.pages && renderSubpages(page.pages, level + 1)}
            </div>
          </div>
        ))}
      </div>
    );
  }

  function renderPages(documents) {
    return (
      <div>
        {documents.map((document, documentIndex) => (
          <div key={documentIndex}>
            {document?.pageId === null ? (
              <div>
                <Nav.Item
                  key={documentIndex}
                  eventKey={`3-${documentIndex + 1}`}
                  icon={<PageIcon style={{ width: "21px", height: "21px" }} />}
                  className="hover:rounded-lg text-accent font-semibold text-15px flex items-center relative"
                  onClick={() =>
                    handleDocumentClick(
                      document.documentId,
                      document.workspaceId
                    )
                  }
                >
                  {document?.title}
                  <div>
                    <ExpandOutlineIcon
                      style={{ width: "21px", height: "21px" }}
                      className="absolute right-5 top-4"
                      onClick={() => handleCreatePage(document?.documentId)}
                    />
                  </div>
                </Nav.Item>
                {document.pages &&
                  renderSubpages(document.pages, documentIndex)}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAF9] flex items-center flex-col p-4 gap-y-1 h-screen">
      {/* <Toggle
        onChange={setExpanded}
        checked={expanded}
        checkedChildren="Expand"
        unCheckedChildren="Collapse"
      /> */}
      <Link to={`/dashboard`} className="p-5">
        <img src={logo} className="w-24 h-24" />
      </Link>
      <CreateWorkspaceModal visible={visible} setVisible={setVisible} />
      <div className="bg-gray-200 w-full h-[1px] m-2"></div>
      <Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item
              eventKey="1"
              icon={<DashboardIcon style={{ width: "24px", height: "24px" }} />}
              className="hover:rounded-lg text-accent font-semibold"
              onClick={() => navigate(`/dashboard`)}
            >
              Home
            </Nav.Item>
            <Nav.Item
              eventKey="2"
              icon={<PeoplesIcon style={{ width: "21px", height: "21px" }} />}
              className="hover:rounded-lg text-accent font-semibold"
              onClick={() => navigate(`/workspace`)}
            >
              Workspace
            </Nav.Item>
            {param.workspaceId && (
              <Nav.Menu
                placement="rightStart"
                eventKey="3"
                title={workspace?.workspaceName}
                icon={
                  <PeopleBranchIcon style={{ width: "21px", height: "21px" }} />
                }
                className="text-accent font-semibold"
              >
                {/* {documents &&
                  documents.map((document, index) => (
                    <div>
                      <Nav.Item
                        key={index}
                        eventKey={`3-${index + 1}`}
                        icon={
                          <PageIcon style={{ width: "21px", height: "21px" }} />
                        }
                        className="hover:rounded-lg text-accent font-semibold text-15px flex items-center relative"
                        onClick={() =>
                          handleDocumentClick(
                            document.documentId,
                            document.workspaceId
                          )
                        }
                      >
                        {document?.title}
                        <div>
                          <ExpandOutlineIcon
                            style={{ width: "21px", height: "21px" }}
                            className="absolute right-5 top-4"
                            onClick={() =>
                              handleCreatePage(document?.documentId)
                            }
                          />
                        </div>
                      </Nav.Item>
                      {document.pages && renderSubpages(document.pages)}
                    </div>
                  ))} */}
                {documents && renderPages(documents)}
              </Nav.Menu>
            )}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};
