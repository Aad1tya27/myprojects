import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { dashboardContext, profileContext } from '../context/context'
import { NavLink } from 'react-router-dom'

const Goal_Add = () => {
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
    
    const onSubmit = (data) => {
        console.log(data)
        if (lists.goalList[0].length !== 0) {
            lists.goalList[1](() => [...lists.goalList[0], { goal: data.goal, limit: data.limit, percentage: data.percentage, collected: (balance.savBalance[0])*parseFloat(data.percentage)/100 }]);
            // lists.expenseList[1]((lists.expenseList[0]) => [...lists.expenseList[0], {expense: data.expense}])
        }
        else {
            lists.goalList[1]([{ goal: data.goal, limit: data.limit, percentage: data.percentage, collected: (balance.savBalance[0])*parseFloat(data.percentage)/100 }])
        }
        navigate("../dashboard")

    }

    return (
        <>
            <div className='flex justify-center items-center w-[100vw] h-[100vh] fixed top-0'>
                <div className='cover w-[100vw] h-[100vh] fixed top-0 bg-black opacity-75 z-0'> </div>
                <form action='' onSubmit={handleSubmit(onSubmit)} className="layout w-[45vw]  bg-white fixed z-1  rounded-md">
                    <h1 className='text-center text-2xl p-7'>Add a Goal</h1>
                    <div className="category flex justify-center items-center gap-5 my-5">
                        <label htmlFor="goal">Goal Name: </label>
                        <input {...register("goal", {
                            required: true,
                            validate: (v) => {
                                for (const element of lists.goalList[0]) {
                                    if (element.goal == v) {
                                        return false
                                    }
                                }
                                return true
                            }
                        })} className='p-1  rounded-md border border-gray-400' type="text" name='goal' id='goal' placeholder=' Enter text here' />
                    </div>
                    <div className="cost flex justify-center items-center gap-5 my-5">
                        <label htmlFor="limit">Cost: </label>
                        <input {...register("limit", {
                            required: true,
                            min: 1,
                            setValueAs: (v) => parseFloat(v)
                        })} className='p-1  rounded-md border border-gray-400' type="number" name='limit' id='limit' placeholder=' Enter amount' />
                    </div>
                    <div className="percentage flex justify-center items-center gap-5 my-5">
                        <label htmlFor="limit">Percentage: </label>
                        <input {...register("percentage", {
                            required: true,
                            min: 0,
                            setValueAs: (v) => parseFloat(v),
                            max:100
                        })} className='p-1  rounded-md border border-gray-400' type="float" name='percentage' id='percentage' placeholder=' Enter percentage(0-100)' />
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

export default Goal_Add
