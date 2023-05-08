import React from 'react'
import Navbar from './Navbar'
import FooterMain from './FooterMain'
import Slider from'../assets/images/about/about.svg'
import Bg from "../assets/images/about/BgAbout.svg"
import Icon from"../assets/images/about/Icon.svg"
import Member from "../assets/images/about/Member.svg"
export default function AboutUs() {
  return (
    <div className='about'>
        <div className="navbar pb-2">
            <Navbar></Navbar>
        </div>
        <div className="main pt-16 ">
            <div className='position relative'>
                <div className="slider">
                    <img src={Slider } alt="" />
                </div>
                <div className='text text-justify absolute text-6xl text-blue-400 px-20 font-semibold  top-40 '>
                    <h1 className='pb-5'>What & Who</h1>
                    <h1>We Are</h1>
                </div>
            </div>
            <div className="main2 px-40 pt-32">
                <div className='flex flex-justify'>
                    <div className="text">
                        <div className="mainTitle tracking-wide text-4xl pt-36 ">
                            <h1 className='pb-3'>All your <span className='text-blue-400 pr-2'>Documents</span >in one <span className='text-blue-400 '> place</span></h1>
                            <h1>and<span  className='text-blue-400 p-2'>safe! </span></h1>
                        </div>
                        <div className="paragraph text-justify pt-10 text-2xl font-semibold text-gray-500">
                            <p>DocEngine is a system that includes the possibility to</p>
                            <p>customize the document with auto-saving and ease</p>
                            <p>when the users want to share those documents </p>
                            <p>within the group.</p>
                        </div>
                     </div>
                    <div className="img">
                        <img src={Bg} alt="" />
                    </div>
                </div>
            </div>
            <div className="about bg-sky-50 w-full h-96 px-36 ">
                <h1 className='text-center pt-10 text-4xl font-semibold'>About Our  <span className='text-blue-400'> Project</span></h1>
                <div className="grid grid-cols-4 gap-2">
                    <div className="grid col-span-1 text-2xl text-gray-500 font-semibold pt-16 pl-52">
                        <img src={Icon} alt="" className='w-10 pb-2' />
                        <h1>Why</h1>
                        <h1>Doc <span className='text-blue-400'>Engine?</span></h1>
                    </div>
                    <div className='grid col-span-3 px-10 text-justify pt-10 pl-40 text-xl text-gray-700'>
                       <p>DocEngine is an online platform that allows users to read, edit, and</p>
                       <p>share documents within the workspace. It allows users to invite other</p>
                       <p>members to join, grant permissions, define blocks, and view their</p>
                       <p>history after editing. It also maintains data for users to update later.</p>
                       <p>edit, and share documents within the workspace.</p>
                    </div>
                </div>
            </div>
            <div className="slider2 W-1/2 flex justify-center align-center ">
                <h1 className='text-right'>Our Member</h1>
                <div className='img'>
                    <img src={Member} alt=""  className=''/>
                </div>
            </div>

        </div>
        <div className="footer">
            <FooterMain></FooterMain>
        </div>
    
    </div>
  )
}
