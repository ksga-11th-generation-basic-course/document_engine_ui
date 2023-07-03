import React, { useEffect } from "react";
import Logo from "../assets/images/Logo.svg";
import Reset from "../assets/images/Set_New_pass.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { resetPassword } from "../redux/service/authenticationService/authenticationService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPasswordSuccess } from "../redux/slice/authenticationSlice/authenticationSlice";
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
        .min(4, "Password must have more than 4 characters "),
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

  return (
    <div className="bg-[#EDF9FF]  h-screen">
      <div className="relative text-[#37352F]">
        <img src={Logo} className="absolute top-10 left-10 md:w-[60px]" />

        <div className="flex items-center justify-center">
          <div className="flex flex-row justify-center  items-center relative min-h-screen  overflow-hidden">
            {/* <!-- component --> */}
            <div className="flex flex-col items-center justify-between">
              <div className="flex  items-center mt-20 w-full lg:pt-20">
                {/*Form Set New Password */}
                <form action="" onSubmit={formik.handleSubmit}>
                  <div className="bg-white w-full  shadow-md p-10 flex  justify-center  rounded-3xl lg:mb-44 lg:w-[500px] lg:pb-8 md:p-1 md:-mt-28  md:w-[290px] md:pb-8">
                    <div>
                      <div className="">
                        <h1 className="font-bold text-center text-primary text-44px text-2xl lg:mb-4 lg:mt-6 md:text-2xl md:mb-0">
                          Set New Password
                        </h1>

                        {/* ------------ */}
                        <div>
                          <div className="py-4 container mx-auto max-w-sm h-54 rounded text-center  md:max-w-lg">
                            <div className="text">
                              <div className="w-full">
                                <p className="text-18px text-accent text-base lg:text-xl lg:text-22px lg:pb-4 lg:pl-4 md:text-sm  ">
                                  Password must be at least 8 characters.
                                </p>
                                {/* <p class="text-l text-center text-gray-500">password reset instructor</p>   */}
                              </div>

                              <div className="relative md:ml-2">
                                <p className="font-semibold text-left pt-5 pb-2 text-black text-base lg:text-xl lg:text-22px md:text-base md:pt-1 md:pl-3">
                                  New Password
                                </p>
                                <input
                                  placeholder="Your New Password"
                                  name="newPassword"
                                  type="password"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.newPassword}
                                  className="border-primary text-base focus:border-btn-primary focus:ring-btn-primary text-18px border  rounded-lg px-2 py-3
                                                    max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none
                                                    lg:text-xl lg:text-20px md:text-sm md:w-[200px] md:h-[35px]"
                                />
                                {formik.touched.newPassword &&
                                formik.errors.newPassword ? (
                                  <div className="mt-2 text-red-600 text-left lg:text-base lg:text-20px md:text-sm md:pl-6">
                                    {formik.errors.newPassword}
                                  </div>
                                ) : null}
                              </div>

                              <div className="relative md:ml-2">
                                <p className="font-semibold text-left pt-5 pb-2 text-black text-base lg:text-xl lg:text-22px md:text-base md:pl-4">
                                  Confirm New Password
                                </p>
                                <input
                                  placeholder="Your New Password"
                                  name="newConfirmPassword"
                                  type="password"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.newConfirmPassword}
                                  className="border-primary text-base focus:border-btn-primary focus:ring-btn-primary text-18px border  rounded-lg px-2 py-3 
                                                    max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none
                                                    lg:text-lg lg:text-20px md:text-sm  md:w-[200px] md:h-[35px]"
                                />
                                {formik.touched.newConfirmPassword &&
                                formik.errors.newConfirmPassword ? (
                                  <div className="mt-2 text-red-600 text-left lg:text-base lg:text-20px md:text-sm md:pl-6">
                                    {formik.errors.newConfirmPassword}
                                  </div>
                                ) : null}
                              </div>

                              <div className="mt-5">
                                <button
                                  type="submit"
                                  className="font-semibold text-18px transition text-base duration-200 bg-primary hover:bg-btn-primary text-white w-full px-2 py-3 
                                                    rounded-lg shadow-sm hover:shadow-md text-center inline-block lg:text-xl lg:font-semibold lg:text-22px md:text-base  md:w-[200px] md:h-[35px] md:pt-2 "
                                >
                                  Reset Password
                                </button>
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
          </div>

          <div className="w-full bg-cover relative max-w-md  ml-16 lg:max-w-2xl lg:hidden">
            <div className="flex flex-col items-center justify-center w-full h-full relative">
              <img src={Reset} />
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