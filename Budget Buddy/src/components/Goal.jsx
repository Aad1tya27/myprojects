import React from 'react'
import { NavLink } from 'react-router-dom'

const Goal = () => {
    return (
        <>
            <div className='flex justify-center items-center w-[100vw] h-[100vh] fixed top-0'>
                <div className='cover w-[100vw] h-[100vh] fixed top-0 bg-black opacity-75 z-0'> </div>
                <div className="layout w-[35vw]  bg-white fixed z-1 rounded-md">
                    <h1 className='text-xl text-center py-6'>Edit Goals?</h1>
                    <div className="buttons flex pb-8 justify-between w-[70%] m-auto">
                        <NavLink to='./add' className='bg-teal-300  rounded-md px-7 py-2 flex items-center'>
                            Add
                        </NavLink>
                        <NavLink to='./modify' className='bg-teal-300  rounded-md px-7 flex items-center'>
                            Modify
                        </NavLink>
                    </div>
                    <NavLink to='/dashboard' className="cross w-10 absolute top-0 right-0 p-3"><img src="/cross.png" alt="" /></NavLink>
                </div>
            </div>

        </>
    )
}

export default Goal
