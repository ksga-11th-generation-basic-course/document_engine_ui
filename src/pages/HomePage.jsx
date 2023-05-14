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
import Card from "../assets/images/Homepage/card3.svg"
import "./Homepage.css"
import FooterMain from './FooterMain';
export default function HomePage() {
  return (
    <div className='home_page w-full'>
        <div className="nav ">
            <Navbar></Navbar>
        </div>
        <div className="main grid grid-cols-3 gap-2 max-sm:px-20 max-sm:pt-12 max-sm:grid  max-sm:grid-cols-1   relative px-20">
            <div className="left">
                <div className="heading col-span-1 text-justify  text-5xl pt-24   max-sm:text-justify ">
                    <h1 className='pb-2 max-sm:whitespace-pre'>All your <span className='text-primary font-semibold'>Documents</span></h1>
                    <h1 className='max-sm:whitespace-pre'>in one  <span className='text-primary  font-semibold'>place</span> and <span className='text-primary font-semibold'>safe!</span></h1>
                </div>
                <div className="paragraph text-justify max-sm:text-[30px] max-sm:whitespace-nowrap max-sm:pt-10  text-gray-500 text-2xl pt-10 font-semibold ">
                    <p className=' max-sm:pb-5'>make your wiki, docs & project in ONCE with the</p>
                    <p className=' max-sm:pb-5'>best security, edit your documents and work as a</p>
                    <p>group.</p>
                </div>
                <div className="btn pt-10 ">
                    <button className='bg-primary max-sm:w-[200px] text-white px-8 py-2 border rounded-lg hover:bg-white hover:border-blue-700 hover:text-black'>
                        <a href="#">Get Start</a>
                    </button>
                </div>
            </div>
            <div 
            className='
                right 
                pt-20 
                col-span-2
                max-sm:w-[100rem]
                max-sm:pt-2
                '>
                <img src={Pic} alt=""/>
            </div>
        </div>  
        <div 
            className='
            px-20 
            pt-16 
            max-sm:px-20 
            max-sm:w-[98rem]'>
           <div className='bg-accent py-[1px]'></div>
        </div>  
        <div className='text text-center pt-20 absolute left-[42em]  max-sm:pt-10'>
            <h1 className='text-gray-500 text-4xl max-sm:whitespace-pre '>We Provide Best </h1>
            <h2 className='text-gray-500 text-4xl'> <span className='text-blue-500 pr-2'>Solution</span>For you</h2>
        </div>
        <div className='card w-full max-sm:w-full px-20 pt-10 max-sm:px-20 max-sm:pt-44 '>
            <div className="flex justify-between max-sm:flex max-sm=justify-evenly ">
                <div className='card1'>
                    <div class="max-w-sm rounded overflow-hidden">
                        <img src={Card1}alt="" className='hover:opacity-50' />
                        <div class="px-6 py-6">
                            <div class="font-bold text-blue-400 text-xl mb-2 text-center hover:scale-125">Collaboration</div>
                                <div className="text max-sm:whitespace-nowrap">
                                    <p class="text-sm text-gray-500 px-4 pl-8">You have successful sign up. Please,
                                        use your</p>  
                                    <p class="text-sm text-center text-gray-500 px-6">email and password when signing in.</p> 
                                    <p class="text-sm text-center text-gray-500 px-6">together is success</p> 
                                </div>
                            </div>
                     </div>
                </div>
                <div className='card2 pl-56'>
                    <div class="max-w-sm rounded overflow-hidden ">
                            <img src={Card2}alt=""  className='hover:opacity-50'/>
                            <div class="px-6 ">
                                <div class="font-bold text-blue-400 text-xl mb-2 text-center hover:scale-125">Productivity</div>
                                    <div className="text  text-center max-sm:whitespace-nowrap	 ">
                                        <p class="text-sm text-gray-500 px-4 pl-4">Real integrity is doing the right thing,
                                        </p>  
                                        <p class="text-sm text-center text-gray-500 ">knowing that nobody’s going to know </p> 
                                        <p class="text-sm text-center text-gray-500 px-6">whether you did it or not</p> 
                                    </div>
                                </div>
                        </div>
                    </div>
                <div className='card3 pl-52 max-sm:pl-144'>
                    <div class="max-w-sm rounded overflow-hidden ">
                            <img src={Card3}alt=""  className='hover:opacity-50' />
                            <div class="px-6 ">
                                <div class="font-bold text-blue-400 text-xl mb-2 text-center hover:scale-125">Sharing</div>
                                    <div className="text-center max-sm:whitespace-nowrap">
                                        <p class="text-sm text-gray-500 px-4 pl-4">Love only grows by sharing. You can only
                                        </p>  
                                        <p class="text-sm text-center text-gray-500 px-6">have more for yourself by giving it away </p> 
                                        <p class="text-sm text-center text-gray-500 px-6">to others.</p> 
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className='tool px-56 pt-24 w-full max-sm:pt-16'>
            <div className="flex justify-between w1/2">
                <div className="text text-justify">
                    <h1 className='text-5xl max-sm:whitespace-pre'>Learn the best <span className='text-blue-400'>tools</span></h1>
                    <h1 className='text-5xl pt-5 '>and <span className='text-blue-400'>platforms</span></h1>
                    <div className='paragraph text-3xl text text-justify pt-4  max-sm:pt-10 max-sm:whitespace-nowrap'>
                        <p>We focus on industry leading platforms so that you </p>
                        <p>can be prepared for your next job. Then we teach all </p>
                        <p>we van about them.</p>
                    </div>
                </div>
                <div className="icon w-1/3 pt-16 flex justify-center max-sm:w-[100rem]">
                    <div className="icon1 pr-10 max-sm:pr-40 ">
                        <img src={Icon1} alt=""  className='w-16 hover:scale-125  max-sm:w-[100rem] '/>
                    </div>
                    <div className="icon2 pr-10">
                         <img src={Icon2} alt=""  className='w-16 hover:scale-125'/>
                    </div>
                    <div className="icon2">
                        <img src={Icon3} alt="" className='w-16 hover:scale-125' />
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='card px-36 grid grid-cols-3relative pt-20  '>
            <div className=" flex  justify-between relative">
                <div className="CardOne">
                    <div className="cardSharp bg-white    border-blue-500 px-6 py-10 ">
                        <div className="icon1  flex justify-evenly ">
                            <img src={Icon1} alt="" className='absolute  top-8 left-10 w-12 ' />
                            <h1 className='h1 pb-5 font-semibold text-lg'>Group</h1>
                        </div>
                        <div className="paragraph text-justify">
                            <p>Alone we can do so little together</p>
                            <p>we can do so much.</p>
                            <p>Teamwork is the collaborative </p>
                            <p>working towards a common goal.</p>
                        </div>
                    </div>
                </div>
                <div className="CardTwo">
                    <div className="cardSharp bg-white    border-blue-500 px-6 py-10 ">
                        <div className="icon2 flex justify-evenly ">
                            <img src={Icon1} alt="" className='absolute  top-8 left-10 w-12 ' />
                            <h1 className='h1 pb-5 font-semibold text-lg'>Group</h1>
                        </div>
                        <div className="paragraph text-justify">
                            <p>Alone we can do so little together</p>
                            <p>we can do so much.</p>
                            <p>Teamwork is the collaborative </p>
                            <p>working towards a common goal.</p>
                        </div>
                    </div>
                </div>
                <div className="CardThree">
                    <div className="cardSharp1 bg-white    border-blue-500 px-6 py-10 ">
                        <div className="icon3  flex justify-evenly ">
                            <img src={Icon1} alt="" className='absolute  top-8 left-10 w-12 ' />
                            <h1 className='h1 pb-5 font-semibold text-lg'>Group</h1>
                        </div>
                        <div className="paragraph text-justify">
                            <p>Alone we can do so little together</p>
                            <p>we can do so much.</p>
                            <p>Teamwork is the collaborative </p>
                            <p>working towards a common goal.</p>
                        </div>
                    </div>
                </div>
             </div>
        </div> */}
        <div className="card3 px-28 max-sm:w-[98rem] max-sm:pb-[20rem]   text-center pt-10">
            <img src={Card} alt="" />
        </div>
        <div className='footer'>
            <FooterMain></FooterMain>
        </div>
    </div>
  )
}
