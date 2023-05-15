import React from 'react'
import logoDash from '..//assets/dashboardImage/logodash.svg'
import plusLogo from '..//assets/dashboardImage/plusLogo.svg'
function NavbarComponent() {
  return (
    <div>
     <div className="bg-white bg-[#FFFFFF]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                </a>
                <div className="flex items-center md:order-2">
                    <div >
                        <button type="button" className="text-[#1E9CEF] border border-[#526581]  focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center  dark:border-gray-600 mt-2 mr-2 mb-2 flex flex-row">
                        <img className='mt-0.5 mr-2 ' src={plusLogo}></img> 
                         Join</button>
                    </div>
                    <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ml-2" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-10 h-10 rounded-full " src={logoDash} alt="user photo"/>
                    </button>
                </div>
            </div>
        </div>
        </div>
  )
}

export default NavbarComponent