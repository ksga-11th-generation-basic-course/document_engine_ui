import React, { useState } from 'react'
import file from "../assets/images/file.svg";
import Search from "../assets/images/Dashboard/Search.svg"
import Sort from "../assets/images/Dashboard/Sort.svg"
import Filter from "../assets/images/Dashboard/Filter.svg"
import Card from "../assets/images/Dashboard/Card.svg"
import List from "../assets/images/Dashboard/List.svg"
import More from "../assets/images/Dashboard/More.svg"
import ViewBlue from "../assets/images/Dashboard/ViewMemberBlue.svg"
import Setting from "../assets/images/Dashboard/Setting.svg"



function Dropdown() {
    const [sort, setSort] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [setting, setSetting] = useState(false)

    return (
        <div className='w-full h-auto flex justify-between items-center'>
            <div className='flex justify-center items-center gap-5 w-[60%]'>
                <label for="countries" class="flex gap-2 text-sm font-medium text-gray-900 dark:text-white">
                    <img src={Sort} alt="" />
                    <p>Sort:</p>
                </label>
                <div className='relative'>
                    {sort && (
                        <div class="absolute top-8 z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" >
                                <li>
                                    <div class="flex items-center">
                                        <input type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center">
                                        <input type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center">
                                        <input type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                    <button onClick={() => setSort(!sort)} class="w-48 relative focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-4 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown radio
                        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                </div>

                <label for="countries" class="flex gap-2 text-sm font-medium text-gray-900 dark:text-white">
                    <img src={Filter} alt="" />
                    <p>Filter:</p>
                </label>
                <div className='relative'>
                    {toggle && (
                        <div class="absolute top-8 z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                                <li>
                                    <div class="flex items-center">
                                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center">
                                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex items-center">
                                        <input id="default-radio-3" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                        <label for="default-radio-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                    <button onClick={() => setToggle(!toggle)} class="w-48 relative focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-4 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown radio
                        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                </div>
            </div>
            <div className='flex justify-end items-center gap-7 w-[30%] relative'>
                <label for="countries" class="flex gap-3 text-sm font-medium text-gray-900 dark:text-white">
                    <img src={Card} alt="" />
                    <img src={List} alt="" />
                    <img src={Search} alt="" />
                    <img className='cursor-pointer' onClick={() => setSetting(!setting)} src={More} alt="" />
                    {setting && (
                        <div class="z-10 absolute top-6 right-0 bg-white divide-x divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700">
                            <ul class="text-sm text-gray-700 dark:text-gray-200" >
                                <li>
                                    <a href="#" class="gap-4 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex"><img src={Setting} alt="" className='w-5 h-5'  /> Setting Workspace</a>
                                    <a href="#" class="gap-4 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex"><img src={ViewBlue} alt="" className='w-5 h-5' /> View Member</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </label>
            </div>
        </div>
    )
}

export default Dropdown