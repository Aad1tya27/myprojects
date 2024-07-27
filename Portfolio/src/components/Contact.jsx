import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const [show, setShow ] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(form.current)
        setIsSubmitting(true)
        emailjs
            .sendForm('service_o5beluo', 'template_0fw6czc', form.current, {
                publicKey: 'vGT3XeTyy_2oBWh5n',
            })
            .then(() => {
                console.log('SUCCESS!');
                // setShow(true);
                // console.log('icon should appear')
                // setTimeout(() => {
                //     console.log("should disappear")
                //     setShow(false);
                // }, 5000);
                
            }).catch((error)=>{
                console.log('FAILED...', error.text);
                
            })
            .finally(()=>{
                setIsSubmitting(false);
                form.current.reset();
            })
    };
    return (
        <>
            <section id='contact' className="text-gray-100 bg-[#0f0f0f] body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Me</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm">Name</label>
                                    <input placeholder='Enter Name' type="text" id="name" name="user_name" className="w-full bg-gray-200 rounded border border-indigo-600 focus:border-indigo-500 ring-[0.1px] ring-indigo-500 focus:bg-gray-200 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm">Email</label>
                                    <input placeholder='Enter Email' type="email" id="email" name="user_email" className="w-full bg-gray-200 rounded border border-indigo-600 focus:border-indigo-500 ring-[0.1px] ring-indigo-500 focus:bg-gray-200 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm ">Message</label>
                                    <textarea placeholder='Enter Message' id="message" name="message" className="w-full bg-gray-200  rounded border border-indigo-600 focus:border-indigo-500 ring-[0.1px] ring-indigo-500 focus:bg-gray-200 focus:ring-2 focus:ring-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                {
                                !isSubmitting?
                                <button type='submit' className="flex mx-auto text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded-lg text-lg font-medium">Submit</button>
                                :
                                <button type='submit' disabled className="flex mx-auto text-gray-200 border-0 py-2 px-8 focus:outline-none bg-indigo-800 rounded-lg text-lg font-medium">Submitting...</button>
                                }
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-opacity-50 border-gray-200 text-center">
                                <div className=" ">Personal Email: &nbsp; <a className='hover:underline text-indigo-300' href='mailto: agarwal.aaditya2765@gmail.com'>agarwal.aaditya2765@gmail.com</a></div>
                                <div className="">Education Email: &nbsp; <a className='hover:underline text-indigo-300' href='mailto: aaditya.agarwal.cse23@itbhu.ac.in'>aaditya.agarwal.cse23@itbhu.ac.in</a></div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* {
                show
                ?
                <div className="emailSent bg-white p-2 px-6 transition duration-500 border border-indigo-300 opacity-90 rounded-sm  z-30 fixed bottom-0 right-0 m-2  text-indigo-800 font-medium">Email Sent!</div>
                :
                <></>
            } */}
            
        </>
    )
}

export default Contact