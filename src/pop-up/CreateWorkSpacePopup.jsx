import React from "react";
import CreateWorkSpace from "../assets/reset_pw_popup/createNewWorkspacePopup.svg";
import ImageUpload from "../assets/reset_pw_popup/Image.svg";
import CloseIcon from "../assets/reset_pw_popup/closeIcon.svg";

function CreateWorkSpacePopup({open, setOpen}) {
  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-200 bg-opacity-70 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className=" relative transform overflow-hidden rounded-lg bg-white text-left lg:shadow-xl transition-all sm:my-12 sm:w-full sm:max-w-[640px]">
              <div
                className="flex justify-end pt-4 pr-4 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <img src={CloseIcon} alt="" className="" />
              </div>
              <div className="flex flex-col justify-center items-center px-4  mt-8">
                <img src={CreateWorkSpace} alt="" className="md:w-24" />
              </div>
              <form className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex justify-center">
                  <div className="mt-2 text-center  sm:mt-0 sm:text-left">
                    <h3
                      className="text-24px font-bold leading-12 text-[#1E9CEF] flex justify-center"
                      id="modal-title"
                    >
                      Create Workspace
                    </h3>
                    <div className="mt-8 text-left">
                      <div className="max-sm:w-72">
                        <label className="font-bold text-18px text-[#6B7280]">
                          Workspace Name
                        </label>
                        <input
                          type="text"
                          className="d:pr-56 sm:pr-56 form-control block w-full py-3 text-16px font-semibold text-[#6B7280] bg-white bg-clip-padding  border border-solid border-[#1E9CEF] rounded-lg transition ease-in-out m-0 resize mt-2 mb-4"
                          placeholder="Workspace Name"
                        />
                      </div>

                      <label className="font-bold text-18px text-[#6B7280] ">
                        Workspace Photo
                      </label>
                      <div className="mt-2 bg-[#1E9CEF] bg-opacity-25 relative border border-[#1E9CEF] rounded-lg h-36 flex justify-center items-center ">
                        <label>
                          <input
                            class="text-sm cursor-pointer w-36 hidden"
                            type="file"
                            multiple
                          />
                          <img src={ImageUpload} alt="" className="" />
                        </label>

                        {/* <input className="text-sm hidden cursor-pointer w-36" type="file" multiple />
                                                <div className="text absolute text bg-indigo-600 text-white border border-[#1E9CEF] rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div> */}
                      </div>
                      <label className="font-normal text-[#6B7280] flex justify-end pt-2">
                        (Optional)
                      </label>
                      <div className="mt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          class=" text-accent bg-[#FFFFFF] border focus:outline-none  font-bold rounded-lg text-16px px-12 py-2.5  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-10"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          class="text-white bg-[#1E9CEF] hover:bg-[#1E9CEF]/80 focus:outline-none  font-bold rounded-lg text-16px px-12 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mb-10"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {/* flex-row-reverse rounded-md bg-[#1E9CEF] px-36 py-3 text-sm font-semibold text-white  hover:bg-blue-500 sm:ml-3 sm:w-auto */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateWorkSpacePopup;
