import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.svg";
import Right1Image from "../assets/images/Login/Right-img-logout.svg";
import Left1Image from "../assets/images/Login/Left-img-logout.svg";
import Google from "../assets/images/Login/Google.svg";
import Facebook from "../assets/images/Login/Facebook.svg";
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import {
  auth,
  providerFacebook,
  providerGoogle,
} from "../firebase/firebase.utils";
import { Link, useNavigate } from "react-router-dom";
import {
  signup,
  signupWithGoogleAndFacebook,
} from "../redux/service/authenticationService/authenticationService";
import { useFormik } from "formik";
import * as Yup from "yup";

export const SignUp = () => {
  const authentication = useSelector(
    (state) => state.authentication.authentication
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((data) => {
        const googleAuth = {
          username: data.user.displayName,
          email: data.user.email,
          password: data.user.accessToken,
          profileImage: data.user.photoURL,
        };
        dispatch(signupWithGoogleAndFacebook(googleAuth));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFacebook = () => {
    signInWithPopup(auth, providerFacebook)
      .then((data) => {
        const facebookAuth = {
          username: data.user.displayName,
          email: data.user.email,
          password: data.user.accessToken,
          profileImage: data.user.photoURL,
        };
        dispatch(signupWithGoogleAndFacebook(facebookAuth));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is a required field")
        .min(4, "Must have at least 2 characters"),
      email: Yup.string()
        .email("Enter a valid email")
        .required("Please enter a registered email"),
      password: Yup.string()
        .required("Password is a required field")
        .min(4, "Password must have more than 4 characters "),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Confirm Password must matched Password")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(signup(values));
      resetForm({ values: "" });
    },
  });

  useEffect(() => {
    if (authentication.email) {
      navigate("/verifyOTP");
    }
  });

  return (
    <div className="lg:bg-[#EDF9FF] flex px-2 justify-center items-center bg-[#EDF9FF] text-accent">
      <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
        <img
          src={Logo}
<<<<<<< HEAD
          className=" absolute top-8 left-10 max-sm:left-3 max-sm:top-0 lg:-ml-9 md:w-[60px] md:h-[60px]"
=======
          className=" absolute top-8 left-10 max-sm:left-3 max-sm:top-0"
>>>>>>> 8b9a103 (add new)
        />

        {/*  Background Image */}
        <img
          className="w-[600px] h-[500.16px] mr-5 max-sm:hidden lg:hidden"
          src={Left1Image}
        />
        <form
          onSubmit={formik.handleSubmit}
<<<<<<< HEAD
          className=" bg-[#FFFFFF] p-12 flex flex-col justify-center gap-y-6 rounded-3xl lg:w-[480px] lg:mt-52 lg:p-8 lg:ml-10 lg:mb-6 md:w-[300px] md:p-8 md:mt-36 md:mr-8 md:mb-4"
        >
        {/* Sign Up */}
          <div className=" xs:p-0 mx-auto w-[380px] ">
            <h1 className="font-bold text-center text-primary text-36px max-sm:pt-5 max-sm:text-4xl lg:text-4xl md:text-2xl md:pr-32">
=======
          className=" bg-[#FFFFFF] p-12 flex flex-col justify-center gap-y-6 rounded-3xl lg:w-28 lg:flex "
        >
          <div className=" xs:p-0 mx-auto w-[380px] ">
            <h1 className="font-bold text-center text-primary text-36px max-sm:pt-5 max-sm:text-4xl">
>>>>>>> 8b9a103 (add new)
              Sign Up
            </h1>
            <div className="px-2 py-5 max-sm:py-8 max-sm:px-8  ">

              {/* Username */}
              <label className="font-semibold text-lg block pb-2  text-black lg:text-2xl md:text-lg">
                Username
              </label>
              <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary ">
                <input
                  className="border-primary focus:border-btn-primary focus:ring-btn-primary border text-18px rounded-lg px-2 py-3
                   max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none
                   lg:text-2xl lg:h-12  md:h-9 md:w-[225px] md:text-base"
                  type="text"
                  placeholder="Username"
                  aria-label="Full name"
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
<<<<<<< HEAD
                  <div className="  mt-2  text-red-600 lg:text-xl md:text-sm ">
=======
                  <div className=" sm:mt-6 mt-2  text-red-600">
>>>>>>> 8b9a103 (add new)
                    {formik.errors.username}
                  </div>
                ) : null}
              </div>

              {/* Email */}
              <label className="font-semibold text-lg block pt-3 pb-2 text-black lg:text-2xl md:text-lg">
                Email
              </label>
              <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary ">
                <input
                  className="border-primary focus:border-btn-primary focus:ring-btn-primary border text-18px rounded-lg px-2 py-3 max-sm:appearance-none
                   max-sm:bg-transparent max-sm:leading-tight max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none
                   lg:text-2xl lg:h-12 md:h-9 md:w-[225px] md:text-base"
                  type="text"
                  placeholder="example@gmail.com"
                  aria-label="Full name"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="mt-2 text-red-600 lg:text-xl md:text-sm">{formik.errors.email}</div>
                ) : null}
              </div>

              {/* Password */}
              <label className="font-semibold text-lg block pt-3 pb-2  text-black lg:text-2xl md:text-lg">
                Password
              </label>
              <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary ">
                <input
<<<<<<< HEAD
                  className=" border-primary focus:border-btn-primary focus:ring-btn-primary border text-18px rounded-lg px-2 py-3 max-sm:appearance-none 
                  max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none
                  lg:text-2xl lg:h-12 md:h-9 md:w-[225px] md:text-base"
=======
                  className=" border-primary focus:border-btn-primary focus:ring-btn-primary border text-18px rounded-lg px-2 py-3 max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none"
>>>>>>> 8b9a103 (add new)
                  type="password"
                  placeholder="Password"
                  aria-label="Full name"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="mt-2 text-red-600 lg:text-xl md:text-sm">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
<<<<<<< HEAD

              {/* Confirm Password */}
              <label className=" font-semibold text-lg block pt-3 pb-2 text-black lg:text-2xl md:text-lg">
=======
              {/* <input type="text" className="border border-primary outline-blue-500 rounded-lg px-2 py-3 mt-1 mb-3 text-sm w-full" placeholder='Password' /> */}
              <label className=" font-semibold text-lg block pt-3 pb-2 text-black">
>>>>>>> 8b9a103 (add new)
                Confirm Password
              </label>
              <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary ">
                <input
                  className="border-primary focus:border-btn-primary focus:ring-btn-primary border text-18px  rounded-lg px-2 py-3 max-sm:appearance-none 
                  max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none
                  lg:text-2xl lg:h-12 md:h-9 md:w-[225px] md:text-base"
                  type="password"
                  placeholder="Confirm Password"
                  aria-label="Full name"
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="mt-2 text-red-600 lg:text-xl md:text-sm">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>

             {/* Do you have an account? */}
              <button
                type="button"
                className="transition text-black duration-200 w-full py-2.5 mb-3 mt-2 text-center text-18px text-b font-semibold inline-block max-sm:pt-4
                lg:text-2xl md:text-sm md:pr-40"
              >
                Do you have an account?
                <Link to={"/signin"} className="text-primary pl-2">
                  Sign In
                </Link>
              </button>

              {/* Continue */}
              <button
                type="submit"
                className="px-2 py-3 font-semibold transition duration-200 bg-primary hover:bg-btn-primary focus:shadow-sm text-white w-full rounded-lg 
                focus:outline-none shadow-sm hover:shadow-md text-center  text-18px inline-block
                lg:text-2xl lg:h-13 md:h-8 md:pb-8 md:w-[225px] md:text-base"
              >
                Continue
              </button>
            </div>
            {/* ------- or -------- */}
            <div className="px-4 pb-4">
              <div className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1
               after:border-t after:border-neutral-400 md:w-[210px]">
                <p className="mx-1 text-center text-gray-400 lg:text-2xl md:text-base ">or</p>
              </div>
            </div>

            {/* Google */}
            <div className="p-2  ">
              <div className="grid grid-cols-2 gap-3  md:flex flex-col-reverse  ">
                <button
                  onClick={handleGoogle}
                  type="button"
                  className="flex rounded-lg justify-center items-center py-2 px-4 text-sm border border-gray-200  outline-none max-sm:border-primary max-sm:border-2
                   text-accent font-bold transition transform md:h-10 md:w-[225px] "
                >
                  <div className="flex md:mr-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7 mr-2 "
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#fbc02d"
                        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                      />
                      <path
                        fill="#e53935"
                        d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                      />
                      <path
                        fill="#4caf50"
                        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                      />
                      <path
                        fill="#1565c0"
                        d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                      />
                    </svg>
                    <span className="text-18px text-black lg:text-2xl md:text-base">Google</span>
                  </div>
                </button>

                {/* Facebook */}
                <button
                  onClick={handleFacebook}
                  type="button"
                  className="flex rounded-lg justify-center items-center py-2 px-4 font-bold text-sm border  outline-none border-gray-200 max-sm:border-primary max-sm:border-2
                   text-accent transition transform md:h-10 md:w-[225px] md:text-base"
                >
                  <svg
                    className="w-7 h-7 mr-2 text-blue-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-18px text-black lg:text-2xl md:text-base">Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </form>
        <img
        className="w-[600px] h-[600.57px]  max-sm:hidden lg:hidden "
        src={Right1Image}
      />
      </div>
      
    </div>
  );
}
