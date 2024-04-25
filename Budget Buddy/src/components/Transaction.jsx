import React, { useEffect, useRef, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, NavLink } from 'react-router-dom'

import { dashboardContext, profileContext } from '../context/context'


const Transaction = () => {
    const lists = useContext(dashboardContext)
    const balance=useContext(profileContext)
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()

    const navigate = useNavigate()

    const transactionType = watch('type')

    const expenseModifyWatch = watch('expense','notincluded')
    useEffect(() => {
        console.log(expenseModifyWatch)
    }, [expenseModifyWatch])


    const onSubmit = (data) => {
        // console.log(data.expense, data.modification)



        if (data.type == "Receive") {
            balance.currBalance[1](parseFloat(balance.currBalance[0]+data.amountReceived))
            // lists.expenseList[1]((list) => {
            //     for (let index = 0; index < list.length; index++) {
            //         // const element = lists.expenseList[0][index];
            //         if (list[index].expense == data.expense) {
            //             list[index].currLimit = list[index].limit
            //         }
            //     }
            //     return list
            // })
            console.log("receive successful")
        } else if (data.type == "Pay") {
            lists.totalExpenses[1](parseFloat(lists.totalExpenses[0]+ data.subCurrBalance))
            balance.currBalance[1](parseFloat(balance.currBalance[0]- data.subCurrBalance))
            if(data.expense=="notincluded"){
                balance.currBalance[1](parseFloat(balance.currBalance[0]-data.subCurrBalance))
                console.log("notincluded successful")

            }
            else{
                // console.log("hi")
                lists.expenseList[1]((list) => {
                    for (let index = 0; index < list.length; index++) {
                        if (list[index].expense == data.expense) {
                            // console.log("hi",list[index].currLimit,data.subCurrBalance,data.expense,list[index].expense, index )
                            list[index].currLimit-=data.subCurrBalance
                        }
                    }
                    return list 
                })
                console.log("expense successful")
            }
            // lists.expenseList[1](changeArray)
        } 


        console.log(lists.expenseList)
   
        navigate("../dashboard")

    }

    return (
        <>
            <div className='flex justify-center items-center w-[100vw] h-[100vh] fixed top-0'>
                <div className='cover w-[100vw] h-[100vh] fixed top-0 bg-black opacity-75 z-0'> </div>
                <form action='' onSubmit={handleSubmit(onSubmit)} className="layout w-[45vw] flex flex-col gap-5 bg-white fixed z-1  rounded-md">
                    <h1 className='text-center text-2xl p-7'>Transaction</h1>
                    <div className="type flex justify-center gap-5">

                        <label htmlFor="type">Transaction Type: </label>
                        <select {...register("type", {
                            required: true,
                            validate:(v)=>{
                                if(v=="invalidoption"){
                                    return false
                                }
                                return true
                            }
                        })} className='p-1 rounded-md shadow' id="type" name="type">
                            <option className='text-gray-700' value="invalidoption" defaultValue >Choose an option</option>
                            <option value="Pay">Pay</option>
                            <option value="Receive">Receive</option>
                        </select>
                    </div>

                    {transactionType == "Receive" && (<div className="receive flex justify-center items-center gap-5">
                        <label htmlFor="amountReceived">Add to Current Balance: </label>
                        <input {...register("amountReceived", {
                            required: true,
                            min: 1,
                            setValueAs: (value) => {
                                return parseInt(value)
                            }
                        })} className='p-1 shadow rounded-md border border-gray-200' type="number" name='amountReceived' id='amountReceived' placeholder=' Enter amount' />
                    </div>
                    )}




                    {/* <div className="modification flex justify-center gap-5">

                        <label htmlFor="modification">Modification: </label>
                        <select {...register("modification")} className='p-1 rounded-md shadow' id="modification" name="modification" >
                            <option value="Delete">Delete</option>
                            <option value="Reset">Reset</option>
                            <option value="Change Limit">Change Limit</option>
                        </select>
                    </div> */}

                    {transactionType == "Pay" && (<><div className="category flex justify-center gap-5">

                        <label htmlFor="expense">Expense Category: </label>
                        <select {...register("expense", {
                            required: true
                        })} className='p-1 rounded-md shadow' id="expense" name="expense">
                            <option disabled value="">Choose an option</option>
                            {lists.expenseList[0].map((expense) => {
                                return <option key={expense.expense} value={expense.expense}>{expense.expense}</option>
                            })}
                            <option value="notincluded">Not Included in the list</option>
                        </select>
                    </div>


                        <div className="Balance flex justify-center items-center gap-5">
                            <label htmlFor="subCurrBalance">Withdraw Balance: </label>
                            <input {...register("subCurrBalance", {
                                required: true,
                                min: 1,
                                validate: (value)=>{
                                    if(expenseModifyWatch=="notincluded"){
                                        if(balance.currBalance[0]>=parseFloat(value)){
                                            
                                            return true
                                        }
                                        console.log("arey")
                                        return false
                                    }else{
                                        for (const key in lists.expenseList[0]) {
                                            if (Object.hasOwnProperty.call(lists.expenseList[0], key)) {
                                                const element = lists.expenseList[0][key];
                                                if(element.expense==expenseModifyWatch){
                                                    if(parseFloat(value)<=element.currLimit){
                                                        return true
                                                    }
                                                    else{
                                                        return false
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                setValueAs: (value) => {
                                    return parseFloat(value)
                                }
                            })} className='p-1 shadow rounded-md border border-gray-200' type="number" name='subCurrBalance' id='subCurrBalance' placeholder=' Enter amount' />
                        </div></>
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

export default Transaction



