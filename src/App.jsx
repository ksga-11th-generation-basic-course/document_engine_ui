import {Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className="App font-ssp">
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/verifyforgotpassword" element={<VerifyForgotPassword/>}/>
          <Route path="/resetforgotpassword" element={<ResetForgotPassword/>}/>

          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/verifyotp" element={<VerifyOPT/>}/>

          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>

          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/"/>
        </Routes> 
    </div>
  );
}

export default App;
