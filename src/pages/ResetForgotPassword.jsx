import React, { useEffect } from "react";
import Logo from "../assets/images/Logo.svg";
import Reset from "../assets/images/Set_New_pass.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { resetPassword } from "../redux/service/authenticationService/authenticationService";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import page3 from '../assets/images/pagination/page3.svg'
export default function ResetForgotPassword() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const OTPauthentication = useSelector(
    (state) => state.authentication.OTPauthentication
  );

  const resetAuthentication = useSelector(
    (state) => state.authentication.resetAuthentication
  );

  console.log(OTPauthentication.email);
  console.log(resetAuthentication);

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
    onSubmit: (values, { resetForm }) => {
      const data = { ...values, email: OTPauthentication.email };
      dispatch(resetPassword(data));
      resetForm({ values: "" });
    },
  });

  useEffect(() => {
    if (resetAuthentication.email) {
      navigate("/signin");
    }
  });

  return (
    <div>
          <div className="flex justify-center items-center bg-[#EDF9FF] relative text-[#37352F]">
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
                                  <div className="bg-white p-14 flex flex-col justify-center gap-y-6 rounded-3xl shadow-md w-fit">
                                    <div className=" xs:p-0 mx-auto md:w-full px-5  md:max-w-md  ">
                                      <div className=" w-full  ">
                                        <h1 className="font-bold text-center text-primary text-[40px]">
                                          Set New Password
                                        </h1>
                                        <div>
                                          <div className="py-4">
                                            <div className="container mx-auto">
                                              <div className="max-w-sm mx-auto md:max-w-lg">
                                                <div className="w-full">
                                                  <div className="bg-white h-54 rounded text-center">
                                                    <div className="text">
                                                      <p className="text-18px text-accent ">
                                                        Password must be at least 8 characters.
                                                      </p>
                                                      {/* <p class="text-l text-center text-gray-500">password reset instructor</p>   */}
                                                    </div>
                                                    <form
                                                      action=""
                                                      onSubmit={formik.handleSubmit}
                                                    >
                                                      <div className="relative">
                                                        <p className="font-semibold text-left pt-5 pb-2 text-black text-lg">
                                                          New Password
                                                        </p>
                                                        <input
                                                          placeholder="Your New Password"
                                                          name="newPassword"
                                                          type="password"
                                                          onChange={formik.handleChange}
                                                          onBlur={formik.handleBlur}
                                                          value={formik.values.newPassword}
                                                          className="border-primary focus:border-btn-primary focus:ring-btn-primary text-18px border  rounded-lg px-2 py-3 max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-96 text-gray-700 mr-3  leading-tight focus:outline-none"
                                                        />
                                                        {formik.touched.newPassword &&
                                                        formik.errors.newPassword ? (
                                                          <div className="mt-2 text-red-600 text-left">
                                                            {formik.errors.newPassword}
                                                          </div>
                                                        ) : null}
                                                      </div>
                                                      <div className="relative">
                                                        <p className="font-semibold text-left pt-5 pb-2 text-black text-lg">
                                                          Confirm New Password
                                                        </p>
                                                        <input
                                                          placeholder="Your New Password"
                                                          name="newConfirmPassword"
                                                          type="password"
                                                          onChange={formik.handleChange}
                                                          onBlur={formik.handleBlur}
                                                          value={formik.values.newConfirmPassword}
                                                          className="border-primary focus:border-btn-primary focus:ring-btn-primary text-18px border  rounded-lg px-2 py-3 max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-96 text-gray-700 mr-3  leading-tight focus:outline-none"
                                                        />
                                                        {formik.touched.newConfirmPassword &&
                                                        formik.errors.newConfirmPassword ? (
                                                          <div className="mt-2 text-red-600 text-left">
                                                            {formik.errors.newConfirmPassword}
                                                          </div>
                                                        ) : null}
                                                      </div>
                                                      <div className="btn pt-8">
                                                                <Link to='/sign-in'>
                                                                          <button
                                                                            type="submit"
                                                                            className="font-bold text-18px transition  duration-200 bg-primary hover:bg-btn-primary text-white w-full px-2 py-3 rounded-lg shadow-sm hover:shadow-md text-center inline-block"
                                                                          >
                                                                            Reset Password
                                                                          </button>
                                                                </Link>
                                                      </div>
                                                    </form>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                                        <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                                                <img src={Reset} />
                                        </div>
                                  </div>
                                  <div className="mt-[850px] ml-[500px] absolute">
                                        <img src={page3} alt="page1" className="w-40"/>
                                </div>
                          </div>
                        </div>
                      </div>
                  </div>
          </div>
    </div>
  );
}
