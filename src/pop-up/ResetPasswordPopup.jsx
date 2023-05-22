
import React from 'react'
import ResetPassword from '../assets/reset_pw_popup/resetpassword.svg'
import CloseIcon from '../assets/reset_pw_popup/closeIcon.svg'

function ResetPasswordPopup() {
    return (
        <div>

            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-200 bg-opacity-70 transition-opacity"></div>



                <div className="fixed inset-0 z-10 overflow-y-auto">

                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">



                        <div className=" relative transform overflow-hidden rounded-lg bg-white text-left lg:shadow-xl transition-all sm:my-12 sm:w-full sm:max-w-lg ">
                            <div className='flex justify-end pt-4  pr-4'>
                                <img src={CloseIcon} alt="" className='' />
                            </div>
                            <div className='flex flex-col justify-center items-center px-4  mt-4'>
                                <img src={ResetPassword} alt="" className='' />
                            </div>
                            <form className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex justify-center">
                                    <div className="mt-2 text-center  sm:mt-0 sm:text-left">
                                        <h3 className="text-xl text-base font-semibold leading-12 text-[#1E9CEF] flex justify-center" id="modal-title">Reset Account Password</h3>
                                        <div className="mt-8 text-left">
                                            <div className='max-sm:w-72'>
                                            <label className='font-semibold text-[#6B7280]'>Current Password</label>
                                            <input type="text" class=" md:pr-56 sm:pr-56 form-control block w-full  py-3 text-base font-normal text-[#6B7280] bg-white bg-clip-padding  border border-solid border-[#1E9CEF] rounded-lg transition ease-in-out m-0 resize mt-2 mb-4" placeholder="Current Password" />
                                            </div>
                                            <label className='font-semibold text-[#6B7280]'>New Password</label>
                                            <input type="text" class=" form-control block w-full  py-3 text-base font-normal text-[#6B7280] bg-white bg-clip-padding  border border-solid border-[#1E9CEF] rounded-lg transition ease-in-out m-0 resize mt-2 mb-4" placeholder="New Password" />
                                            <label className='font-semibold text-[#6B7280]'>Confirm New Password</label>
                                            <input type="text" class="form-control block w-full py-3 text-base font-normal text-[#6B7280] bg-white bg-clip-padding  border border-solid border-[#1E9CEF] rounded-lg transition ease-in-out m-0 resize mt-2" placeholder="Confirm New Password" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-16 mb-4">
                                
                                <button type="button" className="form-control block w-full  py-3 text-base font-normal text-white  border border-solid bg-[#1E9CEF] rounded-lg transition ease-in-out  resize mt-2 mb-4">Save Change</button>
                            </div>
                            {/* flex-row-reverse rounded-md bg-[#1E9CEF] px-36 py-3 text-sm font-semibold text-white  hover:bg-blue-500 sm:ml-3 sm:w-auto */}
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default ResetPasswordPopup