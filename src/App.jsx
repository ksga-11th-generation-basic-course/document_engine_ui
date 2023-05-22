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
    </div>
  );
}

export default App;
