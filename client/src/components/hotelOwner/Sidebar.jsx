import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const sidebarLinks = [
       {name: 'Dashboard', path: '/owner', icon: assets.dashboardIcon},
       {name: 'Add Room', path: '/owner/add-room', icon: assets.addIcon},
       {name: 'List Rooms', path: '/owner/list-rooms', icon: assets.listIcon},
    ]

  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>
       {sidebarLinks.map((items, index) => (
        <NavLink to={items.path} key={index} end='/owner' className={({isActive})=>
        `flex items-center py-3 px-4 md:px-8 gap-3`}>

        </NavLink>
        ))}
    </div>
  )
}

export default Sidebar
