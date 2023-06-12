import React, { useState } from "react";
import Logo from "../assets/images/Logo.svg";
import enable from "../assets/signin_image/enable.svg";
import { enableAccount } from "../redux/service/authenticationService/authenticationService";
import { enableAccountSuccess } from "../redux/slice/authenticationSlice/authenticationSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
export const EnableAccount = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, setEmail] = useState();

  const handleSubmit = async () => {
    try {
      const user = await enableAccount(email);
      dispatch(enableAccountSuccess(user));
      navigate("/verifyenableaccount");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex px-2 justify-center items-center bg-[#EDF9FF] text-accent">
        <img
          src={Logo}
          className="absolute top-8 left-10 max-sm:left-3 max-sm:top-10"
        />
        <div className="flex flex-row justify-center  items-center relative min-h-screen  overflow-hidden">
          <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
            <div className="flex flex-col items-center max justify-center lg:w-full h-full relative lg:pr-10">
              <img src={enable} class="max-sm:w-13 " />
            </div>
          </div>
          <div className="relative lg:py-10 py-2">
            <div
              className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
                            xl:px-5 lg:flex-row"
            >
              <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
                <div className="lg:bg-white p-10  bg-[#EDF9FF]  flex flex-col justify-center gap-y-6 rounded-3xl lg:shadow-md">
                  <div className=" xs:p-0 mx-auto md:w-full px-5  md:max-w-md  ">
                    <div className=" w-full  ">
                      <h1 className="font-bold text-center text-primary text-5xl whitespace-nowrap max-sm:text-4xl">
                        Enable Your Account
                      </h1>
                      <p className="text-xl text-accent text-center pt-5 max-sm:text-base">
                        Please enter your email address below
                      </p>
                      <div>
                        <div className="py-6 max-sm:px-0 max-sm:py-3">
                          <div className="container mx-auto">
                            <div className="max-w-sm mx-auto md:max-w-lg">
                              <div className="w-full">
                                <div className="lg:bg-white bg-[#EDF9FF]  h-54 rounded text-center">
                                  <div className="relative">
                                    <p className="text-left pt-4  text-xl">
                                      Email
                                    </p>
                                    <input
                                      className="mt-3 border-primary focus:border-btn-primary focus:ring-btn-primary text-18px border rounded-lg px-2 py-3 max-sm:appearance-none max-sm:bg-transparent max-sm:leading-tight max-sm:border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none"
                                      type="text"
                                      placeholder="example@gmail.com"
                                      onChange={(e) => setEmail(e.target.value)}
                                    />
                                  </div>
                                  <div className="mt-6">
                                    <button
                                      type="button"
                                      className="tpx-2 py-3 transition duration-200 bg-primary hover:bg-btn-primary focus:shadow-sm text-white w-full rounded-lg focus:outline-none shadow-sm hover:shadow-md text-center font-bold text-18px inline-block"
                                      onClick={handleSubmit}
                                    >
                                      Continue
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
