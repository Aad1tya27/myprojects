import React, { useEffect, useRef, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, NavLink } from 'react-router-dom'

import { dashboardContext } from '../context/context'


const Expense_Modify = () => {
    const lists = useContext(dashboardContext)
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()

    const navigate = useNavigate()


    const expenseModifyWatch = watch('modification', "Delete")
    useEffect(() => {
        console.log(expenseModifyWatch)
    }, [expenseModifyWatch])


    const onSubmit = (data) => {
        // console.log(data.expense, data.modification)



        if (data.modification == "Reset") {
            
            lists.expenseList[1]((list) => {
                for (let index = 0; index < list.length; index++) {
                    // const element = lists.expenseList[0][index];
                    if(list[index].expense==data.expense){
                        list[index].currLimit=list[index].limit
                    }
                }
                return list
            })
            console.log("reset successful")
        } else if (data.modification == "Change Limit") {
            let changeArray = lists.expenseList[0]
            for (const element of changeArray) {
                if (element.expense == data.expense) {
                    // if(element.currLimit>data.limit){

                        element.limit = data.limit;
                        element.currLimit = data.limit;
                    // }else{
                    //     element.limit = data.limit;
                    // }
                }
            }
            lists.expenseList[1](changeArray)
            console.log("change limit successful")
        } else if (data.modification == "Delete") {
            let deleteArray = lists.expenseList[0].filter((element) => {
                if (element.expense !== data.expense) {
                    return element
                }
            })
            lists.expenseList[1](deleteArray)
            console.log("delete successful")
        }


        console.log(lists.expenseList)
        // if (lists.expenseList[0].length !== 0) {
        //     lists.expenseList[1](() => [...lists.expenseList[0], { expense: data.expense, limit: data.limit }]);
        //     // lists.expenseList[1]((lists.expenseList[0]) => [...lists.expenseList[0], {expense: data.expense}])
        // }
        // else {
        //     lists.expenseList[1]([{ expense: data.expense, limit: data.limit }])
        // }
        navigate("../dashboard")

    }

    return (
        <>
            <div className='flex justify-center items-center w-[100vw] h-[100vh] fixed top-0'>
                <div className='cover w-[100vw] h-[100vh] fixed top-0 bg-black opacity-75 z-0'> </div>
                <form action='' onSubmit={handleSubmit(onSubmit)} className="layout w-[45vw] flex flex-col gap-5 bg-white fixed z-1  rounded-md">
                    <h1 className='text-center text-2xl p-7'>Modify Existing Expenses</h1>
                    <div className="category flex justify-center gap-5">

                        <label htmlFor="expense">Expense Category: </label>
                        <select {...register("expense", {
                            required: true
                        })} className='p-1 rounded-md shadow' id="expense" name="expense">
                            {lists.expenseList[0].map((expense) => {
                                return <option key={expense.expense} value={expense.expense}>{expense.expense}</option>
                            })}
                        </select>
                    </div>
                    <div className="modification flex justify-center gap-5">

                        <label htmlFor="modification">Modification: </label>
                        <select {...register("modification")} className='p-1 rounded-md shadow' id="modification" name="modification" >
                            <option value="Delete">Delete</option>
                            <option value="Reset">Reset</option>
                            <option value="Change Limit">Change Limit</option>
                        </select>
                    </div>

                    {expenseModifyWatch == "Change Limit" && (<div className="monthlimit flex justify-center items-center gap-5">
                        <label htmlFor="limit">New Monthly Limit: </label>
                        <input {...register("limit", {
                            required: true,
                            min: 1,
                            setValueAs: (value) => {
                                return parseFloat(value)
                            }
                        })} className='p-1 shadow rounded-md border border-gray-200' type="number" name='limit' id='limit' placeholder=' Enter amount' />
                    </div>
                    )}
                    <div className="submitbutton flex justify-center pb-8">

                        <input value="Save" type='submit' className='bg-teal-200 p-2 px-5 cursor-pointer rounded-lg ' />
                    </div>
                    <NavLink to='/dashboard' className="cross w-10 absolute top-0 right-0 p-3"><img src="/cross.png" alt="" /></NavLink>

                </form>

            </div>
        </>
    )
}

export default Expense_Modify



{/* <h1>Modify Existing Expenses</h1>
<select {...register("expense", { required: true })} className='p-1'  id="expense" name="expense">
    <option value="State Bank of India" selected>State Bank of India</option>
    <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
    <option value="Axis Bank">Axis Bank</option>
    <option value="HDFC Bank">HDFC Bank</option>
</select> */}