import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='mt-6 top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50'>
       <Link to='/'>
       <h1 className='text-4xl font-bold text-gray-800 h-9'>TripLodge</h1>
       </Link>
       <UserButton/>
    </div>
  )
}

export default Navbar
