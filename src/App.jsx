import {BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUS.jsx";
import Forgot from "./pages/Forgot.jsx";
// import Navbar from "./pages/Navbar.jsx";
import VerifyAddress from "./pages/VerifyAddress.jsx";
import EnableAccount from "./pages/EnableAccount.jsx";
import SetNewPassWord from "./pages/SetNewPassWord.jsx";
import NotFound from "./pages/NotFound.jsx";
import MessageSucess from "./pop-up/MessageSucess.jsx";
import CloseAccount from "./pop-up/CloseAccount.jsx";
import RemoveMember from "./pop-up/RemoveMember.jsx";
import DeleteWorkspace from "./pop-up/DeleteWorkspace.jsx";
import RemoveWorkspace from "./pop-up/RemoveWorkspace.jsx";
import LeaveWorkspace from "./pop-up/LeaveWorkspace.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Workspace from "./pages/Workspace.jsx";
import WorkspaceOption from "./components/dropdowns/WorkspaceOption.jsx";
import DocumentOption from "./components/dropdowns/DocumentOption.jsx";
import Tips from "./components/dropdowns/Tips.jsx";
import { ProfilePopup } from "./pop-up/ProfilePopup.jsx";


// import DashBoardLeft from "./dashboard/DashBoardLeft";
// import Comfirmrd_PassWord from "./pages/Comfirmrd_PassWord";
// // import ContactUs from "./pages/ContactUs";

// import Login from "./pages/Login";
// import LogOut from "./pages/LogOut";
// import SetNew_PassWord from "./pages/SetNew_PassWord";

function App() {
  return (
    <div className="App font-ssp">
      {/* <BrowserRouter> */}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs></ContactUs>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/verify" element={<VerifyAddress />} />
          <Route path="/enable" element={<EnableAccount />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/setPassword" element={<SetNewPassWord />} />
          <Route path="/messageSucess" element={<MessageSucess />} />
          <Route path="/closeAccount" element={<CloseAccount />} />
          <Route path="/removeMember" element={<RemoveMember />} />
          <Route path="/deleteWorkspace" element={<DeleteWorkspace />} />
          <Route path="/removeWorkspace" element={<RemoveWorkspace />} />
          <Route path="/leaveWorkspace" element={<LeaveWorkspace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/*" element={<NotFound />} />
        </Routes> 
      {/* </BrowserRouter> 

      {/* <BrowserRouter> */}
      {/* <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path="/about" element={<AboutUs></AboutUs>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route> */}
      {/* <Route path="*" element={<Error/>} /> */}
      {/* {props.children} */}
      {/* </Routes>
      {/* </BrowserRouter> */}
      {/* <Routes>
         <Route path="/" element={<HomePage></HomePage>}></Route>
         <Route path="/about" element={<AboutUs></AboutUs>}></Route>
         <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
         <Route path="*" element={<Error/>} />
      </Routes> */}
      {/* <DashBoardLeft></DashBoardLeft> */}
      {/* <FooterMain></FooterMain> */}
      {/* <AboutUs></AboutUs> */}
      {/* <HomePage></HomePage>  */}

      {/* All Pop up //////////////////////////////////////////////*/}

      {/* <DeleteProfilePhotoPopup></DeleteProfilePhotoPopup> */}
      {/* <CloseAccountPopup></CloseAccountPopup> */}
      {/* <Contact_Us></Contact_Us> */}
      {/* <ResetPasswordPopup></ResetPasswordPopup> */}
      {/* <CreateWorkSpacePopup></CreateWorkSpacePopup> */}
      {/* <DeleteDocumentPopup></DeleteDocumentPopup> */}
      {/* <RemoveMemberPopup></RemoveMemberPopup> */}
      {/* <RemoveWorkspacePopup></RemoveWorkspacePopup> */}
      {/* <DeleteWorkspacePhotoPopup></DeleteWorkspacePhotoPopup> */}
      {/* <LeaveFromWorkpacePopup></LeaveFromWorkpacePopup> */}
      {/* <JoinWorkspacePopup></JoinWorkspacePopup> */}

      {/* //////////////////////////////////////////////////////////////// */}

      {/* <Navbar></Navbar> */}
      {/* <Comback></Comback> */}
      {/* <SetNew_PassWord></SetNew_PassWord> */}
      {/* <Comfirmrd_PassWord></Comfirmrd_PassWord> */}
      {/* <Forgot></Forgot> */}
      {/* <VerifyAddress></VerifyAddress> */}
      {/* <Login/> */}
      {/* <LogOut></LogOut> */}
      {/* <OTP></OTP> */}
      {/* <Form_Sucess></Form_Sucess> */}
    </div>
  );
}

export default App;
