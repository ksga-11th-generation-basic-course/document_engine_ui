import React, { useState } from "react";
import Logo from "../assets/images/Logo.svg";
import RightImage from "../assets/images/Login/Right-img-login.svg";
import LeftImage from "../assets/images/Login/Left-img-login.svg";
import { useFormik } from "formik";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import {
  auth,
  providerFacebook,
  providerGoogle,
} from "../firebase/firebase.utils";
import {
  signin,
  signinWithGoogleAndFacebook,
} from "../redux/service/authenticationService/authenticationService";
import * as Yup from "yup";
import { signInSuccess } from "../redux/slice/authenticationSlice/authenticationSlice";
import { EnableAccountModal } from "../modal/EnableAccountModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignIn = () => {
  const [enableAccount, setEnableAccount] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((data) => {
        const googleAuth = {
          email: data.user.email,
          password: data.user.accessToken,
        };
        dispatch(signinWithGoogleAndFacebook(googleAuth));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFacebook = () => {
    signInWithPopup(auth, providerFacebook)
      .then((data) => {
        const facebookAuth = {
          email: data.user.email,
          password: data.user.accessToken,
        };
        dispatch(signinWithGoogleAndFacebook(facebookAuth));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Please enter email"),
      password: Yup.string()
        .required("Please enter password")
        .min(4, "Password must have more than 4 characters "),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const user = await signin(values);
        dispatch(signInSuccess(user));
        navigate("/dashboard");
        resetForm({ values: "" });
      } catch (error) {
        if (error === "Account is close") {
          setEnableAccount(!enableAccount);
        } else if (error === "User Not Found") {
          toast.error("Invalid Email", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else if (error === "Invalid Password") {
          toast.error(error, {
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

  return (
    <div className="flex px-2 justify-center items-center bg-[#EDF9FF] text-accent">
    <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
     <Link to={"/"}>
            <img
                src={Logo}
                className="absolute top-4 left-8 max-sm:left-3 max-sm:top-7 lg:w-[80px] lg:-ml-4 md:w-[60px] md:h-[60px] md:mr-9 md:mt-0 "
              />
     </Link>
      <img
        className="w-[600px] h-[500.16px] mr-5 max-sm:hidden lg:w-[150px] md:w-[200px] lg:hidden"
        src={LeftImage}
      />
      {/* SignIn */}
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white  p-12 flex flex-col justify-center gap-y-6 rounded-3xl shadow 
         lg:mt-28 lg:-mr-1 lg:p-6 lg:w-[500px] lg:pb-10  md:w-[285px]  md:pb-6 md:m-2 md:mt-16  ">
        <div className=" mx-auto w-[380px]  md:max-w-md ">
          <h1 className="font-bold text-center text-primary text-36px max-sm:pt-5 max-sm:text-4xl 
           lg:text-4xl  lg:mt-6 md:text-2xl md:mt-1 md:pr-36">
            Sign in
          </h1>

          <div className="px-2 py-30px max-sm:py-8 max-sm:px-8 lg:text-2xl md:ml-2 ">
            {/* Email */}
            <label className="font-semibold text-18px block pt-3 pb-2  text-black lg:text-2xl md:text-base ">
              Email
            </label>
            <div className=" max-sm:flex max-sm:items-center max-sm:border-b pb-25px max-sm:border-primary lg:mr-32 ">
              <input
                className="border-primary focus:border-btn-primary focus:ring-btn-primary text-18px border
                 rounded-lg px-2 py-3 max-sm:appearance-none max-sm:bg-transparent max-sm:leading-tight max-sm:border-none 
                 w-full text-gray-700 mr-3  leading-tight focus:outline-none lg:w-[370px] lg:h-12 lg:text-xl md:h-8 md:rounded-md md:w-[210px] md:text-sm"
                type="text"
                placeholder="name@gmail.com"
                aria-label="Full name"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="mt-2 text-red-600 lg:w-[370px] lg:text-xl md:w-[219px] md:text-sm">{formik.errors.email}</div>
              ) : null}
            </div>

            {/*Password  */}
            <label className="font-semibold text-18px block pt-3 pb-2  text-black lg:text-2xl md:text-base">
              Password
            </label>
            <div className=" max-sm:flex max-sm:items-center max-sm:border-b pb-25px max-sm:border-primary lg:mr-32 ">
              <input
                className="border-primary focus:border-btn-primary focus:ring-btn-primary text-18px border  rounded-lg 
                px-2 py-3 max-sm:appearance-none max-sm:bg-transparent max-sm:border-none w-full text-gray-700 mr-3 
                 leading-tight focus:outline-none lg:w-[370px] lg:h-12 lg:text-xl md:rounded-md md:h-8 md:w-[210px] md:text-sm"
                type="password"
                placeholder="password"
                aria-label="Full name"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="mt-2 text-red-600 lg:w-[370px] lg:text-xl md:w-[219px] md:text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <Link
              to={"/forgotpassword"}
              className="transition text-18px duration-200 text-black w-full py-2.5 mb-2 mt-2 text-left font-semibold inline-block max-sm:pt-4 lg:ml-16 lg:text-2xl md:ml-1 md:text-sm"
            >
              Forgot your password?
            </Link>

            {/* Button Sign in */}
            <button
              type="submit"
              className="px-2 py-3 transition duration-200 bg-primary hover:bg-btn-primary focus:shadow-sm text-white w-full rounded-lg 
              focus:outline-none shadow-sm hover:shadow-md text-center font-bold text-18px inline-block 
              lg:w-[370px] lg:h-14 lg:text-2xl lg:pr-5  md:pt-2 md:rounded-md md:overflow-hidden  md:w-[210px] md:h-9 md:text-base"
            >
              Sign in
            </button>

            {/* Sign up */}
            <Link
              to={"/signup"}
              className="outline-none font-semibold text-18px duration-200 text-primary mb-2 max-sm:mt-0 max-sm:mb-0 max-sm:pt-2 pt-4 w-full 
              text-center inline-block  lg:text-2xl md:text-base  md:pr-36 "
            >
              Sign up
            </Link>
          </div>
          
          {/* ---------or------- */}
          <div className=" pb-4 pt-20px lg:ml-2 md:ml-3">
            <div className="flex items-center w-[369px] before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1 
            after:border-t after:border-neutral-400 md:pl-1 md:w-[205px] ">
              <p className="mx-1 text-center text-gray-400 lg:text-2xl md:text-base ">or</p>
            </div>
          </div>

          <div className="">
            <div className="grid grid-cols-2 gap-4 lg:gap-3 lg:flex lg:ml-2   md:flex flex-col-reverse md:ml-2 ">
              {/* Google */}
              <div className="md:pl-2">
              <button
                onClick={handleGoogle}
                type="button"
                className="flex  rounded-lg justify-center items-center py-2 w-[176px]  text-sm border border-gray-200  outline-none max-sm:border-primary
                 max-sm:border-2 text-accent font-bold transition transform lg:pl-4  lg:w-[370px] md:h-[37px] md:w-[210px] md:pl-6  "
              >
                
                  <div className="flex mr-5 lg:mr-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7 mr-2 lg:w-[38px]  lg:h-[38px] md:w-[25px] md:h-[25px] "
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
                    <span className="text-18px text-black lg:text-2xl pt-1 md:text-base md:pb-1">Google</span>
                  </div>
                
              </button>
              </div>
              {/* Facebook */}
              <div className="md:pl-2">
                <button
                  onClick={handleFacebook}
                  type="button"
                  className="flex rounded-lg justify-center items-center py-2 w-[176px] font-bold text-sm border  outline-none border-gray-200 max-sm:border-primary max-sm:border-2
                  text-accent transition transform lg:w-[370px]  md:h-[37px] md:w-[210px] "
                >
                 
                 <svg
                    className="w-7 h-7 mr-2 text-blue-600 fill-current lg:w-[38px] lg:h-[38px] md:w-[25px] md:h-[25px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-18px text-black lg:text-2xl md:text-base ">Facebook</span>
                 
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <img className="w-[600px] h-[600.57px] -mt-12 max-sm:hidden lg:w-[150px] lg:hidden md:w-[200px]" src={RightImage} />

    </div>
      <div>
        <EnableAccountModal
          enableAccount={enableAccount}
          setEnableAccount={setEnableAccount}
        />
      </div>
      <ToastContainer />
    </div>
  );
};
