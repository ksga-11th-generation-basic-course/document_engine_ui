import React from 'react'
import Img from "../assets/images/popUp/Comback.svg"

export default function Comback() {
  return (
        <div>
            
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

<div class="min-w-screen relative flex min-h-screen flex-col items-center justify-center bg-white "
	x-data="{ open: true }">
	<div class="">
		<button  class="rounded-lg bg-blue-50 px-5 text-sm font-medium text-blue-500 hover:bg-blue-100 hover:text-blue-600"> Show Modal </button>
	</div>
	<div x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0"
		x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200"
		x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"
		x-description="Background backdrop, show/hide based on modal state."
		class="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"></div>


	<div class="fixed overflow-y-auto">
		<div class="flex min-h-full items-end justify-center px-4 text-center sm:items-center sm:p-0">

			<div x-show="open" x-transition:enter="ease-out duration-300"
				x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
				x-transition:leave="ease-in duration-200"
				x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
				x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				x-description="Modal panel, show/hide based on modal state."
				class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
				>
				 <div class="px-2 sm:p-10 text-center overflow-y-auto">
                     <svg class="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                    </svg>
                                
                    <span class="pb-8
                     inline-flex justify-center items-center  rounded-full ">
                         <img src={Img} alt="" />
                    </span>
                

                    <h3 class="mb-2 text-2xl font-bold text-blue-500">Comeback Soon</h3>                   
                    <p class="text-gray-500">
                        Are you sure you want to sign out?</p>
                    <div class="  flex justify-center px-24 mt-4 ">
                          <button  type="button" class=" inline-flex justify-center items-center mr-2 ">
                              <a href="" className='py-2 px-8 text-gray-500   border border-gray-400 rounded-xl  font-medium text-sm'>Cancel</a>
                         </button>
            
                        <button  type="button" class="inline-flex justify-center items-center  "> <a href="" className=' py-2 bg-red-500  px-4 text-white  rounded-xl border font-medium text-sm'>Yes, Sign out </a>
                         </button>
                    </div>
                </div>

			</div>

		</div>
	</div>
</div>
        </div>
  )
}
