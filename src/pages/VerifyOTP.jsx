import React, { useEffect } from "react";
import Logo from "../assets/images/Logo.svg";
import VerifyL from "../assets/images/verify/left-verify-pic.svg";
import VerifyR from "../assets/images/verify/right-verify-pic.svg";
import Google from "../assets/images/Login/Google.svg";
import Facebook from "../assets/images/Login/Facebook.svg";
import { Formik, useFormik } from "formik";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resendVerifyCode,
  verifyOTP,
} from "../redux/service/authenticationService/authenticationService";
import { useNavigate } from "react-router-dom";
import Countdown from "../components/CountDown";
import { Link } from "react-router-dom";
import { verifySuccess } from "../redux/slice/authenticationSlice/authenticationSlice";

const validate = (values) => {
  const errors = {};
  if (Object.values(values.OTP).some((data) => data === "")) {
    errors.OTP = "This field is required";
  }
  return errors;
};
export const VerifyOTP = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      OTP: Array.from({ length: 6 }).fill(""),
    },
    validate,
    onSubmit: async (values) => {
      try {
        const optCode = await verifyOTP(values.OTP.join(""));
        dispatch(verifySuccess(optCode));
        navigate("/signin");
        localStorage.removeItem("email");
      } catch (error) {
        console.error("Verify failed:", error);
      }
      
    },
  });
  const inputRef = useRef({});
  useEffect(() => {
    inputRef.current[0].focus();
    inputRef.current[0].addEventListener("paste", pasteText);
    // return () => inputRef.current[0].removeEventListener("paste", pasteText);
  }, []);
  const pasteText = (event) => {
    const pastedText = event.clipboard.getData("text");
    const fieldValues = {};
    Object.keys(OTP).forEach((keys, index) => {
      fieldValues[keys] = pastedText[index];
    });
    setOTP(fieldValues);
    inputRef.current[5].focus();
  };
  const handleChange = (event, index) => {
    const { value } = event.target;
    if (/[a-z]/gi.test(value)) return;
    const currentOTP = [...formik.values.OTP];
    currentOTP[index] = value.slice(-1);
    formik.setValues((prev) => ({
      ...prev,
      OTP: currentOTP,
    }));
    if (value && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleBackSpace = (event, index) => {
    if (event.key === "Backspace") {
      if (index > 0) {
        inputRef.current[index - 1].focus();
      }
    }
  };
  const renderInput = () => {
    return formik.values.OTP.map((value, index) => (
      <input
        name={index}
        key={index}
        value={value}
        onKeyUp={(event) => handleBackSpace(event, index)}
        ref={(element) => (inputRef.current[index] = element)}
        className="m-2 border border-primary bg-blue-50 focus:ring-btn-primary focus:border-btn-primary h-12 w-12 text-center rounded md:w-[30px] md:h-[30px]"
        type="text"
        id="first"
        maxLength="1"
        onChange={(event) => handleChange(event, index)}
      />
    ));
  };

  const [resetCountdown, setResetCountdown] = useState(false);

  const handleTimeout = () => {};

  const handleResendCode = () => {
    const email = localStorage.getItem("email")
    dispatch(resendVerifyCode(email));
    setResetCountdown(true);
  };

  return (
    <div className="flex px-2 justify-center items-center bg-[#EDF9FF] text-accent">
      <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
        <Link to={"/"}>
            <img
              src={Logo}
              className="absolute top-8 left-10 max-sm:left-3 max-sm:top-10 lg:-ml-9 md:w-[50px] md:mr-24 "
            />
        </Link>
        {/* Image Background */}
        <img
          className="w-[500px] h-[700.16px] pt-16 mr-5 max-sm:hidden lg:hidden  md:hidden"
          src={VerifyL}
        />
        {/* Verify Email Address */}
        <form className="bg-white h-[510px] w-[530px] flex flex-col justify-center  rounded-3xl shadow-md 
        lg:mb-6 lg:w-[500px] lg:h-[500px] lg:mt-32 md:w-[320px] md:mt-28 md:h-[380px] ">
          <div className=" xs:p-0 mx-auto md:w-full md:max-w-md  ">
            <div className="bg-white w-full  ">
              <h1 className="font-bold text-center text-primary text-4xl lg:text-34px md:text-xl md:-mb-2 md:mt-8">
                Verify Email Address
              </h1>

              {/* Please enter the code we've send to */}
              <div>
                <div className="py-8 px-3">
                  <div className="container mx-auto">
                    <div className="max-w-sm mx-auto md:max-w-lg">
                      <div className="w-full">
                        <div className="bg-white h-64 rounded text-center">
                          <div className="text">
                            <p className="text-18px text-accent md:text-sm">
                              Please enter the code we've send to
                            </p>
                            <p className="text-18px text-center text-primary md:text-sm">
                              your email address
                            </p>
                          </div>

                          {/* Box input password */}
                          <div
                            id="otp"
                            className="flex flex-row justify-center text-center mt-5  "
                          >
                            <Formik>
                              <div className="form ">{renderInput()}</div>
                            </Formik>
                          </div>
                          {formik.errors.OTP && (
                            <p className="text-red-500 text-lg md:text-base">
                              The field is not blank
                            </p>
                          )}
                          <div className="flex justify-center text-center mt-5 ">
                            <a className="flex items-center cursor-pointer ">
                              <span className="font-bold ">
                                (
                                <Countdown
                                  seconds={60}
                                  onTimeout={handleTimeout}
                                  reset={resetCountdown}
                                />
                                )
                              </span>
                            </a>
                          </div>

                          {/* Didn't receive the code? Click to resend */}
                          <div className="flex justify-center text-center mt-5 ">
                            <a className="flex items-center text-primary hover:text-btn-primary cursor-pointer">
                              <button
                                type="button"
                                onClick={handleResendCode}
                                className="underline pr-3 lg:text-lg md:text-sm"
                              >
                                Didn't receive the code? Click to resend
                              </button>
                            </a>
                          </div>

                          {/*  Verify */}
                          <div className="mt-5">
                            <button
                              type="button"
                              onClick={formik.handleSubmit}
                              className="transition font-bold text-18px duration-200 bg-primary hover:bg-btn-primary text-white w-full py-3 rounded-lg shadow-sm
                               hover:shadow-md text-center inline-block md:text-sm md:w-[260px] md:h-11 "
                            >
                              Verify  & Sign in
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
        <img className="w-[600px] h-[500.57px]  max-sm:hidden lg:hidden  md:hidden" src={VerifyR} />

      </div>
      
    </div>
  );
}
