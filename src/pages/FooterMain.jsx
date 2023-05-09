import React from 'react'
import Footer from"../assets/images/footer/Footer.svg"
import IG from "../assets/images/footer/IG.svg"
import Face from "../assets/images/footer/Face.svg"
import Telegram from "../assets/images/footer/Tegram.svg"
export default function FooterMain() {
  return (
    <div>
        <div className='footer  relative w-full'>
             <img src={Footer} alt="" className='' />
             <div className='icon absolute bottom-3 top-60 left-20  '>
                <h1 className='pl-12 text-white'>FOLLOW US</h1>
                <div className="ICON flex flex-evenly pt-5  ">
                    <div className='icon1 '>
                         <img src={Face} alt=""  className='pr-10 hover:scale-150'/>
                    </div>
                    <div className='icon2'>
                        <img src={IG} alt=""  className='pr-10  hover:scale-150'/>
                    </div>
                    <div className='icon3'>
                        <img src={Telegram} alt="" className='hover:scale-150' />
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}
