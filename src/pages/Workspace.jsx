import React from "react";
import Sidebar from "../components/Sidebar";
import NavbarLogin from "../components/NavbarLogin";
import Group from "../assets/images/Icon/Group.svg";
import Solar from "../assets/images/Icon/Solar.svg";
import Filter from "../assets/images/Icon/filtering.svg";
import SearchButton from "../components/SearchButton";
import Docker from "../assets/images/Workspace/Docker.svg";
import Spring from "../assets/images/Workspace/Spring.svg";
import PHP from "../assets/images/Workspace/PHP.svg";
import Angular from "../assets/images/Workspace/Angular.svg";
import ReactJS from "../assets/images/Workspace/React.svg";
import NodeJS from "../assets/images/Workspace/NodeJS.svg"
import WorkspaceOption from "../components/WorkspaceOption";





export default function Workspace() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10">
          <NavbarLogin />

          <div className="grid grid-cols-12  shadow-2xl h-[100%]  ">
            <div className="col-span-1"></div>
            <div className="col-span-10">
              <div className="ml-4">
            {/* Workspace */}
                <div className="grid grid-cols-12 ml-6 ">
                  <div className="   ">
                    <button class="cols-span-1 flex justify-center mt-2 mr-2 drop-shadow-2xl rounded-lg border-2 right-0 w-[38px] h-[35px] py-1 text-center ">
                      <img
                        src={Group}
                        alt=""
                        className="cols-span-2 w-[23px] h-[23px] "
                      />
                    </button>
                  </div>
                  <div class="col-start-2 text-[#526581] font-bold py-3 text-xl ">
                    Workspace
                  </div>
                </div>

            {/* Sort */}
                <div className="grid grid-cols-3 ml-6 mt-2 ">
                <div className="col-span-1">
                    <div className="flex ">
                      <div className="flex mt-1  gap-2">
                        <img
                          src={Solar}
                          alt=""
                          className="w-[23px] h-[23px] mt-1"
                        />
                        <div class=" text-[#526581] font-bold text-xl ">
                          Sort:
                        </div>
                      </div>
                      <div>
                    {/* Last Updated */}
                        <button
                          id="dropdownRadioBgHoverButton"
                          data-dropdown-toggle="dropdownRadioBgHover"
                          class="text-[#526581] font-normal text-xl
                                    hover:bg-[#D8D7DD] rounded-lg  px-4 py-1 text-center inline-flex items-center"
                          type="button"
                        >
                          {" "}
                          Last Updated{" "}
                          <svg
                            class="w-4 h-4 ml-2"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>

                        {/* <!-- Dropdown menu --> */}
                        <div
                          id="dropdownRadioBgHover"
                          class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg 
                            shadow dark:bg-gray-700 dark:divide-gray-600"
                        >
                          <ul
                            class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownRadioBgHoverButton"
                          >
                            {/*Last Updated */}
                            <li>
                              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id="default-radio-4"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  class="w-4 h-4 text-[#526581]
                                      focus:ring-[#526581] dark:focus:ring-[#526581] dark:ring-offset-gray-700
                                        dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                      for="default-radio-4"
                                      class="w-full ml-2 text-sm font-medium text-gray-900 rounded
                                          dark:text-gray-300"
                                    >
                                      Last Updated
                                    </label>
                              </div>
                            </li>

                            {/*This week */}
                            <li>
                              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  checked
                                  id="default-radio-5"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  class="w-4 h-4 text-[#526581]
                                       focus:ring-[#526581] dark:focus:ring-[#526581] dark:ring-offset-gray-700
                                        dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  for="default-radio-5"
                                  class="w-full ml-2 text-sm font-medium text-gray-900 rounded
                                      dark:text-gray-300"
                                >
                                  This week
                                </label>
                              </div>
                            </li>

                            {/*This Month */}
                            <li>
                              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id="default-radio-6"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  class="w-4 h-4
                                      text-[#526581]  focus:ring-[#526581] dark:focus:ring-[#526581]
                                        dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600
                                        dark:border-gray-500"
                                />
                                <label
                                  for="default-radio-6"
                                  class="w-full ml-2 text-sm font-medium text-gray-900 rounded
                                      dark:text-gray-300">
                                  This month
                                </label>
                              </div>
                            </li>

                            {/*This Year */}
                            <li>
                              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id="default-radio-6"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  class="w-4 h-4
                                      text-[#526581]   focus:ring-[#526581] dark:focus:ring-[#526581]
                                        dark:ring-offset-[#526581] dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600
                                        dark:border-gray-500"
                                  />
                                  <label
                                    for="default-radio-6"
                                    class="w-full ml-2 text-sm font-medium text-gray-900 rounded
                                        dark:text-gray-300">
                                    This year
                                  </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Filter */}
                  <div className="col-span-1">
                    <div className="flex ">
                      <div className="flex mt-1 gap-2">
                        <img
                          src={Filter}
                          alt=""
                          className="w-[23px] h-[23px] mt-1 "
                        />
                        <div class="  text-[#526581] font-bold text-xl">
                        Filter:
                        </div>
                      </div>
                      <div>
                    {/* All Workspace */}
                        <button
                          id="drodownWorkspace"
                          data-dropdown-toggle="AllWorkspace"
                          class="text-[#526581] font-normal text-xl
                                    hover:bg-[#D8D7DD] rounded-lg  px-4 py-1 text-center inline-flex items-center"
                          type="button"
                        >
                          {" "}
                          All Workspace{" "}
                          <svg
                            class="w-4 h-4 ml-2"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>

                        {/* <!-- Dropdown menu --> */}
                        <div
                          id="AllWorkspace"
                          class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg 
                            shadow dark:bg-gray-700 dark:divide-gray-600"
                        >
                          <ul
                            class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="drodownWorkspace"
                          >
                            {/* All Workspace */}
                            <li>
                              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id="default-radio-4"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  class="w-4 h-4 text-[#526581]
                                      bg-gray-100  focus:ring-[#526581] dark:ring-offset-gray-700
                                        dark:focus:ring-offset-gray-700 focus:ring-1 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  for="default-radio-4"
                                  class="w-full ml-2 text-sm font-medium text-gray-900 rounded
                                      dark:text-gray-300"
                                >
                                  All Workspace
                                </label>
                              </div>
                            </li>
                            {/* My Workspace */}
                            <li>
                              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id="default-radio-4"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  class="w-4 h-4 text-[#526581]
                                      bg-gray-100  focus:ring-[#526581] dark:focus:ring-[#526581] dark:ring-offset-gray-700
                                        dark:focus:ring-offset-gray-700 focus:ring-1 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  for="default-radio-4"
                                  class="w-full ml-2 text-sm font-medium text-gray-900 rounded
                                      dark:text-gray-300"
                                >
                                  My Workspace
                                </label>
                              </div>
                            </li>
                  
                            {/*Other Workspace */}
                            <li>
                              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input
                                  id="default-radio-6"
                                  type="radio"
                                  value=""
                                  name="default-radio"
                                  class="w-4 h-4
                                      text-[#526581] bg-gray-100  focus:ring-[#526581] dark:focus:ring-[#526581]
                                        dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-1 dark:bg-gray-600
                                        dark:border-gray-500"
                                />
                                <label
                                  for="default-radio-6"
                                  class="w-full ml-2 text-sm font-medium text-gray-900 rounded
                                      dark:text-gray-300"
                                >
                                  Orther Workspace 
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Search */}
                  <div className="col-span-1">
                    <div className=" grid grid-cols-2">
                      <div className="col-end-3 mr-3 ">
                        <SearchButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          {/* Card */}
                <div className=" grid grid-rows-6">
                    <div className="row-span-4 ">
                      <div className="grid grid-cols-3  ml-10 ">
                          {/* Docker */}
                          <div class="cols-span-1 mt-4 h-[60px] w-[315px] rounded-t-lg  shadow-inner">
                            <div className="grid grid-cols-9 p-2 ">
                              <h1 className="col-span-7  text-[#526581] font-semibold  text-lg ">
                                Docker
                              </h1>
                              <div className=" rounded-full ">
                                <button className="w-[60px]   border-2 rounded-2xl">
                                  Owner
                                </button>
                              </div>
                            </div>

                            <div>
                              <img src={Docker} class="w-full " alt="" />
                            </div>

                            <div class="grid grid-cols-3 h-[60px] pl-3 pt-1 pb-2 rounded-b-lg shadow-md">
                              <div class=" col-span-2 mt-1  text-[#526581] font-semibold  text-base">
                              12 Document Total
                                <p class="pb- text-[#526581] font-normal text-sm">
                                  Create date: 12/01/2023
                                </p>
                              </div>
                              <div className=" flex justify-end ">
                                <WorkspaceOption/>
                              </div>
                            </div>
                          </div>
                          {/* Spring */}
                          <div class="cols-span- mt-4 h-[60px] w-[315px] rounded-t-lg shadow-inner">
                            <div className="grid grid-cols-8 p-2  ">
                              <h1 className="col-span-6  text-[#526581] font-semibold  text-lg  ">
                                Spring
                              </h1>
                            </div>
                            <div>
                              <img src={Spring} class="w-full " alt="" />
                            </div>
                            <div class="grid grid-cols-3 h-[60px] pl-3 pt-1 pb-2 rounded-b-lg  shadow-md ">
                              <div class=" col-span-2 mt-1  text-[#526581] font-semibold  text-base">
                              12 Document Total
                                <p class="pb- text-[#526581] font-normal text-sm">
                                  Create date: 10/05/2023
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*  PHP Developer */}
                          <div class="cols-span-3 mt-4 h-[60px] w-[315px] rounded-t-lg shadow-inner">
                            <div className="grid grid-cols-8 p-2  ">
                              <h1 className="col-span-6  text-[#526581] font-semibold  text-lg  ">
                                PHP Developer
                              </h1>
                            </div>
                            <div>
                              <img src={PHP} class="w-full " alt="" />
                            </div>
                            <div class="grid grid-cols-3 h-[60px] pl-3 pt-1 pb-2 rounded-b-lg  shadow-md">
                              <div class=" col-span-2 mt-1  text-[#526581] font-semibold  text-base">
                              12 Document Total
                                <p class="pb- text-[#526581] font-normal text-sm">
                                  Create date: 11/05/2023
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>

                    <div className="row-span-1">
                    <div className="grid grid-cols-3  ml-10 mb-2 " >
                      {/* Angular */}
                      <div class="cols-span-1 mt-4 h-[60px] w-[315px] rounded-t-lg  shadow-inner">
                            <div className="grid grid-cols-9 p-2 ">
                              <h1 className="col-span-7  text-[#526581] font-semibold  text-lg ">
                              Angular
                              </h1>
                              <div className=" rounded-full ">
                                <button className="w-[60px]   border-2 rounded-2xl">
                                  Owner
                                </button>
                              </div>
                            </div>

                            <div>
                              <img src={Angular} class="w-full " alt="" />
                            </div>

                            <div class="grid grid-cols-3 h-[60px] pl-3 pt-1 pb-2 rounded-b-lg shadow-md">
                              <div class=" col-span-2 mt-1  text-[#526581] font-semibold  text-base">
                              12 Document Total
                                <p class="pb- text-[#526581] font-normal text-sm">
                                  Create date: 12/01/2023
                                </p>
                              </div>
                              <div className=" flex justify-end ">
                                <WorkspaceOption/>
                              </div>
                            </div>
                          </div>
                        {/* ReactJS */}
                        <div class="cols-span- mt-4 h-[60px] w-[315px] rounded-t-lg shadow-inner">
                            <div className="grid grid-cols-8 p-2  ">
                              <h1 className="col-span-6  text-[#526581] font-semibold  text-lg  ">
                              ReactJS
                              </h1>
                            </div>
                              <div>
                                <img src={ReactJS} class="w-full " alt="" />
                              </div>
                              <div class="grid grid-cols-3 h-[60px] pl-3 pt-1 pb-2 rounded-b-lg  shadow-md ">
                                <div class=" col-span-2 mt-1  text-[#526581] font-semibold  text-base">
                                  12 Document Total
                                  <p class="pb- text-[#526581] font-normal text-sm">
                                    Create date: 10/05/2023
                                  </p>
                                </div>
                              </div>
                            </div>
                        {/*  React & NodeJS */}
                        <div class="cols-span-1 mt-4 h-[60px] w-[315px] rounded-t-lg  shadow-inner">
                            <div className="grid grid-cols-9 p-2 ">
                              <h1 className="col-span-7  text-[#526581] font-semibold  text-lg ">
                              React & NodeJS
                              </h1>
                              <div className=" rounded-full ">
                                <button className="w-[60px]   border-2 rounded-2xl">
                                  Owner
                                </button>
                              </div>
                            </div>

                            <div>
                              <img src={NodeJS} class="w-full " alt="" />
                            </div>

                            <div class="grid grid-cols-3 h-[60px] pl-3 pt-1 pb-2 rounded-b-lg shadow-md">
                              <div class=" col-span-2 mt-1  text-[#526581] font-semibold  text-base">
                              12 Document Total
                                <p class="pb- text-[#526581] font-normal text-sm">
                                  Create date: 12/01/2023
                                </p>
                              </div>
                              <div className=" flex justify-end ">
                                <WorkspaceOption/>
                              </div>
                            </div>
                          </div>
                    </div>
                </div>

              </div>
               
          {/* Pagination  */}
              <div className="grid grid-cols-3 ml-10 mt-48 ">
                <div className="col-span-1"></div>
                <div className="col-span-2 ml-20">
                <nav aria-label="Page navigation example" >
                <ul class="inline-flex items-center -space-x-px">

                {/* Previous  */}
                  <li>
                    <a href="#" class="block px-3 py-2 ml-0 leading-tight text-gray-500  
                     rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800
                      dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span class="sr-only">Previous</span>
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                  </li>

                  {/* Page 1 */}
                      <li>
                        <a href="#" class="px-3 py-1 leading-tight text-gray-500  
                         hover:bg-[#1E9CEF] rounded-full
                          dark:border-gray-700  ">1</a>
                      </li>

                  {/* Page 2 */}
                      <li>
                        <a href="#" class="px-3 py-1 leading-tight text-gray-500 rounded-full
                       hover:bg-[#1E9CEF] dark:border-gray-700  ">2</a>
                      </li>

                    {/* Next */}
                    <li>
                        <a href="#" class="block px-3 py-2 leading-tight text-gray-500 
                        rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
                        dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          <span class="sr-only">Next</span>
                          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>      
            </div>
            
            
            <div className="col-end-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
