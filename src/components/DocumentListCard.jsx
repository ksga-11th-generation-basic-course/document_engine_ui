import React, { useState } from 'react'
import file from "../assets/images/file.svg";
import icon from "../assets/images/icon.svg";
import DocumentList from "../assets/images/Dashboard/DocumentList.svg";

import Delete from "../assets/images/Dashboard/Delete.svg"
import Duplicate from "../assets/images/Dashboard/Duplicate.svg"
import Export from "../assets/images/Dashboard/Export.svg"
import History from "../assets/images/Dashboard/History.svg"
import Permission from "../assets/images/Dashboard/Permission.svg"
import View from "../assets/images/Dashboard/View.svg"



function DocumentListCard() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-2'>
        <img src={DocumentList} className='w-4' alt="" />
        <p>Redux Toolkit</p>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <p>Apr 24 12:15 PM</p>
        <div onClick={() => setToggle(!toggle)} className='w-[30px] cursor-pointer relative h-[30px] rounded-[10px] shadow bg-white flex justify-center items-center'>
          <img src={icon} alt="" />
          {toggle && (
            <div class="z-10 absolute top-10 right-0 bg-white divide-x divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700">
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
    </div>
  )
}

export default DocumentListCard