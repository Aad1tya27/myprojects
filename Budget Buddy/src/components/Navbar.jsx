import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='flex text-white rounded-b-sm  bg-teal-700 p-7 justify-between'>
                <NavLink to="/" className='logo flex items-center gap-2'>
                    <img src="/money.png" className='w-[20px] h-[20px]'  alt="" />
                    <div className='title text-2xl'>Budget Buddy</div>               
                </NavLink>
                <div className="tabs text-lg flex gap-x-10 mx-5 items-center">
                    <NavLink to="/dashboard" className="info">Dashboard</NavLink>
                    <NavLink to="/profile" className="profile">Profile</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar
