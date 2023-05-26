import React from 'react'
import More from "../../assets/images/Icon/More.svg";
import view from "../../assets/images/Icon/view.svg";
import permission from "../../assets/images/Icon/permission.svg";
import history from "../../assets/images/Icon/history.svg";
import duplicate from "../../assets/images/Icon/duplicate.svg";
import exportFile from "../../assets/images/Icon/exportfile.svg";
import deleteDoc from "../../assets/images/Icon/delete.svg";

export default function DocumentOption() {
  return (
    <div>
    {/* More */}
    <div className="col-span-1">
        <div className="flex ">
            <div>
                {/* Document Option*/}
                    <button
                      id="More"
                      data-dropdown-toggle="DocumentOption"
                      className="text-[#526581] font-normal text-xl rounded-lg  px-2 py-1 text-center inline-flex items-center"
                      type="button">
                    <img
                        src={More}
                        className="w-[15px] h-[15px] mt-5 mr-3"
                        alt=""
                    /> 
                    </button>

                    {/* Document Option  */}
                    <div
                        id="DocumentOption"
                        className="z-10 hidden py-2 w-52 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                        <ul
                          className="space-y-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="More"
                        >
                            {/* View Page */}
                            <li className='hover:bg-gray-100 cursor-pointer'>
                              <div className="flex items-center p-2 ">
                                <img
                                    src={view}
                                    className="w-[19px] mr-3 ml-3"
                                    alt=""/>
                                <label
                                  htmlFor="default-radio-4"
                                  className="text-[16px] font-medium rounded hover:cursor-pointer">
                                  View Page
                                </label>
                              </div>
                            </li>

                            {/* Permission */}
                            <li className='hover:bg-gray-100 cursor-pointer'>
                              <div className="flex items-center p-2 ">
                                <img
                                    src={permission}
                                    className="w-[18px] mr-3 ml-3"
                                    alt=""/>
                                <label
                                  htmlFor="default-radio-4"
                                  className="text-[16px] font-medium rounded hover:cursor-pointer">
                                  Permission
                                </label>
                              </div>
                            </li>

                            {/* Document History */}
                            <li className='hover:bg-gray-100 cursor-pointer'>
                              <div className="flex items-center p-2 ">
                                <img
                                    src={history}
                                    className="w-[18px] mr-3 ml-3"
                                    alt=""/>
                                <label
                                  htmlFor="default-radio-4"
                                  className="text-[16px] font-medium rounded hover:cursor-pointer">
                                        Document History
                                </label>
                              </div>
                            </li>

                            {/* Duplicate */}
                            <li className='hover:bg-gray-100 cursor-pointer'>
                              <div className="flex items-center p-2 ">
                                <img
                                    src={duplicate}
                                    className="w-[18px] mr-3 ml-3"
                                    alt=""/>
                                <label
                                  htmlFor="default-radio-4"
                                  className="text-[16px] font-medium rounded hover:cursor-pointer">
                                        Duplicate
                                </label>
                              </div>
                            </li>

                            {/* Export */}
                            <li className='hover:bg-gray-100 cursor-pointer'>
                              <div className="flex items-center p-2 ">
                                <img
                                    src={exportFile}
                                    className="w-[18px] mr-3 ml-3"
                                    alt=""/>
                                <label
                                  htmlFor="default-radio-4"
                                  className="text-[16px] font-medium rounded hover:cursor-pointer">
                                        Export
                                </label>
                              </div>
                            </li>

                            {/* Delete */}
                            <li className='hover:bg-gray-100 cursor-pointer'>
                              <div className="flex items-center p-2 ">
                                <img
                                    src={deleteDoc}
                                    className="w-[18px] mr-3 ml-3"
                                    alt=""/>
                                <label
                                  htmlFor="default-radio-4"
                                  className="text-[16px] text-[#FF5658] font-medium rounded hover:cursor-pointer">
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
