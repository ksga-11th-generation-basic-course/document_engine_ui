import React from 'react'
import Close from "../assets/images/popUp/CloseAccount.svg"
import Cancel from "../assets/images/popUp/cancel.png"
export default function CloseAccount() {
  return (
    <div className='close_Account flex justify-center items-center bg-slate-400 w-full h-[100vh]'>
        <div className="popup w-[641px] h-[381px] relative flex  justify-center items-center rounded-md shadow-sm bg-white ">
            <div className='img  absolute top-5 right-[24px]'>
                <img src={Cancel} alt="" />
            </div>
            <div className='icon  flex  flex-col justify-center items-center '>
                <img src={Close} alt=""  className='w-[93px] pb-8'/>
                <div className='text text-accent text-center whitespace-nowrap  text-xl ' >
                    <p>Your account was closed.</p>
                    <p className='pt-2'>Do you want to enable your account?</p>
                </div>
                <div className='btn flex justify-around pt-12'>
                    <button className='w-[150px] h-[46px] text-accent text-lg font-bold border-accent  border-2  rounded-2xl mr-4'>No, cancel</button>
                    <button className='w-[150px] h-[46px] text-white text-lg  bg-primary rounded-2xl'>Yes</button>
                </div>
            </div>
        </div>
    </div>
  )
}
