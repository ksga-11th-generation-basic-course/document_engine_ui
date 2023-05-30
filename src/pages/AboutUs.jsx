import React from "react";
import Slider from "../assets/images/about/about.svg";
import Bg from "../assets/images/about/BgAbout.svg";
import Icon from "../assets/images/about/Icon.svg";
import Member from "../assets/images/about/Member.svg";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer.jsx";
export const AboutUs = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="SlideBar pt-8">
        <div className="SlideBar2 relative">
          <div className="absolute left-0  text-6xl max-sm:text-2xl text-primary px-20 font-bold top-32 max-sm:top-8 max-sm:leading-6 max-sm:right-40 max-sm:whitespace-nowrap">
            <h1 className="">What & Who</h1>
            <h1>We Are</h1>
          </div>
        </div>
        <div className="w-full">
          <img src={Slider} className="w-full" />
        </div>
      </div>
      <div className="flex flex-row max-sm:flex-col w-screen justify-evenly px-20 max-sm:px-10 ">
        <div className=" flex flex-col   ">
          <div className="mainTitle font-bold text-4xl pt-36 max-sm:pt-16 max-sm:text-2xl">
            <h1 className="pb-35 text-accent">
              All your <span className="text-primary pr-2">Documents</span>in
              one <span className="text-primary "> place</span>
            </h1>
            <h1 className="text-accent">
              and<span className="text-primary p-2">safe! </span>
            </h1>
          </div>
          <div className="pt-10 leading-normal text-2xl w-96  max-sm:px-2 max-sm:text-xl text-[#575E69]">
            DocEngine is a system that includes the possibility to customize the
            document with auto-saving and ease when the users want to share
            those documents within the group.
          </div>
        </div>
        <div className="img ">
          <img src={Bg} alt="" />
        </div>
      </div>
      <div className=" min-sm:h-96 hidden:bg-sky-50 lg:bg-sky-50 px-10 max-sm:px-10">
        <div className=" flex justify-evenly max-sm:flex-col  items-center py-16 max-sm:py-6 ">
          <div className=" flex justify-center flex-col max-sm:hidden  max-sm:text-xl max-sm:flex-row max-sm:pb-10">
            <img src={Icon} alt="" className="w-10 pb-2 max-sm:w-16 " />
            <div className="text-5xl max-sm:text-4xl font-bold text-accent">
              <h1>Why</h1>
              <h1>
                Doc <span className="text-primary">Engine?</span>
              </h1>
            </div>
          </div>
          <div className="max-sm:indent-[0.5px] max-sm:text-xl   max-sm:border-2 max-sm:border-primary max-sm:py-3 max-sm:px-0 ">
            <h1 className="text-4xl text-center max-sm:text-4xl max-sm:text-center font-bold text-accent">
              About Our <span className="text-primary">Project </span>
            </h1>
            <div className="text-accent text-2xl pb-12  pt-16 max-sm:pt-5 max-sm:text-justify max-sm:px-2  ">
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
      <h1 className="text-4xl text-center w-full pt-10 max-sm:pt-2 max-sm:text-2xl text-accent font-bold">
        Our<span className="text-primary pl-2">Members </span>
      </h1>
      <div className="Member  flex justify-center max-sm:px-0">
        <img src={Member} alt="" className="" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
