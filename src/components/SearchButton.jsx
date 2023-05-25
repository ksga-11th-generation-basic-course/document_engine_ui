import React from "react";
import Search from "../assets/images/Icon/search.svg";

export default function SearchButton() {

  return (
    <div>
      <div className="">
        <div className="relative  flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className=" relative m-0 block w-[1px] min-w-0 flex-auto rounded border 
            border-solid border-neutral-300 bg-transparent bg-clip-padding px-3
             py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none 
             transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 
             focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600
              dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2" />

          {/* <!--Search icon--> */}
          <span
            class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center 
            text-base font-normal text-neutral-700 dark:text-neutral-200"
            id="basic-addon2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute cent-0 right-8 h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75
                 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </div>
      </div>


        {/* <div class="relative rounded-xl bg-slate-400  ml-32">
            <button
                  id="hide"
                  data-dropdown-toggle="WorkspaceOption"
                  className="  text-[#526581] font-normal text-xl   text-center absolute mt-20"
                  type="button">
                  <img
                  src={Search}
                  class="w-[15px] h-[15px] mt-16 mr-8"
                  alt=""
                />  
            </button>

            <div
              id="WorkspaceOption"
              class="absolute  hidden w-55  divide-gray-100 dark:bg-gray-700 dark:divide-gray-600"
              >  
              <input
                  type="search"
                  className="w-[45%] rounded-md "
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
              /> 
            </div>
          </div> */}
          
        </div>
      
  );
}
