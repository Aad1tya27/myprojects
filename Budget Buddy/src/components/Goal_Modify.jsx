import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { dashboardContext, profileContext } from '../context/context'
import { NavLink } from 'react-router-dom'

const Goal_Modify = () => {
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
    const goalModifyWatch = watch('modification', "Delete")
    // const collectRef=useRef(0)
    const onSubmit = (data) => {
        console.log(data)
        if (data.modification == "Change Percentage") {
            
            lists.goalList[1](() => {
                for (let index = 0; index < lists.goalList[0].length; index++) {
                    // const element = lists.goalList[0][index];
                    if(lists.goalList[0][index].goal==data.goal){
                        lists.goalList[0][index].percentage=data.percentage
                        console.log(data.percentage,lists.goalList[0][index].collected)
                        lists.goalList[0][index].collected=(balance.savBalance[0])*parseFloat(data.percentage)/100
                        console.log(data.percentage,lists.goalList[0][index].collected)
                    }
                }
                return lists.goalList[0]
            })
            console.log("change percentage successful")
        } else if (data.modification == "Change Cost") {
            let changeArray = lists.goalList[0]
            for (const element of changeArray) {
                if (element.goal == data.goal) {
                    element.limit = data.limit;
                    
                }
            }
            lists.goalList[1](changeArray)
            console.log("change limit successful")
        } else if (data.modification == "Delete") {
            let deleteArray = lists.goalList[0].filter((element) => {
                if (element.goal !== data.goal) {
                    return element
                }
            })
            lists.goalList[1](deleteArray)
            console.log("delete successful")
        }
        console.log(lists.goalList)
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
                    <h1 className='text-center text-2xl p-7'>Modify Existing Goals</h1>
                    <div className="category flex justify-center gap-5">

                        <label htmlFor="goal">Goal Name: </label>
                        <select {...register("goal",{
                            required:true
                        })} className='p-1 rounded-md shadow' id="goal" name="goal">
                            {lists.goalList[0].map((goal) => {
                                return <option key={goal.goal} value={goal.goal}>{goal.goal}</option>
                            })}
                        </select>
                    </div>
                    <div className="modification flex justify-center gap-5">

                        <label htmlFor="modification">Modification: </label>
                        <select {...register("modification")} className='p-1 rounded-md shadow' id="modification" name="modification">
                            <option value="Delete">Delete</option>
                            <option value="Change Cost">Change its cost</option>
                            <option value="Change Percentage">Change its Percentage</option>
                        </select>
                    </div>
                    {goalModifyWatch == "Change Cost" && <div className="monthlimit flex justify-center items-center gap-5">
                        <label htmlFor="limit">New Cost: </label>
                        <input {...register("limit", {
                            required: true,
                            min: 1,
                            setValueAs: (value) => {
                                return parseFloat(value)
                            }
                        })} className='p-1 shadow rounded-md border border-gray-200' type="number" name='limit' id='limit' placeholder=' Enter amount' />
                    </div>
                    }
                    {goalModifyWatch == "Change Percentage" && <div className="percentage flex justify-center items-center gap-5">
                        <label htmlFor="percentage">New percentage: </label>
                        <input {...register("percentage", {
                            required: true,
                            min: 0,
                            setValueAs: (value) => {
                                return parseFloat(value)
                            },
                            max:100
                        })} className='p-1 shadow rounded-md border border-gray-200' type="float" name='percentage' id='percentage' placeholder=' Enter percentage(0-100)' />
                    </div>
                    }
                    <div className="submitbutton flex justify-center pb-8">

                        <input value="Save" type='submit' className='bg-teal-200 p-2 px-5 cursor-pointer rounded-lg ' />
                    </div>
                    <NavLink to='/dashboard' className="cross w-10 absolute top-0 right-0 p-3"><img src="/cross.png" alt="" /></NavLink>

                </form>

            </div>
        </>
    )
}

export default Goal_Modify



{/* <h1>Modify Existing Expenses</h1>
<select {...register("expense", { required: true })} className='p-1'  id="expense" name="expense">
    <option value="State Bank of India" selected>State Bank of India</option>
    <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
    <option value="Axis Bank">Axis Bank</option>
    <option value="HDFC Bank">HDFC Bank</option>
</select> */}