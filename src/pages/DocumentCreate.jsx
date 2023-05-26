import React, { useState } from 'react'
import LeftSidebar from '../components/LeftSidebar'
import Navbar from '../components/Navbar'
import file from "../assets/images/file.svg";
import Pen from "../assets/images/Dashboard/Pen.svg";
import View from "../assets/images/Dashboard/View.svg";
import Plus from "../assets/images/Dashboard/Plus.svg";
import CreateBy from "../assets/images/Dashboard/CreateBy.svg";
import CreateDate from "../assets/images/Dashboard/CreateDate.svg";
import ViewHistory from "../assets/images/Dashboard/ViewHistory.svg";
import ViewMember from "../assets/images/Dashboard/ViewMember.svg";
import ExportFile from "../assets/images/Dashboard/ExportFile.svg";
import Tag from "../assets/images/Dashboard/Tag.svg";
import Avatar from "../assets/images/Avatar.svg";
import arrow from "../assets/images/arrow.svg";
import Tick from "../assets/images/Tick.svg";
import AddTag from "../assets/images/AddTag.svg";
import Dropdown from '../components/Dropdown';
import DocumentCard from '../components/DocumentCard';
import Pagination from '../components/Pagination';
import Editor from '../components/Editor';


function DocumentCreate() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='grid grid-cols-12 text-[#526581]'>
            <div className='lg:col-span-2'>
                <LeftSidebar />
            </div>
            <div className='lg:col-span-10 relative'>
                <div className='w-full h-screen'>
                    <div className='lg:w-full lg:h-[50px] flex justify-center items-center'>
                        <div className='lg:h-[30px] lg:w-[1050px] flex justify-between items-center'>
                            <div className='flex justify-center items-center gap-1'>
                                <img src={Tick} alt="" />
                                <p>Saved</p>
                            </div>
                            <div className='flex justify-center items-center gap-3'>
                                <div className='relative'>
                                    <button onClick={() => setToggle(!toggle)} class="shadow gap-2 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><img src={Pen} alt="" /> Edit<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                    {toggle && (
                                        <div class="z-10 mt-2 absolute bg-white divide-x divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700">
                                            <ul class="text-sm text-gray-700 dark:text-gray-200" >
                                                <li>
                                                    <a href="#" class="block px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span className='flex gap-1'><img src={Pen} alt="" /> Viewing</span> <p className='text-xs '>Read or export final document</p></a>
                                                    <a href="#" class="block px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span className='flex gap-1'><img src={Pen} alt="" /> Editing</span> <p className='text-xs'>Edit document directly</p></a>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div className='p-1 px-3 text-primary border-2 border-gray-500 rounded-lg flex gap-2'>
                                    <img src={Plus} alt="" />
                                    <p>Join</p>
                                </div>
                                <img src={Avatar} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='absolute z-10 right-0 rounded-lg shadow h-auto p-2 top-[40%]'>
                        <div className='grid grid-rows-1 gap-3'>
                            <div className='w-[30px] h-[30px] rounded-[10px] shadow bg-white flex justify-center items-center'>
                                <img src={ViewMember} alt="" />
                            </div>
                            <div className='w-[30px] h-[30px] rounded-[10px] shadow bg-white flex justify-center items-center'>
                                <img src={ViewHistory} alt="" />
                            </div>
                            <div className='w-[30px] h-[30px] rounded-[10px] shadow bg-white flex justify-center items-center'>
                                <img src={ExportFile} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='m-auto w-[900px] h-auto text-[#526581] grid grid-rows-1 gap-2'>
                        <div className='w-full h-auto'>
                            <nav class="flex items-center text-gray-600 text-sm">
                                <ol class="list-none p-0 inline-flex">
                                    <li class="flex items-center">
                                        <a href="/" class="
                                        ">React Developer</a>
                                        <span class="mx-2">
                                            <img src={arrow} className='w-2' alt="" />
                                        </span>
                                    </li>
                                    <li class="flex items-center">
                                        <a href="/category" class="text-primary hover:text-blue-600">Untitle</a>
                                    </li>
                                </ol>
                            </nav>
                            <span className='font-semibold '>
                                <input className='text-3xl p-0 w-auto py-2 focus:ring-0 focus:border-0 border-0' type="text" placeholder='Untitle' />
                            </span>
                            <div className='w-[40%] grid grid-rows-1 gap-1'>
                                <div className='grid grid-cols-2 text-sm'>
                                    <div className='flex gap-2'>
                                        <img src={CreateBy} className='w-[17px]' alt="" />
                                        <p>Create By</p>
                                    </div>
                                    <p>Tith Ouddom</p>
                                </div>
                                <div className='grid grid-cols-2 text-sm'>
                                    <div className='flex gap-2'>
                                        <img src={CreateDate} className='w-[17px]' alt="" />
                                        <p>Create Date</p>
                                    </div>
                                    <p>April 21, 2023 4:01 PM</p>
                                </div>
                                <div className='grid grid-cols-2 text-sm'>
                                    <div className='flex items-center gap-2'>
                                        <img src={Tag} className='w-[16px]' alt="" />
                                        <p>Tag</p>
                                    </div>
                                    <div className='w-20 h-6 gap-1 text-primary shadow flex justify-center items-center rounded-md'>
                                        <p>Add tag</p>
                                        <img src={Plus} className='w-[15px] ' alt="" />
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />
                        </div>


                        {/* Editor */}
                        <div className='w-full h-auto'>
                            {/* <Editor/> */}
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default DocumentCreate