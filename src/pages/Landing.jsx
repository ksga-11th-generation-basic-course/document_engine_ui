import React from "react";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";
import literature from "../assets/landing_image/literature.svg";
import teamspirit from "../assets/landing_image/teamspirit.svg";
import rectangle from "../assets/landing_image/rectangle.svg";
import sharing from "../assets/landing_image/sharing.svg";
import group from "../assets/landing_image/group.svg";
import sharingicon from "../assets/landing_image/sharingicon.svg";
import document from "../assets/landing_image/document.svg";
import groupcard from "../assets/landing_image/groupcard.svg";
import sharingcard from "../assets/landing_image/sharingcard.svg";
import documentcard from "../assets/landing_image/documentcard.svg";
import { Footer } from "../components/Footer.jsx";

export const Landing = () => {
  return (
    <div className="bg-white ">
      <NavBar />
      <div className="pt-32  px-1 lg:p-8 lg:pt-32 md:pt-20 md:px-5 md:pl-0 ">
        {/* All document */}
        <div className="grid grid-cols-12 m-16 lg:-ml-2 md:flex md:flex-col">
          <dir className="col-span-4">
            <div className="text-accent ml-24 flex flex-col gap-8">
              <h1 className="font-bold text-4xl w-[550px] leading-[45px] lg:whitespace-nowrap lg:-ml-24 lg:text-[32px] md:whitespace-nowrap md:text-xl md:-mt-8 md:pr-3 ">
               All your <span className="text-primary ">Documents</span> <br />{" "} 
               
                in one <span className="text-primary">place</span> and{" "}
                <span className="text-primary">safe</span>!
              </h1>
              <p className="font-bold mb-12 text-xl lg:text-lg lg:-ml-24 lg:whitespace-nowrap md:whitespace-nowrap md:overflow-hidden md:text-14px md:text-sm md:pr-12 ">
                Make your wiki, docs & project in ONCE with the <br /> best
                security, edit your documents and work as a <br /> group.
              </p>
              {/*Get Started Button */}
              <div className="-mt-10">
                <Link className="bg-primary  rounded-md text-18px text-white px-8 py-3 font-semibold  lg:w-full lg:-ml-24 lg:text-xl md:text-sm md:px-4 md:py-2 ">
                  Get Started
                </Link>
              </div>
            </div>
          </dir>
          {/* Image */}
          <div className="col-span-8 w-[750px] mr-28 mx-auto lg:w-[340px] lg:-mr-10 lg:mt-40 md:ml-20 md:mt-6 md:w-[280px]">
            <img src={literature} className="" />
          </div>
        </div>
        {/* Line */}
        <div className="border-[2px] mr-48 ml-48 mt-24 border-gray-300 lg:w-[650px] lg:ml-8 lg:mt-14 md:w-[290px] md:ml-14 md:h-0 "></div>

        {/* We Provide Best */}
        <div className="mt-24 ">
          <div className="lg:-mt-7 lg:text-2xl">
            <h1 className="font-bold text-4xl text-accent text-center leading-[45px] md:ml-8 md:text-xl">
              We Provide Best <br />{" "}
              <span className="text-primary">Solution</span> For you
            </h1>
          </div>

          {/* Collaboration */}
          <div className="grid grid-cols-12 gap-y-20 gap-1 mr-36 ml-36 mt-20 lg:grid-cols-3 md:mt-4  ">
            
              <div className="col-span-4 lg:grid-cols-1 lg:ml-6  md:w-[170px] md:ml-4 ">
                <img src={teamspirit} className="mx-auto w-[320px] lg:w-[250px] lg:-ml-20 md:-ml-12" />
                <h1 className="mt-3 font-bold text-primary text-3xl text-center lg:-ml-72 lg:text-2xl md:text-lg md:-ml-24">
                  Collaboration
                </h1>
                <div className=" w-[300px] ml-28 lg:-ml-20 lg:text-xl  md:-ml-14">
                  <p className=" text-xl  text-accent text-center lg:w-[280px]  md:w-[200px] md:text-sm">
                    Coming together is a beginning, staying together is
                    progress, and working together is success.
                  </p>
                </div>
              </div>

              {/* Productivity */}
              <div className="col-span-4 lg:grid-cols-2 lg:ml-24 lg:-mt-10 md:ml-32 md:w-[170px] ">
                <img src={rectangle} className="mx-auto w-[320px] lg:ml-28 md:-ml-40" />
                <h1 className="mt-3 font-bold ml-4 text-primary text-3xl text-center lg:ml-44 md:text-lg md:-ml-80">
                  Productivity
                </h1>
                <div className="w-[300px] ml-32 lg:ml-32 lg:text-base ">
                  <p className="text-xl text-accent md:text-[12px] text-center lg:-ml-4 lg:w-[300px] md:-ml-80 md:w-[250px] md:text-sm">
                    Real integrity is doing the right thing, knowing that
                    nobody’s going to know whether you did it or not.
                  </p>
                </div>
              </div>
            

            {/* Sharing */}
            <div className="col-span-4 lg:grid-cols-3 md:w-[170px] md:-ml-10">
              <img src={sharing} className="mx-auto w-[320px] lg:-ml-8 lg:w-[290px] lg:-mt-10  md:ml-0" />
              <h1 className="mt-3 font-bold text-primary text-3xl text-center lg:-ml-48 md:-ml-1 md:text-lg md:pl-6">
                Sharing
              </h1>
              <div className="w-[300px] ml-32 lg:-ml-8  lg:text-base">
                <p className="text-xl text-accent md:text-[12px] text-center md:ml-6 md:w-[200px]  md:text-sm">
                  Love only grows by sharing. You can only have more for
                  yourself by giving it away to others.
                </p>
              </div>
            </div>
          </div>
          
        </div>
        {/* Learn the best tool */}
        <div className="grid grid-cols-12 gap-y-20 mt-36 items-center lg:mt-16 md:flex md:-ml-1 md:flex-col">
          <div className="col-span-6 mx-auto ml-80 lg:ml-6">
            <h1 className="font-bold text-4xl  text-accent leading-[45px] md:px-6  md:whitespace-nowrap md:text-xl ">
              Learn the best <span className="text-primary">tools</span> <br />
              and <span className="text-primary">platforms</span>
            </h1>
            <p className="text-18px  text-accent lg:w-[420px] md:px-6 md:text-[12px] md:pt-5 md:text-sm md:whitespace-normal">
              We focus on industry leading platforms so that you can <br /> be
              prepared for your next job. Then we teach all <br /> we van about
              them.
            </p>
          </div>
          {/* Icon */}
          <div className="col-span-6  mx-auto ">
            <div className="flex justify-center items-center gap-x-10 lg:w-[50px] lg:ml-28 lg:-mt-10 md:ml-4 md:w-[40px] ">
              <img src={group} />
              <img src={sharingicon} />
              <img src={document} />
            </div>
          </div>
        </div>

        {/* Group */}
        <div className="grid grid-cols-12 mt-24 ml-24 lg:mt-5 lg:ml-16 lg:gap-4 md:w-[190px] md:flex md:flex-col md:ml-16 md:gap-y-10 ">
          <div className="col-span-4 ml-32 w-[400px] mx-auto lg:-ml-14 lg:w-[260px] md:-mb-16 md:w-[250px] md:-ml-12 ">
            <img src={groupcard} />
          </div>
          {/* Sharing */}
          <div className="col-span-4 ml-12 w-[400px] mx-auto lg:-ml-14 lg:w-[260px] md:-mb-16 md:w-[250px] md:ml-16">
            <img src={sharingcard} />
          </div>
          {/* Document */}
          <div className="col-span-4 -ml-1 w-[400px] mx-auto lg:-ml-14 lg:w-[260px] md:-mb-12 md:w-[250px] md:-ml-12">
            <img src={documentcard} />
          </div>
        </div>
      </div>
      <div className="md:h-10 md:w-full md:mb-12">
        <Footer />
      </div>
    </div>
    // 
    
  );
};
