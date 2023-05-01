import React from 'react'
import Logo from "../assets/images/Logo.svg";
import Success1 from"../assets/images/Success/Circle-dote.svg"
import Success2 from"../assets/images/Success/Circle.svg"
import Success3 from"../assets/images/Success/success.svg"
import Right1 from "../assets/images/Right/star-right.svg"
import Right2 from "../assets/images/Right/Leader-pana.svg"
import Left1 from "../assets/images/Left/star-left.svg"
import Left2 from "../assets/images/Left/Completed-pana 1.svg"
import Google from "../assets/images/Login/Google.svg";
import Facebook from "../assets/images/Login/Facebook.svg";
export default function Form_Sucess() {
  return (
    <div className="flex justify-center items-center bg-[#EDF9FF] text-[#37352F]">
      <div className="flex justify-center  items-center min-h-screen relative overflow-hidden">
        <img src={Logo} className="absolute top-5 left-0" />
        <div className='bg'>
            <div className="start">
              <img src={Left1} />
            </div>
            <div className="img">
            <img src={Left2}  />
            </div>
        </div>
        <div className="bg-white flex flex-col absolute   justify-center gap-y-6 rounded-3xl shadow-md">
          <div class="xs:p-0 mx-auto md:w-full md:max-w-md pt-10">
            <div className="img relative flex justify-center items-center">
              <div className="success1">
                <img src={Success1} alt="" className=' w-20'/>  
              </div>
              <div className="success2  absolute top-2 left-15">
                <img src={Success2} alt="" className=' w-16'/>  
              </div>
              <div className="success1 absolute top-7 left-19">
                <img src={Success3} alt="" className=' w-8'/>  
              </div>
            </div>
             <div class="text-main pt-5">
               <h1 class="font-bold text-center text-blue-500 text-2xl">Sign up successful</h1>       
            </div>  
            <div className="text pt-5">
              <p class="text-sm text-gray-500 px-6">You have successful sign up. Please,
                use your</p>  
              <p class="text-sm text-center text-gray-500 px-6">email and password when signing in.</p>  
            </div>
            <div className="btn flex justify-center items-center pt-8 pb-12">
              <button type="button" class="transition  pb-3 duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-64 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                  Go to Sign in              
              </button>
            </div>
          </div>
        </div>
      <div>
        <div className="start">
          <img src={Right1} />
        </div>
      </div>
      <div className='bg'>
          <div className="start">
            <img src={Right1} />
          </div>
          <div className="img">
            <img src={Right2} />
          </div>
      </div>
    </div>
  </div>
  )
}

