import React from "react";
import Sidebar from "../components/Sidebar";
import NavbarLogin from "../components/NavbarLogin";
import Group from "../assets/images/Icon/Group.svg";
import Solar from "../assets/images/Icon/Solar.svg";
import Drop from "../assets/images/Icon/Drop down.svg";
import Filter from "../assets/images/Icon/filtering.svg";
import Spring from "../assets/images/Workspace/Spring.svg";
import Search from "../assets/images/Icon/search.svg";
import More from "../assets/images/Icon/More.svg";
import SearchButton from "../components/SearchButton";

export default function Workspace() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10">
          <NavbarLogin />

          <div className="grid grid-cols-12   h-screen bg-slate-300 ">
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
                <div className="grid grid-cols-3 ml-6 ">
                  <div className="col-span-1">
                    <div className="flex ">
                      <div className="flex p-1 gap-2">
                        <img
                          src={Solar}
                          alt=""
                          className="w-[23px] h-[23px] "
                        />
                        <div class=" text-[#526581] font-bold text-xl">
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
                              type="button"> Last Updated{" "}
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
                            shadow dark:bg-gray-700 dark:divide-gray-600">
                          <ul
                            class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownRadioBgHoverButton">
                              {/* Radio Last Updated */}
                                <li>
                                  <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                      id="default-radio-4"
                                      type="radio"
                                      value=""
                                      name="default-radio"
                                      class="w-4 h-4 text-blue-600
                                      bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700
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
                              {/* Radio This week */}
                                <li>
                                  <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                      checked
                                      id="default-radio-5"
                                      type="radio"
                                      value=""
                                      name="default-radio"
                                      class="w-4 h-4 text-blue-600
                                      bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700
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

                              {/*Radio This Month */}
                                <li>
                                  <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                      id="default-radio-6"
                                      type="radio"
                                      value=""
                                      name="default-radio"
                                      class="w-4 h-4
                                      text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600
                                        dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600
                                        dark:border-gray-500"
                                    />
                                    <label
                                      for="default-radio-6"
                                      class="w-full ml-2 text-sm font-medium text-gray-900 rounded
                                      dark:text-gray-300"
                                    >
                                      This month
                                    </label>
                                  </div>
                                </li>

                                {/*Radio This Year */}
                                <li>
                                  <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                      id="default-radio-6"
                                      type="radio"
                                      value=""
                                      name="default-radio"
                                      class="w-4 h-4
                                      text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600
                                        dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600
                                        dark:border-gray-500"
                                    />
                                    <label
                                      for="default-radio-6"
                                      class="w-full ml-2 text-sm font-medium text-gray-900 rounded
                                      dark:text-gray-300"
                                    >
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
                    <div className="flex  bg-amber-200 ">
                      <div className="flex p-1 gap-2">
                        <img
                          src={Filter}
                          alt=""
                          className="w-[23px] h-[23px] "
                        />
                        <div class=" text-[#526581] font-bold text-xl">
                          Filter:
                        </div>
                      </div>
                      <div>
                        <select
                          className="p-1 text-[#526581] font-normal text-xl w-48 "
                          name=""
                          id=""
                        >
                          <option value="">All workspace</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Search */}
                  <div className="col-span-1 bg-slate-200">
                    <div className=" grid grid-cols-2">
                      <div className="col-end-3 mr-3 ">
                        <SearchButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className="grid grid-cols-3 ml-10">
                <div class="cols-span-1 mt-4 h-[60px] w-[300px] rounded bg-slate-100  shadow-inner">
                  <div className="grid grid-cols-8 p-2  ">
                    <h1 className="col-span-6  text-[#526581] font-semibold  text-lg bg-slate-100 ">
                      Docker
                    </h1>
                    <div className=" rounded-full ">
                      <button className="w-[60px]  bg-slate-100 border-2 rounded-2xl">
                        Owner
                      </button>
                    </div>
                  </div>

                  <div>
                    <img src={Spring} class="w-full " alt="" />
                  </div>

                  <div class="grid grid-cols-3 h-[60px] pl-3 pt-1 pb-2 rounded-b-lg  shadow-inner bg-slate-100">
                    <div class=" col-span-2 mt-1  text-[#526581] font-semibold  text-base">
                      Document Total: 12
                      <p class="pb- text-[#526581] font-normal text-sm">
                        Create date: 12/01/2023
                      </p>
                    </div>
                    <div className=" flex justify-end ">
                      <img
                        src={More}
                        class="w-[15px] h-[15px] mt-5 mr-3"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div class="cols-span-2 mt-4 h-[60px] w-[300px] rounded bg-slate-100  shadow-inner">
                  <div className="grid grid-cols-8 p-2  ">
                    <h1 className="col-span-6  text-[#526581] font-semibold  text-lg bg-slate-100 ">
                      Docker
                    </h1>
                    <div className=" rounded-full ">
                      <button className="w-[60px]  bg-slate-100 border-2 rounded-2xl">
                        Owner
                      </button>
                    </div>
                  </div>

                  <div>
                    <img src={Spring} class="w-full " alt="" />
                  </div>

                  <div class="grid grid-cols-3 h-[60px] pl-3 pt-1 pb-2 rounded-b-lg  shadow-inner bg-slate-100">
                    <div class=" col-span-2 mt-1  text-[#526581] font-semibold  text-base">
                      Document Total: 12
                      <p class="pb- text-[#526581] font-normal text-sm">
                        Create date: 12/01/2023
                      </p>
                    </div>
                    <div className=" flex justify-end ">
                      <img
                        src={More}
                        class="w-[15px] h-[15px] mt-5 mr-3"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div class="cols-span-3 gap-8 mt-4 h-[60px] w-[300px] rounded bg-slate-100  shadow-inner">
                  <div className="grid grid-cols-8 p-2  ">
                    <h1 className="col-span-6  text-[#526581] font-semibold  text-lg bg-slate-100 ">
                      Docker
                    </h1>
                    <div className=" rounded-full ">
                      <button className="w-[60px]  bg-slate-100 border-2 rounded-2xl">
                        Owner
                      </button>
                    </div>
                  </div>

                  <div>
                    <img src={Spring} class="w-full " alt="" />
                  </div>

                  <div class="grid grid-cols-3 h-[60px] pl-3 pt-1 pb-2 rounded-b-lg  shadow-inner bg-slate-100">
                    <div class=" col-span-2 mt-1  text-[#526581] font-semibold  text-base">
                      Document Total: 12
                      <p class=" text-[#526581] font-normal text-sm">
                        Create date: 12/01/2023
                      </p>
                    </div>
                    <div className=" flex justify-end ">
                      <img
                        src={More}
                        class="w-[15px] h-[15px] mt-5 mr-3"
                        alt=""
                      />
                    </div>
                  </div>
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
