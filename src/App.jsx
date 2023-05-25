import { useState } from "react";
import CloseAccountPopup from "./pop-up/CloseAccountPopup.jsx";
import CreateWorkSpacePopup from "./pop-up/CreateWorkSpacePopup.jsx";
import DeleteWorkSpacePopup from "./pop-up/DeleteDocumentPopup.jsx";
import DeleteProfilePhotoPopup from "./pop-up/DeleteProfilePhotoPopup.jsx";
import DeleteWorkspacePhotoPopup from "./pop-up/DeleteWorkspacePhotoPopup.jsx";
import JoinWorkspacePopup from "./pop-up/JoinWorkspacePopup.jsx";
import LeaveFromWorkpacePopup from "./pop-up/LeaveFromWorkpacePopup.jsx";
import RemoveMemberPopup from "./pop-up/RemoveMemberPopup.jsx";
import RemoveWorkspacePopup from "./pop-up/RemoveWorkspacePopup.jsx";
import ResetPasswordPopup from "./pop-up/ResetPasswordPopup.jsx";
import SignOutPopup from "./pop-up/SignOutPopup.jsx";
import MessageSucessPopUp from "./pop-up/MessageSucessPopUp.jsx";
// import WorkspaceCallaboratorMember from "./pop-up/WorkspaceCallaboratorMember.jsx";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App font-ssp">
      <button type="button" onClick={() => setOpen(true)}>
        Open
      </button>
      {/* {open ? <CloseAccountPopup open={open} setOpen={setOpen}/> : null} */}
      {/* {open ? <CreateWorkSpacePopup open={open} setOpen={setOpen}/> : null} */}
      {/* {open ? <DeleteWorkSpacePopup open={open} setOpen={setOpen}/> : null} */}
      {/* {open ? <DeleteProfilePhotoPopup open={open} setOpen={setOpen}/> : null} */}
      {/* {open ? <DeleteWorkspacePhotoPopup open={open} setOpen={setOpen}/> : null} */}
      {/* {open ? <JoinWorkspacePopup open={open} setOpen={setOpen}/> : null} */}
      {/* {open ? <LeaveFromWorkpacePopup open={open} setOpen={setOpen}/> : null} */}
      {/* {open ? <RemoveMemberPopup open={open} setOpen={setOpen}/> : null} */}
      {/* {open ? <RemoveWorkspacePopup open={open} setOpen={setOpen}/> : null} */}
      {/* {open ? <ResetPasswordPopup open={open} setOpen={setOpen}/> : null} */}
      {/* {open ? <SignOutPopup open={open} setOpen={setOpen}/> : null} */}
      {open ? <MessageSucessPopUp open={open} setOpen={setOpen}/> : null}
      {/* {open ? <WorkspaceCallaboratorMember open={open} setOpen={setOpen}/> : null} */}
    </div>
  );
}

export default App;
