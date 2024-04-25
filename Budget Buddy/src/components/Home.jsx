import React from 'react'
import "./Home.css"

const Home = () => {
    return (
        <main>
            <div className="content bg-white rounded-lg mx-20 py-8 px-10 m-10 mt-10">

                <h1 className='text-center text-3xl  pb-5'>Welcome to Budget Buddy</h1>
                <p className='text-center'>Budget Buddy is a revolutionary e-wallet system designed to empower users in managing their finances and achieving financial wellness. </p>
            </div>
            <div className="flex md:flex-row flex-col mx-20 justify-between ">
                <div>
                <img src="/wallet.png" className='w-[42vw] rounded-lg' alt="" />

                </div>
                <div className="content bg-white rounded-lg p-8 w-[44vw]">
                    <h1 className='text-xl pb-4'>Get Started:</h1>
                    <ol className='px-4 text-[13px] flex flex-col gap-2'>
                        <li>Click on Profile to enter your personal details.</li>
                        <li>On the Dashboard, you can add your goals and expenses.</li>
                        <li>You can set the monthly limit on your expenses.</li>
                        <li>The current balance is equal to your Monthly Income initially.</li>
                        <li>The current balance decreases when expenses increase </li>
                        <li>At the end of the month, the Savings will be updated by adding the current balance to the Savings.</li>
                    </ol>

                </div>
            </div>
        </main>
    )
}

export default Home
