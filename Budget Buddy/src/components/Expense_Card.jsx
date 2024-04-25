import React from 'react'
import { useContext } from 'react'
import { dashboardContext } from '../context/context'

const Expense_Card = (props) => {
  // const value = useContext(dashboardContext)
  return (
    <div className='px-6 hover:bg-gray-100 flex items-center justify-between card bg-white w-[40vw] h-[8vh] mb-3'>
      <div>
        {props.expense}
      </div>
      <div className='justify-self-center'>
        {props.currLimit}

      </div>
      <div>
        {props.limit}
      </div>
    </div>
  )
}

export default Expense_Card
