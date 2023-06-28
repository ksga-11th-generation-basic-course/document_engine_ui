import React, { useState } from "react";
import Logo from "../assets/images/Logo.svg";
import enable from "../assets/signin_image/enable.svg";
import { enableAccount } from "../redux/service/authenticationService/authenticationService";
import { enableAccountSuccess } from "../redux/slice/authenticationSlice/authenticationSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import EnablePic from "../assets/images/EnableAcc.svg";
import { Link } from "react-router-dom";

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
      <div className="flex justify-center items-center bg-[#EDF9FF] relative text-[#37352F]">
      <Link to={"/"}>
                <img
                  src={Logo}
                  className="absolute top-10 left-10 max-sm:top-32 md:w-[60px]"
                />
        </Link>

        <div className="flex flex-row justify-center  items-center relative min-h-screen  overflow-hidden">
          {/* Background Image */}
          <div className="w-full bg-cover relative max-w-md lg:hidden lg:w-[12px]">
            <div className="flex flex-col items-center max justify-center h-full relative ">
              <img src={enable} className="max-sm:w-13 "/>
            </div>
          </div>

          
            <div className="relative mt-20  py-2 flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mr-auto mb-0 ml-auto max-w-7xl  w-full lg:-mt-1 md:mt-5">
              <div className=" ">
                {/* Form Enable Your Account */}
                <form className=" p-10 pb-10 bg-white  flex flex-col justify-center gap-y-6 rounded-3xl 
                lg:w-[490px] lg:h-[370px] lg:pb-4  md:w-[300px] md:h-[270px]  md:p-3 md:-mt-28 ">
                  <div className=" xs:p-0 mx-auto lg:-mt-6  md:w-full md:mt-16  md:max-w-md  ">
                      <h1 className="font-bold text-center text-[#1E9CEF] text-4xl mt-5 whitespace-nowrap max-sm:text-4xl lg:text-4xl md:text-xl md:-mt-16">
                        Enable Your Account
                      </h1>
                      <p className="text-base text-[#9CA3AF] text-center pt-3 max-sm:text-base lg:text-xl md:text-sm">
                        Please enter your email address below.
                      </p>
                       {/* Email */}
                      <div className="py-4 max-sm:px-0 max-sm:py-3 container max-w-sm mx-auto md:max-w-lg lg:bg-white  h-54 rounded text-center">
                        <div className="relative md:ml-6">
                          <p className="text-left font-semibold pt-4 text-lg lg:text-2xl md:text-base md:pt-1">Email</p>
                          <input
                            placeholder="name@gmail.com"
                            type="text"
                            className="border text-[#9CA3AF] focus:outline-none h-[46px] border-[#1E9CEF] rounded-lg focus:border-primary w-full  mt-2  text-base block
                            lg:text-xl lg:h-13 md:w-[225px] md:text-sm md:h-9"
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        {/* Continue */}
                        <div className=" pt-5 ">
                          <button
                            type="button"
                            className="transition text-lg h-[46px] duration-200 bg-[#1E9CEF] hover:bg-[#1E9CEF] focus:bg-[#1E9CEF] focus:shadow-sm focus:ring-4
                                       focus:ring-[#1E9CEF] focus:ring-opacity-50 text-white w-full  rounded-lg shadow-sm hover:shadow-md font-semibold text-center 
                                     lg:pb-9 lg:pt-2 lg:text-xl md:text-base md:pt-1 md:pb-1 md:w-[228px] md:h-[40px] md:-mb-36"
                                     onClick={handleSubmit}
                                     >
                            Continue
                          </button>
                        </div>
                      </div>              
                  </div>
                </form>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}
