import React, { useContext } from 'react'
// import './Expense.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { dashboardContext } from '../context/context'

const ResetExpenses = () => {
    const navigate=useNavigate()
    const expenses=useContext(dashboardContext)

    const reset=()=>{
        expenses.totalExpenses[1](0)
        expenses.expenseList[1](()=>{
            for (const iterator of expenses.expenseList[0]) {
                iterator.currLimit=iterator.limit
            }
            return expenses.expenseList[0]
        })
        navigate("../dashboard")
    }


    return (
        <>
            <div className='flex justify-center items-center w-[100vw] h-[100vh] fixed top-0'>
                <div className='cover w-[100vw] h-[100vh] fixed top-0 bg-black opacity-75 z-0'> </div>
                <div className="layout w-[35vw]  bg-white fixed z-1 rounded-md">
                    <h1 className='text-xl text-center py-6'>Reset All Expenses?</h1>
                    <div className="buttons flex pb-8 justify-center w-[70%] m-auto">
                        <button onClick={reset} className='bg-teal-300  rounded-md px-7 py-2 flex items-center'>
                            Reset
                        </button>
                    </div>
                    <NavLink to='/dashboard' className="cross w-10 absolute top-0 right-0 p-3"><img src="/cross.png" alt="" /></NavLink>
                </div>
            </div>

        </>
    )
}

export default ResetExpenses
