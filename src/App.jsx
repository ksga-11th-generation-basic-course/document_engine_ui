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
import Component_Navbar from "./pages/Component_Navbar";
import DashBoardHeader from "./dashboard/DashBoardHeader";
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
      {/* <DashBoardHeader></DashBoardHeader> */}
      {/* <DashBoardLeft></DashBoardLeft> */}
     {/* <FooterMain></FooterMain> */}
      {/* <AboutUs></AboutUs> */}
      {/* <HomePage></HomePage>  */}
     {/* <ContactUs></ContactUs> */}
     {/* <Component_Navbar></Component_Navbar> */}
     {/* <Navbar></Navbar> */}
      {/* <Comback></Comback> */}
      {/* <SetNew_PassWord></SetNew_PassWord> */}
      {/* <Comfirmrd_PassWord></Comfirmrd_PassWord> */}
      {/* <Forgot></Forgot> */}
      <VerifyAddress></VerifyAddress>
      {/* <Login/> */}
      {/* <LogOut></LogOut> */}
      {/* <OTP></OTP> */}
      {/* <Form_Sucess></Form_Sucess> */}
    </div>
  );
}

export default App;
