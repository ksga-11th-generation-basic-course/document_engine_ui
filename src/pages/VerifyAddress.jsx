import React, { useEffect } from 'react'
import Logo from "../assets/images/Logo.svg";
import VerifyL from "../assets/images/verify/left-verify-pic.svg";
import VerifyR from "../assets/images/verify/right-verify-pic.svg";
import Google from "../assets/images/Login/Google.svg";
import Facebook from "../assets/images/Login/Facebook.svg";
import { Formik, useFormik } from 'formik';
import { useState } from 'react';
import { useRef } from 'react';
import { data } from 'autoprefixer';
const validate=(values)=>{
    const errors={}
    if(Object.values(values.OTP).some(data=>data==="")){
        errors.OTP="This field is required";
    }
    return errors;
};
export default function VerifyAddress() { 
    const formik=useFormik({
        initialValues:{
            OTP:Array.from({length:6}).fill(""),
        },
        validate,
        onSubmit:(values)=>{
            console.log(values.OTP.join(""));
        }
    });
    const inputRef=useRef({});
       useEffect(()=>{
            inputRef.current[0].focus();
            inputRef.current[0].addEventListener("pasts",pasteText);
            return()=> inputRef.current[0].removeEventListener("pasts",pasteText)
    
       },[]);
       const pasteText=(event)=>{
        const pastedText=event.clipboard.getData("text")
        const fieldValues={};
        Object.keys(OTP).forEach((keys,index)=>{
            fieldValues[keys]=pastedText[index];
        });
        setOTP(fieldValues);
        inputRef.current[5].focus();
   };
   const handleChange=(event,index)=>{
     const {value}=event.target;
     if(/[a-z]/gi.test(value)) return;
     const currentOTP=[...formik.values.OTP]
     currentOTP[index]= value.slice(-1);
      formik.setValues((prev)=>({
        ...prev,
        OTP:currentOTP,
      }));
     if( value&&index<5){
        inputRef.current[index+1].focus();
     }
   };
 
  
   const handleBackSpace=(event,index)=>{
        if(event.key==="Backspace"){
            if(index>0){
                inputRef.current[index-1].focus();
            }
        }
   };
    const renderInput=()=>{
        return formik.values.OTP.map((value,index)=>(
             <input 
             name={index} 
             key={index}
             value={value}
             onKeyUp={(event)=>handleBackSpace(event,index)}
             ref={(element)=>(inputRef.current[index]=element)} 
             class="m-2 border border-blue-300 bg-blue-50 h-10 w-10 text-center form-control rounded" type="text" id="first" maxlength="1" 
             onChange={(event)=>handleChange(event,index)} 
             /> 
        ));
    }
  return (
      <div className="flex justify-center items-center bg-[#EDF9FF] text-[#37352F]">
      <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
        <img src={Logo} className="absolute top-5 left-0" />
        <img src={VerifyL}/>
        <div className="bg-white p-12 flex flex-col justify-center gap-y-6 rounded-3xl shadow-md">
          <div class=" xs:p-0 mx-auto md:w-full md:max-w-md  ">
                <div class="bg-white w-full  ">
                    <h1 class="font-bold text-center text-blue-400 text-4xl">Verify Email Address</h1> 
                    <div>
                    <div class="py-10 px-3">
                        <div class="container mx-auto">
                            <div class="max-w-sm mx-auto md:max-w-lg">
                                <div class="w-full">
                                    <div class="bg-white h-64 rounded text-center">
                                    <div className="text">
                                            <p class="text-xl text-gray-500 ">Please enter the code we've end to
                                                use your</p>  
                                            <p class="text-xl text-center text-blue-500">your email address</p>  
                                            </div>
                                        <div id="otp" class="flex   flex-row justify-center text-center px-2 mt-5">
                                            <Formik>
                                                <div className='form'>
                                                    {renderInput()}
                                                </div>
                                            </Formik> 
                                        </div>  
                                        {formik.errors.OTP && <p className='text-red-500 text-lg'>Please fill in fields</p> }          
                                    <div class="flex justify-center text-center mt-5">
                                    <a class="flex items-center  cursor-pointer"><span class="font-bold">(30s)</span></a>
                                </div>
                                <div class="flex justify-center text-center mt-5">
                                    <a class="flex items-center text-blue-500 hover:text-blue-900 cursor-pointer"><span class="font-bold underline pr-3">Didn't receive the code?</span>Click to resend</a>
                                </div>
                                <div className="btn pt-8">
                                    <button type="button"
                                    onClick={formik.handleSubmit}
                                    class="transition  duration-200 bg-blue-400 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                        Sign in
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
                    </div>
                </div>
                  
              </div>
        </div>
        <img src={VerifyR} className='mb-32' />
      </div>
    </div>
  )
}

