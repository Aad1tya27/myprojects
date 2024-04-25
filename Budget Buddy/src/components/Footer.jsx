import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <footer className='fixed w-[100vw] bottom-0 flex text-white rounded-t-sm bg-teal-950 p-4 justify-between items-center'>
                <div className='text-sm'>Copyright &copy; All Rights Reserved | Designed by Aaditya Agarwal</div>
                <div className="contact flex gap-3 items-center">
                    <div className="text-sm">Contact Me:</div>
                    <NavLink to="https://www.instagram.com/aadityaagarwal27?igsh=cXQ4bG92ZjlwdXJ5" className="insta cursor-pointer"><img className='w-6' src="/insta.svg" alt="" /></NavLink>
                </div>
            </footer>
        </>
    )
}

export default Navbar
