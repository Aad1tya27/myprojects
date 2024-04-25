import React, { useRef } from 'react'
import './Dashboard.css'
import Goal_Card from './Goal_Card'
import Expense_Card from './Expense_Card'
import { useContext } from 'react'
import { profileContext, dashboardContext } from '../context/context'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Dashboard = () => {
    // const buttonRef = useRef(null)
    const value = useContext(profileContext)
    const lists = useContext(dashboardContext)
    // const collectRef=useRef(0)
    // let tempCollectArray={}


    useEffect(() => {
        lists.goalList[1](() => {
            console.log("but why")
            // goal.collected=((value.savBalance[0])*parseFloat(goal.percentage)/100)
            for (const element of lists.goalList[0]) {
                element.collected = (value.savBalance[0]) * parseFloat(element.percentage) / 100
                // if(goal==element){
                //     collector= (value.savBalance[0]) * parseFloat(element.percentage) / 100
                // }
            }
            return lists.goalList[0]
        })
        console.log("nice re render")
    }, [value.savBalance])

    return (
        <>
            <main className='min-h-[80vh] p-[38px] px-16 '>
                <h1 className='text-[28px]'>Dashboard</h1>
                <div className="layout py-5 flex flex-col gap-10 min-h-[65vh] relative">
                    <div className="balance flex justify-between gap-14">
                        <div className="currentbalance flex items-center md:px-7">Current Balance: &#8377;{value.currBalance[0]}</div>
                        <div className="expenditure flex items-center px-7">Total Expenses: &#8377;{lists.totalExpenses[0]}  </div>
                        <div className="savings flex items-center px-7">Total Savings: &#8377;{value.savBalance[0]} </div>
                    </div>
                    <div className="targets flex justify-between">
                        <div className="goals flex flex-col">
                            <div className='heading text-xl px-7 flex justify-between rounded-lg items-center w-[40vw] h-[8vh] '>
                                <div>Goals</div>
                                <NavLink to='./goal' className='w-[20px]'><img className='' src="/edit.svg" alt="" /></NavLink>
                                {/* <button className='text-3xl'><img className='w-[25px] ' src="./pay.svg" alt="" /></button> */}
                            </div>
                            <h2 className='p-2 text-sm text-gray-700 flex justify-between'>
                                <div>Goal Name</div>
                                <div>Percentage</div>
                                <div>Amount Collected</div>
                                <div>Total Cost</div>
                            </h2>
                            {(lists.goalList[0].length > 0) ?

                                
                                lists.goalList[0].map((goal) => {
                                    // let collector="";
                                    
                                    return <Goal_Card key={goal.goal}  collected={((value.savBalance[0])*parseFloat(goal.percentage)/100)} percentage={goal.percentage} goal={goal.goal} limit={goal.limit} />
                                })
                                :
                                <span className='p-10 text-center text-2xl '>Add Goals by clicking on the Edit Button</span >
                            }
                            {/* <Goal_Card goal={"House"} />
                            <Goal_Card goal={"Car"} /> */}
                        </div>
                        <div className="expenses flex flex-col">
                            <div className='heading text-xl px-7 flex justify-between rounded-lg items-center w-[40vw] h-[8vh] '>
                                <div>Expenses</div>
                                <NavLink to='./expense' className='w-[20px]'><img className='' src="/edit.svg" alt="" /></NavLink>
                                {/* <button className='text-3xl'><img className='w-[25px]' src="./pay.svg" alt="" /></button> */}
                            </div>
                            <h2 className='p-2 flex text-sm text-gray-700 justify-between'>
                                <div>Expense Name</div>
                                <div>Remaning Budget</div>
                                <div>Total Budget</div>
                            </h2>

                            {(lists.expenseList[0].length > 0) ?

                                lists.expenseList[0].map((expense) => {
                                    
                                    return <Expense_Card key={expense.expense} expense={expense.expense} currLimit={expense.currLimit} limit={expense.limit} />
                                })

                                :
                                <span className='p-10 text-center text-2xl '>Add Expenses by clicking on the Edit Button</span >
                            }


                            {/* {lists.expenseList[0].forEach(element => {
                                return <Expense_Card expense={element.expense} limit={element.limit}/>
                            })} */}
                        </div>
                    </div>

                    {(lists.expenseList[0].length < 2 && lists.goalList[0].length < 2) ? <div className="buttons absolute bottom-0  flex justify-around mb-10 w-[100%]">
                        <NavLink to="./reset" className='shadow p-5 py-2 hover:bg-pink-700  bg-[#436d7a] text-teal-50 rounded-md flex items-centerflex items-center'>Reset Expenses</NavLink>
                        <NavLink to="./transaction" className='shadow p-5 py-2 hover:bg-pink-700  bg-[#436d7a] text-teal-50 rounded-md flex items-center'>Transaction</NavLink>
                        <NavLink to="./transfer" className='shadow p-5 py-2 hover:bg-pink-700  bg-[#436d7a] text-teal-50 rounded-md items-center flex gap-2'>
                            <div>Current Balance</div>
                            <div className='text-2xl relative top-[-2px]'>&rarr;</div>
                            <div>Savings</div>
                        </NavLink>
                    </div>
                        :
                        <div className="buttons flex justify-around mb-8 w-[100%]">
                            <NavLink to="./reset" className='shadow p-5 py-2 hover:bg-pink-700  bg-[#436d7a] text-teal-50 rounded-md flex items-center'>Reset Expenses</NavLink>
                            <NavLink to="./transaction" className='shadow p-5 py-2 hover:bg-pink-700  bg-[#436d7a] text-teal-50 rounded-md flex items-center'>Transaction</NavLink>
                            <NavLink to="./transfer" className='shadow p-5 py-2 hover:bg-pink-700  bg-[#436d7a] text-teal-50 rounded-md items-center flex gap-2'>
                                <div>Current Balance</div>
                                <div className='text-2xl relative top-[-2px]'>&rarr;</div>
                                <div>Savings</div>
                            </NavLink>
                        </div>
                    }
                </div>

                {/* <div className="transaction h-16 border border-red-500">
                    <button className='pay'></button>
                </div> */}
            </main>
            <footer className='fixed w-[100vw] bottom-0 flex text-white rounded-t-sm bg-teal-950 p-3 justify-between items-center'>
                <div className='text-sm'>Copyright &copy; All Rights Reserved | Designed by Aaditya Agarwal</div>
                <div className="contact flex gap-3 items-center">
                    <div className="text-sm">Contact Me:</div>
                    <NavLink to="https://www.instagram.com/aadityaagarwal27?igsh=cXQ4bG92ZjlwdXJ5" className="insta cursor-pointer"><img className='w-6' src="/insta.svg" alt="" /></NavLink>
                </div>
            </footer>
        </>
    )
}

export default Dashboard
