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
          <div className="absolute left-0 text-6xl font-bold top-40 text-primary px-20  lg:top-12 md:left-0  md:text-4xl md:-mt-6  md:leading-6 ">
            <h1 className="md:whitespace-nowrap md:pb-2">What & Who</h1>
            <h1 className="md:whitespace-nowrap">We Are</h1>
          </div>
        </div>
        <div className="w-full">
          <img
            src={Slider}
            className="w-full md:w-full md:h-full"
          />
        </div>
      </div>
      {/* What & Who We Are */}
      <div className="flex flex-row lg:flex-col w-screen justify-evenly px-20 md:px-10 md:flex md:flex-col ">
        <div className=" flex flex-col   ">
          <div className="mainTitle font-bold text-4xl pt-36 md:pt-10 md:text-2xl md:mt-12">
            <h1 className="pb-35 text-accent md:text-xl md:whitespace-nowrap">
              All your <span className="text-primary pr-2">Documents</span>in
              one <span className="text-primary "> place</span>
            </h1>
            <h1 className="text-accent  md:text-xl">
              and<span className="text-primary p-2">safe! </span>
            </h1>
          </div>
          <div className="pt-10 leading-normal text-2xl w-96 text-[#575E69]  lg:text-xl md:pt-2 md:text-sm md:pr-16">
            DocEngine is a system that includes the possibility to customize the
            document with auto-saving and ease when the users want to share
            those documents within the group.
          </div>
        </div>
        <div className="img ">
          <img src={Bg} alt="" />
        </div>
      </div>
      {/* Why Doc Engine? */}
      <div className=" hidden:bg-sky-50 bg-sky-50  px-10 md:flex md:flex-col md:px-10">
        <div className=" flex justify-evenly items-center py-16 md:py-4 ">
          <div className=" flex justify-center flex-col md:hidden  md:text-xl md:flex-row ">
            <img src={Icon} alt="" className="w-10 pb-2 md:w-16 "/>
            <div className="text-5xl font-bold text-accent lg:text-4xl">
              <h1>Why</h1>
              <h1>
                Doc <span className="text-primary">Engine?</span>
              </h1>
            </div>
          </div>
          <div className=" lg:px-5 md:text-xl md:px-0 md:indent-[0.5px]">
            <h1 className="text-4xl text-center font-bold text-accent md:text-center md:text-3xl ">
              About Our <span className="text-primary">Project </span>
            </h1>
            <div className="text-accent px-10 text-10px w-[650px] text-xl pb-5 pt-16 lg:w-[500px] lg:-mr-14 md:text-sm md:w-[340px] md:-ml-12 md:pt-6 md:text-justify  md:px-1">
                DocEngine is an online platform that allows users to read, edit,
                and share documents within the workspace. It allows users to invite
                other members to join, grant permissions, define blocks, and view
                their history after editing. It also maintains data for users to
                update later, edit, and share documents within the workspace.
            </div>
          </div>
        </div>
      </div>

      {/* Our Members */}
      <h1 className="text-4xl text-center w-full pt-10 text-accent font-bold  md:pt-[50px] md:text-2xl">
        Our<span className="text-primary pl-2">Members </span>
      </h1>
      <div className="Member  flex justify-center md:px-5 md:py-2">
        <img src={Member} alt="" className="" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};