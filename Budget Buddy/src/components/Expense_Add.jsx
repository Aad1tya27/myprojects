import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext,useEffect } from 'react'
import { dashboardContext } from '../context/context'
import { NavLink } from 'react-router-dom'

const Expense_Add = () => {
    const lists = useContext(dashboardContext)
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()

    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        if (lists.expenseList[0].length !== 0) {
            lists.expenseList[1](() => [...lists.expenseList[0], { expense: data.expense, limit: parseFloat(data.limit), currLimit: parseFloat(data.limit) }]);
            // lists.expenseList[1]((lists.expenseList[0]) => [...lists.expenseList[0], {expense: data.expense}])
        }
        else {
            lists.expenseList[1]([{ expense: data.expense, limit: parseFloat(data.limit), currLimit: parseFloat(data.limit) }])
        }
        navigate("../dashboard")

    }

    
    

    return (
        <>
            <div className='flex justify-center items-center w-[100vw] h-[100vh] fixed top-0'>
                <div className='cover w-[100vw] h-[100vh] fixed top-0 bg-black opacity-75 z-0'> </div>
                <form action='' onSubmit={handleSubmit(onSubmit)} className="layout w-[45vw]  bg-white fixed z-1  rounded-md">
                    <h1 className='text-center text-2xl p-7'>Add an Expense</h1>
                    <div className="category flex justify-center items-center gap-5 my-5">
                        <label htmlFor="expense">Expense Name: </label>
                        <input {...register("expense", {
                             required: true,
                             validate:(v)=>{
                                for (const element of lists.expenseList[0]) {
                                    if(element.expense==v){
                                        return false
                                    }
                                }
                                return true
                             }
                             })} className='p-1  rounded-md border border-gray-400' type="text" name='expense' id='expense' placeholder=' Enter text here' />
                    </div>
                    <div className="category flex justify-center items-center gap-5 my-5">
                        <label htmlFor="limit">Expenditure Limit: </label>
                        <input {...register("limit", { 
                            required: true,
                            min:1 
                            })} className='p-1  rounded-md border border-gray-400' type="number" name='limit' id='limit' placeholder=' Enter amount' />
                    </div>
                    <div className="submitbutton flex justify-center pb-8">

                        <input value="Save" type='submit' className='bg-teal-200 p-2 px-5 cursor-pointer rounded-lg ' />
                    </div>
                    <NavLink to='/dashboard' className="cross w-10 absolute top-0 right-0 p-3"><img src="/cross.png" alt="" /></NavLink>

                </form>

            </div>
        </>
    )
}

export default Expense_Add
