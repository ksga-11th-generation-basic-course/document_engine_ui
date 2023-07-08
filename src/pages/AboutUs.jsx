import React from "react";
import Slider from "../assets/images/about/about.svg";
import Bg from "../assets/images/about/BgAbout.svg";
import Icon from "../assets/images/about/Icon.svg";
import Member from "../assets/images/about/Member.svg";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer.jsx";
export const AboutUs = () => {
  return (
    <div className="bg-white overflow-hidden sm:overflow-hidden">
      <div>
        <NavBar />
      </div>

      {/*  */}
      <div className="SlideBar pt-[76px] sm:pt-[70px]  md:pt-[32px] lg:pt-[70px]">
        <div className="SlideBar2 relative">
          <div className="absolute left-0  text-6xl xl:top-24 font-bold top-44  text-primary px-20 sm:-left-10 lg:top-12 lg:-left-5 lg:text-5xl  sm:text-24px sm:top-2">
            <h1 className="sm:whitespace-nowrap sm:pb-2">What & Who</h1>
            <h1 className="sm:whitespace-nowrap md:-mt-8">We Are</h1>
          </div>
        </div>

        <div className="w-full">
          <img
            src={Slider}
            className="w-full md:w-full md:h-44 sm:h-full sm:w-full"
          />
        </div>
      </div>

      {/*  */}
      <div className="-ml-10 flex flex-row lg:flex-col lg:-mt-14 lg:-ml-5 sm:flex-col md:flex md:flex-col  w-screen justify-evenly">
        <div className=" flex flex-col  lg:ml-20 ">
          <div className="mainTitle font-bold text-4xl pt-48 md:pt-10 sm:pt-28 sm:text-18px sm:-ml-5 sm:leading-6">
            <h1 className="pb-35 text-accent xl:whitespace-nowrap xl:pt-5">
              All your <span className="text-primary pr-2">Documents</span>in
              one <span className="text-primary "> place</span>
            </h1>
            <h1 className="text-accent md:-mt-7">
              and<span className="text-primary p-2">safe! </span>
            </h1>
          </div>
          <div className="pt-10 lg:text-xl leading-normal xl:pb-5 text-2xl w-96 sm:pt-2 sm:text-12px sm:-ml-5 sm:pr-16 text-[#575E69] md:leading-6 md:mt-0">
            DocEngine is a system that includes the possibility to customize the
            document with auto-saving and ease when the users want to share
            those documents within the group.
          </div>
        </div>
        <div className="img pt-20 lg:pl-32 lg:-mt-10 sm:-mt-20">
          <img src={Bg} alt="bg" className="w-[650px] lg:w-[550px] sm:w-[300px] sm:-ml-10" />
        </div>
      </div>

      {/* About about project */}
      <div className="bg-sky-50 mt-20  h-[400px] lg:h-[380px] md:mt-10 md:h-60">
        <div className="px-52 py-10 sm:flex sm:flex-col sm:px-10">
          <div className="flex items-center  sm:py-4 ">
            <div className="justify-center flex-col pr-60 lg:hidden sm:hidden  sm:text-xl sm:flex-row ">
              <img src={Icon} alt="" className=" w-10 pb-2 sm:w-16 " />
              <div className="text-4xl sm:text-4xl sm:flex sm:flex-col font-bold text-accent">
                  <div>Why </div>Doc
                 <span className="text-primary">Engine?</span>
              </div>
            </div>
            <div className="pt-10 lg:-ml-40 lg:pt-0 sm:indent-[0.5px] sm:text-xl  sm:px-0 md:-mt-10 ">
              <h1 className="text-4xl text-center -ml-10 sm:text-18px sm:text-center font-bold text-accent md:ml-36">
                About Our <span className="text-primary">Project </span>
              </h1>
              <div className="text-accent text-2xl pb-12  pt-16 w-[900px] leading-9 lg:w-[670px] lg:-mt-5 lg:pl-5  md:pt-10 max-sm:text-justify max-sm:px-2 md:-mt-7  md:text-12px md:pl-40 md:w-[480px] md:leading-6">
                  DocEngine is an online platform that allows users to read,
                  edit, and
                  share documents within the workspace. It allows users to
                  invite other
                  members to join, grant permissions, define blocks, and view
                  their
                  history after editing. It also maintains data for users to
                  update later.
                edit, and share documents within the workspace.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our members */}
      <div className="mt-10 -mb-20 md:mt-0 lg:-mb-40">
        <h1 className="text-4xl text-center w-full pt-10 max-sm:pt-2 sm:text-20px text-accent font-bold">
          Our<span className="text-primary pl-2">Members </span>
        </h1>
        <div className="Member my-20 flex justify-center items-center lg:inline-block lg:ml-24 lg:mt-14 sm:px-5 md:ml-0 md:mt-5">
          <div className="text-22px space-y-7 md:text-12px md:ml-3">
            <div className=" bg-[#EDF9FF] w-fit px-4 py-2 rounded-2xl space-x-2 ml-16 lg:ml-0 md:space-x-0">
              <span className="font-semibold">KHENG SOVANAK</span>
              <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold">
                <span>@</span>
              </span>
            </div>

            <div className=" bg-[#EDF9FF] w-fit  px-4 py-2 rounded-2xl space-x-2  md:space-x-0">
              <span className="font-semibold">KHENG MENGLOT</span>
              <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold">
                <span>@</span>
              </span>
            </div>

            <div className=" bg-[#EDF9FF] w-fit  px-4 py-2 rounded-2xl space-x-2 ml-8 lg:ml-8 md:ml-4  md:space-x-0">
              <span className="font-semibold">TITH OUDDOM</span>
              <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold">
                <span>@</span>
              </span>
            </div>

            <div className=" bg-[#EDF9FF] w-fit px-4 py-2 rounded-2xl space-x-2 ml-16 lg:ml-0  md:space-x-0">
              <span className="font-semibold">YAN SOVANSEYHA</span>
              <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold">
                <span>@</span>
              </span>
            </div>
          </div>

          <div className="px-10 lg:hidden">
            <img src={Member} alt="" className="" />
          </div>
          <div className="text-20px space-y-8 lg:-mt-[280px] lg:ml-[350px] md:text-12px md:ml-44 md:-mt-[220px] lg:space-y-7 ">
            <div className=" bg-[#EDF9FF] w-fit px-4 py-2 rounded-2xl space-x-2  md:space-x-0">
            <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold">
                <span>@</span>
              </span>
              <span className="font-semibold">RUOS RAKSA</span>
            </div>

            <div className=" bg-[#EDF9FF] w-fit px-4 py-2 rounded-2xl space-x-2 ml-16 lg:ml-0  md:space-x-0">
            <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold">
                <span>@</span>
              </span>
              <span className="font-semibold">KHY SEANGNGORN</span>
            </div>

            <div className=" bg-[#EDF9FF] w-fit px-4 py-2 rounded-2xl space-x-2 ml-16 lg:ml-0  md:space-x-0">
            <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold">
                <span>@</span>
              </span>
              <span className="font-semibold">CHHUM LYHENG</span>
            </div>

            <div className=" bg-[#EDF9FF] w-fit px-4 py-2 rounded-2xl space-x-2  md:space-x-0">
            <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold">
                <span>@</span>
              </span>
              <span className="font-semibold">SORN SREYNORNG</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="lg:mt-52 md:mt-32">
        <Footer />
      </div>
    </div>
  );
};