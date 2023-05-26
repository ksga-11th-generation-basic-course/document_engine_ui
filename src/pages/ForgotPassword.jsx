import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.svg";
import Forgot1 from "../assets/images/Forgot/Forgot.svg";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../redux/service/authenticationService/authenticationService";
import { Link, NavLink, useNavigate } from "react-router-dom";
import page1 from '../assets/images/pagination/page1.svg'

export default function ForgotPassword() {

    const navigate = useNavigate();

  const authentication = useSelector(
    (state) => state.authentication.authentication
  );

  const dispatch = useDispatch();

  const [email, setEmail] = useState();

  const handleSubmit = () => {
    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (authentication.email) {
        navigate("/verifyForgotPassword")
    }
  });

  return (
    <div className="flex justify-center items-center bg-[#EDF9FF] text-[#37352F]">
      <Link to="/" >
                  <img src={Logo} className="absolute top-8 left-32 max-sm:left-3 max-sm:top-10" />
      </Link>
      <div className="flex flex-row justify-center  items-center relative min-h-screen  overflow-hidden">
        {/* <!-- component --> */}
        <div className="relative lg:py-10">
          <div
            className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
            xl:px-5 lg:flex-row"
          >
            <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
              <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                  <img src={Forgot1}/>
                </div>
              </div>
              <div className="bg-white p-10 flex flex-col justify-center gap-y-6 rounded-3xl shadow-md">
                <div className=" xs:p-0 mx-auto md:w-full md:max-w-md  ">
                  <div className="bg-white w-full  ">
                    <h1 className="font-bold text-center text-primary text-36px">
                      Forget Your Password?
                    </h1>
                    <div>
                      <div className="py-8 px-3">
                        <div className="container mx-auto">
                          <div className="max-w-sm mx-auto md:max-w-lg">
                            <div className="w-full">
                              <div className="bg-white h-54 rounded text-center">
                                <div className="text-18px">
                                  <p className=" text-accent_secondary ">
                                    Please enter your email address below to
                                    password reset instruction
                                    receive 
                                  </p>
                                </div>
                                <div className="relative">
                                  <p className="font-semibold text-left pt-5 pb-2 text-black text-lg">
                                    Email
                                  </p>
                                  <input
                                    placeholder="example@gmail.com"
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border-primary focus:border-btn-primary focus:ring-btn-primary text-18px border  rounded-lg px-2 py-3 max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none"
                                  />
                                </div>
                                <div className="btn pt-8">
                                  <div>
                                          <Link to='/verify-forget-password'>
                                                <button
                                                      type="button"
                                                      onClick={handleSubmit}
                                                      className="font-bold text-18px transition  duration-200 bg-primary hover:bg-btn-primary text-white w-full px-2 py-3 rounded-lg shadow-sm hover:shadow-md text-center inline-block"
                                                >
                                                  Continue
                                                </button>
                                          </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
                  <img src={page1} alt="page1" className="w-40"/>
          </div>

        </div>
      </div>
    </div>
  );
}
