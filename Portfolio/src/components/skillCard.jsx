import React from 'react'

const SkillCard = ({name, children }) => {
    return (
        <div className=" text-center w-[200px] lg:w-full  bg-gradient-to-b  from-gray-600/40 to-gray-500/40  shadow-[0_0px_2px_2px_rgba(256,256,256,0.5)]  rounded-lg p-3 px-5 text-white">
            <div className='flex justify-center items-center'>
                {name?
                <h2 className='text-kg font-medium p-2'>{name}</h2>
                :
                <></>
                }
                {children}
            </div>
        </div>
    )
}

export default SkillCard