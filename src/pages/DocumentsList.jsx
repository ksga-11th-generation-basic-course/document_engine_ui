import React, { useState } from 'react'
import LeftSidebar from '../components/LeftSidebar'
import Navbar from '../components/Navbar'
import file from "../assets/images/file.svg";
import icon from "../assets/images/icon.svg";
import StatusEdit from "../assets/images/StatusEdit.svg";
import Tick from "../assets/images/Tick.svg";
import Avatar from "../assets/images/Avatar.svg";
import Plus from "../assets/images/Dashboard/Plus.svg";
import Dropdown from '../components/Dropdown';
import DocumentCard from '../components/DocumentCard';
import Pagination from '../components/Pagination';
import DocumentList from "../assets/images/Dashboard/DocumentList.svg";
import DocumentListCard from '../components/DocumentListCard';

function DocumentsList() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='grid grid-cols-12'>
            <div className='lg:col-span-2'>
                <LeftSidebar />
            </div>
            <div className='lg:col-span-10 relative'>
                <div className='w-full h-screen'>
                    <div className='lg:w-full lg:h-[50px] flex justify-center items-center'>
                        <div className='lg:h-[30px] lg:w-[1050px] flex justify-end items-center'>
                            <div className='flex justify-center items-center gap-3'>
                                <div className='p-1 px-3 text-primary border-2 border-gray-500 rounded-lg flex gap-2'>
                                    <img src={Plus} alt="" />
                                    <p>Join</p>
                                </div>
                                <img src={Avatar} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='m-auto w-[900px] h-auto text-[#526581] grid grid-rows-1 gap-2'>
                        <div className='w-full h-auto'>
                            <span className='font-bold text-[30px]'>React Developer</span>
                            <p className='font-medium text-[15px]'>Welcome to React Developer workspace</p>
                        </div>
                        <div className='w-full h-auto flex justify-between'>
                            <div className='flex justify-center items-center gap-3'>
                                <div className='w-[30px] h-[30px] rounded-[10px] shadow bg-white flex justify-center items-center'>
                                    <img src={file} alt="" />
                                </div>
                                <p className='font-semibold text-[18px]'>Documents</p>
                            </div>
                            <div>
                                <a href="#_" class="inline-flex items-center justify-center px-3 py-2 text-sm font-medium leading-3 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                                    Create Document
                                </a>
                            </div>
                        </div>

                        <Dropdown />
                        <div className='grid grid-rows-1 gap-2'>
                            <DocumentListCard />

                            {/* <div className='flex justify-between items-center'>
                                <div className='flex gap-2'>
                                    <img src={DocumentList} className='w-4' alt="" />
                                    <p>Redux Toolkit</p>
                                    <img src={StatusEdit} alt="" />
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <p>Apr 24 12:15 PM</p>
                                    <div className='w-[30px] h-[30px] rounded-[10px] shadow bg-white flex justify-center items-center'>
                                        <img src={icon} alt="" />
                                    </div>
                                </div>
                            </div> */}
                            <DocumentListCard />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DocumentsList