import React from 'react'
import Error404Pic from '../assets/images/Error404Pic.png'

const Error404 = () => {
    return (
        <div className='bg-[#EDF9FF] h-screen py-32'>
            <div className='flex items-center justify-center'>
                <div>
                    <img className='w-[350px]' src={Error404Pic} />
                </div>

            </div>
            <div className='flex justify-center mt-3'>
                <button className=" bg-primary hover:bg-blue-500 text-white text-xl font-bold py-2 px-4 rounded-xl">
                    Back to home
                </button>
            </div>
        </div>

    )
}

export default Error404