import React, { useState } from 'react'
import Avatar from "../assets/images/Workspace/Avatar.svg"
import setting from '../assets/images/Icon/settings.svg'
import close from '../assets/images/Icon/close.svg'
import signout from '../assets/images/Icon/signout.svg'

export const ProfilePopup = () => {
    const [profileOption, setProfileOption] = useState(false);

  return (
    <div className='flex justify-end relative'>
            <img src={Avatar} alt="avatar" className="px-3 mt-4 mr-8 w-16 hover:cursor-pointer" onClick={() => setProfileOption(!profileOption)}/>

            {(profileOption &&
                    <div className='bg-white shadow-profile w-fit mt-16 mr-10 px-7 py-5 rounded-lg absolute  z-20'>
                            <img src={close} alt="close-icon" className='ml-72'/>
                            <div >
                                    <span className='text-[28px] font-bold text-primary'>Profile</span>
                            </div>
                            <div className='flex mt-5 items-center'>
                                    <span>
                                            <img src={Avatar} alt="avatar" className="w-[50px]"/>
                                    </span>                          
                                    <span className='ml-5'>
                                            <div className='font-semibold text-20px text-accent'> Ouddom </div>
                                            <div className='text-16px text-accent_secondary'>tith.ouddom@gmail.com </div>
                                    </span>          
                            </div>    

                            <div className='bg-accent_secondary h-[0.1px] mt-3 mb-7'></div>

                            <div>
                                    <div className='flex mt-5'>
                                            <img src={setting} alt="" className='w-5 fill-black mr-3'/>
                                            <span className='text-[18px]'>Setting</span>
                                    </div>

                                    <div className='flex mt-5'>
                                            <img src={signout} alt="" className='w-5 fill-black mr-3'/>
                                            <span className='text-[18px] text-red'>Sign out</span>
                                    </div>
                            </div>
                    </div>    
            )}
    </div>
  )
}
