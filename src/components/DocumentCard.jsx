import React from 'react'
import icon from "../assets/images/icon.svg";


function DocumentCard() {
    return (
        <div className='h-52 shadow rounded-md'>
            <div className='w-full h-[70%] px-5 py-2'>
                <h1 className='font-semibold text-xl'>Redux Toolkit</h1>
                <h1>1. Introduction to Redux Toolkit</h1>
                <p className='text-xs'>In this tutorial, we'll focus on introducing Profiles in Spring.
                    Profiles are a core feature of the framework — allowing us to map our beans to different profiles — for example, dev, test, and prod.
                    We can then activate different profiles</p>
            </div>
            <div className='w-full h-[30%] border-t-[1px] relative pl-5 pt-1'>
                <h1 className='text-blue-500 font-semibold text-xl'>Redux Tookit</h1>
                <h1 className='font-medium'>Edit 9day ago</h1>
                <img src={icon} className='absolute right-5 top-6' alt="" />
            </div>
        </div>
    )
}

export default DocumentCard