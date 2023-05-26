import React from 'react'

import CloseIcon from '../assets/reset_pw_popup/closeIcon.svg'
import SideBarOwnerPopup from '../components/SideBarOwnerPopup'
import Pen from '../assets/reset_pw_popup/pen.svg'
import Trash from '../assets/reset_pw_popup/trash.svg'
import Copy from '../assets/reset_pw_popup/copy.svg'



function WorkspaceCollabOwner() {
    return (
        <div>
            <div className='mt-6 fixed pl-32 flex pb-10 pt-10 justify-center item-center '>
                <div className='rounded'>
                    <div className="  flex grid grid-cols-12">
                        <div className=" flex col-span-2 z-0">
                            <SideBarOwnerPopup></SideBarOwnerPopup>
                        </div>
                        <div className="flex justify-center  w-[950px] h-[650px] bg-[#FFFFFF] flex col-span-10  shadow-content z-10 rounded-lg">

                            <div className=" ">


                                <div className=' mt-2 absolute pl-[820px]'>
                                    <img src={CloseIcon} alt="" className='' />
                                </div>
                                <div className=' mt-8 '>
                                    {/* Header */}

                                    <h1 className=" font-bold text-4xl text-[#526581]">Collaborators</h1>
                                    <p className="mt-2 text-20px text-[#526581]">See all members in this workspace</p>
                                </div>
                                <div className="mt-7">
                                    <div className="mt-5">
                                    </div>
                                </div>
                                {/* Content */}

                                <div className=' flex  mt-4 border w-[800px]  rounded-md border-slate-300'>

                                    <div >
                                        <div className=' flex  pt-2 pb-2 pl-6'>
                                            <label className='text-[#526581]'>Collaborators</label>
                                            <div className='ml-2 flex justify-center ml-[500px] w-40 h-8 shadow-boxShadow bg-[#FFFFFF] rounded'>
                                            <label className='mt-1 ml-2 mr-4 text-[#1E9CEF]'>FYUHIJd23r3jfn</label>
                                                <div className='mt-2'><img src={Copy}></img></div>
                                            </div>
                                        </div>

                                        {/* Line */}
                                        <div className=' w-[798px] h-[0.50px] bg-[#BEBEBE] mb-6 '></div>


                                        {/* List Name of member  */}

                                        <div className=' pl-6 pb-12'>
                                            <div className='flex mb-6'>
                                                <div className='w-10 h-10 pt-2 bg-[#37352F] rounded-3xl'>

                                                    <label className='ml-4 text-[#FFFFFF] font-semibold'>S</label>
                                                </div>
                                                <label className='mt-2 ml-4 text-[#526581]'>Sorn Sreynorng</label>
                                                <label className='mt-2 ml-2 text-[#526581]' >(You)</label>

                                                <div className='flex justify-center item-center mt-2  mb-2 ml-8 bg-[#1E9CEF] w-20 rounded-lg bg-opacity-10'>
                                                    <label className='pt-[2px] text-[#1E9CEF] font-normal  text-12px'>Owner</label>
                                                </div>
                                            </div>

                                            <div className='flex'>
                                                <div className='w-10 h-10 pt-2 bg-[#1877F2] rounded-3xl'>

                                                    <label className='ml-4 text-[#FFFFFF] font-semibold'>C</label>
                                                </div>
                                                <label className='mt-2 ml-4 text-[#526581]'>Chhum Lyheng</label>

                                                <div className='flex'>
                                                    <button type="button" className=" text-[#526581] border font-semibold rounded-lg text-sm px-5 py-2.5 text-center  ml-[400px] mr-2 mb-2 flex flex-row">
                                                    <img className='mt-0.5 mr-2 ' src={Pen}></img>
                                                <label>Editor</label>                  
                                                    </button>  
                                                    
                                                    <div className='border flex justify-center rounded-lg ml-2 pl-4 pr-4 mb-2'>
                                                        <img src={Trash}></img>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkspaceCollabOwner