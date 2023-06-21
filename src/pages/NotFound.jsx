import React from "react";
import Page404 from "../assets/images/NotFound/Error.svg";
import { NavBar } from "../components/NavBar";
export const NotFound = () => {
  return (
    <div className="notFound bg-[#EDF9FF] h-[100vh] w-full ">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="flex flex-col justify-center items-center max-sm:pt-36 lg:pt-16">
        <div className="images ">
          <img
            src={Page404}
            alt=""
            className="pr-28 max-sm:pr-4 z-sm:pl-4 h-[566px] max-sm:h-[330px] w-[566px]"
          />
        </div>
        <div className="text">
          <h1 className="lg:text-7xl max-sm:text-center text-primary max-sm:text-5xl max-sm:drop-shadow-2xl max-sm:shadow-accent font-bold">
            Page Not Found
          </h1>
          <p className="text-back text-center pt-5 text-xl max-sm:text-lg">
            Sorry, we can’t find the page you looking for.
          </p>
          <div className="flex justify-center pt-8 text-white">
            <button className="px-4 bg-primary py-2 rounded-xl">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
