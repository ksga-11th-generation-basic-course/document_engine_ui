import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.svg";
import Reset from "../assets/images/Set_New_pass.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { resetPassword } from "../redux/service/authenticationService/authenticationService";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetPasswordSuccess } from "../redux/slice/authenticationSlice/authenticationSlice";
import arrowBack from "../../src/assets/signin_image/arrowback.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const ResetForgotPassword = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      newConfirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required("Password is a required field")
        .matches(
          /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/,
          "Password must contain 8 characters one lowercase , one uppercase , one special character and one number"
        ),
      newConfirmPassword: Yup.string()
        .oneOf(
          [Yup.ref("newPassword")],
          "Confirm Password must matched Password"
        )
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const email = localStorage.getItem("email");
        const user = await resetPassword({ ...values, email: email });
        dispatch(resetPasswordSuccess(user));
        localStorage.removeItem("email");
        navigate("/signin");
        resetForm({ values: "" });
      } catch (error) {
        console.error("Reset password failed:", error);
      }
    },
  });

  const [changePassword, setChangePassword] = useState(false);
  const [changeConPassword, setChangeConPassword] = useState(false);

  return (
    <div className="bg-[#EDF9FF]  h-screen">
      <div className="relative text-[#37352F]">
        <Link to={"/"}>
          <img
            src={Logo}
            className="absolute top-8 left-36 lg:-ml-2 md:pl-2 md:w-[68px] md:left-11"
          />
        </Link>

        <div className="flex items-center justify-center">
          <div className="flex flex-row justify-center  items-center relative min-h-screen  overflow-hidden">
            {/* <!-- component --> */}
            <div className="flex flex-col items-center">
              <div className="flex  items-center mt-20 w-full lg:-mt-20 md:-mt-40">
                {/*Form Set New Password */}
                <form
                  onSubmit={formik.handleSubmit}
                  className="bg-[#FFFFFF] px-24 py-10 flex flex-col justify-center gap-y-6 shadow rounded-3xl
          lg:w-[550px] lg:mt-48 lg:p-8 lg:ml-10 lg:mb-28 md:w-[310px] md:mt-36 md:mr-8  md:mb-4 md:py-5"
                >
                  <div className="">
                    <Link to={"/verifyforgotpassword"}>
                      <img
                        src={arrowBack}
                        className="w-6  mt-2 -ml-16 absolute lg:mt-8 lg:ml-0 md:w-4 md:-ml-3"
                      />
                    </Link>

                    <h1 className="font-bold text-center text-primary text-4xl lg:mb-4 lg:mt-6 md:text-2xl md:mb-0">
                      Set New Password
                    </h1>

                    {/* ------------ */}
                    <div>
                      <div className="py-4 container mx-auto max-w-sm h-54 rounded text-center  md:max-w-lg">
                        <div className="text">
                          <div className="w-full">
                            <p className="-mt-2 text-16px text-accent text-base lg:text-xl lg:text-22px lg:pb-4 lg:pl-4 lg:-mt-6 md:text-sm md:-mt-3">
                              Password must be at least 8 characters.
                            </p>
                            {/* <p class="text-l text-center text-gray-500">password reset instructor</p>   */}
                          </div>

                          <div className="relative -mx-5 w-96 md:ml-2">
                            <p className="font-semibold text-left pt-5 pb-2 text-20px text-black lg:text-xl lg:text-22px md:text-base md:pt-1 md:pl-1">
                              New Password
                            </p>
                            <input
                              placeholder="Your New Password"
                              name="newPassword"
                              type={!changePassword ? "password" : "text"}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.newPassword}
                              className="border-primary focus:border-btn-primary focus:ring-btn-primary text-18px border  rounded-lg px-2 py-3 
                              max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none
                              lg:text-lg lg:text-20px md:text-sm  md:w-[225px] md:h-[35px] md:-ml-36 md:-mt-1"
                            />
                            <span
                              className="absolute -mt-11 ml-36 cursor-pointer bg-white p-2 lg:ml-44"
                              onClick={() => {
                                setChangePassword(!changePassword);
                              }}
                            >
                              {changePassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </span>
                            {formik.touched.newPassword &&
                            formik.errors.newPassword ? (
                              <div className="mt-2 text-red-600 text-left lg:text-base lg:text-20px md:text-sm md:pl-6">
                                {formik.errors.newPassword}
                              </div>
                            ) : null}
                          </div>

                          <div className="relative -mx-5 md:ml-2 md:-mt-2">
                            <p className="font-semibold text-left pt-5 pb-2 text-black text-20px lg:text-xl lg:text-22px md:text-base md:pl-1">
                              Confirm New Password
                            </p>
                            <input
                              placeholder="Your New Password"
                              name="newConfirmPassword"
                              type={!changeConPassword ? "password" : "text"}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.newConfirmPassword}
                              className="border-primary focus:border-btn-primary focus:ring-btn-primary text-18px border  rounded-lg px-2 py-3 
                              max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none
                              lg:text-lg lg:text-20px md:text-sm  md:w-[225px] md:h-[35px] md:-ml-5  md:-mt-1"
                            />
                            <span
                              className="absolute -mt-11 ml-36 cursor-pointer bg-white p-2 lg:ml-40"
                              onClick={() => {
                                setChangeConPassword(!changeConPassword);
                              }}
                            >
                              {changeConPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </span>
                            {formik.touched.newConfirmPassword &&
                            formik.errors.newConfirmPassword ? (
                              <div className="mt-2 text-red-600 text-left lg:text-base lg:text-20px md:text-sm md:pl-6">
                                {formik.errors.newConfirmPassword}
                              </div>
                            ) : null}
                          </div>

                          <div className="mt-5 -mx-5">
                            <button
                              type="submit"
                              className="font-semibold text-20px transition duration-200 bg-primary hover:bg-btn-primary text-white w-full px-2 py-3 
                                                    rounded-lg shadow-sm hover:shadow-md text-center inline-block lg:text-xl lg:font-semibold lg:text-22px md:text-16px  md:w-[225px] md:h-[35px] md:pt-1 md:-mt-1"
                            >
                              Reset Password
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full bg-cover relative max-w-md  ml-16 mt-20 lg:max-w-2xl lg:hidden">
            <div className="flex flex-col items-center justify-center w-full h-full relative">
              <img src={Reset} className="w-[700px]" />
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-1 lg:-mt-40 lg:left-52 md:-mt-52 md:left-16 -mt-28">
          <div className=" w-[50px] h-[7px] rounded-2xl bg-[#CCCCCC] md:h-1"></div>
          <div className=" w-[50px] h-[7px] rounded-2xl bg-[#CCCCCC] md:h-1"></div>
          <div className="w-[50px] h-[7px] rounded-2xl bg-[#1E9CEF] md:h-1.5 "></div>
        </div>
      </div>
    </div>
  );
};
