import React from 'react'
import { assets } from '../assets/assets'

const HotelReg = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 z-100 flex items-center justify-center bg-black/70'>
      <form>
        <img src={assets.regImage} alt='red-image' className='w-1/2 rounded-xl hidden md:block' />

        <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
          <img src={assets.closeIcon} alt="close-icon" className='absolute top-4 right-4 h-4 w-4 cursor-pointer' />
          <p className='text-2xl font-semi-bold mt-6'>Register Your Hotel </p>
        </div>
      </form>
    </div>
  )
}

export default HotelReg
