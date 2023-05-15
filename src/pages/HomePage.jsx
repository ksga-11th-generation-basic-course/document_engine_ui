import React from 'react'
import Navbar from './Navbar'
import Pic from"../assets/images/Homepage/Literature-bro 1.svg"
import Logo from "../assets/images/Logo.svg";
import Reset from "../assets/images/Set_New_pass.svg"
import Card1 from"../assets/images/Card/Card1.svg"
import Card2 from"../assets/images/Card/Card2.svg"
import Card3 from"../assets/images/Card/Card3.svg"
import Icon1 from "../assets/images/Icon/Icon1.svg"
import Icon2 from "../assets/images/Icon/Icon2.svg"
import Icon3 from "../assets/images/Icon/Icon3.svg"
import Document from "../assets/images/Homepage/Document.svg"
import Sharing from "../assets/images/Homepage/Sharing.svg"
import Group from "../assets/images/Homepage/Group 70.svg"
import FooterMain from './FooterMain';
export default function HomePage() {
  return (
    <div className='home_page w-full'>
        <div className="nav ">
            <Navbar></Navbar>
        </div>
        <div className="main px-20 max-sm:px-10 flex flex-row">
            <div className='grid grid-cols-3 gap-4 pt-[10rem]  max-sm:pt-[6rem] max-lg:flex max-lg:flex-col  max-md:flex max-md:flex-col'>
                    <div className="col-span-1">
                        <div className="header1 text-5xl max-lg:text-xl max-lg:whitespace-pre max-md:whitespace-pre  max-md:text-lg">
                            <h1 className='pb-5 max-sm:pb-0.5'>All your <span className='text-primary'>Documents</span></h1>
                            <h1>in one <span className='text-primary'>place</span>and <span className='text-primary'>safe!</span></h1>
                        </div>
                        <div className='paragraph text-2xl pt-10 max-sm:pt-4 max-lg:text-xl max-lg:whitespace-pre max-sm:text-sm max-sm:whitespace-pre max-md:whitespace-pre max-sm:   text-accent'>
                            <p className=''>make your wiki, docs & project in ONCE with the</p>
                            <p className=''>best security, edit your documents and work as a</p>
                            <p>group.</p>
                        </div>
                        <div className='button pt-5'>
                            <button className='bg-primary max-sm:px-4 max-sm:py-1    text-white px-8 py-2 border rounded-lg hover:bg-white hover:border-blue-700 hover:text-black'>
                                <a href="#">Get Start</a>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <img src={Pic} alt="" />
                    </div>
            </div>
        </div>

        <div className='px-20 pt-20 max-sm:px-6 max-sm:pt-3'>
            <div className='py-[1px] bg-accent '></div>
        </div>
        <div className='text text-center px-20 pt-16 max-sm:pt-8'>
            <h1 className='text-gray-500 text-4xl max-sm:whitespace-pre  max-sm:text-3xl '>We Provide Best </h1>
            <h2 className='text-gray-500 text-4xl pt-3 max-sm:text-3xl'> <span className='text-blue-500 pr-2'>Solution</span>For you</h2>
        </div>
        <div class="flex flex-row justify-evenly w-[100%] px-20 pt-20 max-sm:flex-col max-sm:pt-5 max-sm:px-2">
            <div class="card1 max-sm:pt-5">
                <img src={Card1}alt="" className='hover:opacity-100' />
                <div class="px-6 ">
                     <div class="font-bold text-blue-400 text-xl pt-5 text-center hover:scale-125">Collaboration</div>
                        <div className="text  text-center max-sm:whitespace-nowrap  text-gray-500 leading-6 text-base max-sm:text-sm">
                            <p class="">Coming together is a beginning, staying</p>  
                            <p class="">together is progress, and working</p> 
                            <p class="">whether you did it or not</p> 
                        
                        </div>
                </div>
            </div>
            <div class="card2">
                <img src={Card2}alt=""  className='hover:opacity-100'/>
                <div class="px-6 ">
                    <div class="font-bold text-blue-400 text-xl text-center">Productivity</div>
                            <div className="text text-center  text-gray-500 max-sm:whitespace-nowrap max-sm:text-sm leading-6 text-bas ">
                                <p class="">Real integrity is doing the right thing,</p>  
                                <p class=" ">knowing that nobody’s going to know </p> 
                                <p class=" ">whether you did it or not</p> 
                            </div>
                    </div>
            </div>
            <div class="card3 max-sm:pt-5">
                <img src={Card3}alt=""  className='hover:opacity-90' />
                <div class="px-6 ">
                     <div class="font-bold text-blue-400 text-xl mb-2 text-center hover:scale-125">Sharing</div>
                             <div className="text-center  max-sm:whitespace-nowrap leading-6 text-bas max-sm:text-sm">
                                 <p class="">Love only grows by sharing.
                                 </p>  
                                <p class="">You can only have more for yourself by giving it away </p> 
                                <p class="">to others.</p> 
                         </div>
                    </div>

            </div>
        </div>
        <div className='px-64 max-sm:px-10 pt-[123.8px;] max-sm:pt-[30px] flex justify-between max-sm:flex-col'>
            <div className="text text-justify">
              <h1 className='text-5xl max-sm:whitespace-pre max-sm:text-4xl'>Learn the best <span className='text-blue-400'>tools</span></h1>
                <h1 className='text-5xl pt-5 max-sm:pt-2 max-sm:text-4xl'>and <span className='text-blue-400'>platforms</span></h1>
                <div className='paragraph text-justify pt-4 max-sm:pt-4 text-gray-500 text-bas leading-6   max-sm:whitespace-nowrap'>
                    <p>We focus on industry leading platforms so that you </p>
                    <p>can be prepared for your next job. Then we teach all </p>
                     <p>we van about them.</p>
                </div>
            </div>
            <div className="icon w-1/3 pt-16 max-sm:pt-5 max-sm:flex max-sm: flex justify-around ">
                    <div className="icon1">
                        <img src={Icon1} alt=""  className='w-16 max-sm:w-44 hover:scale-125  '/>
                    </div>
                    <div className="icon2">
                         <img src={Icon2} alt=""  className='w-16 max-sm:w-44 hover:scale-125'/>
                    </div>
                    <div className="icon2">
                        <img src={Icon3} alt="" className='w-16 max-sm:w-44 hover:scale-125' />
                    </div>
                </div>
        </div>
        <div className='px-20 flex justify-around max-sm:flex-col max-sm:px-[2px]'>
            <div className='img1'><img src={Group} alt="" /></div>
            <div className='img2 '><img src={Sharing} alt="" /></div>
            <div className='img3 '><img src={Document} alt="" /></div>
        </div>
        <div className='footer'>
            <FooterMain></FooterMain>
        </div> 
    </div>
  )
}
