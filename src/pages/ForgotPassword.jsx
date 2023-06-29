import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.svg";
import Forgot1 from "../assets/images/Forgot/Forgot.svg";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../redux/service/authenticationService/authenticationService";
import { Link,useNavigate } from "react-router-dom";
import { forgotPasswordSuccess } from "../redux/slice/authenticationSlice/authenticationSlice";
export const ForgotPassword = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, setEmail] = useState();

  const handleSubmit = async () => {
    try {
      const user = await forgotPassword(email);
      dispatch(forgotPasswordSuccess(user));
      navigate("/verifyforgotpassword");
    } catch (error) {
      console.error("Forgot password failed:", error);
    }
  };

  return (
    <div className="bg-[#EDF9FF] h-screen ">
      <div className="flex justify-center items-center  relative text-[#37352F] ">
        <Link to={"/"}>
          <img
            src={Logo}
            className="absolute top-8 left-16 md:left-14 md:w-[60px]"
          />
        </Link>
        <img src={Forgot1} className="hidden  lg:hidden lg:z-0 lg:mt-60" />

        {/* Background Image */}
        <div className="flex flex-col  mt-52 items-center justify-center w-[600px] h-[500px] relative lg:w-[250px] md:-mt-6 md:w-[12px] ">
          <img src={Forgot1} className="btn- mr-36 lg:hidden md:hidden" />
        </div>

        {/* orgot Your Password? */}
        <div className="">
          <form
            className="bg-white p-7 flex flex-col justify-center gap-y-6 rounded-3xl shadow-md mt-56 
              lg:absolute lg:top-56 lg:left-36  lg:w-[490px] lg:mb-9 lg:-mt-0 md:absolute md:top-0 md:left-14 md:w-[290px] md:h-[328px] md:mt-36 md:p-3 "
          >
            <div className=" xs:p-0 mx-auto md:max-w-md  md:flex flex-col-reverse  md:m-2">
              <div className="w-full  ">
                <h1 className="font-bold text-center text-primary text-36px mt-5 md:text-xl">
                  Forgot Your Password?
                </h1>
                <div>
                  <div className="py-8 px-3">
                    <div className="container mx-auto">
                      <div className="max-w-sm mx-auto md:max-w-lg">
                        <div className="w-full">
                          <div className=" h-54 rounded text-center">
                            <div className="text-18px">
                              <p className=" text-[#9CA3AF] md:text-sm">
                                Please enter your email address below to receive
                                password reset instruction.
                              </p>
                            </div>
                            <div className="relative">
                              <p className="font-semibold text-left pt-5 pb-2 text-black text-lg md:text-base">
                                Email
                              </p>
                              <input
                                placeholder="name@gmail.com"
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-primary focus:border-btn-primary focus:ring-btn-primary text-18px border  rounded-lg px-2 py-3 max-sm:appearance-none
                                     max-sm:bg-transparent max-sm:border-none w-full text-[#9CA3AF] mr-3  leading-tight focus:outline-none md:text-sm md:h-[37px] "
                              />
                            </div>
                            <div className="mt-5">
                              <Link to={"/verifyforgotpassword"}>
                                <button
                                  type="button"
                                  onClick={handleSubmit}
                                  className="font-semibold text-18px transition  duration-200 bg-primary hover:bg-btn-primary text-white w-full px-2 py-3 rounded-lg shadow-sm 
                                          hover:shadow-md text-center inline-block md:text-base md:h-[37px] md:pt-2 "
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
          </form>
        </div>
      </div>
      <div className="flex justify-center mt-44 gap-1 lg:mt-32 md:mt-28 md:ml-2  ">
        <div className="w-[50px] h-[7px] rounded-2xl bg-[#1E9CEF] md:h-1.5 md:w-[40px]"></div>
        <div className=" w-[50px] h-[7px] rounded-2xl bg-[#CCCCCC] md:h-1.5 md:w-[40px]"></div>
        <div className=" w-[50px] h-[7px] rounded-2xl bg-[#CCCCCC] md:h-1.5 md:w-[40px]"></div>
      </div>
    </div>
  );
};
