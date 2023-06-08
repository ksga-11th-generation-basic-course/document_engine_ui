import React from "react";
import Page404 from "../assets/images/NotFound/Error.svg";
import { NavBar } from "../components/NavBar";
export const NotFound = () => {
  return (
    <div className="notFound bg-[#EDF9FF] h-[100vh] w-full ">
      <div className="navbar md:w-full">
        <NavBar />
      </div>
      <div className="flex flex-col justify-center items-center max-sm:pt-36 lg:pt-16">
        <div className="images ">
          <img
            src={Page404}
            alt=""
            className="pr-28 max-sm:pr-4 max-sm:pl-4 h-[566px] max-sm:h-[330px] w-[566px] md:ml-24 md:w-[280px] md:-mt-48"
          />
        </div>
        <div className="text">
          <h1 className="text-7xl max-sm:text-center text-primary max-sm:text-5xl max-sm:drop-shadow-2xl max-sm:shadow-accent font-bold lg:text-7xl md:-mt-28 md:ml-4 md:text-4xl">
            Page Not Found
          </h1>
          <p className="text-accent text-center pt-5 text-xl max-sm:text-lg md:text-sm md:ml-4">
            Sorry, we can’t find the page you looking for.
          </p>
          <div className="flex justify-center pt-8 text-white">
            <button className="px-4 bg-primary py-2 rounded-xl font-semibold lg:w-[200px] lg:h-14 lg:text-xl md:h-10 md:text-base
             md:w-[150px]">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
