import React from 'react'
import Logo from '../assets/reset_pw_popup/logo.svg'
import PersonTwo from '../assets/reset_pw_popup/personTwo.svg'
import LeaveIconSmall from '../assets/reset_pw_popup/leaveIcon.svg'


function SideBarForPopup() {
  return (
    <div>
      <div className="h-screen shadow-lg bg-[#FFFFFF] w-64 rounded-md shadow-content">
            {/* Logo */}
            <div className="flex justify-center mb-4 drop-shadow-lg bg-[#FFFFFF] pr-12 rounded-md  ">
              <img src={Logo} alt="" className="w-[80px] h-[104px] " />
            </div>
            
          <div className="pr-16 pl-6">                
                {/* workspace */}
                <div>
                      <div className="shadow-lg relative bg-[#F6F6F6] mb-5 px-2.5 py-2 rounded-sm ">
                          <div className='ml-2 flex'>
                              <img src={PersonTwo}></img>
                              <label className='text-[#1E9CEF] ml-4'>Collabrators</label>
                          </div>
                           {/* <NavLink to="/workspace" className={({isActive}) => isActive? "fill-primary text-primary" : " fill-accent text-accent"}>
                                <span className="flex">
                                      <span className="pr-4">
                                            <svg width="20" height="20" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg">
                                          <path d="M8.33333 10.8333H3.33333C3.11232 10.8333 2.90036 10.9211 2.74408 11.0774C2.5878 11.2337 2.5 11.4457 2.5 11.6667V16.6667C2.5 16.8877 2.5878 17.0996 2.74408 17.2559C2.90036 17.4122 3.11232 17.5 3.33333 17.5H8.33333C8.55435 17.5 8.76631 17.4122 8.92259 17.2559C9.07887 17.0996 9.16667 16.8877 9.16667 16.6667V11.6667C9.16667 11.4457 9.07887 11.2337 8.92259 11.0774C8.76631 10.9211 8.55435 10.8333 8.33333 10.8333ZM7.5 15.8333H4.16667V12.5H7.5V15.8333ZM16.6667 2.5H11.6667C11.4457 2.5 11.2337 2.5878 11.0774 2.74408C10.9211 2.90036 10.8333 3.11232 10.8333 3.33333V8.33333C10.8333 8.55435 10.9211 8.76631 11.0774 8.92259C11.2337 9.07887 11.4457 9.16667 11.6667 9.16667H16.6667C16.8877 9.16667 17.0996 9.07887 17.2559 8.92259C17.4122 8.76631 17.5 8.55435 17.5 8.33333V3.33333C17.5 3.11232 17.4122 2.90036 17.2559 2.74408C17.0996 2.5878 16.8877 2.5 16.6667 2.5V2.5ZM15.8333 7.5H12.5V4.16667H15.8333V7.5ZM16.6667 13.3333H15V11.6667C15 11.4457 14.9122 11.2337 14.7559 11.0774C14.5996 10.9211 14.3877 10.8333 14.1667 10.8333C13.9457 10.8333 13.7337 10.9211 13.5774 11.0774C13.4211 11.2337 13.3333 11.4457 13.3333 11.6667V13.3333H11.6667C11.4457 13.3333 11.2337 13.4211 11.0774 13.5774C10.9211 13.7337 10.8333 13.9457 10.8333 14.1667C10.8333 14.3877 10.9211 14.5996 11.0774 14.7559C11.2337 14.9122 11.4457 15 11.6667 15H13.3333V16.6667C13.3333 16.8877 13.4211 17.0996 13.5774 17.2559C13.7337 17.4122 13.9457 17.5 14.1667 17.5C14.3877 17.5 14.5996 17.4122 14.7559 17.2559C14.9122 17.0996 15 16.8877 15 16.6667V15H16.6667C16.8877 15 17.0996 14.9122 17.2559 14.7559C17.4122 14.5996 17.5 14.3877 17.5 14.1667C17.5 13.9457 17.4122 13.7337 17.2559 13.5774C17.0996 13.4211 16.8877 13.3333 16.6667 13.3333ZM8.33333 2.5H3.33333C3.11232 2.5 2.90036 2.5878 2.74408 2.74408C2.5878 2.90036 2.5 3.11232 2.5 3.33333V8.33333C2.5 8.55435 2.5878 8.76631 2.74408 8.92259C2.90036 9.07887 3.11232 9.16667 3.33333 9.16667H8.33333C8.55435 9.16667 8.76631 9.07887 8.92259 8.92259C9.07887 8.76631 9.16667 8.55435 9.16667 8.33333V3.33333C9.16667 3.11232 9.07887 2.90036 8.92259 2.74408C8.76631 2.5878 8.55435 2.5 8.33333 2.5V2.5ZM7.5 7.5H4.16667V4.16667H7.5V7.5Z"/>
                                          </svg>
                                      </span>
                                        <p className="font-bold">Workspace</p>
                                </span>
                            </NavLink> */}
                      </div>
                    <div>
               <div className='flex mt-[580px]'>
                 
                
                  <img src={LeaveIconSmall} alt="" className="w-[20px] h-[21px] " />
                  <label className='text-[#FF5658] ml-4 font-semibold'> Leave Workspace</label>
                 
               </div>
            </div>
        </div>
    </div>
 </div>
</div>
  )
}

export default SideBarForPopup