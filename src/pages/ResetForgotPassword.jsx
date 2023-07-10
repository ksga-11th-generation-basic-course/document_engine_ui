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
import { Box, CircularProgress } from "@mui/material";

export const ResetForgotPassword = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      newConfirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required("Password is a required field")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
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
        setLoading(!loading);
        const email = localStorage.getItem("email");
        const user = await resetPassword({ ...values, email: email });
        dispatch(resetPasswordSuccess(user));
        setTimeout(() => {
          navigate("/signin");
          resetForm({ values: "" });
          setLoading(loading);
        localStorage.removeItem("email");
        }, 6000);
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

        <div className="flex items-center justify-center md:mb-10">
          <div className="flex flex-row justify-center  items-center relative min-h-screen  overflow-hidden">
            {/* <!-- component --> */}
            <div className="flex flex-col items-center lg:-ml-20 md:-ml-10">
              <div className="flex  items-center mt-5 w-full lg:-mt-20 md:-mt-40">
                {/*Form Set New Password */}
                <form
                  onSubmit={formik.handleSubmit}
                  className="bg-[#FFFFFF] px-20 py-14 flex flex-col justify-center gap-y-6 shadow rounded-3xl
          lg:w-[520px] lg:mt-48 lg:p-10 lg:ml-20 lg:mb-28 md:w-[310px] md:mt-36 md:mr-8  md:mb-4 md:py-5"
                >
                  <div className="">
                    <Link to={"/verifyforgotpassword"}>
                      <img
                        src={arrowBack}
                        className="w-6  mt-2 -ml-8 absolute lg:mt-8 lg:ml-2 md:w-4 md:-ml-3"
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
                            <p className="-mt-2 text-16px text-accent text-base lg:text-xl lg:text-22px lg:pb-4 lg:pl-4 lg:-mt-6 md:text-sm md:-mt-3 md:-ml-3">
                              Password must be at least 8 characters.
                            </p>
                            {/* <p class="text-l text-center text-gray-500">password reset instructor</p>   */}
                          </div>

                          <div className="relative w-96 md:ml-1.5 ">
                            <p className="font-semibold text-left pt-5 pb-2 text-20px text-black lg:text-xl lg:text-22px md:text-base md:pt-1">
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
                              lg:text-lg lg:text-20px md:text-sm  md:w-[225px] md:h-[35px] md:-ml-[150px] md:-mt-1"
                            />
                            <span
                              className="absolute -mt-11 ml-36 cursor-pointer bg-white p-2 lg:ml-36 md:-ml-10 md:mt-0 md:p-1"
                              onClick={() => {
                                setChangePassword(!changePassword);
                              }}
                            >
                              {changePassword ? (
                                <svg
                                  className="w-6 md:w-4 fill-gray-500"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="VisibilityIcon"
                                >
                                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                                </svg>
                              ) : (
                                <svg
                                  className="w-6 md:w-4 fill-gray-500"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="VisibilityOffIcon"
                                >
                                  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
                                </svg>
                              )}
                            </span>
                            {formik.touched.newPassword &&
                            formik.errors.newPassword ? (
                              <div className="mt-2 text-red-600 text-left lg:text-base lg:text-20px md:text-sm md:w-[230px]">
                                {formik.errors.newPassword}
                              </div>
                            ) : null}
                          </div>

                          <div className="relative md:ml-1.5 md:-mt-2">
                            <p className="font-semibold text-left pt-5 pb-2 text-black text-20px lg:text-xl lg:text-22px md:text-base">
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
                              lg:text-lg lg:text-20px md:text-sm  md:w-[225px] md:h-[35px] md:-ml-0.5  md:-mt-1"
                            />
                            <span
                              className="absolute -mt-11 ml-36 cursor-pointer bg-white p-2 lg:ml-36 md:ml-20 md:-mt-8 md:p-1"
                              onClick={() => {
                                setChangeConPassword(!changeConPassword);
                              }}
                            >
                              {changeConPassword ? (
                                <svg
                                  className="w-6 md:w-4 fill-gray-500"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="VisibilityIcon"
                                >
                                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                                </svg>
                              ) : (
                                <svg
                                  className="w-6 md:w-4 fill-gray-500"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="VisibilityOffIcon"
                                >
                                  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
                                </svg>
                              )}
                            </span>
                            {formik.touched.newConfirmPassword &&
                            formik.errors.newConfirmPassword ? (
                              <div className="mt-2 text-red-600 text-left lg:text-base lg:text-20px md:text-sm">
                                {formik.errors.newConfirmPassword}
                              </div>
                            ) : null}
                          </div>

                          <div className="mt-5">
                            <button
                              type="submit"
                              className="font-semibold text-20px transition duration-200 bg-primary hover:bg-btn-primary text-white w-full px-2 py-3 
                                                    rounded-lg shadow-sm hover:shadow-md text-center inline-block lg:text-xl lg:font-semibold lg:text-22px md:text-16px  md:w-[225px] md:h-[35px] md:pt-1 md:-mt-1"
                            >
                               {loading ? (
                                  <Box className="pt-1 lg:pt-1.5 md:pt-0">
                                    <CircularProgress
                                      size={25}
                                      color="inherit"
                                    />
                                  </Box>
                                ) : (
                                  <p>Reset Password</p>
                                )}
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

          <div className="w-full bg-cover relative max-w-md  ml-16 mt-10 lg:max-w-2xl lg:hidden">
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
