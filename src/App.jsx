import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Workspace from './pages/Workspace';
import Sidebar from "./components/Sidebar";
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
      {/* <Sidebar></Sidebar> */}
     {/* <FooterMain></FooterMain> */}
      {/* <AboutUs></AboutUs> */}
      {/* <HomePage></HomePage>  */}
     {/* <ContactUs></ContactUs> */}
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
      <Workspace></Workspace>
    </div>
  );
}

export default App;
