import React from 'react'
import Footer from"../assets/images/footer/Footer.svg"
import IG from "../assets/images/footer/IG.svg"
import Face from "../assets/images/footer/Face.svg"
import Telegram from "../assets/images/footer/Tegram.svg"
export default function FooterMain() {
  return (
        <div className='footer relative w-full ' >
             <div className='flex flex-col  justify-center absolute top-[15rem] max-sm:top-[2rem]  left-24  max-sm:left-4 '>
                <h1 className='pl-12 text-white text-2xl max-sm:hidden '>FOLLOW US</h1>
                <div className='flex flex-row pt-5 max-sm:h-5 '>
                    <div className='img1 pr-12 max-sm:pr-8 '>
                        <a href=""><img src={Face} alt=""  className='max-sm:w-3'/></a> 
                    </div>
                    <div className='img2 pr-10 max-sm:pr-6'>
                      <a href=""><img src={IG} alt="" className='max-sm:w-5' /></a> 
                    </div>
                    <div className='img3 '>
                     <a href=""><img src={Telegram} alt="" className='max-sm:w-5'/></a> 
                    </div>
                </div>
             </div>
             <img src={Footer} alt="" className='w-full' />
     </div>
  )
}
