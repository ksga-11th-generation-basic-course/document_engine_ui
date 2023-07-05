import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.svg";
import Forgot1 from "../assets/images/Forgot/Forgot.svg";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../redux/service/authenticationService/authenticationService";
import { Link, useNavigate } from "react-router-dom";
import { forgotPasswordSuccess } from "../redux/slice/authenticationSlice/authenticationSlice";
import arrowBack from "../../src/assets/signin_image/arrowback.svg";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Please enter your email"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const user = await forgotPassword(values.email);
        dispatch(forgotPasswordSuccess(user));
        navigate("/verifyforgotpassword");
        resetForm({ values: "" });
      } catch (error) {
        // console.log(error);
        console.error("Forgot password failed:", error);
        if (error === "User Not Found") {
          toast.error("Invalid Email", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      }
    },
  });

  return (
    <div className="bg-[#EDF9FF] h-screen ">
      <div className="flex justify-center items-center  relative text-[#37352F]">
      
        <img src={Forgot1} className="hidden  lg:hidden lg:z-0 lg:mt-60" />
        <Link to={"/"}>
          <img
            src={Logo}
            className="absolute top-8 left-36 lg:-ml-2 md:w-[60px] md:left-[53px] "
          />
        </Link>

        {/* Background Image */}
        <div className="flex flex-col  mt-52 items-center justify-center w-[600px] h-[500px] relative lg:w-[250px] md:-mt-6 md:w-[12px] ">
          <img src={Forgot1} className="btn- mr-36 lg:hidden md:hidden" />
        </div>

        {/* forgot Your Password? */}
        <div className="md:flex md:justify-center md:items-center">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white p-7 flex flex-col justify-center gap-y-6 rounded-3xl shadow-md mt-56 px-20
              lg:absolute lg:top-56 lg:left-36  lg:w-[490px] lg:mb-9 lg:-mt-0 md:absolute md:top-0 md:left-12 md:w-[300px] md:h-[328px] md:mt-36 md:p-3"
          >
            <div className=" xs:p-0 mx-auto md:max-w-md  md:flex flex-col-reverse  md:m-2 md:px-36">
              <div className="w-full  ">
                <Link to={"/"}>
                  <img src={arrowBack} className="w-6  mt-5 -ml-10 absolute md:w-4 md:-ml-1 md:mt-7" />
                </Link>
                <h1 className="font-bold text-center text-primary text-36px mt-5 lg:text-[30px] md:text-xl lg:-ml-3 md:ml-0">
                  Forgot Your Password?
                </h1>
                <div>
                  <div className="py-8 px-3">
                    <div className="container mx-auto">
                      <div className="max-w-sm mx-auto md:max-w-lg">
                        <div className="w-full">
                          <div className=" h-54 rounded text-center">
                            <div className="text-18px">
                              <p className=" text-[#9CA3AF] -mt-7 px-7 md:text-sm md:px-3">
                                Please enter your email address below to receive
                                password reset instruction.
                              </p>
                            </div>
                            <div className="relative">
                              <p className="font-semibold text-left pt-5 pb-2 text-black text-lg md:text-base">
                                Email
                              </p>
                              <input
                                name="email"
                                type="text"
                                placeholder="name@gmail.com"
                                className="border-primary focus:border-btn-primary focus:ring-btn-primary text-18px border  rounded-lg px-2 py-3 max-sm:appearance-none
                                     max-sm:bg-transparent max-sm:border-none w-full text-[#] mr-3  leading-tight focus:outline-none md:text-sm md:h-[37px] "
                                aria-label="Full name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                              />
                              {formik.touched.email && formik.errors.email ? (
                                <div className="text-left mt-2 text-red-600 text-16px">
                                  {formik.errors.email}
                                </div>
                              ) : null}
                            </div>
                            <div className="mt-5">
                              <button
                                type="submit"
                                className="font-semibold text-18px transition  duration-200 bg-primary hover:bg-btn-primary text-white w-full px-2 py-3 rounded-lg shadow-sm 
                                      hover:shadow-md text-center inline-block md:text-base md:h-[37px] md:pt-2 "
                              >
                                Continue
                              </button>
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
      <div className="flex justify-center mt-44 gap-1 lg:mt-10 md:mt-20 md:ml-2">
        <div className="w-[50px] h-[7px] rounded-2xl bg-[#1E9CEF] md:h-1.5 md:w-[40px]"></div>
        <div className=" w-[50px] h-[7px] rounded-2xl bg-[#CCCCCC] md:h-1.5 md:w-[40px]"></div>
        <div className=" w-[50px] h-[7px] rounded-2xl bg-[#CCCCCC] md:h-1.5 md:w-[40px]"></div>
      </div>

      <ToastContainer />
    </div>
  );
};
