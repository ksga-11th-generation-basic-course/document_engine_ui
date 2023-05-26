import React from 'react'
import SideBarForPopup from '../components/SideBarForPopup'
import CloseIcon from '../assets/reset_pw_popup/closeIcon.svg'


function WorkspaceCallaboratorMember() {
    return (
        <div>
            <div className='mt-6 fixed pl-32 flex pb-10 pt-10 justify-center item-center '>
                <div className='rounded'>
                    <div className="  flex grid grid-cols-12">
                        <div className=" flex col-span-2 z-0">
                            <SideBarForPopup></SideBarForPopup>
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
                                        <div className='pt-2 pb-2 pl-6'>
                                            <label className='text-[#526581]'>Collaborators</label>
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

                                                <div className='flex justify-center item-center mt-2  mb-2 ml-8 bg-[#1E9CEF] w-20 rounded-lg bg-opacity-10'>
                                                    <label className='pt-[2px] text-[#1E9CEF] font-normal  text-12px'>Owner</label>
                                                </div>
                                            </div>
                                            <div className='flex mb-6' >

                                                <div className='w-10 h-10 pt-2 bg-[#F28F8F] rounded-3xl'>
                                                    <label className='ml-4 text-[#FFFFFF] font-semibold'>R</label>
                                                </div>
                                                <label className='mt-2 ml-4 text-[#526581]' >Ruos Raksa</label>
                                                <label className='mt-2 ml-2 text-[#526581]' >(You)</label>
                                            </div>
                                            <div className='flex'>
                                                <div className='w-10 h-10 pt-2 bg-[#1877F2] rounded-3xl'>

                                                <label className='ml-4 text-[#FFFFFF] font-semibold'>C</label>
                                                </div>
                                                <label className='mt-2 ml-4 text-[#526581]'>Chhum Lyheng</label>
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
export default WorkspaceCallaboratorMember