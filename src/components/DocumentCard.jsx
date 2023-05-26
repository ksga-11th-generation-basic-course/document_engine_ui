import React, { useState } from 'react'
import icon from "../assets/images/icon.svg";
import Card from "../assets/images/Dashboard/Card.svg"
import Delete from "../assets/images/Dashboard/Delete.svg"
import Document from "../assets/images/Dashboard/Document.svg"
import Duplicate from "../assets/images/Dashboard/Duplicate.svg"
import Export from "../assets/images/Dashboard/Export.svg"
import Filter from "../assets/images/Dashboard/Filter.svg"
import History from "../assets/images/Dashboard/History.svg"
import List from "../assets/images/Dashboard/List.svg"
import Member from "../assets/images/Dashboard/Member.svg"
import More from "../assets/images/Dashboard/More.svg"
import Permission from "../assets/images/Dashboard/Permission.svg"

import View from "../assets/images/Dashboard/View.svg"

function DocumentCard() {
    const [toggle, setToggle] = useState(false)

    return (
        <div className='h-44 shadow rounded-md'>
            <div className='w-full h-[70%] px-5 py-1'>
                <h1 className='font-semibold text-lg'>Redux Toolkit</h1>
                <h1 className='text-base'>1. Introduction to Redux Toolkit</h1>
                <p className='text-xs'>In this tutorial, we'll focus on introducing Profiles in Spring.
                    Profiles are a core feature of the framework — allowing us to map our beans to different profiles — for example, dev, test</p>
            </div>
            <div className='w-full h-[30%] border-t-[1px] relative pl-5 pt-1'>
                <h1 className='text-blue-500 font-semibold text-base'>Redux Tookit</h1>
                <h1 className='font-medium text-sm'>Edit 9day ago</h1>
                <img  onClick={() => setToggle(!toggle)} src={icon} className='absolute cursor-pointer right-5 top-4 flex' alt="" />
                {toggle && (
                    <div class="z-10 absolute -right-44 top-2 bg-white divide-x divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700">
                        <ul class="text-sm text-gray-700 dark:text-gray-200" >
                            <li>
                                <a href="#" class="gap-4 px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex"><img src={View} alt="" className='w-5 h-5' /> Viewing</a>
                                <a href="#" class="gap-4 px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex"><img src={Permission} alt="" className='w-5 h-5' /> Permission</a>
                                <a href="#" class="gap-4 px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex"><img src={History} alt="" className='w-5 h-5' /> Document History</a>
                                <a href="#" class="gap-4 px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex"><img src={Duplicate} alt="" className='w-5 h-5' /> Duplicate</a>
                                <a href="#" class="gap-4 px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex"><img src={Export} alt="" className='w-5 h-5' /> Export file</a>
                                <a href="#" class="gap-4 px-4 py-1 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex"><img src={Delete} alt="" className='w-5 h-5' /> Delete</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DocumentCard