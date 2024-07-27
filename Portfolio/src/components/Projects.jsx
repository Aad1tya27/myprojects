import React from 'react'
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Tweet } from 'react-tweet';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import ProjectCard from './ProjectCard';

const Projects = () => {

  return (
    <div id='projects' className='w-full py-10 min-h-screen relative bg-[#141414] text-white flex flex-col items-center justify-center'>
      <h1 className='text-[40px] font-medium text-center pb-10'>Projects</h1>
      <Swiper className=' w-full p-2'
        // install Swiper modules
        effect={'coverflow'}
        modules={[Navigation, EffectCoverflow, Pagination, A11y]}
        centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          600:{
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 50,
          }
        }}
        navigation
        pagination={{ clickable: true }}

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 4,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <ProjectCard classes={" flex flex-col justify-center gap-5 items-center"}>
            <h1 className='text-3xl font-medium'>Task Scheduler</h1>
            {/* <iframe src="https://task-scheduler-frontend.onrender.com/" name="Task Scheduler" title="Task Scheduler"></iframe> */}
            <div className='w-[80%] h-[70%] overflow-auto'>
              <Tweet id='1799771836789485661' />
            </div>
          </ProjectCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard classes={" flex flex-col justify-center gap-5 items-center"}>
            <h1 className='text-3xl font-medium'>Budget Buddy</h1>
            {/* <iframe src="https://task-scheduler-frontend.onrender.com/" name="Task Scheduler" title="Task Scheduler"></iframe> */}
            <div className='w-[80%] h-[70%] overflow-auto'>
              <Tweet id='1780158782783537552' />
            </div>
          </ProjectCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard classes={" flex flex-col justify-center gap-5 items-center"}>
            <h1 className='text-3xl font-medium'>Spotify Player Clone</h1>
            {/* <iframe src="https://task-scheduler-frontend.onrender.com/" name="Task Scheduler" title="Task Scheduler"></iframe> */}
            <div className='w-[80%] h-[70%] overflow-auto'>
              <Tweet id='1771652825384108539' />
            </div>
          </ProjectCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard classes={" flex flex-col justify-center gap-5 items-center"}>
            <h1 className='text-3xl font-medium'>Netflix UI Clone</h1>
            {/* <iframe src="https://task-scheduler-frontend.onrender.com/" name="Task Scheduler" title="Task Scheduler"></iframe> */}
            <div className='w-[80%] h-[70%] overflow-auto '>
              <Tweet id='1759123899382411339' />
            </div>
          </ProjectCard>
        </SwiperSlide>
        {/* <SwiperSlide> <ProjectCard/> </SwiperSlide>
        <SwiperSlide> <ProjectCard/> </SwiperSlide>
        <SwiperSlide> <ProjectCard/> </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default Projects