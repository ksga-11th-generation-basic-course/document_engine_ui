import React, { useEffect } from "react";
import Logo from "../assets/images/Logo.svg";
import VerifyL from "../assets/images/verify/left-verify-pic.svg";
import VerifyR from "../assets/images/verify/right-verify-pic.svg";
import Google from "../assets/images/Login/Google.svg";
import Facebook from "../assets/images/Login/Facebook.svg";
import { Formik, useFormik } from "formik";
import { useState } from "react";
import { useRef } from "react";
import { data } from "autoprefixer";
import { useDispatch, useSelector } from "react-redux";
import {
  resendVerifyCode,
  verifyOTP,
} from "../redux/service/authenticationService/authenticationService";
import { useNavigate } from "react-router-dom";
import Countdown from "../components/CountDown";

const validate = (values) => {
  const errors = {};
  if (Object.values(values.OTP).some((data) => data === "")) {
    errors.OTP = "This field is required";
  }
  return errors;
};
export default function VerifyForgotPassword() {
  const OTPauthentication = useSelector(
    (state) => state.authentication.OTPauthentication
  );

  const authentication = useSelector(
    (state) => state.authentication.authentication
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      OTP: Array.from({ length: 6 }).fill(""),
    },
    validate,
    onSubmit: (values) => {
      dispatch(verifyOTP(values.OTP.join("")));
    },
  });
  const inputRef = useRef({});
  useEffect(() => {
    inputRef.current[0].focus();
    inputRef.current[0].addEventListener("pasts", pasteText);
    // return () => inputRef.current[0].removeEventListener("pasts", pasteText);
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
        className="m-2 border border-primary bg-blue-50 focus:ring-btn-primary focus:border-btn-primary h-12 w-12 text-center form-control rounded"
        type="text"
        id="first"
        maxLength="1"
        onChange={(event) => handleChange(event, index)}
      />
    ));
  };

  useEffect(() => {
    if (OTPauthentication.email) {
      navigate("/setPassword");
    }
  });

  const [resetCountdown, setResetCountdown] = useState(false);

  const handleTimeout = () => {};

  const handleResendCode = () => {
    dispatch(resendVerifyCode(authentication.email));
    setResetCountdown(true);
  };

  return (
    <div className="flex px-2 justify-center items-center bg-[#EDF9FF] text-accent">
      <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
        <img
          src={Logo}
          className="absolute top-8 left-10 max-sm:left-3 max-sm:top-10"
        />
        <img
          className="w-[500px] h-[700.16px] pt-32 mr-5 max-sm:hidden"
          src={VerifyL}
        />
        <div className="bg-white p-12 flex flex-col justify-center gap-y-6 rounded-3xl shadow-md">
          <div className=" xs:p-0 mx-auto md:w-full md:max-w-md  ">
            <div className="bg-white w-full  ">
              <h1 className="font-bold text-center text-primary text-36px">
                Verify Email Address
              </h1>
              <div>
                <div className="py-8 px-3">
                  <div className="container mx-auto">
                    <div className="max-w-sm mx-auto md:max-w-lg">
                      <div className="w-full">
                        <div className="bg-white h-64 rounded text-center">
                          <div className="text">
                            <p className="text-18px text-accent">
                              Please enter the code we've send to
                            </p>
                            <p className="text-18px text-center text-primary">
                              your email address
                            </p>
                          </div>
                          <div
                            id="otp"
                            className="flex   flex-row justify-center text-center px-2 mt-5"
                          >
                            <Formik>
                              <div className="form">{renderInput()}</div>
                            </Formik>
                          </div>
                          {formik.errors.OTP && (
                            <p className="text-red-500 text-lg">
                              The field is not blank
                            </p>
                          )}
                          <div className="flex justify-center text-center mt-5">
                            <a className="flex items-center  cursor-pointer">
                              <span className="font-bold">
                                (
                                <Countdown
                                  seconds={60}
                                  onTimeout={handleTimeout}
                                  reset={resetCountdown}
                                />
                                s)
                              </span>
                            </a>
                          </div>
                          <div className="flex justify-center text-center mt-5">
                            <a className="flex items-center text-primary hover:text-btn-primary cursor-pointer">
                              <button
                                type="button"
                                onClick={handleResendCode}
                                className="underline pr-3"
                              >
                                Didn't receive the code? Click to resend
                              </button>
                            </a>
                          </div>
                          <div className="btn pt-8">
                            <button
                              type="button"
                              onClick={formik.handleSubmit}
                              className="transition font-bold text-18px duration-200 bg-primary hover:bg-btn-primary text-white w-full py-3 rounded-lg shadow-sm hover:shadow-md text-center inline-block"
                            >
                              Verify
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
        </div>
      </div>
      <img className="w-[600px] h-[500.57px]  max-sm:hidden" src={VerifyR} />
    </div>
  );
}
