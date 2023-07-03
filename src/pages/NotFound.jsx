import React from "react";
import Page404 from "../assets/images/NotFound/Error.svg";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <div className="notFound bg-[#EDF9FF] h-[100vh] w-full ">
      <NavBar />
      <div className="flex flex-col  justify-center items-center pt-14 sm:pt-28 sm:px-10 ">
        <div className="images ">
          <img
            src={Page404}
            alt=""
            className="pr-28 sm:pr-4 sm:pl-4 h-[566px] sm:h-[330px] w-[566px]"
          />
        </div>
        <div className="text -ml-16 md:ml-0">
          <h1 className=" text-7xl lg:text-7xl sm:text-center text-primary md:text-4xl sm:drop-shadow-2xl sm:shadow-accent font-bold">
            Page Not Found
          </h1>
          <p className="text-back text-center pt-5 text-2xl md:text-xl">
            Sorry, we can’t find the page you looking for.
          </p>
          <div className="flex justify-center pt-8 text-white">
            <Link to={"/"} className="px-4 bg-primary py-2 rounded-xl text-22px hover:text-white md:text-20px">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
