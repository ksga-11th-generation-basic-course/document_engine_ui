import React from 'react'
import Message from "../assets/images/popUp/messageSucess.svg"
import Cancel from "../assets/images/popUp/cancel.png"
export default function MessageSucess() {
  return (
    <div className='flex justify-center items-center bg-slate-400 w-full h-[100vh]'>
        <div className="popup w-[641px] h-[381px] relative flex  justify-center items-center rounded-md shadow-sm bg-white ">
            <div className='img  absolute top-5 right-[24px]'>
                <img src={Cancel} alt="" />
            </div>
            <div className='icon  flex  flex-col justify-center items-center r'>
                <img src={Message} alt=""  className='w-[93pxx] pb-10'/>
                <div className='text text-accent text-center whitespace-nowrap leading-7 text-xl' >
                    <p>Thank you for reaching out to us! We have </p>
                    <p>received your message and will get back to</p>
                    <p> you as soon as possible. </p>
                </div>
                <button className='w-[150px] h-[40px] text-white mt-10 bg-primary rounded-lg'>Thank You</button>
            </div>
        </div>
    </div>
  )
}
