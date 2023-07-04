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
import { Dialog } from "@material-tailwind/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const SignIn = () => {
  const [enableAccount, setEnableAccount] = useState(false);

  const [open, setOpen] = useState(false);

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
        setOpen(!open);
        setTimeout(() => {
          navigate("/dashboard");
          resetForm({ values: "" });
          setOpen(open);
        }, 6000);
      } catch (error) {
        setOpen(open);
        if (error === "Account is close") {
          setOpen(open);
          setEnableAccount(!enableAccount);
        } else if (error === "User Not Found") {
          setOpen(open);
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
          setOpen(open);
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

  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;

  return (
    <div className="flex px-2 justify-center items-center bg-[#EDF9FF] sm:bg-white text-accent">
      <div className="flex justify-center items-center min-h-screen overflow-hidden sm:flex sm:justify-center sm:items-center ">
        <Link to={"/"}>
          <img
            src={Logo}
            className="absolute top-8 left-10 sm:top-0 sm:left-3 md:top-0 md:left-3"
          />
        </Link>
        <img
          className="w-[600px] h-[500.16px] mr-5 sm:hidden md:hidden"
          src={LeftImage}
        />

        <form
          onSubmit={formik.handleSubmit}
          className="bg-white max-sm:bg-[#EDF9FF] p-10 flex flex-col justify-center gap-y-6 rounded-3xl lg:absolute lg:z-10 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 xl:absolute xl:z-10 xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 2xl:absolute 2xl:z-10 2xl:top-1/2 2xl:left-1/2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
        >
          <div className=" xs:p-0 mx-auto w-[380px] sm:w-[330px] ">
            <h1 className="font-bold text-center text-primary text-36px">
              Sign in
            </h1>
            <div class="mb-1 mt-2 relative sm:flex sm:justify-center sm:items-center ">
              <input
                name="email"
                type="text"
                placeholder=" "
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <label
                for="floating"
                class="flex gap-2 absolute text-16px text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Your Email
              </label>
            </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="h-5 text-red-600">{formik.errors.email}</div>
              ) : <div className="h-5"></div>}
            <div class="mb-1 mt-2 relative ">
              <input
                placeholder=" "
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type={changePassword ? "password" : "text"}
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <label
                for="floating"
                class="flex gap-2 absolute text-16px text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Password
              </label>
              
                <span className="absolute right-3 top-3 cursor-pointer"
                  onClick={() => {
                    setChangePassword(changeIcon);
                  }}
                >
                  {changeIcon ? <VisibilityOff /> : <Visibility />}
                </span>
            </div>
            {formik.touched.password && formik.errors.password ? (
                  <div className="h-1 text-red-600">
                    {formik.errors.password}
                  </div>
                ) : <div className="h-1"></div>}
            <div className="px-2 py-30px ">
              <Link
                to={"/forgotpassword"}
                className="transition text-18px duration-200 text-black w-full py-2.5 mb-2 mt-2 text-left font-semibold inline-block max-sm:pt-4"
              >
                Forgot your password?
              </Link>
              <button
                type="submit"
                className="px-2 py-3 transition duration-200 bg-primary hover:bg-btn-primary focus:shadow-sm text-white w-full rounded-lg focus:outline-none shadow-sm hover:shadow-md text-center font-bold text-18px inline-block"
              >
                Sign in
              </button>
              <Link
                to={"/signup"}
                className="outline-none font-semibold text-18px duration-200 text-primary mb-2 max-sm:mt-0 max-sm:mb-0 max-sm:pt-2 pt-4 w-full text-center inline-block"
              >
                Sign up
              </Link>
            </div>
            <div className="px-4 pb-4 pt-20px max-sm:pt-10px">
              <div className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-400">
                <p className="mx-1 text-center text-gray-400 ">or</p>
              </div>
            </div>
            <div className="p-2">
              <div className="grid grid-cols-2 gap-6">
                <button
                  onClick={handleGoogle}
                  type="button"
                  className="flex rounded-lg justify-center items-center py-2 px-4 text-sm border border-gray-200  outline-none max-sm:border-primary max-sm:border-2 text-accent font-bold transition transform "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 mr-2"
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
                  <span className="text-18px text-black">Google</span>
                </button>
                <button
                  onClick={handleFacebook}
                  type="button"
                  className="flex rounded-lg justify-center items-center py-2 px-4 font-bold text-sm border  outline-none border-gray-200 max-sm:border-primary max-sm:border-2 text-accent transition transform "
                >
                  <svg
                    className="w-7 h-7 mr-2 text-blue-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-18px text-black">Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      <img className="w-[600px] h-[600.57px] sm:hidden md:hidden lg:hidden" src={RightImage} />
      </div>
      <div>
        <EnableAccountModal
          enableAccount={enableAccount}
          setEnableAccount={setEnableAccount}
        />
      </div>
      <ToastContainer />
      <Dialog open={open} className="flex justify-center items-center">
        <section className="relative">
          <img
            src={Logo}
            alt=""
            className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 animate-fade animate-infinite animate-ease-in-out animate-alternate"
          />

          <div className="wave absolute bottom-0 wave1"></div>
          <div className="wave absolute bottom-0 wave2"></div>
          <div className="wave absolute bottom-0 wave3"></div>
          <div className="wave absolute bottom-0 wave4"></div>

          <div className="wave2 absolute top-0 wave1"></div>
          <div className="wave2 absolute top-0 wave2"></div>
          <div className="wave2 absolute top-0 wave3"></div>
          <div className="wave2 absolute top-0 wave4"></div>
        </section>
      </Dialog>
    </div>
  );
};
