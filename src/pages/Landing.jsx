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
import card_document from "../assets/landing_image/card_document.svg";
import { Footer } from "../components/Footer.jsx";

export const Landing = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-32  px-20 md:pt-20 lg:p-8 lg:pt-32 md:p-0">
        {/* All document */}
        <div className="grid grid-cols-12 lg:-ml-2  md:flex md:flex-col md:ml-0">
          <div className="col-span-4 ml-5 md:ml-0">
            <div className="text-accent flex flex-col gap-8 mt-10 lg:ml-4 md:mt-0 md:gap-y-5">
              <h1 className="font-bold text-36px leading-[45px] lg:whitespace-nowrap lg:text-[34px] md:ml-10 md:whitespace-nowrap md:text-22px  md:mt-6 md:pr-3  md:leading-9">
               All your <span className="text-primary ">Documents</span> <br />
                in one <span className="text-primary">place</span> and{" "}
                <span className="text-primary">safe</span>!
              </h1>

              <p className="font-bold text-20px lg:text-lg lg:w-80 md:w-[350px] md:ml-10 md:overflow-hidden md:text-14px md:text-sm md:pr-12 ">
                Make your wiki, docs & project in ONCE with the best
                security, edit your documents and work as a group.
              </p>

              {/*Get Started Button */}
              <div className="mt-5">
                <Link to={"/signin"}  className="bg-primary rounded-2xl text-18px text-white px-10 py-4 font-semibold lg:rounded-lg lg:text-16px lg:px-7 lg:py-3.5 md:rounded-md md:ml-10 md:text-sm md:px-6 md:py-2 hover:text-white">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="col-span-8 mx-auto lg:w-[300px] lg:mr-7 lg:mt-14  md:ml-16 md:mt-6 md:w-[280px]">
            <img src={literature} />
          </div>
        </div>

        {/* Line */}
        <div className="border-[2px] mt-24 border-gray-300 lg:w-[650px] lg:ml-8 lg:mt-14 md:w-[290px] md:ml-14 md:h-[1px] "></div>

        {/* We Provide Best */}
        <div className="mt-24">
          <div className="lg:-mt-7 lg:text-2xl">
            <h1 className="font-bold text-36px text-accent text-center leading-[45px] lg:text-[34px]  md:text-22px">
              <div className="md:-mb-2">We Provide Best </div>
              <span className="text-primary  ">Solution</span> For you
            </h1>
          </div>

          <div className="grid grid-cols-12 gap-y-20 mt-20 lg:grid-cols-3 md:mt-10 md:gap-y-10"> 
              {/* Collaboration */}
              <div className="col-span-4">
                <img src={teamspirit} className="mx-auto lg:w-[250px] md:w-[200px]" />
                <h1 className="mt-3 font-bold text-primary text-3xl text-center lg:text-28px md:text-18px">
                  Collaboration
                </h1>
                <div className="px-28 lg:px-40">
                  <p className="text-20px text-accent mt-5 text-center lg:mt-2 md:-ml-20 md:w-[250px] md:text-12px">
                    Coming together is a beginning, staying together is
                    progress, and working together is success.
                  </p>
                </div>
              </div>

              {/* Productivity */}
              <div className="col-span-4">
                <img src={rectangle} className="mx-auto lg:w-[200px]" />
                <h1 className="mt-3 font-bold text-primary text-3xl text-center lg:text-28px md:text-18px">
                  Productivity
                </h1>
                <div className="px-28 lg:px-40">
                  <p className="text-20px text-accent mt-5 lg:mt-2 text-center md:-ml-24 md:w-[250px] md:text-12px">
                    Real integrity is doing the right thing, knowing that nobody’s going to know whether you did it or not.
                  </p>
                </div>
              </div>
            

            {/* Sharing */}
            <div className="col-span-4 ">
              <img src={sharing} className="mx-auto lg:w-[290px] md:w-[200px]" />
              <h1 className="mt-3 font-bold text-primary text-3xl text-center lg:text-26px md:text-18px">
                Sharing
              </h1>
              <div className="px-28 lg:px-40">
                <p className="text-20px text-accent mt-5  text-center lg:mt-2 lg:leading-8 md:leading-5  md:-ml-24 md:w-[250px] md:text-12px">
                  Love only grows by sharing. You can only have more for yourself by giving it away to others.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learn the best tool */}
        <div className="grid grid-cols-12 gap-y-20 mt-36 ml-60 items-center lg:ml-0 md:flex md:flex-col lg:mb-96 md:mt-20">
          <div className="col-span-6 mx-auto lg:ml-6">
            <h1 className="font-bold text-36px  text-accent leading-[45px] md:text-22px md:ml-5 md:leading-7">
              <div>Learn the best <span className="text-primary">tools</span> </div>
              <div>and <span className="text-primary">platforms</span></div>
            </h1>
            <p className="text-20px  text-accent mt-5 lg:w-[420px] md:ml-5 md:text-14px md:w-72">
              We focus on industry leading platforms so that you can be
              prepared for your next job. Then we teach all we van about
              them.
            </p>
          </div>

          {/* Icon */}
          <div className="col-span-6 mx-auto lg:ml-28">
            <div className="flex justify-center items-center gap-x-10 md:-ml-16 md:-mt-16">
                <div className="bg-primary shadow-icon rounded-full ">
                      <div className="relative flex justify-center items-center w-16 h-16 lg:w-12 lg:h-12  md:w-10 md:h-10">
                          <img src={group}  className="absolute p-2"/>
                      </div>
                </div>
                
                <div className="bg-primary shadow-icon rounded-full ">
                      <div className="relative flex justify-center items-center bg-primary w-16 h-16 rounded-full lg:w-12 lg:h-12 md:w-10 md:h-10 ">
                          <img src={sharingicon}  className="absolute  p-2 w-14"/>
                      </div>
                </div>

                <div className="bg-primary shadow-icon rounded-full ">
                      <div className="relative flex justify-center items-center bg-primary w-16 h-16 rounded-full lg:w-12 lg:h-12 md:w-10 md:h-10 ">
                          <img src={document}  className="absolute  p-2 w-14"/>
                      </div>
                </div>
            </div>
          </div>
        </div>

        {/* Card Detail */}
        <div className="grid grid-cols-12 mt-24 px-16 lg:mt-5 md:px-0 md:-mt-10 md:pb-28"> 
        {/* Group */}
          <div className="col-span-4 mx-auto lg:col-span-12 lg:ml-24 md:ml-52 ">
            <img src={card_document} className="lg:absolute lg:w-96 lg:-mt-72 lg:-ml-44 md:w-80"/>
            <span className="absolute lg:mt-36 lg:-ml-52 md:mt-32 md:-ml-56">
                <img src={group} className="-mt-[350px] ml-[105px] w-12 lg:ml-[118px] lg:w-10 lg:-mt-[342px] md:w-8 md:ml-[122px] md:-mt-[340px]"/>
                  <div className="-mt-[40px] ml-[190px] text-accent text-24px font-bold md:text-22px md:-mt-[32px] md:ml-[180px]">Group</div>
                  <div className="mt-7  ml-[90px] text-accent text-20px w-72 lg:text-16px lg:w-56 lg:ml-28 md:mt-5 md:text-14px md:w-52">
                          Alone we can do so little together we can do so much.
                          Teamwork is the collaborative effort of a  group of individuals working towards a common goal.
                  </div>
            </span>
          </div>

           {/* Sharing */}
           <div className="col-span-4 mx-auto lg:mt-20 lg:-mr-64 md:ml-52 md:mt-5">
                  <img src={card_document}  className="lg:absolute lg:w-96 lg:-ml-44  md:w-80"/>
                 <span className="absolute lg:mt-[435px] lg:-ml-52">
                      <img src={sharingicon} className="-mt-[350px] ml-[107px] w-11 lg:w-9 lg:ml-[120px] lg:-mt-[345px] md:w-8 md:ml-[107px] md:-mt-[360px]"/>
                        <div className="-mt-[40px] ml-[190px] text-accent text-24px font-bold lg:-mt-9 md:text-22px md:-mt-[32px] md:ml-[165px]">Sharing</div>
                        <div className="mt-7 ml-[90px] text-accent text-20px w-72 lg:text-16px lg:w-56 lg:ml-28 md:ml-24  md:mt-5 md:text-14px md:w-52">
                                  Sharing is the act of giving or exchanging something with others. In a work setting, sharing can take many forms, including sharing ideas, knowledge, resources, or feedback.
                        </div>
                 </span>
          </div>

          {/* Document */}
          <div className="col-span-4 mx-auto lg:mt-[400px] lg:-ml-24 md:ml-[80px] md:mt-[340px]">
                  <img src={card_document} className="lg:absolute lg:w-96 lg:-ml-44 md:w-80"/>
                  <span className="absolute lg:mt-[435px] lg:-ml-52">
                          <img src={document} className="-mt-[345px] ml-[107px] w-11 lg:w-10 lg:ml-[120px] lg:-mt-[343px]  md:w-8 md:ml-[107px] md:-mt-[357px]"/>
                          <div className="-mt-[40px] ml-[190px] text-accent text-24px font-bold md:text-22px md:-mt-[32px] md:ml-[170px]">Document</div>
                          <div className="mt-7 ml-[90px] text-accent text-20px w-72 lg:text-15px lg:w-56 lg:ml-28 lg:mt-7 md:ml-24  md:mt-5 md:text-14px md:w-52">
                          Documenting is the act of creating a record or written account of information, events, or activities. In a work setting, documenting is often necessary to ensure accurate and consistent communication,
                          </div>
                  </span>
          </div>
        </div>
      </div>

      <div className="lg:mt-96 md:h-10 md:w-full">
        <Footer />
      </div>
    </div>
  );
};