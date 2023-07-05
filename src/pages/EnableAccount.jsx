import React, { useState } from "react";
import Logo from "../assets/images/Logo.svg";
import enable from "../assets/signin_image/enable.svg";
import { enableAccount } from "../redux/service/authenticationService/authenticationService";
import { enableAccountSuccess } from "../redux/slice/authenticationSlice/authenticationSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import EnablePic from "../assets/images/EnableAcc.svg";
import { Link } from "react-router-dom";
import arrowBack from "../../src/assets/signin_image/arrowback.svg";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";

export const EnableAccount = () => {
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
        const user = await enableAccount(values.email);
        dispatch(enableAccountSuccess(user));
        navigate("/verifyenableaccount");
        resetForm({ values: "" });
      } catch (error) {
        console.error("Enable account failed:", error);
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
    <div>
      <div className="flex justify-center items-center bg-[#EDF9FF] relative text-[#37352F]">
        <Link to={"/"}>
          <img
            src={Logo}
            className="absolute top-8 left-36 max-sm:left-3 max-sm:top-0 lg:-ml-9 md:pl-2 md:w-[60px] md:h-[60px]"
          />
        </Link>

        <div className="flex flex-row justify-center  items-center relative min-h-screen  overflow-hidden">
          {/* Background Image */}
          <div className="w-full bg-cover relative max-w-md lg:hidden lg:w-[12px]">
            <div className="flex flex-col items-center max justify-center h-full relative ">
              <img src={enable} className="max-sm:w-13 " />
            </div>
          </div>

          <div className="relative mt-20  py-2 flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mr-auto mb-0 ml-auto max-w-7xl  w-full lg:-mt-1 md:mt-5">
            <div className=" ">
              {/* Form Enable Your Account */}
              <form
                onSubmit={formik.handleSubmit}
                className=" px-24 py-10 bg-white  flex flex-col justify-center gap-y-6 rounded-3xl 
                lg:w-[490px] lg:h-[370px] lg:pb-4  md:w-[300px] md:h-[270px]  md:p-3 md:-mt-28 "
              >
                <div className=" xs:p-0 mx-auto lg:-mt-6  md:w-full md:mt-16  md:max-w-md  ">
                  <Link to={"/"}>
                    <img
                      src={arrowBack}
                      className="w-6  mt-5 -ml-16 absolute"
                    />
                  </Link>

                  <h1 className="font-bold text-center text-[#1E9CEF] text-34px whitespace-nowrap max-sm:text-4xl lg:text-4xl md:text-xl md:-mt-16">
                    Enable Your Account
                  </h1>
                  <p className="text-16px text-[#9CA3AF] text-center max-sm:text-base lg:text-xl md:text-sm">
                    Please enter your email address below.
                  </p>
                  {/* Email */}
                  <div className="py-4 max-sm:px-0 max-sm:py-3 container max-w-sm mx-auto md:max-w-lg lg:bg-white  h-54 rounded text-center">
                    <div className="relative -mx-5 md:ml-6">
                      <p className="text-left font-semibold pt-2 text-20px lg:text-2xl md:text-base md:pt-1">
                        Email
                      </p>
                      <input
                        placeholder="name@gmail.com"
                        type="text"
                        name="email"
                        aria-label="Full name"
                        className="border focus:outline-none h-[46px] border-[#1E9CEF] rounded-lg focus:border-primary w-full  mt-2  text-18px block
                            lg:text-xl lg:h-13 md:w-[225px] md:text-sm md:h-9"
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

                    {/* Continue */}
                    <div className=" pt-5 -mx-5">
                      <button
                        type="submit"
                        className="transition text-lg h-[46px] duration-200 bg-[#1E9CEF] hover:bg-[#1E9CEF] focus:bg-[#1E9CEF] focus:shadow-sm focus:ring-4
                                       focus:ring-[#1E9CEF] focus:ring-opacity-50 text-white w-full  rounded-lg shadow-sm hover:shadow-md font-semibold text-center 
                                     lg:pb-9 lg:pt-2 lg:text-xl md:text-base md:pt-1 md:pb-1 md:w-[228px] md:h-[40px] md:-mb-36"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};
