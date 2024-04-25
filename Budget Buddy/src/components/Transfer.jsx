import React, { useEffect, useRef, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, NavLink } from 'react-router-dom'

import { dashboardContext, profileContext } from '../context/context'


const Transfer = () => {
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

    // const expenseModifyWatch = watch('expense','notincluded')



    const onSubmit = (data) => {
        // console.log(data.expense, data.modification)

        if(data.type=="C2S"){
            balance.currBalance[1](parseFloat(balance.currBalance[0]-data.amountReceived))
            balance.savBalance[1](parseFloat(balance.savBalance[0]+data.amountReceived))
        }else if(data.type=="S2C"){
            balance.currBalance[1](parseFloat(balance.currBalance[0]+data.amountReceived))
            balance.savBalance[1](parseFloat(balance.savBalance[0]-data.amountReceived))
        }

        

   
        navigate("../dashboard")

    }

    return (
        <>
            <div className='flex justify-center items-center w-[100vw] h-[100vh] fixed top-0'>
                <div className='cover w-[100vw] h-[100vh] fixed top-0 bg-black opacity-75 z-0'> </div>
                <form action='' onSubmit={handleSubmit(onSubmit)} className="layout w-[45vw] flex flex-col gap-5 bg-white fixed z-1  rounded-md">
                    <h1 className='text-center text-2xl p-7'>Transfer</h1>
                    <div className="type flex justify-center gap-5">

                        <label htmlFor="type">Transfer from: </label>
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
                            <option value="C2S">Current Balance to Savings Account</option>
                            <option value="S2C">Savings Account to Current Balance</option>
                        </select>
                    </div>

                    <div className="receive flex justify-center items-center gap-5">
                        <label htmlFor="amountReceived">Amount to be Transfered: </label>
                        <input {...register("amountReceived", {
                            required: true,
                            min: 1,
                            validate:(v)=>{
                                if(transactionType=="C2S"){
                                    if(v<=balance.currBalance[0]){
                                        return true
                                    }
                                }else if(transactionType=="S2C"){
                                    if(v<=balance.savBalance[0]){
                                        return true
                                    }
                                }
                                return false
                            },
                            setValueAs: (value) => {
                                return parseInt(value)
                            }
                        })} className='p-1 shadow rounded-md border border-gray-200' type="number" name='amountReceived' id='amountReceived' placeholder=' Enter amount' />
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

export default Transfer



