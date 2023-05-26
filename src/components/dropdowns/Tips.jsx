import React, { useState } from 'react'
import star from "../../assets/images/Icon/stars.svg"
import tip from "../../assets/images/Icon/tip.svg"

export default function Tips() {
const [toggle, setToggle] = useState(false);

  return (
    <div>
                <div onClick={() => setToggle(!toggle)} className="relative block w-full mb-2  shadow-custom  rounded-lg" >
                        <div className="flex mt-6 hover:cursor-pointer">
                                <div className="w-[98%] bg-white rounded-l-lg px-2 py-3 flex">
                                        <span className="flex justify-center pl-5">
                                                <img src={star} className="w-10"/>
                                        </span>
                                        <span className="pl-8">
                                                <h1 className="text-24px font-semibold">Ouddom, get started with DocEngine</h1>
                                                <p className="text-22px text-accent text-left">Hint! to create your Document</p>
                                        </span>
                                </div>
                                <div className="bg-[#1E9CEF] w-[2%] shadow-custom rounded-r-lg">    
                                </div>
                        </div> 
                        {toggle && (
                        <div className="flex w-full -mt-2 absolute">
                                <div className="w-full bg-white py-2  shadow-tip border-t-2  rounded-bl-lg">
                                        {/* Join workspace */}
                                        <div className='relative flex pt-2 pb-5 hover:bg-secondary cursor-pointer'>
                                                <span className="flex justify-center pl-12">
                                                        <img src={tip} className="w-5"/>
                                                </span>
                                                <span className="pl-8">
                                                        <p className="text-20px text-accent text-left font-semibold">Join Workspace</p>
                                                </span>
                                        </div>

                                        {/* Create new document */}
                                        <div className='flex pt-2 pb-5 hover:bg-secondary cursor-pointer'>
                                                <span className="flex justify-center pl-12">
                                                        <img src={tip} className="w-5"/>
                                                </span>
                                                <span className="pl-8">
                                                        <p className="text-20px text-accent text-left font-semibold">Create new document</p>
                                                </span>
                                        </div>

                                        {/* Create new workspace */}
                                        <div className='flex pt-2 pb-5 hover:bg-secondary cursor-pointer'>
                                                <span className="flex justify-center pl-12">
                                                        <img src={tip} className="w-5"/>
                                                </span>
                                                <span className="pl-8">
                                                        <p className="text-20px text-accent text-left font-semibold">Create new workspace</p>
                                                </span>
                                        </div>

                                        {/* Visit workspace code */}
                                        <div className='flex pt-2 pb-5 hover:bg-secondary cursor-pointer'>
                                                <span className="flex justify-center pl-12">
                                                        <img src={tip} className="w-5"/>
                                                </span>
                                                <span className="pl-8">
                                                        <p className="text-20px text-accent text-left font-semibold">Visit workspace code</p>
                                                </span>
                                        </div>
                                </div>
                                <div className="bg-[#1E9CEF] w-[2%] shadow-tip rounded-br-lg">    
                                </div>
                        </div> 
                        )}
                </div> 
    </div>
  )
}
