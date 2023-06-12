import React, { useEffect } from "react";
import Logo from "../assets/images/Logo.svg";
import Reset from "../assets/images/Set_New_pass.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { resetPassword } from "../redux/service/authenticationService/authenticationService";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export const ResetForgotPassword = () => {
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
        <img src={Logo} className="absolute top-10 left-10 md:w-[60px]" />
        <div className="flex flex-row justify-center  items-center relative min-h-screen  overflow-hidden ">
          {/* <!-- component --> */}
          
            <div
              className="flex flex-col items-center justify-between  " >
              <div className="flex  items-center mt-20 w-full lg:pt-20 ">

                {/*Form Set New Password */}
                <form className="w-[500px] bg-white p-10 flex  justify-center  rounded-3xl shadow-md lg:mb-44 lg:w-[500px] lg:pb-8 md:p-1 md:-mt-6 md:w-[290px] md:pb-8">
                  <div>
                    <div className=" w-full  ">
                      <h1 className="font-bold text-center text-primary text-36px lg:mb-4 lg:mt-10 md:text-xl md:mb-0 ">
                        Set New Password
                      </h1>
                      {/*  Password must be at least 8 characters. */}
                          <div className="py-4 container mx-auto max-w-sm h-54 rounded text-center  md:max-w-lg">
                              <div>
                                <p className="text-accent text-18px -mt-2 mb-3 lg:text-xl lg:text-22px lg:pb-4 lg:pl-4 md:text-sm  ">
                                  Password must be at least 8 characters.
                                </p>
                              </div>
                                  <form
                                    action=""
                                    onSubmit={formik.handleSubmit}
                                  >
                                    {/* New Password */}
                                    <div className="relative">
                                      <p className="font-semibold text-left pt-5 pb-2 text-black text-xl lg:text-xl lg:text-22px md:text-base md:pt-1 ">
                                        New Password
                                      </p>
                                      <input
                                        placeholder="Your New Password"
                                        name="newPassword"
                                        type="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.newPassword}
                                        className="border-primary text-xl focus:border-btn-primary focus:ring-btn-primary text-18px border  rounded-lg px-2 py-3
                                         max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-96 text-gray-700 mr-3  leading-tight focus:outline-none
                                         lg:text-xl lg:text-20px md:text-sm md:h-[37px] "
                                      />
                                      {formik.touched.newPassword &&
                                      formik.errors.newPassword ? (
                                        <div className="mt-2 text-red-600 text-left lg:text-base lg:text-20px md:text-sm">
                                          {formik.errors.newPassword}
                                        </div>
                                      ) : null}
                                    </div>

                                    {/* Confirm New Password  */}
                                    <div className="relative">
                                      <p className="font-semibold text-left pt-5 pb-2 text-black text-xl lg:text-xl lg:text-22px md:text-base">
                                        Confirm New Password
                                      </p>
                                      <input
                                        placeholder="Your New Password"
                                        name="newConfirmPassword"
                                        type="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.newConfirmPassword}
                                        className="border-primary text-xl focus:border-btn-primary focus:ring-btn-primary text-18px border  rounded-lg px-2 py-3 
                                        max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-96 text-gray-700 mr-3  leading-tight focus:outline-none
                                        lg:text-lg lg:text-20px md:text-sm md:h-[37px]"
                                      />
                                      {formik.touched.newConfirmPassword &&
                                      formik.errors.newConfirmPassword ? (
                                        <div className="mt-2 text-red-600 text-left lg:text-base lg:text-20px md:text-sm">
                                          {formik.errors.newConfirmPassword}
                                        </div>
                                      ) : null}
                                    </div>

                                    {/* Reset Password */}
                                    <div className="mt-5">
                                          <Link to={"/signin"}>
                                                  <button
                                                type="submit"
                                                className="font-semibold text-18px transition text-xl duration-200 bg-primary hover:bg-btn-primary text-white w-full px-2 py-3 
                                                rounded-lg shadow-sm hover:shadow-md text-center inline-block lg:text-xl lg:font-semibold lg:text-22px md:text-base md:h-[39px] md:pt-2 "
                                              >
                                                        Reset Password
                                              </button>
                                          </Link>
                                    </div>
                                  </form>
                              </div>
                          </div>
                        </div>
                   </form>
                {/* Background Image */}
                <div className="w-full bg-cover relative max-w-md  ml-16 lg:max-w-2xl lg:hidden">
                  <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                    <img src={Reset} />
                  </div>
                </div>
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center  mt-52 gap-1 lg:top-96 lg:-mt-20 lg:left-52 md:-mt-24 md:left-16">
                  <div className=" w-[50px] h-[7px] rounded-2xl bg-[#CCCCCC] md:h-1">  
                  </div>
                  <div className=" w-[50px] h-[7px] rounded-2xl bg-[#CCCCCC] md:h-1">  
                  </div>
                  <div className="w-[50px] h-[7px] rounded-2xl bg-[#1E9CEF] md:h-1.5 ">   
                  </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    
  );
}
