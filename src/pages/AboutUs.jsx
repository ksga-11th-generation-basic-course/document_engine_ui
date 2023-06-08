import React from "react";
import Slider from "../assets/images/about/about.svg";
import Bg from "../assets/images/about/BgAbout.svg";
import Icon from "../assets/images/about/Icon.svg";
import Member from "../assets/images/about/Member.svg";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer.jsx";
export const AboutUs = () => {
  return (
    <div className="bg-white sm:overflow-hidden">
      <div>
        <NavBar />
      </div>
      <div className="SlideBar pt-[76px]  sm:pt-[76px]  md:pt-[32px] lg:pt-[78px]">
        <div className="SlideBar2 relative ">
          <div className="absolute left-0 sm:left-0 lg:top-12 text-6xl xl:top-24  sm:text-4xl text-primary px-20 md:top-16 font-bold top-40 sm:top-8 sm:leading-6 ">
            <h1 className="sm:whitespace-nowrap sm:pb-2">What & Who</h1>
            <h1 className="sm:whitespace-nowrap">We Are</h1>
          </div>
        </div>
        <div className="w-full">
          <img
            src={Slider}
            className="w-full md:w-full md:h-44 sm:h-full sm:w-full"
          />
        </div>
      </div>
      <div className="flex flex-row lg:flex-col sm:flex-col md:flex md:flex-col  w-screen justify-evenly px-20 sm:px-10 ">
        <div className=" flex flex-col   ">
          <div className="mainTitle font-bold text-4xl  pt-36 md:pt-10 sm:pt-10 sm:text-2xl">
            <h1 className="pb-35 text-accent sm:text-xl xl:whitespace-nowrap xl:pt-5  sm:whitespace-nowrap">
              All your <span className="text-primary pr-2">Documents</span>in
              one <span className="text-primary "> place</span>
            </h1>
            <h1 className="text-accent  sm:text-xl">
              and<span className="text-primary p-2">safe! </span>
            </h1>
          </div>
          <div className="pt-10 lg:text-xl leading-normal xl:pb-5 text-2xl w-96 sm:pt-2 sm:text-sm sm:pr-16 text-[#575E69]">
            DocEngine is a system that includes the possibility to customize the
            document with auto-saving and ease when the users want to share
            those documents within the group.
          </div>
        </div>
        <div className="img ">
          <img src={Bg} alt="" />
        </div>
      </div>
      <div className=" hidden:bg-sky-50 bg-sky-50  sm:flex sm:flex-col px-10 sm:px-10">
        <div className=" flex justify-evenly   items-center py-16 sm:py-4 ">
          <div className=" flex justify-center flex-col sm:hidden  sm:text-xl sm:flex-row ">
            <img src={Icon} alt="" className="w-10 pb-2 sm:w-16 " />
            <div className="text-5xl sm:text-4xl sm:flex sm:flex-col font-bold text-accent">
              <h1>Why</h1>
              <h1>
                Doc <span className="text-primary">Engine?</span>
              </h1>
            </div>
          </div>
          <div className="sm:indent-[0.5px] lg:px-5 sm:text-xl  sm:px-0 ">
            <h1 className="text-4xl text-center sm:text-3xl sm:text-center font-bold text-accent">
              About Our <span className="text-primary">Project </span>
            </h1>
            <div className="text-accent px-10 text-10px sm:h-auto sm:text-sm text-xl pb-5  pt-16 sm:pt-6 sm:text-justify  sm:px-0">
              <p>
                DocEngine is an online platform that allows users to read, edit,
                and
              </p>
              <p>
                share documents within the workspace. It allows users to invite
                other
              </p>
              <p>
                members to join, grant permissions, define blocks, and view
                their
              </p>
              <p>
                history after editing. It also maintains data for users to
                update later.
              </p>
              <p>edit, and share documents within the workspace.</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl text-center w-full pt-10 sm:pt-[50px] sm:text-2xl text-accent font-bold">
        Our<span className="text-primary pl-2">Members </span>
      </h1>
      <div className="Member  flex justify-center sm:px-5">
        <img src={Member} alt="" className="" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
