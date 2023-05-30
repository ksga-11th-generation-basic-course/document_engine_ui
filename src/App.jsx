import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardLeft from "./dashboard/DashBoardLeft";
import AboutUs from "./pages/AboutUs";
import Comfirmrd_PassWord from "./pages/Comfirmrd_PassWord";
import ContactUs from "./pages/ContactUs";
import FooterMain from "./pages/FooterMain";
import Forgot from "./pages/Forgot";
import Form_Sucess from "./pages/Form_Sucess";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import LogOut from "./pages/LogOut";
import Navbar from "./pages/Navbar";
import SetNew_PassWord from "./pages/SetNew_PassWord";
import VerifyAddress from "./pages/VerifyAddress";
import Comback from "./pop-up/Comback";
import OtpInput from 'react-otp-input';
import Contact_Us from "./pages/Contact_Us";
import ResetPasswordPopup from "./pop-up/ResetPasswordPopup";
import DeleteProfilePhotoPopup from "./pop-up/DeleteProfilePhotoPopup";
import CloseAccountPopup from "./pop-up/CloseAccountPopup";
import CreateWorkSpacePopup from "./pop-up/CreateWorkSpacePopup";
import DeleteDocumentPopup from "./pop-up/DeleteDocumentPopup";
import RemoveMemberPopup from "./pop-up/RemoveMemberPopup";
import RemoveWorkspacePopup from "./pop-up/RemoveWorkspacePopup";
import DeleteWorkspacePhotoPopup from "./pop-up/DeleteWorkspacePhotoPopup";
import LeaveFromWorkpacePopup from "./pop-up/LeaveFromWorkpacePopup";
import JoinWorkspacePopup from "./pop-up/JoinWorkspacePopup";
import WorkspaceCallaboratorMember from "./pop-up/WorkspaceCallaboratorMember";
import WorkspaceCollaborationOwner from "./pop-up/WorkspaceCollaborationOwner";
import SideBarPopup from "./components/SideBarPopup";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import VerifyEmail from "./pages/VerifyEmail";
import ForgetPassword from "./pages/ForgetPassword";
import SetNewPassword from "./pages/SetNewPassword";
import VerifyEmailChangePW from "./pages/VerifyEmailChangePW";
import EnableAccount from "./pages/EnableAccount";
import Error404 from "./pages/Error404";
// import NavbarComponent from "./components/NavbarComponent";
function App() {

  return (
    <div className="App font-ssp">

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

      {/* All Pop up */}

      {/* <Comback></Comback> */}
      {/* <Navbar></Navbar> */}
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
      {/* <WorkspaceCallaboratorMember></WorkspaceCallaboratorMember> */}

      {/* <WorkspaceCollaborationOwner/> */}


      {/* <SideBarPopup/> */}




      {/* <SetNew_PassWord></SetNew_PassWord> */}
      {/* <Comfirmrd_PassWord></Comfirmrd_PassWord> */}
      {/* <Forgot></Forgot> */}
      {/* <VerifyAddress></VerifyAddress> */}
      {/* <Login/> */}
      {/* <LogOut></LogOut> */}
      {/* <OTP></OTP> */}
      {/* <Form_Sucess></Form_Sucess> */}


      {/* seyha  */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <VerifyEmail /> */}
      {/* <EnableAccount /> */}

      {/* <ForgetPassword /> */}
      {/* <VerifyEmailChangePW /> */}
      {/* <SetNewPassword /> */}
      {/* <Error404 /> */}
    </div>
  );
}

export default App;
