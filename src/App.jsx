import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignIn from "./pages/SignIn.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetForgotPassword from "./pages/ResetForgotPassword.jsx";
import VerifyForgotPassword from "./pages/VerifyFogotPassword.jsx";
import SignUp from "./pages/SignUp.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUS.jsx";
import VerifyOPT from "./pages/VerifyOTP.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Documents from "./pages/Documents.jsx";
import DocumentCreate from "./pages/DocumentCreate.jsx";
import DocumentsEmpty from "./pages/DocumentsEmpty.jsx";
import DocumentsList from "./pages/DocumentsList.jsx";
import FooterMain from "./pages/FooterMain.jsx";
import EnableAccount from "./pages/EnableAccount.jsx";
import Workspace from "./pages/Workspace.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <div className="App font-ssp">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/verifyforgotpassword"
          element={<VerifyForgotPassword />}
        />
        <Route path="/resetforgotpassword" element={<ResetForgotPassword />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/verifyotp" element={<VerifyOPT />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/document" element={<Documents />} />
        <Route path="/documentcreate" element={<DocumentCreate />} />
        <Route path="/documentempty" element={<DocumentsEmpty />} />
        <Route path="/documentempty" element={<DocumentsList />} />

        <Route path="/footermain" element={<FooterMain />} />

        <Route path="/enableaccount" element={<EnableAccount />} />

        <Route path="/workspace" element={<Workspace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
