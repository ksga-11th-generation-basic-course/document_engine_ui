import {Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignIn from "./pages/SignIn.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetForgotPassword from "./pages/ResetForgotPassword.jsx";
import VerifyForgotPassword from "./pages/VerifyFogotPassword.jsx"

function App() {
  return (
    <div className="App font-ssp">
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/verifyforgotpassword" element={<VerifyForgotPassword/>}/>
          <Route path="/resetforgotpassword" element={<ResetForgotPassword/>}/>
        </Routes> 
    </div>
  );
}

export default App;
