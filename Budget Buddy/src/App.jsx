import { createContext, useContext, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Expense from './components/Expense'
import Expense_Add from './components/Expense_Add'
import Expense_Modify from './components/Expense_Modify'

import Profile_Edit from './components/Profile_Edit'
// import {income, currBalance, savBalance, name, email, contact, bankName} from './context/context'
import { profileContext, dashboardContext } from './context/context'
// import { createContext } from 'react'



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


import Goal from './components/Goal'
import Goal_Add from './components/Goal_Add'
import Goal_Modify from './components/Goal_Modify'
import ResetExpenses from './components/ResetExpenses'
import Transaction from './components/Transaction'
import Error from './components/Error'
import NoProfile from './components/NoProfile'
import Transfer from './components/Transfer'

function App() {

  const profile=useContext(profileContext)
  useEffect(() => {
    console.log("ohno")
  }, [profile])
  
  const [income, setIncome] = useState("")
  const [currBalance, setCurrBalance] = useState("")
  const [savBalance, setSavBalance] = useState("")

  const [username, setusername] = useState([])
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [bankName, setBankName] = useState("")
  const [gender, setGender] = useState("")

  const [expenseList, setExpenseList] = useState([])
  const [goalList, setGoalList] = useState([])
  const [totalExpenses, settotalExpenses] = useState(0)


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Footer/></>
    },
    {
      path: "/dashboard",
      element: <><Navbar />{username.length>0?
        <Dashboard />
        :
        <NoProfile/>
      }
      <Footer/>
      </>
    },
    {
      path: "/profile",
      element: <><Navbar /><Profile /><Footer /></>
    },
    {
      path: "/profile/edit",
      element: <><Navbar /><Profile_Edit /><Footer /></>
    },
    {
      path: "/dashboard/expense",
      element: <><Navbar /><Dashboard /><Expense /></>
    },
    {
      path: "/dashboard/goal",
      element: <><Navbar /><Dashboard /><Goal /></>
    },
    {
      path: "/dashboard/expense/add",
      element: <><Navbar /><Dashboard /><Expense_Add /></>
    },
    {
      path: "/dashboard/expense/modify",
      element: <><Navbar /><Dashboard /><Expense_Modify /></>
    },
    {
      path: "/dashboard/goal/add",
      element: <><Navbar /><Dashboard /><Goal_Add /></>
    },
    {
      path: "/dashboard/goal/modify",
      element: <><Navbar /><Dashboard /><Goal_Modify /></>
    },
    {
      path:"/dashboard/reset",
      element:<><Navbar/><Dashboard/><ResetExpenses/></>
    },
    {
      path:"/dashboard/transaction",
      element:<><Navbar/><Dashboard/><Transaction/></>
    },
    {
      path:"/*",
      element:<><Navbar/><Error/><Footer/></>
    },
    {
      path:"/dashboard/transfer",
      element:<><Navbar/><Dashboard/><Transfer/><Footer/></>
    }

  ])


  

  return (
    <>
      <dashboardContext.Provider value={{expenseList:[expenseList, setExpenseList], goalList:[goalList, setGoalList], totalExpenses:[totalExpenses,settotalExpenses]}}>
        <profileContext.Provider value={{
          income: [income, setIncome], currBalance: [currBalance, setCurrBalance], savBalance: [savBalance, setSavBalance],
          username: [username, setusername], email: [email, setEmail], contact: [contact, setContact], bankName: [bankName, setBankName], gender: [gender, setGender]
        }}>

          <RouterProvider router={router} />
          {/* <Profile_Edit/> */}
        </profileContext.Provider>
      </dashboardContext.Provider>
    </>
  )
}

export default App
