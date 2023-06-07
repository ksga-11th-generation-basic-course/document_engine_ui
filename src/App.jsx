import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Root } from "./routes/Root";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Workspace } from "./pages/Workspace";
import { Document } from "./pages/Document";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { VerifyOTP } from "./pages/VerifyOTP";
import { VerifyForgotPassword } from "./pages/VerifyFogotPassword";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetForgotPassword } from "./pages/ResetForgotPassword";
import { CreateDocument } from "./pages/CreateDocument";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUS";
import { NotFound } from "./pages/NotFound";
import EnableAccount from "./pages/EnableAccount";
import { EnableAccVerifyCode } from "./pages/EnableAccVerifyCode";

function App() {
  return (
    <div className="App font-ssp">
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyforgotpassword" element={<VerifyForgotPassword />}/>
        <Route path="/resetforgotpassword" element={<ResetForgotPassword />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/verifyotp" element={<VerifyOTP />} />
        <Route path="/enableaccount" element={<EnableAccount />} />
        <Route path="/enableaccountverifycode" element={<EnableAccVerifyCode/>} />
        <Route path="/landing" element={<Landing />} />



        <Route path="/" element={<Root />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/document" element={<Document />} />
          <Route path="/createdocument" element={<CreateDocument />} />
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
