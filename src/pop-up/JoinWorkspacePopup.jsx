
import JoinWorkspace from '../assets/reset_pw_popup/joinworkspace.svg'
import CloseIcon from '../assets/reset_pw_popup/closeIcon.svg'

function JoinWorkspacePopup() {
    return (
        <div>

            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-200 bg-opacity-70 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto">

                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div className=" relative transform overflow-hidden rounded-lg bg-white text-left lg:shadow-xl transition-all sm:my-2 sm:w-full sm:max-w-lg ">
                            <div className='flex justify-end pt-4  pr-4'>
                                <img src={CloseIcon} alt="" className='' />
                            </div>
                            <div className='flex flex-col justify-center items-center px-4 '>
                                <img src={JoinWorkspace} alt="" className='md:w-16' />
                            </div>
                            <form className="bg-white px-4 pb-4 sm:p-6 sm:pb-4 ">
                                <div className="sm:flex justify-center">
                                    <div className="mt-2 text-center  sm:mt-0 sm:text-left">
                                        <h3 className=" text-xl font-semibold leading-12 text-[#1E9CEF] flex justify-center" id="modal-title">Enter code to join workspace</h3>

                                    </div>
                                  
                                </div>
                                <div className='max-sm:w-72'>
                                <input type="text" className="max-sm:w-[267px] max-sm:ml-2 sm:ml-12 sm:w-[375px] lg:ml-12 lg:w-[375px] md:ml-12 md:w-[375px] form-control block  py-2 text-base font-normal text-[#6B7280] bg-white bg-clip-padding  border border-solid border-[#1E9CEF] rounded-lg transition ease-in-out m-0 resize mt-6 " placeholder="" />
                                    </div>
                            </form>

                            <div className='mt-2 ml-2 flex md:justify-end md:mr-14 lg:mr-14 sm:ml-44 max-sm:ml-6'>

                                <button type="button" className="text-[#6B7280] bg-[#FFFFFF] border focus:outline-none  font-semibold rounded-lg text-sm px-12 py-2.5  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-10">
                                    Cancel
                                </button>
                                <button type="button" className=" text-white bg-[#1E9CEF] hover:bg-[#1E9CEF]/80 focus:outline-none  font-semibold rounded-lg text-sm px-12 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-10">
                                    Join
                                </button></div>
                            {/* flex-row-reverse rounded-md bg-[#1E9CEF] px-36 py-3 text-sm font-semibold text-white  hover:bg-blue-500 sm:ml-3 sm:w-auto */}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default JoinWorkspacePopup