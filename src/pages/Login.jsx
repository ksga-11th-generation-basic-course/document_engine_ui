import React from "react";
import Logo from "../assets/images/Logo.svg";
import RightImage from "../assets/images/Login/Right-img-login.svg";
import LeftImage from "../assets/images/Login/Left-img-login.svg";
import Google from "../assets/images/Login/Google.svg";
import Facebook from "../assets/images/Login/Facebook.svg";

const Login = () => {
  return (
    <div className="flex justify-center items-center bg-[#EDF9FF] text-[#37352F]">
      <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
        <img src={Logo} className="absolute top-5 left-0" />
        <img src={LeftImage} />
        <div className="bg-white p-14 flex flex-col justify-center gap-y-6 rounded-2xl shadow-md">
          <h1 className="text-4xl font-bold text-[#1E9CEF] text-center">
            Sign in
          </h1>
          <div>
            <p className="mb-2 font-semibold">Email</p>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-96 h-12 px-3 outline-none border-2 border-[#1E9CEF] rounded-lg"
            />
          </div>
          <div>
            <p className="mb-2 font-semibold">Password</p>
            <input
              type="password"
              placeholder="password"
              className="w-96 h-12 px-3 outline-none border-2 border-[#1E9CEF] rounded-lg"
            />
          </div>
          <a href="#" className="text-[#526581] font-semibold">Forgot your password?</a>
          <button
            type="button"
            className="bg-[#1E9CEF] w-96 h-12 rounded-lg font-bold text-lg text-white"
          >
            Sign in
          </button>
          <a href="#" className="text-center text-[#1E9CEF] font-bold text-lg">
            Sign up
          </a>
          <hr />
          <div className="flex justify-center items-center gap-x-5">
            <button type="button" className="flex justify-center items-center border-2 border-[#EAEAEA] w-full h-12 gap-x-3 rounded-lg font-bold text-lg">
              <img src={Google} />
              <p>Google</p>
            </button>
            <button type="button" className="flex justify-center items-center border-2 border-[#EAEAEA] w-full h-12 gap-x-3 rounded-lg font-bold text-lg">
              <img src={Facebook} />
              <p>Facebook</p>
            </button>
          </div>
        </div>
        <img src={RightImage} />
      </div>
    </div>
  );
};

export default Login;
