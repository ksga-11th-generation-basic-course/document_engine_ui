import React from 'react'
import file from "../assets/images/file.svg";
import icon from "../assets/images/icon.svg";

function DocumentListCard() {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-2'>
        <img src={file} alt="" />
        <p>Redux Toolkit</p>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <p>Apr 24 12:15 PM</p>
        <div className='w-[36px] h-[36px] rounded-[10px] shadow bg-white flex justify-center items-center'>
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default DocumentListCard