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
  verifyOTP,
} from "../redux/service/authenticationService/authenticationService";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signUpSuccess } from "../redux/slice/authenticationSlice/authenticationSlice";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, CircularProgress } from "@mui/material";
import { toast } from "react-toastify";

export const SignUp = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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
        .required("Username is required")
        .min(4, "Username must have at least 4 characters"),
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain 8 characters one lowercase , one uppercase , one special character and one number"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Confirm Password must matched Password")
        .required("Confirm Password is required"),
        
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(!loading);
        const user = await signup(values);
        dispatch(signUpSuccess(user));
        localStorage.setItem("email",values.email);
        setTimeout(() => {
          navigate("/verifyOTP");
          resetForm({ values: "" });
          setLoading(loading);
        }, 6000);
      } catch (error) {
        setLoading(false);
        console.error("Sign-up failed:", error);
        if (error === "This email has already exist") {
          toast.error("This email has already exist", {
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

  const [changePassword, setChangePassword] = useState(false);
  const [changeConPassword, setChangeConPassword] = useState(false);

  return (
    <div className="lg:bg-[#EDF9FF] flex px-2 justify-center items-center bg-[#EDF9FF] text-accent">
      <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
        <Link to={"/"}>
          <img
            src={Logo}
            className="absolute top-8 left-8 lg:left-3 md:left-9 md:w-[60px] md:h-[60px]"
          />
        </Link>
        <img
          className="w-[600px] h-[500.16px] mr-5 max-sm:hidden lg:hidden"
          src={Left1Image}
        />
        <form
          onSubmit={formik.handleSubmit}
          className=" bg-[#FFFFFF] p-8 w-[450px] flex flex-col justify-center gap-y-6 shadow rounded-3xl 
          lg:w-[480px] lg:mt-40 lg:p-10 lg:ml-10 lg:mb-28 md:mt-32 md:w-[330px]  md:ml-0   md:mb-4 md: md:flex md:items-center"
        >
          <div className="">
            <h1 className="font-bold text-center text-primary text-36px max-sm:pt-5 max-sm:text-4xl lg:text-4xl md:text-2xl md:items-end">
              Sign Up
            </h1>
            <div className="px-2 py-5 md:ml-3">
              <label className="font-semibold text-lg block pb-2  text-black lg:text-2xl md:text-16px">
                Username
              </label>
              <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary md:-mt-2">
                <input
                  className="border-primary focus:border-btn-primary focus:ring-btn-primary border text-18px rounded-lg px-2 py-3
                  max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none
                  lg:text-xl lg:h-12  md:h-8 md:w-[280px] md:rounded-md md:text-sm"
                  type="text"
                  placeholder="Username"
                  aria-label="Full name"
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="mt-2  text-red-600 lg:text-xl md:text-sm">
                    {formik.errors.username}
                  </div>
                ) : null}
              </div>
              {/* <input type="username" className="border border-primary max-sm:bg-transparent max-sm:appearance-none max-sm:border-none max-sm:focus:outline-none outline-blue-500 rounded-lg px-2 py-3 mt-1 mb-3 text-sm w-full" placeholder='Username' /> */}
              <label className="font-semibold text-lg block pt-3 pb-2 text-black lg:text-2xl md:text-16px">
                Email
              </label>
              <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary md:-mt-2">
                <input
                  className="border-primary focus:border-btn-primary focus:ring-btn-primary border text-18px rounded-lg px-2 py-3 max-sm:appearance-none
                  max-sm:bg-transparent max-sm:leading-tight max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none
                  lg:text-xl lg:h-12 md:h-8 md:w-[280px] md:rounded-md md:text-sm"
                  type="text"
                  placeholder="name@gmail.com"
                  aria-label="Full name"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="mt-2 text-red-600 lg:text-xl md:text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              {/* <input type="email" className="border border-primary outline-blue-500 rounded-lg px-2 py-3 mt-1 mb-3 text-sm w-full" placeholder='example@gmail.com' /> */}
              <label className="font-semibold text-lg block pt-3 pb-2  text-black lg:text-2xl md:text-16px">
                Password
              </label>
              <div className="  max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary md:-mt-2">
                <input
                  className="border-primary focus:border-btn-primary focus:ring-btn-primary border text-18px rounded-lg px-2 py-3 max-sm:appearance-none 
                  max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none
                  lg:text-xl lg:h-12 md:h-8 md:w-[280px] md:rounded-md md:text-sm"
                  type={!changePassword ? "password" : "text"}
                  placeholder="Password"
                  aria-label="Full name"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                 <span className="absolute -mt-11 ml-[325px] cursor-pointer bg-white p-2 lg:ml-[340px] md:-ml-9 md:mt-2 md:p-0"
                  onClick={() => {
                    setChangePassword(!changePassword);
                  }}
                >
                  {changePassword ? 
                  <svg className="w-5 md:w-4 fill-gray-500" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VisibilityIcon"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                  :<svg className="w-5 md:w-4 fill-gray-500" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VisibilityOffIcon"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></svg>
                  }
                </span>
                {formik.touched.password && formik.errors.password ? (
                  <div className="mt-2 text-red-600 w-80 lg:w-[350px] lg:text-xl md:w-[285px] md:text-sm">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              {/* <input type="text" className="border border-primary outline-blue-500 rounded-lg px-2 py-3 mt-1 mb-3 text-sm w-full" placeholder='Password' /> */}
              <label className="font-semibold text-lg block pt-3 pb-2 text-black lg:text-2xl md:text-16px">
                Confirm Password
              </label>
              <div className=" max-sm:flex max-sm:items-center max-sm:border-b max-sm:border-primary md:-mt-2">
                <input
                  className="border-primary focus:border-btn-primary focus:ring-btn-primary border text-18px  rounded-lg px-2 py-3 max-sm:appearance-none 
                  max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none
                  lg:text-xl lg:h-12 md:h-8 md:w-[280px] md:rounded-md md:text-sm"
                  type={!changeConPassword ? "password" : "text"}
                  placeholder="Confirm Password"
                  aria-label="Full name"
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                <span className="absolute -mt-11 ml-[325px]  cursor-pointer bg-white p-2 lg:ml-[340px]  md:-ml-10 md:mt-2 md:p-0"
                  onClick={() => {
                    setChangeConPassword(!changeConPassword);
                  }}
                >
                  {changeConPassword ? 
                <svg className="w-5 md:w-4 fill-gray-500" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VisibilityIcon"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                :<svg className="w-5 md:w-4 fill-gray-500" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VisibilityOffIcon"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></svg>  
                }
                </span>
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="mt-2 text-red-600 lg:text-xl md:text-sm">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
              {/* <input type="text" className="border border-primary outline-blue-500 rounded-lg px-2 py-3 mt-1 mb-3 text-sm w-full" placeholder='Confirm Password' /> */}
              <button
                type="button"
                className="transition text-black duration-200 w-full py-2.5 mb-3 mt-2 text-center text-18px text-b font-semibold inline-block max-sm:pt-4
                lg:text-xl md:text-sm md:pr-5"
              >
                Do you have an account?
                <Link to={"/signin"} className="text-primary pl-2">
                  Sign In
                </Link>
              </button>
              <button
                type="submit"
                className="px-2 py-3 font-semibold transition duration-200 bg-primary hover:bg-btn-primary focus:shadow-sm text-white w-full rounded-lg 
                focus:outline-none shadow-sm hover:shadow-md text-center  text-18px inline-block
                lg:text-2xl lg:h-13 md:h-[2px] md:pb-8 md:w-[280px] md:rounded-md md:text-base"
              >
                {loading ? (
                  <Box className="pt-1 lg:pt-1.5 md:pt-0">
                    <CircularProgress size={25} color="inherit"/>
                  </Box>
                ) : (
                  <p>Continue</p>
                )}
              </button>
            </div>
            <div className="px-4 pb-4 md:ml-1">
              <div
                className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1
               after:border-t after:border-neutral-400 md:w-[275px]"
              >
                <p className="mx-1 text-center text-gray-400 text-20px lg:text-2xl md:text-base  ">
                  or
                </p>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-12 gap-4 lg:gap-3 lg:ml-2  md:ml-2 ">
                {/* Google */}
                <div className="col-span-6 lg:col-span-12 md:pl-2">
                <button
                  onClick={handleGoogle}
                  type="button"
                  className="flex  rounded-lg justify-center items-center py-2 text-sm w-full border border-gray-200  outline-none max-sm:border-primary
                    text-accent font-bold transition transform lg:ml-1 lg:w-[375px] md:h-[37px] md:w-[280px] md:pl-6  "
                >
                  
                    <div className="flex mr-5 lg:mr-8 gap-x-1 md:gap-x-0 md:pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7 mr-2 lg:w-[35px]  lg:h-[35px] md:w-[25px] md:h-[25px] "
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
                      <span className="text-20px text-black pt-1 lg:text-22px lg:pt-1.5 md:pt-0 md:text-base">Google</span>
                    </div>
                  
                </button>
                </div>
                {/* Facebook */}
                <div className="col-span-6 lg:col-span-12 md:pl-2">
                  <button
                    onClick={handleFacebook}
                    type="button"
                    className="flex rounded-lg justify-center items-center py-2 w-full font-bold text-sm border  outline-none border-gray-200 max-sm:border-primary max-sm:border-2
                    text-accent transition transform lg:w-[375px] lg:ml-1 md:h-[37px] md:w-[280px] gap-x-1.5 md:gap-x-0.5"
                  >
                   
                   <svg
                      className="w-7 h-7 mr-2 text-blue-600 fill-current lg:w-[32px] lg:h-[32px] md:w-[22px] md:h-[22px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="text-20px text-black lg:text-22px md:text-base ">Facebook</span>
                   
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <img
        className="w-[600px] h-[600.57px] mt-12  max-sm:hidden lg:hidden"
        src={Right1Image}
      />
    </div>
  );
};