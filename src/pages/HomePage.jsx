import React from "react";
import Navbar from "./Navbar";
import Pic from "../assets/images/Homepage/Literature-bro 1.svg";
import Logo from "../assets/images/Logo.svg";
import Reset from "../assets/images/Set_New_pass.svg";
import Card1 from "../assets/images/Card/Card1.svg";
import Card2 from "../assets/images/Card/Card2.svg";
import Card3 from "../assets/images/Card/Card3.svg";
import Icon1 from "../assets/images/Icon/Icon1.svg";
import Icon2 from "../assets/images/Icon/Icon2.svg";
import Icon3 from "../assets/images/Icon/Icon3.svg";
import Document from "../assets/images/Homepage/Document.svg";
import Sharing from "../assets/images/Homepage/Sharing.svg";
import Group from "../assets/images/Homepage/Group 70.svg";
import FooterMain from "./FooterMain";
export default function HomePage() {
  return (
    <div className="w-full">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="main px-20 max-sm:px-10 flex flex-row">
        <div className="grid grid-cols-3 gap-4 pt-[10rem]  max-sm:pt-[6rem] max-lg:flex max-lg:flex-col  max-md:flex max-md:flex-col">
          <div className="col-span-1 space-y-8">
            <div className="font-bold text-5xl max-sm:text-3xl max-lg:text-xl max-lg:whitespace-pre max-md:whitespace-pre max-md:text-lg">
              <h1 className="pb-5 max-sm:pb-0.5 text-accent">
                All your <span className="text-primary">Documents</span>
              </h1>
              <h1 className="text-accent">
                in one <span className="text-primary">place</span>and{" "}
                <span className="text-primary">safe!</span>
              </h1>
            </div>
            <div className="font-bold text-22px max-sm:pt-1 max-lg:text-xl max-lg:whitespace-pre max-sm:text-sm max-sm:whitespace-pre max-md:whitespace-pre text-accent">
              <p>
                Make your wiki, docs & project in ONCE with the
              </p>
              <p>
                best security, edit your documents and work as a
              </p>
              <p>group.</p>
            </div>
            <div className="button">
              <button className="bg-primary max-sm:px-5 max-sm:py-1 text-white px-10 py-2 border rounded-xl font-bold text-22px">
                <a href="#">Get Start</a>
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <img src={Pic} />
          </div>
        </div>
      </div>

      <div className="px-20 pt-20 max-sm:px-6 max-sm:pt-3">
        <div className="py-[1px] bg-accent"></div>
      </div>
      <div className="text text-center px-20 pt-16 max-sm:pt-8 font-bold">
        <h1 className="text-gray-500 text-4xl max-sm:whitespace-pre  max-sm:text-3xl">
          We Provide Best{" "}
        </h1>
        <h2 className="text-gray-500 text-4xl pt-3 max-sm:text-3xl">
          {" "}
          <span className="text-blue-500 pr-2">Solution</span>For you
        </h2>
      </div>
      <div className="flex flex-row justify-evenly w-[100%] px-20 pt-20 max-sm:flex-col max-sm:pt-5 max-sm:px-2">
        <div className="max-sm:pt-5">
          <img src={Card1}/>
          <div className="px-6">
            <div className="font-semibold text-blue-400 text-36px pt-5 text-center">
              Collaboration
            </div>
            <div className="text-20px text-center max-sm:whitespace-nowrap  text-gray-500 leading-6 text-base max-sm:text-sm">
              <p>Coming together is a beginning, staying</p>
              <p>together is progress, and working</p>
              <p>whether you did it or not</p>
            </div>
          </div>
        </div>
        <div>
          <img src={Card2}/>
          <div className="px-6 ">
            <div className="font-semibold text-blue-400 text-36px text-center">
              Productivity
            </div>
            <div className="text-20px text-center max-sm:whitespace-nowrap  text-gray-500 leading-6 text-base max-sm:text-sm">
              <p>Real integrity is doing the right thing,</p>
              <p>knowing that nobody’s going to know </p>
              <p>whether you did it or not</p>
            </div>
          </div>
        </div>
        <div className="max-sm:pt-5">
          <img src={Card3} />
          <div className="px-6 ">
            <div className="font-semibold text-blue-400 text-36px text-center">
              Sharing
            </div>
            <div className="text-20px text-center max-sm:whitespace-nowrap  text-gray-500 leading-6 text-base max-sm:text-sm">
              <p>Love only grows by sharing.</p>
              <p>
                You can only have more for yourself{" "}
              </p>
              <p>by giving it away to others.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-bold px-64 max-sm:px-10 pt-[123.8px;] max-sm:pt-[30px] flex justify-between max-sm:flex-col">
        <div className="text text-justify">
          <h1 className="text-accent text-5xl max-sm:whitespace-pre max-sm:text-4xl">
            Learn the best <span className="text-blue-400">tools</span>
          </h1>
          <h1 className="text-5xl pt-5 max-sm:pt-2 max-sm:text-4xl text-accent ">
            and <span className="text-blue-400">platforms</span>
          </h1>
          <div className="text-justify text-20px font-normal pt-4 max-sm:pt-4 text-accent leading-6 ">
            <p>We focus on industry leading platforms so that you </p>
            <p>can be prepared for your next job. Then we teach all </p>
            <p>we van about them.</p>
          </div>
        </div>
        <div className="w-1/3 pt-16 max-sm:pt-5 max-sm:flex max-sm: flex justify-around ">
          <div>
            <img
              src={Icon1}
            
              className="w-16 max-sm:w-44 hover:scale-125  "
            />
          </div>
          <div>
            <img
              src={Icon2}
            
              className="w-16 max-sm:w-44 hover:scale-125"
            />
          </div>
          <div>
            <img
              src={Icon3}
            
              className="w-16 max-sm:w-44 hover:scale-125"
            />
          </div>
        </div>
      </div>
      <div className="px-20 pt-10 flex justify-around max-sm:flex-col max-sm:px-[2px]">
        <div>
          <img src={Group} />
        </div>
        <div>
          <img src={Sharing} />
        </div>
        <div>
          <img src={Document} />
        </div>
      </div>
      <div className="footer">
        <FooterMain></FooterMain>
      </div>
    </div>
  );
}
