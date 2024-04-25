import React from 'react'
import "./Profile.css"
import { NavLink } from 'react-router-dom'
import { useContext,useEffect } from 'react'
import { profileContext } from '../context/context'

const Profile = () => {
  const value=useContext(profileContext)

  useEffect(() => {
    console.log(value)
  }, [value])
  


  return (
    <>
      <main className=''>
        <div className="header flex justify-center mt-10 gap-4 m-auto pb-10">
          <h1 className='text-3xl'>Your Profile</h1>
   
        </div>
        <div className="details flex text-md justify-around w-[80vw] m-auto ">
          <div className="personaldetails flex flex-col min-h-[25vh] w-[35vw] p-5 gap-4 bg-white">
            <div className="name"> Name: <span className='  inline-block  mx-2  rounded-md'>{value.username[0]}</span></div>
            <div className="email">Email ID: <span className='  inline-block  mx-2  rounded-md'>{value.email[0]} </span></div>
            <div className="contact">Contact Number: <span className='  inline-block  mx-2  rounded-md'>{value.contact[0]}</span></div>
            <div className="gender">Gender: <span className='  inline-block  mx-2  rounded-md'>{value.gender[0]}</span></div>
          </div>
          <div className="bankdetails w-[35vw] bg-white flex flex-col p-5 gap-4 min-h-[25vh]">
            <div className="bankname">Bank Name: <span className='  inline-block  p-1 mx-2 px-0 rounded-md'>{value.bankName[0]}</span></div>
            <div className="currentaccount">Current Account Balance:  {value.currBalance[0] && <span className='  inline-block   mx-2 px-0 rounded-md'>&#8377;{value.currBalance[0]}</span>}</div>
            <div className="savingsaccount">Savings Account: {value.savBalance[0] && <span className='  inline-block   mx-2 px-0 rounded-md'>&#8377;{value.savBalance[0]}</span>}</div>
            <div className="income">Monthly Income:  {value.income[0] && <span className='  inline-block   mx-2 px-0 rounded-md'>&#8377;{value.income[0]}</span>}</div>
          </div>
        </div>
        <div className="edit flex justify-center p-10">

          <NavLink to='edit' className='bg-teal-100 shadow p-4 px-7 gap-3 rounded-lg flex items-center'>
            <div>
              Edit Details
            </div>
              <img src="/edit.png" alt="" className='w-5 h-5' />
          </NavLink>
        </div>
      </main> 
    </>
  )
}

export default Profile
