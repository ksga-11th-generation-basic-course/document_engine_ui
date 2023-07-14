import React from "react";
import Slider from "../assets/images/about/about.svg";
import Bg from "../assets/images/about/BgAbout.svg";
import Icon from "../assets/images/about/Icon.svg";
import Member from "../assets/images/about/Member.svg";

import Vannak from "../assets/images/about/Vannak.jpg";
import Menglot from "../assets/images/about/Menglot.jpg";
import Ouddom from "../assets/images/about/Ouddom.jpg";
import Seyha from "../assets/images/about/Seyha.jpg";
import Raksa from "../assets/images/about/Raksa.jpg";
import Seangorn from "../assets/images/about/Seangorn.jpg";
import Lyheng from "../assets/images/about/Lyheng.jpg";




// import  from "../assets/images/about/Member.svg";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer.jsx";
import { Avatar } from "@material-tailwind/react";
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
          <img
            src={Bg}
            alt="bg"
            className="w-[650px] lg:w-[550px] sm:w-[300px] sm:-ml-10"
          />
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
              <h1 className="text-4xl text-center -ml-56 sm:text-18px sm:text-center font-bold text-accent md:ml-36">
                About Our <span className="text-primary">Project </span>
              </h1>
              <div className="text-accent text-2xl pb-12  pt-16 w-[900px] leading-9 lg:w-[670px] lg:-mt-5 lg:pl-5  md:pt-10 max-sm:text-justify max-sm:px-2 md:-mt-7  md:text-12px md:pl-40 md:w-[480px] md:leading-6">
                DocEngine is an online platform that allows users to read, edit,
                and share documents within the workspace. It allows users to
                invite other members to join, grant permissions, define blocks,
                and view their history after editing. It also maintains data for
                users to update later. edit, and share documents within the
                workspace.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our members */}
      <div className="mt-10  md:mt-0 lg:-mb-40">
        <h1 className="text-4xl text-center w-full pt-10  max-sm:pt-2 sm:text-20px text-accent font-bold">
          Our<span className="text-primary pl-2">Members </span>
        </h1>
        <div className="Member mt-52 my-20 flex justify-center items-center lg:inline-block lg:ml-3 lg:mt-14 sm:px-5 md:-ml-2  md:mt-14 md:space-y-24">
        <div className=" absolute -mt-[600px] lg:flex  lg:mt-1 lg:ml-12 md:ml-20 md:mt-6 ">
            <Avatar
                className="w-16 h-16 mb-4 rounded-full ring ring-primary ring-offset-base-100 ml-[140px] ring-offset-2 lg:hidden md:w-[40px] md:h-[40px]"
                src={Vannak}
              />
              <div className=" bg-[#EDF9FF] w-fit px-4 pt-2 h-[50px] rounded-2xl space-x-2 ml-16  lg:ml-4 md:-pt-4 md:w-[180px] md:h-[35px] md:space-x-0">
                <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold text-xl lg:hidden">
                  <span >@</span>
                </span>
                <span className="font-semibold text-xl md:text-sm  ">KHENG SOVANNAK</span>
                <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold text-xl md:text-sm">
                  <span >@</span>
                </span>
              </div>
              <Avatar
                className="w-16 hidden h-16 mb-4 rounded-full ring ring-primary ring-offset-base-100 ml-[140px] ring-offset-2 
                lg:absolute lg:mt-2 lg:ml-[330px] lg:inline-block md:absolute md:-mt-14 md:ml-20 md:w-[40px] md:h-[40px]"
                src={Vannak}
              />
            </div>
          <div className="text-22px space-y-14 lg:mt-28 lg:ml-[10px] md:text-12px md:mt-16 md:ml-3">
            <div className="flex ml-8 ">
              <div className=" bg-[#EDF9FF] w-fit h-[50px]  px-4 py-2 rounded-2xl space-x-2 md:w-[170px] md:h-[35px] md:space-x-0">
                <span className="font-semibold text-xl md:text-sm">KHENG MENGLOT</span>
                <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold">
                  <span>@</span>
                </span>
              </div>
              <Avatar
                className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ml-6 ring-offset-2 md:w-[40px] md:h-[40px]"
                src={Menglot}
              />
            </div>

            <div className="flex lg:-ml-4 ">
              <div className=" bg-[#EDF9FF] w-fit h-[50px] px-4 py-2 rounded-2xl space-x-2 ml-8 lg:ml-8 md:ml-4 md:w-[150px] md:h-[35px] md:space-x-0">
                <span className="font-semibold text-xl md:text-sm">TITH OUDDOM</span>
                <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold">
                  <span>@</span>
                </span>
              </div>
              <Avatar
                className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ml-6 ring-offset-2 md:w-[40px] md:h-[40px]"
                src={Ouddom}
              />
            </div>

            <div className="flex lg:ml-8">
              <div className=" bg-[#EDF9FF] w-fit h-[50px] px-4 py-2 rounded-2xl space-x-2 ml-16 lg:ml-0 md:w-[170px] md:h-[35px] md:space-x-0">
                <span className="font-semibold text-xl md:text-sm">YAN SOVANSEYHA</span>
                <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold">
                  <span>@</span>
                </span>
              </div>
              <Avatar
                className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ml-6 ring-offset-2 md:w-[40px] md:h-[40px]"
                src={Seyha}
              />
            </div>
          </div>

          <div className="px-10 lg:hidden">
            <img src={Member} alt="" className="-ml-4 " />
            <p className="text-primary pb-2  text-28px font-semibold mt-10 ml-24 bg-[#EDF9FF] w-[290px] pl-5 rounded-3xl ">
              www.docengine.tech
            </p>
          </div>

          <div className="text-20px space-y-14 -mt-8 lg:space-y-12 lg:-mt-[210px] lg:ml-[410px] md:w-[200px] md:space-y-12 md:text-12px md:ml-32  ">
            <div className="flex -ml-14 lg:-ml-14">
              <Avatar
                className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ml-6 ring-offset-2 md:w-[40px] md:h-[40px]  "
                src={Raksa}
              />
              <div className="ml-6 bg-[#EDF9FF] w-fit h-[50px] px-4 py-2 rounded-2xl space-x-2  md:space-x-0 md:w-[140px] md:-mr-8 md:h-[35px]">
                <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold">
                  <span>@</span>
                </span>
                <span className="font-semibold md:text-sm">RUOS RAKSA</span>
              </div>
            </div>

            <div className="flex -ml-1 ">
            <Avatar
                  className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ml-6 ring-offset-2 md:-ml-4 md:w-[40px] md:h-[40px]"
                  src={Lyheng}
                />
            <div className="ml-6 h-[50px] bg-[#EDF9FF] w-fit px-4 py-2 rounded-2xl space-x-2  lg:ml-0 md:ml-6 md:space-x-0 md:w-[160px] md:-mr-8 md:h-[35px]">
              <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold">
                <span>@</span>
              </span>
              <span className="font-semibold md:text-sm"> CHHUM LYHENG</span>
            </div>
            </div>

            <div className="flex -ml-8 md:mt-14">
            <Avatar
                  className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ml-6 ring-offset-2 md:-ml-4 md:w-[40px] md:h-[40px]"
                  src={Seangorn}
                />
            <div className="ml-6 h-[50px] bg-[#EDF9FF] w-fit px-4 py-2 rounded-2xl space-x-2  lg:ml-0 md:ml-6 md:space-x-0 md:w-[190px] md:-mr-8 md:h-[35px]">
              <span className="shadow-icon2 px-2 py-1 rounded-full text-primary font-semibold">
                <span>@</span>
              </span>
              <span className="font-semibold md:text-sm">KHY SEANGNGORN</span>
            </div>
            </div>

         
          </div>

          <p className="hidden lg:inline-block text-primary text-28px font-semibold mt-24 ml-36 
          lg:ml-60 lg:w-[300px] lg:-pt-2 lg:text-center  lg:bg-[#EDF9FF] lg:rounded-3xl   md:text-16px md:ml-24  md:w-[200px] md:bg-[#EDF9FF] md:h-8 md:-pt-4">
            www.docengine.tech
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="lg:mt-40 md:mt-28">
        <Footer />
      </div>
    </div>
  );
};
