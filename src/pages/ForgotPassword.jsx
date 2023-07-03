import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.svg";
import Forgot1 from "../assets/images/Forgot/Forgot.svg";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../redux/service/authenticationService/authenticationService";
import { useNavigate } from "react-router-dom";
import { forgotPasswordSuccess } from "../redux/slice/authenticationSlice/authenticationSlice";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, setEmail] = useState();

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
        console.error("Forgot password failed:", error);
      }
    },
  });

  return (
    <div className="flex justify-center items-center bg-[#EDF9FF] relative text-[#37352F]">
      <img src={Logo} className="absolute top-8 left-36" />
      <div className="flex flex-row justify-center  items-center relative min-h-screen  overflow-hidden">
        {/* <!-- component --> */}
        <div className="relative lg:py-10">
          <div
            className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
            xl:px-5 lg:flex-row"
          >
            <div className="flex gap-x-20 items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
              <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                  <img src={Forgot1} className="btn-" />
                </div>
              </div>
              <div className="bg-white p-10 flex flex-col justify-center gap-y-6 rounded-3xl shadow-md">
                <div className=" xs:p-0 mx-auto md:w-full md:max-w-md  ">
                  <div className="bg-white w-full  ">
                    <h1 className="font-bold text-center text-primary text-36px">
                      Forgot Your Password?
                    </h1>
                    <div>
                      <div className="py-8 px-3">
                        <div className="container mx-auto">
                          <div className="max-w-sm mx-auto md:max-w-lg">
                            <div className="w-full">
                              <div className="bg-white h-54 rounded text-center">
                                <div className="text-18px">
                                  <p className=" text-gray-500 ">
                                    Please enter your email address below to
                                    receive
                                  </p>
                                  <p className=" text-center text-gray-500">
                                    password reset instruction
                                  </p>
                                </div>
                                <div className="relative">
                                  <form onSubmit={formik.handleSubmit} class="full font-poppin">
                                    <div class="ml-2 gap-2 flex"></div>
                                    <div class="mb-1 mt-2 relative ">
                                      <input
                                        name="email"
                                        type="text"
                                        id="floating"
                                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                      />
                                      <label
                                        for="floating"
                                        class="flex gap-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                      >
                                        Your Email
                                      </label>
                                    </div>
                                    {formik.touched.email && formik.errors.email ? (
                                      <div className="mt-2 text-red-600">{formik.errors.email}</div>
                                    ) : null}
                                    <div class="mb-3 mt-2 align-middle justify-center flex">
                                      <button
                                        type="submit"
                                        class="text-white w-full px-2 py-3 relative rounded overflow-hidden group hover:bg-gradient-to-r bg-primary hover:bg-btn-primary transition-all ease-out duration-300"
                                      >
                                        <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-96 ease"></span>
                                        <span class="relative">Continue</span>
                                      </button>
                                    </div>
                                  </form>
                                  {/* <p className="font-semibold text-left pt-5 pb-2 text-black text-lg">
                                    Email
                                  </p>
                                  <input
                                    placeholder="example@gmail.com"
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border-primary focus:border-btn-primary focus:ring-btn-primary text-18px border  rounded-lg px-2 py-3 max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none"
                                  />
                                </div>
                                <div className="mt-5">
                                  <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="font-bold text-18px transition  duration-200 bg-primary hover:bg-btn-primary text-white w-full px-2 py-3 rounded-lg shadow-sm hover:shadow-md text-center inline-block"
                                  >
                                    Continue
                                  </button> */}
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
      </div>
    </div>
  );
};
