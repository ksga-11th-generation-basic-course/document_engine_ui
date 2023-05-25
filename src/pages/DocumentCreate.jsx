import React, { useState } from 'react'
import LeftSidebar from '../components/LeftSidebar'
import Navbar from '../components/Navbar'
import file from "../assets/images/file.svg";
import arrow from "../assets/images/arrow.svg";
import AddTag from "../assets/images/AddTag.svg";
import Dropdown from '../components/Dropdown';
import DocumentCard from '../components/DocumentCard';
import Pagination from '../components/Pagination';

function DocumentCreate() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='grid grid-cols-12'>
            <div className='lg:col-span-2'>
                <LeftSidebar />
            </div>
            <div className='lg:col-span-10 relative'>
                <div className='w-full h-screen'>
                    <Navbar />
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
                            <span className='font-bold text-[38px]'>Untitle</span>
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
                                        <p>Create By</p>
                                    </div>
                                    <p>April 21, 2023 4:01 PM</p>
                                </div>
                                <div className='grid grid-cols-2 re'>
                                    <div className='flex items-center gap-1'>
                                        <img src={file} alt="" />
                                        <p>Create By</p>
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
                            <div className='flex'>
                                <img src={file} alt="" />
                                <img src={file} alt="" />
                                <p className='pl-2'>Press ‘/’ for command...</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default DocumentCreate