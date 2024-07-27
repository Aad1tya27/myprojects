import React from 'react'
import SkillCard from './skillCard'



const Stack = () => {
  return (
    <div id='skills' className='w-full min-h-screen bg-black text-white p-10'>
      {/* <h1 className='text-[40px] font-medium text-center p-5 '>Skills</h1>
      <div className='flex justify-around flex-wrap'>
        <div className="frontend w-[350px] lg:w-[200px] flex gap-5 flex-col items-center">
          <h1 className='text-3xl text-center font-normal p-1 pt-5 '>Frontend</h1>
          <SkillCard name={"HTML"}>
            <img src="/html.svg" alt="" className='w-[25px] mx-2' />
          </SkillCard>
          <SkillCard name={"CSS"}>
            <img src="/css.svg" alt="" className='w-[40px] mx-2' />
          </SkillCard>
          <SkillCard name={"JavaScript"}>
            <img src="/js.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"TypeScript"}>
            <img src="/ts.svg" alt="" className='w-[40px] mx-2' />
          </SkillCard>
          <SkillCard name={"React"}>
            <img src="/react-1.svg" alt="" className='w-[40px] mx-2' />
          </SkillCard>
          <SkillCard name={"Tailwind CSS"}>
            <img src="/tailwind.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Next.js"} >
            <img src="/next.png" alt="" className='w-[60px] mx-2 bg-white p-1 rounded-sm ' />
          </SkillCard>
        </div>
        <div className="backendAndDatabase w-[350px] lg:w-[200px] flex gap-5 flex-col items-center ">
          <h1 className='text-3xl text-center font-normal p-1 pt-5 '>Backend</h1>
          <SkillCard name={"Node.js"}>
          <img src="/node.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Next.js"} >
            <img src="/next.png" alt="" className='w-[60px] mx-2 bg-white p-1 rounded-sm ' />
          </SkillCard>
          <h1 className='text-3xl text-center font-normal p-1 pt-5 '>Database</h1>
          <SkillCard name={"MongoDB"}>
          <img src="/mongo.png" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"PostgreSQL"}>
          <img src="/postgres.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
        </div>
        <div className="utils w-[350px] lg:w-[200px] flex gap-5 flex-col items-center">
          <h1 className='text-3xl text-center font-normal p-1 pt-5 '>Utils</h1>
          <SkillCard name={"Docker"}>
          <img src="/docker.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Prisma"}>
          <img src="/prisma.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Git"}>
          <img src="/git.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Postman"}>
          <img src="/postman.png" alt="" className='w-[35px] mx-2' />
          </SkillCard>
        </div>
        <div className="miscellaneous w-[350px] lg:w-[200px] flex gap-5 flex-col items-center">
          <h1 className='text-3xl text-center font-normal p-1 pt-5 '>Miscellaneous</h1>
          <SkillCard name={"C"}>
          <img src="/c.svg" alt="" className='w-[25px] mx-2' />
          </SkillCard>
          <SkillCard name={"C++"}>
          <img src="/cpp.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Bash Scripting"}>
          <img src="/bash.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Python"}>
          <img src="/python.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Numpy"}>
          <img src="/numpy.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Pandas"}>
          <img src="/pandas.png" alt="" className='w-[25px] mx-2' />
          </SkillCard>
          <SkillCard name={"Matplotlib"}>
          <img src="/matplotlib.png" alt="" className='w-[35px] mx-2' />
          </SkillCard>
        </div>
      </div> */}
      <h1 className='text-[40px] font-medium text-center p-10 '>Skills</h1>
      <div className='flex justify-around gap-10 flex-wrap'>
        <div className="miscellaneous w-[350px] lg:w-[200px] flex gap-5 flex-col items-center mb-5">
          <h1 className='text-3xl text-center font-normal p-1 pt-5 '>Miscellaneous</h1>
          <SkillCard name={"C"}>
            <img src="/c.svg" alt="" className='w-[25px] mx-2' />
          </SkillCard>
          <SkillCard name={"C++"}>
            <img src="/cpp.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Bash Scripting"}>
            <img src="/bash.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Python"}>
            <img src="/python.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Numpy"}>
            <img src="/numpy.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Pandas"}>
            <img src="/pandas.png" alt="" className='w-[25px] mx-2' />
          </SkillCard>
          <SkillCard name={"Matplotlib"}>
            <img src="/matplotlib.png" alt="" className='w-[35px] mx-2' />
          </SkillCard>
        </div>
        <div className="frontend w-[350px] lg:w-[200px] flex gap-5 flex-col items-center mb-5">
          <h1 className='text-3xl text-center font-normal p-1 pt-5 '>Frontend</h1>
          <SkillCard name={"HTML"}>
            <img src="/html.svg" alt="" className='w-[25px] mx-2' />
          </SkillCard>
          <SkillCard name={"CSS"}>
            <img src="/css.svg" alt="" className='w-[40px] mx-2' />
          </SkillCard>
          <SkillCard name={"JavaScript"}>
            <img src="/js.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"TypeScript"}>
            <img src="/ts.svg" alt="" className='w-[40px] mx-2' />
          </SkillCard>
          <SkillCard name={"React"}>
            <img src="/react-1.svg" alt="" className='w-[40px] mx-2' />
          </SkillCard>
          <SkillCard name={"Tailwind CSS"}>
            <img src="/tailwind.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Next.js"} >
            <img src="/next.png" alt="" className='w-[60px] mx-2 bg-white p-1 rounded-sm ' />
          </SkillCard>
        </div>
        <div className="backendAndDatabase w-[350px] lg:w-[200px] flex gap-5 flex-col items-center  mb-5">
          <h1 className='text-3xl text-center font-normal p-1 pt-5 '>Backend</h1>
          <SkillCard name={"Node.js"}>
            <img src="/node.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Next.js"} >
            <img src="/next.png" alt="" className='w-[60px] mx-2 bg-white p-1 rounded-sm ' />
          </SkillCard>
          <h1 className='text-3xl text-center font-normal p-1 pt-5 '>Database</h1>
          <SkillCard name={"MongoDB"}>
            <img src="/mongo.png" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"PostgreSQL"}>
            <img src="/postgres.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
        </div>
        <div className="utils w-[350px] lg:w-[200px] flex gap-5 flex-col items-center mb-5">
          <h1 className='text-3xl text-center font-normal p-1 pt-5 '>Utils</h1>
          <SkillCard name={"Docker"}>
            <img src="/docker.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Prisma"}>
            <img src="/prisma.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Git"}>
            <img src="/git.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Postman"}>
            <img src="/postman.png" alt="" className='w-[35px] mx-2' />
          </SkillCard>
        </div>

      </div>
    </div>
  )
}

export default Stack