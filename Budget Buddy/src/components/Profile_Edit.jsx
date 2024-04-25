import React, { useEffect, useState, useRef } from 'react'
import "./Profile_Edit.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useController, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { profileContext } from '../context/context'




const Profile_Edit = () => {



    const value = useContext(profileContext)
    // const dummyvalue = useRef(value)
    // const [dummyvalue, setdummyvalue] = useState(value)
    // useEffect(() => {
    //     console.log(dummyvalue)
    // }, [])





    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()

    const navigate = useNavigate()


    const onSubmit = async (data) => {

        console.log(data)

        for (const key in value) {
            if (Object.hasOwnProperty.call(value, key)) {
                value[key][1](data[key])
            }
        }

        navigate("../profile")


        // await delay(2) //simulating network delay



        // const res = fetch("http://localhost:3000", {
        //     method: "POST", headers: {
        //         "Content-Type": "application/json",
        //     }, body: JSON.stringify(data)
        // })

    }

    const handleChange = (e) => {

        // (dummyvalue.current[e.target.name])[1](e.target.value)
        // console.log(dummyvalue.current, value)
        // setdummyvalue(()=>{
        //     for (const key in dummyvalue) {
        //         // console.log(key)
        //         if (Object.hasOwnProperty.call(dummyvalue, key)) {
        //             const element = dummyvalue[key];
        //             if(key==e.target.name){
        //                 dummyvalue[key][1](e.target.value)
        //             }
        //         }
        //     }
        //     return dummyvalue
        // })
        value[e.target.name][1](e.target.value)
        // console.log(dummyvalue,value)
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="header flex justify-center mt-10 gap-4 m-auto pb-10">
                    <h1 className='text-3xl'>Your Profile</h1>
                    <button className="edit">

                    </button>
                </div>
                <div id='details' className="details flex text-md justify-around w-[80vw] m-auto" >
                    <div className="personaldetails flex flex-col h-[26vh] w-[35vw] p-5 gap-3 bg-white">
                        <div className="name">
                            <label htmlFor="username">Name:  &nbsp;</label>
                            <input {...register("username", {
                                required: true

                            })} onChange={handleChange} id="username" className='text-sm border border-gray-300 rounded-md p-1 w-[200px]' type="text" name='username' placeholder=' Enter Name' value={value.username[0]} />
                        </div>
                        <div className="email">
                            <label htmlFor="email">
                                Email ID: &nbsp;
                            </label>
                            <input id='email' {...register("email", { 
                                required: true ,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                })} onChange={handleChange} className='text-sm border border-gray-300 rounded-md p-1 w-[200px]' type="text" name='email' placeholder=' Enter Email' value={value.email[0]} />
                        </div>
                        <div className="contact">
                            <label htmlFor="contact">
                                Contact Number: &nbsp;
                            </label>
                            <input id='contact' {...register("contact", {
                                required: true,
                                min: 1,
                                setValueAs:(v)=>parseFloat(v)
                            })} onChange={handleChange} className='text-sm border border-gray-300 rounded-md p-1 w-[200px]' type="number" name='contact' placeholder='Enter Number' value={value.contact[0]} />
                        </div>
                        <div className="gender flex gap-5">
                            Gender:
                            <span className='flex gap-1'>
                                <input {...register("gender", { required: true })} type="radio" id="Male" name="gender" value="Male" />
                                <label htmlFor="Male">Male</label>
                            </span>

                            <span className='flex gap-1'>
                                <input {...register("gender", { required: true })} type="radio" id="Female" name="gender" value="Female" />
                                <label htmlFor="Female">Female</label>
                            </span>

                            <span className='flex gap-1'>
                                <input {...register("gender", { required: true })} type="radio" id="Other" name="gender" value="Other" />
                                <label htmlFor="Other">Other</label>
                            </span>
                        </div>
                    </div>
                    <div className="bankdetails w-[35vw] bg-white flex flex-col p-5 gap-3 h-[26vh]">
                        <div className="bankname">
                            <label htmlFor="bank">Bank Name: </label>
                            <select {...register("bankName", { required: true })} className='p-1' onChange={handleChange} id="bank" name="bankName">
                                <option value="State Bank of India" >State Bank of India</option>
                                <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                                <option value="Axis Bank">Axis Bank</option>
                                <option value="HDFC Bank">HDFC Bank</option>
                            </select>
                        </div>
                        <div className="currBalance">
                            <label htmlFor="currBalance">Current Account Balance:  &nbsp;</label>
                            <input {...register("currBalance", {
                                required: true,
                                min:1,
                                setValueAs:(v)=>parseFloat(v)
                            })} id='currBalance' onChange={handleChange} className='text-sm border border-gray-300 rounded-md p-1 w-[125px]' type="number" name='currBalance' placeholder=' Enter balance' value={value.currBalance[0]} />
                        </div>
                        <div className="savBalance">
                            <label htmlFor="savBalance">Savings Account Balance:  &nbsp;</label>
                            <input {...register("savBalance", {
                                 required: true,
                                 min:1,
                                 setValueAs:(v)=>parseFloat(v) 
                                 })} id='savBalance' onChange={handleChange} className='text-sm border border-gray-300 rounded-md p-1 w-[125px]' type="number" name='savBalance' placeholder=' Enter balance' value={value.savBalance[0]} />
                        </div>
                        <div className="income">
                            <label htmlFor="income">Monthly Income:  &nbsp;</label>
                            <input {...register("income", {
                                 required: true ,
                                 min:1,
                                 setValueAs:(v)=>parseFloat(v)
                                 })} id='income' onChange={handleChange} className='text-sm border border-gray-300 rounded-md p-1 w-[125px]' type="number" name='income' placeholder=' Enter Income' value={value.income[0]} />
                        </div>
                    </div>
                </div>
                <div className="edit flex justify-center p-10 gap-10">
                    {/* <NavLink to='../profile' className='bg-red-400 shadow p-3 px-7 gap-3 rounded-lg flex items-center'>
                        Don't Save
                    </NavLink> */}
                    <input value="Save" type='submit' className='bg-teal-200 shadow p-3 cursor-pointer px-7 gap-3 rounded-lg flex items-center' />
                </div>
            </form>
        </>
    )
}

export default Profile_Edit
