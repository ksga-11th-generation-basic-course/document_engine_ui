import React from 'react'
import SideBarForPopup from '../components/SideBarForPopup'

function WorkspaceCallaboratorMember() {
    return (
        <div>
            <div className=' pl-32 py-20 flex  justify-center item-center bg-[#526581] fixed  '>
                <div className='rounded'>
                    <div className="  flex grid grid-cols-12">
                        <div className=" flex col-span-2 z-0">
                            <SideBarForPopup></SideBarForPopup>
                        </div>
                        <div className="w-[950px] bg-[#FFFFFF] flex col-span-10  shadow-content z-10 rounded-md">
                            <div className="mt-10 px-32 ">
                                <div className="">
                                    {/* Header */}
                                    <div>
                                        <h1 className="font-bold text-4xl text-[#526581]">Collabrators</h1>
                                        <p className="mt-2 text-20px text-[#526581]">See all member in this</p>
                                    </div>
                                    <div className="mt-7">
                                        <div className="mt-5">
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="bg-[#E9E9E9] h-0.5 mt-7 w-[75%]"></div>
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