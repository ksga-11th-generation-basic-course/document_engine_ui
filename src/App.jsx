import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import AboutUs from"./pages/AboutUs.jsx"
import ContactUs from "./pages/ContactUS.jsx"
import Forgot from "./pages/Forgot.jsx"
import Navbar from "./pages/Navbar.jsx";
import VerifyAddress from"./pages/VerifyAddress.jsx"
import EnableAccount from"./pages/EnableAccount.jsx"
import SetNewPassWord from "./pages/SetNewPassWord.jsx";
import NotFound from "./pages/NotFound.jsx";
import MessageSucess from "./pop-up/MessageSucess.jsx";
import CloseAccount from "./pop-up/CloseAccount.jsx";
import RemoveMember from "./pop-up/RemoveMember.jsx";
import DeleteWorkspace from "./pop-up/DeleteWorkspace.jsx";
import RemoveWorkspace from "./pop-up/RemoveWorkspace.jsx";
import LeaveWorkspace from "./pop-up/LeaveWorkspace.jsx";
import DashBoardLeft from "./dashboard/DashBoardLeft";
import Comfirmrd_PassWord from "./pages/Comfirmrd_PassWord";
import FooterMain from "./pages/FooterMain";
import Form_Sucess from "./pages/Form_Sucess";
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
function App() {

  return (
    <div className="App font-ssp">
      <Routes>
         <Route index element={<HomePage/>}/> 
        <Route path="/about" element={<AboutUs/>}/> 
        <Route path="/contact" element={<ContactUs></ContactUs>}/> 
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/verify" element={<VerifyAddress/>}/>
        <Route path="/enable" element={<EnableAccount/>}/>
        <Route path="/notFound" element={<NotFound/>}/>
        <Route path="/setPassword" element={<SetNewPassWord/>}/>
        <Route path="/messageSucess" element={<MessageSucess/>} />
        <Route path="/closeAccount" element={<CloseAccount/>} />
        <Route path="/removeMember" element={<RemoveMember/>} />
        <Route path="/deleteWorkspace" element={<DeleteWorkspace/>} />
        <Route path="/removeWorkspace" element={<RemoveWorkspace/>} />
        <Route path="/leaveWorkspace" element={<LeaveWorkspace/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>

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
