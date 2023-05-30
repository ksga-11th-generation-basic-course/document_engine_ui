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
    <div className="bg-white">
      <NavBar />
      
      <div className="pt-32 px-16">
        <div className="grid grid-cols-12">
          <dir className="col-span-4">
            <div className="text-accent flex flex-col gap-8">
              <h1 className="font-bold text-36px leading-[45px]">
                All your <span className="text-primary">Documents</span> <br />{" "}
                in one <span className="text-primary">place</span> and{" "}
                <span className="text-primary">safe</span>!
              </h1>
              <p className="font-bold text-18px">
                Make your wiki, docs & project in ONCE with the <br /> best
                security, edit your documents and work as a <br /> group.
              </p>
              <div>
                <Link className="bg-primary px-8 py-3 rounded-xl font-bold text-18px text-white">
                  Get Started
                </Link>
              </div>
            </div>
          </dir>
          <div className="col-span-8 mx-auto">
            <img src={literature}/>
          </div>
        </div>
        
        <div className="border-[2px] mt-24 border-gray-300"></div>

        <div className="mt-24">
          <div>
            <h1 className="font-bold text-36px text-accent text-center leading-[45px]">
              We Provide Best <br />{" "}
              <span className="text-primary">Solution</span> For you
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-y-20 mt-20">
            <div className="col-span-4">
              <img src={teamspirit} className="mx-auto" />
              <h1 className="mt-3 font-bold text-primary text-2xl text-center">
                Collaboration
              </h1>
              <p className="text-18px text-accent text-center">
                Coming together is a beginning, staying <br /> together is
                progress, and working <br /> together is success.
              </p>
            </div>
            <div className="col-span-4">
              <img src={rectangle} className="mx-auto" />
              <h1 className="mt-3 font-bold text-primary text-2xl text-center">
                Productivity
              </h1>
              <p className="text-18px text-accent text-center">
                Real integrity is doing the right thing, knowing <br /> that
                nobody’s going to know whether you <br /> did it or not.
              </p>
            </div>
            <div className="col-span-4">
              <img src={sharing} className="mx-auto" />
              <h1 className="mt-3 font-bold text-primary text-2xl text-center">
                Sharing
              </h1>
              <p className="text-18px text-accent text-center">
                Love only grows by sharing. You can only <br /> have more for
                yourself by giving it <br /> away to others.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-20 items-center mt-24">
          <div className="col-span-6 mx-auto">
            <h1 className="font-bold text-36px text-accent leading-[45px]">
              Learn the best <span className="text-primary">tools</span> <br />
              and <span className="text-primary">platforms</span>
            </h1>
            <p className="text-18px text-accent">
              We focus on industry leading platforms so that you can <br /> be
              prepared for your next job. Then we teach all <br /> we van about
              them.
            </p>
          </div>
          <div className="col-span-6 mx-auto">
            <div className="flex justify-center items-center gap-x-10">
              <img src={group} />
              <img src={sharingicon} />
              <img src={document} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-24">
          <div className="col-span-4 mx-auto">
            <img src={groupcard} />
          </div>
          <div className="col-span-4 mx-auto">
            <img src={sharingcard} />
          </div>
          <div className="col-span-4 mx-auto">
            <img src={documentcard} />
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};
