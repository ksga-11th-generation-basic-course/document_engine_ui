import React from 'react'
import file from "../assets/images/file.svg";

function Dropdown() {
    return (
        <div className='w-full h-auto flex justify-between items-center'>
            <div className='flex justify-center items-center gap-5 w-[60%]'>
                <label for="countries" class="flex gap-2 text-sm font-medium text-gray-900 dark:text-white">
                    <img src={file} alt="" />
                    <p>Sort:</p>
                </label>
                <select id="countries" class="bg-white border border-white text-gray-900 text-sm focus:ring-0 focus:border-white block w-full dark:bg-white dark:border-white dark:placeholder-white dark:text-white dark:focus:ring-white dark:focus:border-white">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
                <label for="countries" class="flex gap-2 text-sm font-medium text-gray-900 dark:text-white">
                    <img src={file} alt="" />
                    <p>Sort:</p>
                </label>
                <select id="countries" class="bg-white border border-white text-gray-900 text-sm focus:ring-0 focus:border-white block w-full dark:bg-white dark:border-white dark:placeholder-white dark:text-white dark:focus:ring-white dark:focus:border-white">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>
            <div className='flex justify-end items-center gap-7 w-[30%]'>
                <label for="countries" class="flex gap-3 text-sm font-medium text-gray-900 dark:text-white">
                    <img src={file} alt="" />
                    <img src={file} alt="" />
                    <img src={file} alt="" />
                    <img src={file} alt="" />
                </label>
            </div>
        </div>
    )
}

export default Dropdown