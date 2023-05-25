import React, { useState } from 'react'
import LeftSidebar from '../components/LeftSidebar'
import Navbar from '../components/Navbar'
import file from "../assets/images/file.svg";
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
                                <button  onClick={() => setToggle(!toggle)} class="shadow gap-2 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><svg class="w-4 h-4 mr-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>Edit<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                {toggle && (
                                <div class="z-10 mt-1 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700">
                                    <ul class="text-sm text-gray-700 dark:text-gray-200" >
                                        <li>
                                            <a href="#" class="block px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                    </ul>
                                </div>
                                )}
                                </div>
                                
                                <div className='p-1 px-5 shadow rounded-lg flex gap-2'>
                                    <img src={Tick} alt="" />
                                    <p>Join</p>
                                </div>
                                <img src={Avatar} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='m-auto w-[900px] h-auto text-[#526581] grid grid-rows-1 gap-2'>
                        <div className='w-full h-auto'>
                            <nav class="flex items-center text-gray-600 font-light">
                                <ol class="list-none p-0 inline-flex">
                                    <li class="flex items-center">
                                        <a href="/" class="text-gray-800 hover:text-blue-600">Home</a>
                                        <span class="mx-2">
                                            <img src={arrow} className='w-2' alt="" />
                                        </span>
                                    </li>
                                    <li class="flex items-center">
                                        <a href="/category" class="text-gray-800 hover:text-blue-600">Category</a>
                                        <span class="mx-2">
                                            <img src={arrow} className='w-2' alt="" />
                                        </span>
                                    </li>
                                    <li class="flex items-center">
                                        <a href="/category/subcategory" class="text-gray-800 hover:text-blue-600">Subcategory</a>
                                        <span class="mx-2">
                                            <img src={arrow} className='w-2' alt="" />
                                        </span>
                                    </li>
                                    <li class="flex items-center">
                                        <a href="/category/subcategory/article" class="text-gray-800 hover:text-blue-600">Article</a>
                                    </li>
                                </ol>
                            </nav>
                            <span className='font-bold '>
                                <input className='text-[38px] p-0 py-2 focus:ring-0 focus:border-0 border-0' type="text" placeholder='Untitle' />
                            </span>
                            <div className='w-[40%] grid grid-rows-1 gap-1'>
                                <div className='grid grid-cols-2'>
                                    <div className='flex gap-1'>
                                        <img src={file} alt="" />
                                        <p>Create By</p>
                                    </div>
                                    <p>Tith Ouddom</p>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='flex gap-1'>
                                        <img src={file} alt="" />
                                        <p>Create Date</p>
                                    </div>
                                    <p>April 21, 2023 4:01 PM</p>
                                </div>
                                <div className='grid grid-cols-2 re'>
                                    <div className='flex items-center gap-1'>
                                        <img src={file} alt="" />
                                        <p>Tag</p>
                                    </div>
                                    <div className='w-24 gap-2 shadow flex justify-center items-center rounded-md'>
                                        <p>Add tag</p>
                                        <img src={file} alt="" />
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />
                        </div>

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