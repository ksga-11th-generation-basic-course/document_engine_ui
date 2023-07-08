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
import { Link, useNavigate } from "react-router-dom";
import Countdown from "../components/CountDown";
import { verifySuccess } from "../redux/slice/authenticationSlice/authenticationSlice";
import arrowBack from "../../src/assets/signin_image/arrowback.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

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
  const email = localStorage.getItem("email");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      OTP: Array.from({ length: 6 }).fill(""),
    },
    validate,
    onSubmit: async (values) => {
      try {
        setLoading(!loading);
        const optCode = await verifyOTP(values.OTP.join(""));
        dispatch(verifySuccess(optCode));
        setTimeout(() => {
          navigate("/signin");
          setLoading(loading);
          localStorage.removeItem("email");
        }, 6000);
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
        className="m-2 border border-primary bg-blue-50 focus:ring-btn-primary focus:border-btn-primary h-10 w-10 text-center rounded md:h-6 md:w-6"
        type="text"
        id="first"
        maxLength="1"
        onChange={(event) => handleChange(event, index)}
      />
    ));
  };

  const [seconds, setSeconds] = useState(60);
  const [resetCountdown, setResetCountdown] = useState(false);

  const handleTimeout = () => {};

  const handleResendCode = () => {
    toast.success("Code Resend Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setResetCountdown(!resetCountdown);
    setSeconds(60);
    const email = localStorage.getItem("email");
    dispatch(resendVerifyCode(email));
  };

  return (
    <div className="flex px-2 justify-center items-center bg-[#EDF9FF] text-accent">
      <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
        <Link to={"/"}>
          <img
            src={Logo}
            className="absolute top-8 left-1 lg:left-3 md:w-[60px] md:left-6 md:mr-24 "
          />
        </Link>

        <div className=" flex justify-center items-center  relative overflow-hidden -mt-20">
          {/* Image Background */}
          <img
            className="w-[500px] h-[700.16px] mt-32 mr-5 max-sm:hidden lg:w-[140px] lg:hidden md:hidden"
            src={VerifyL}
          />
          {/* Verify Email Address */}
          <form className="bg-white  mt-36 flex flex-col justify-center  rounded-3xl shadow-md px-20 py-14 lg:mt-24 lg:py-20 md:ml-2 md:py-14 md:px-7">
            <div className="  mx-auto  md:w-full md:max-w-md  ">
              <div className=" w-full  ">
                <Link to={"/signup"}>
                  <img
                    src={arrowBack}
                    className="w-6  mt-5 -ml-10 absolute lg:mt-3 md:w-4 md:mt-2 md:-ml-2"
                  />
                </Link>

                <h1 className="font-bold text-center text-primary text-36px lg:-mt-5 lg:text-4xl md:text-2xl md:-mb-4">
                  Verify Email Address
                </h1>

                {/* Please enter the code we've send to */}
                <div>
                  <div className="py-8 px-3">
                    <div className="container mx-auto">
                      <div className="max-w-sm mx-auto md:max-w-lg">
                        <div className="w-full">
                          <div className=" h-64 rounded text-center">
                            <div className="text">
                              <p className="-mt-7 text-18px text-accent lg:text-xl lg:-mt-4 md:text-sm md:pt-3">
                                Please enter the code we've send to
                              </p>
                              <p className="mt-0 text-18px text-center text-primary md:text-sm">
                                {email}
                              </p>
                            </div>

                            {/* Box input password */}
                            <div
                              id="otp"
                              className="flex flex-row justify-center text-center mt-5"
                            >
                              <Formik>
                                <div className="form ">{renderInput()}</div>
                              </Formik>
                            </div>
                            {formik.errors.OTP && (
                              <p className="text-red-500 text-lg md:text-sm">
                                The field is required
                              </p>
                            )}
                            <div className="flex justify-center text-center mt-5 ">
                              <a className="flex items-center cursor-pointer ">
                                <span className="font-bold ">
                                  (
                                  <Countdown
                                    seconds={seconds}
                                    setSeconds={setSeconds}
                                    onTimeout={handleTimeout}
                                    reset={resetCountdown}
                                    setReset={setResetCountdown}
                                  />
                                  )
                                </span>
                              </a>
                            </div>

                            {/* Didn't receive the code? Click to resend */}
                            {seconds === 1 ? (
                              <div className="flex justify-center text-center mt-5 ">
                               <span className="flex items-center text-18px ml-2  pr-3 lg:text-lg md:text-sm ">
                                   Didn't receive the code?  
                                   <button type="button" onClick={handleResendCode} className="underline ml-1  text-primary  cursor-pointer">Click to resend</button>
                              </span>
                              </div>
                            ) : null}

                            {/*  Verify */}
                            <div className="mt-5">
                              <Link to={"/signin"}>
                                <button
                                  type="submit"
                                  onClick={formik.handleSubmit}
                                  className="transition font-bold text-18px duration-200 bg-primary hover:bg-btn-primary text-white w-full py-3 rounded-lg shadow-sm
                                                hover:shadow-md text-center inline-block lg:text-xl md:text-base md:w-[260px] md:h-12 md:pt-2.5 "
                                >
                                  {loading ? (
                                    <Box className="">
                                      <CircularProgress
                                        size={25}
                                        color="inherit"
                                      />
                                    </Box>
                                  ) : (
                                    <p>Verify & Sign in</p>
                                  )}
                                </button>
                              </Link>
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

          <div>
            <img
              className="w-[600px] h-[500.57px]  max-sm:hidden lg:w-[140px] lg:hidden lg:mt-14 md:hidden"
              src={VerifyR}
            />
          </div>
        </div>
      </div>

      <ToastContainer />

    </div>
  );
};
