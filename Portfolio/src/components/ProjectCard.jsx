import React from 'react'

const ProjectCard = ({children, classes}) => {
  return (
    <div className={'h-[600px]   bg-gradient-to-b from-[#010101]/100 to-[#121212]/100  shadow-[0_0px_2px_2px_rgba(256,256,256,0.5)] rounded-lg '+ classes}>
        {children}
    </div>
  )
}

export default ProjectCard