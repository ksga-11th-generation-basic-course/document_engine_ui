import React from 'react'
import Navbar from './Navbar'
import FooterMain from './FooterMain'
import Slider from'../assets/images/about/about.svg'
import Bg from "../assets/images/about/BgAbout.svg"
import Icon from"../assets/images/about/Icon.svg"
import Member from "../assets/images/about/Member.svg"
export default function AboutUs() {
  return (
    <div className='about w-full'>
        <div className="navbar pb-2">
            <Navbar></Navbar>
        </div>
        <div className='SlideBar pt-12'>
            <div className='SlideBar2 px-10 relative'>
                <div className='text text-justify absolute  text-6xl max-sm:text-2xl text-primary px-20 font-semibold  top-40 max-sm:top-8 max-sm:leading-6 max-sm:right-40 max-sm:whitespace-nowrap'>
                    <h1 className=''>What & Who</h1>
                    <h1>We Are</h1>
                </div>
            </div>
            <div className='SlideBar1 max-sm:w-[100%] '>
                    <img src={Slider } alt="" />
            </div>
        </div>
        <div className='flex flex-row max-sm:flex-col w-screen justify-evenly px-20 max-sm:px-10 '>
            <div className=' flex flex-col   '>
                <div className="mainTitle text-4xl pt-36 max-sm:pt-16 max-sm:text-2xl">
                    <h1 className='pb-35'>All your <span className='text-blue-400 pr-2'>Documents</span >in one <span className='text-blue-400 '> place</span></h1>
                    <h1>and<span  className='text-blue-400 p-2'>safe! </span></h1>
                </div>
                <div className="paragraph text-justify  pt-10 text-2xl font-semibold  max-sm:px-2 max-sm:text-xl text-gray-500">
                    <p className=''>DocEngine is a system that includes the possibility to</p>
                    <p className=''>customize the document with auto-saving and ease</p>
                    <p className=''>when the users want to share those documents </p>
                    <p>within the group.</p>
                </div>
            </div>
           <div className="img ">
              <img src={Bg} alt="" />
            </div>

        </div>
        <div className=' min-sm:h-96 hidden:bg-sky-50 lg:bg-sky-50 px-10 max-sm:px-10'>
            <div className=' flex justify-evenly max-sm:flex-col  items-center py-16 max-sm:py-6 '>
                <div className=' flex justify-center flex-col max-sm:hidden  max-sm:text-xl max-sm:flex-row max-sm:pb-10'>
                    <img src={Icon} alt="" className='w-10 pb-2 max-sm:w-16 ' />
                    <div className='text-5xl max-sm:text-4xl '>
                        <h1>Why</h1>
                        <h1>Doc <span className='text-blue-400'>Engine?</span></h1>
                    </div>
                </div>
                <div className='max-sm:indent-[0.5px] max-sm:text-xl   max-sm:border-2 max-sm:border-primary max-sm:py-3 max-sm:px-0 '>
                    <h1 className='text-5xl max-sm:text-3xl max-sm:text-center '>About Our <span className='text-primary'>Project </span></h1>
                    <div className='text-accent text-2xl  pt-10 max-sm:pt-5 max-sm:text-justify max-sm:px-2  '>
                        <p>DocEngine is an online platform that allows users to read, edit, and</p>
                        <p>share documents within the workspace. It allows users to invite other</p>
                        <p>members to join, grant permissions, define blocks, and view their</p>
                        <p>history after editing. It also maintains data for users to update later.</p>
                        <p>edit, and share documents within the workspace.</p>
                    </div>
                </div> 
             </div>
        </div>
        <h1 className='text-4xl text-center w-full pt-10 max-sm:pt-2 max-sm:text-2xl font-semibold'>Our<span className='text-primary pl-2'>Members </span></h1>
        <div className='Member  flex justify-center max-sm:px-0'>
            <img src={Member} alt=""  className=''/>
        </div>
        <div className="footer">
            <FooterMain></FooterMain>
        </div> 
    </div>
  )
}
