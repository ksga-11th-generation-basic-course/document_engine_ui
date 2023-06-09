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
        <div className="grid grid-cols-12 lg:-ml-2 md:flex md:flex-col">
          <dir className="col-span-4">
            <div className="text-accent flex flex-col gap-8">
              <h1 className="font-bold text-36px leading-[45px] lg:whitespace-nowrap lg:text-[32px] md:whitespace-nowrap md:text-xl md:ml-6 md:mt-6 md:pr-3 ">
               All your <span className="text-primary ">Documents</span> <br />{" "} 
               
                in one <span className="text-primary">place</span> and{" "}
                <span className="text-primary">safe</span>!
              </h1>
              <p className="font-bold text-18px lg:text-lg lg:whitespace-nowrap md:whitespace-nowrap md:overflow-hidden md:text-14px md:text-sm md:pr-12 md:ml-6 ">
                Make your wiki, docs & project in ONCE with the <br /> best
                security, edit your documents and work as a <br /> group.
              </p>
              {/*Get Started Button */}
              <div>
                <Link className="bg-primary rounded-md text-18px text-white px-8 py-3 font-semibold lg:text-xl md:ml-9 md:text-sm md:px-4 md:py-2 ">
                  Get Started
                </Link>
              </div>
            </div>
          </dir>
          {/* Image */}
          <div className="col-span-8 mx-auto lg:w-[300px] lg:-mr-4 lg:mt-20  md:ml-20 md:mt-6 md:w-[280px]">
            <img src={literature} className="" />
          </div>
        </div>
        {/* Line */}
        <div className="border-[2px] mt-24 border-gray-300 lg:w-[650px] lg:ml-8 lg:mt-14 md:w-[290px] md:ml-14 md:h-0 "></div>

        {/* We Provide Best */}
        <div className="mt-24">
          <div className="lg:-mt-7 lg:text-2xl">
            <h1 className="font-bold text-36px text-accent text-center leading-[45px] md:text-xl">
              We Provide Best <br />{" "}
              <span className="text-primary">Solution</span> For you
            </h1>
          </div>

          {/* Collaboration */}
          <div className="grid grid-cols-12 gap-y-20 mt-20 lg:grid-cols-3 md:flex md:flex-col md:mt-4 ">
            
              <div className="col-span-4 lg:grid-cols-1 lg:mr-64 ">
                <img src={teamspirit} className="mx-auto lg:w-[290px] md:ml-32 md:w-[290px]" />
                <h1 className="mt-3 font-bold text-primary text-2xl text-center lg:text-2xl md:text-lg md:ml-36">
                  Collaboration
                </h1>
                <div className=" w-[300px] ml-36 lg:ml-20 lg:text-xl md:ml-16 ">
                  <p className="text-18px text-accent text-center md:w-[280px] md:text-sm">
                    Coming together is a beginning, staying together is
                    progress, and working together is success.
                  </p>
                </div>
              </div>

              {/* Productivity */}
              <div className="col-span-4 lg:grid-cols-2 lg:ml-52 lg:-mt-10">
                <img src={rectangle} className="mx-auto md:-ml-24" />
                <h1 className="mt-3 font-bold text-primary text-2xl text-center md:text-lg md:-ml-48">
                  Productivity
                </h1>
                <div className="w-[300px] ml-40 lg:ml-32 lg:text-base ">
                  <p className="text-18px text-accent md:text-[12px] text-center md:-ml-64 md:w-[250px] md:text-sm">
                    Real integrity is doing the right thing, knowing that
                    nobody’s going to know whether you did it or not.
                  </p>
                </div>
              </div>
            

            {/* Sharing */}
            <div className="col-span-4 lg:grid-cols-3 ">
              <img src={sharing} className="mx-auto lg:ml-24 lg:w-[290px] lg:-mt-10 md:w-[170px] md:ml-28" />
              <h1 className="mt-3 font-bold text-primary text-2xl text-center lg:-ml-52 md:-ml-1 md:text-lg md:pl-6">
                Sharing
              </h1>
              <div className="w-[300px] ml-40 lg:ml-28  lg:text-base">
                <p className="text-18px text-accent md:text-[12px] text-center md:-ml-8 md:w-[250px] md:text-sm">
                  Love only grows by sharing. You can only have more for
                  yourself by giving it away to others.
                </p>
              </div>
            </div>
          </div>
          
        </div>
        {/* Learn the best tool */}
        <div className="grid grid-cols-12 gap-y-20 mt-36 items-center lg:mt-16 md:flex md:flex-col">
          <div className="col-span-6 mx-auto lg:ml-6">
            <h1 className="font-bold text-36px  text-accent leading-[45px] md:px-6  md:whitespace-nowrap md:text-xl ">
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
          <div className="col-span-6 mx-auto ">
            <div className="flex justify-center items-center gap-x-10 lg:w-[50px] lg:ml-28 lg:-mt-10 md:ml-4 md:w-[40px] ">
              <img src={group} />
              <img src={sharingicon} />
              <img src={document} />
            </div>
          </div>
        </div>

        {/* Group */}
        <div className="grid grid-cols-12 mt-24 lg:mt-5 md:w-[190px] md:flex md:flex-col md:ml-16 md:gap-y-10 ">
          <div className="col-span-4 mx-auto md:-mb-16 md:w-[250px] md:-ml-12 ">
            <img src={groupcard} />
          </div>
          {/* Sharing */}
          <div className="col-span-4 mx-auto md:-mb-16 md:w-[250px] md:ml-16">
            <img src={sharingcard} />
          </div>
          {/* Document */}
          <div className="col-span-4 mx-auto md:-mb-12 md:w-[250px] md:-ml-12">
            <img src={documentcard} />
          </div>
        </div>
      </div>
      <div className="md:h-10 md:w-full md:mb-12">
        <Footer />
      </div>
    </div>
  );
};
