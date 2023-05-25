import React from 'react'

function Navbar() {
  return (
    <div className='lg:w-full lg:h-[50px] bg-slate-400 flex justify-center items-center'>
        <div className='lg:h-[30px] bg-orange-400 lg:w-[1050px] flex justify-between items-center'>
            <div className='bg-black w-3 h-3'></div>
            <div className='bg-black w-3 h-3'></div>
        </div>
    </div>
  )
}

export default Navbar