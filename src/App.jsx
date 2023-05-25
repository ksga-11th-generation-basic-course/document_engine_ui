import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import VerifyForgotPassword from "./pages/VerifyFogotPassword";
import ResetForgotPassword from "./pages/ResetForgotPassword";
import SignUp from "./pages/SignUp";
import VerifyOTP from "./pages/VerifyOTP";

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
        <Route path="/verifyotp" element={<VerifyOTP/>}/>
      </Routes>
    </div>
  );
}

export default App;
