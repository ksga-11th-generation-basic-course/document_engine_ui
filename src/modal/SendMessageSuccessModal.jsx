import React from 'react'

import sendMessageSuccess from '../assets/reset_pw_popup/sendMessageSuccess.svg'
import CloseIcon from '../assets/reset_pw_popup/closeIcon.svg'

function SendMessageSuccessModal() {
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
                            <div className='flex flex-col justify-center items-center px-4 '>
                                <img src={sendMessageSuccess} alt="" className='md:w-16' />
                            </div>
                            <form className="bg-white px-4  sm:p-6 sm:pb-4  ">
                                <div className="sm:flex justify-center">
                                    <div className=" text-center  sm:mt-0 sm:text-left">
                                        <h3 className=" text-baseleading-12 text-[#6B7280] flex justify-center font-normal " id="modal-title">Thank you for reaching out to us!</h3>
                                        <h3 className=" text-baseleading-12 text-[#6B7280] flex justify-center font-normal" id="modal-title">  We have received your message and will</h3>
                                        <h3 className=" text-baseleading-12 text-[#6B7280] flex justify-center font-normal  mb-2" id="modal-title">get back to you as soon as possible.</h3>

                                    </div>
                                </div>
                            </form>

                            <div className='mt-4 ml-2 flex justify-center'>
                              
                                <button type="button" class="text-white bg-primary hover:bg-primary/90 focus:outline-none  font-semibold  rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center mr-2 mb-10">
                                    Thank You
                                </button></div>
                            {/* flex-row-reverse rounded-md bg-[#1E9CEF] px-36 py-3 text-sm font-semibold text-white  hover:bg-blue-500 sm:ml-3 sm:w-auto */}
                        </div>
                    </div>
                </div>
            </div>


        </div>
  )
}

export default SendMessageSuccessModal