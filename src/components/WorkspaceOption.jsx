import React from 'react'
import Filter from "../assets/images/Icon/filtering.svg";
import More from "../assets/images/Icon/More.svg";
import Setting from "../assets/images/Icon/settings.svg";
import Delete from "../assets/images/Icon/Delete.svg";


export default function WorkspaceOption() {
  return (
    <div>
        {/* More */}
        <div className="col-span-1">
                    <div className="flex ">
                      <div>
                        {/* Workspace Option*/}
                        <button
                          id="More"
                          data-dropdown-toggle="WorkspaceOption"
                          class="text-[#526581] font-normal text-xl
                                     rounded-lg  px-2 py-1 text-center inline-flex items-center"
                          type="button"
                        >
                        <img
                            src={More}
                            class="w-[15px] h-[15px] mt-5 mr-3"
                            alt=""
                        />
                         
                        </button>

                        {/*  Dropdown menu  */}
                        <div
                          id="WorkspaceOption"
                          class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg 
                            shadow dark:bg-gray-700 dark:divide-gray-600"
                        >
                          <ul
                            class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="More"
                          >
                        {/* Setting */}
                            <li>
                              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <img
                                    src={Setting}
                                    class="w-[15px] h-[15px]  mr-3"
                                    alt=""
                                />
                                <label
                                  for="default-radio-4"
                                  class="w-full ml-2 text-sm font-medium text-gray-900 rounded
                                      dark:text-gray-300"
                                >
                                  Setting
                                </label>
                              </div>
                            </li>
                        {/* Delete */}
                            <li>
                              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                               
                                <img
                                    src={Delete}
                                    class="w-[15px] h-[15px]  mr-3"
                                    alt=""
                                />

                                <label
                                  for="default-radio-4"
                                  class="w-full ml-2 text-sm font-medium text-gray-900 rounded
                                      dark:text-gray-300"
                                >
                                  Delete
                                </label>
                              </div>
                            </li>
                  
    
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
    </div>
  )
}
