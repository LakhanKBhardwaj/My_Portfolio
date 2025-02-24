import React, { FC, useEffect, useState } from 'react'
import AOS from 'aos';
import { useRouter } from 'next/router';
import projectData from '../../../../public/data/project.json'
import { ArrowRight } from '@phosphor-icons/react';
import Link from 'next/link';
import { Projects } from '../AboutSection/Projects';


export const Project: FC = () => {

  const router = useRouter();
  const { id } = router.query;

  // Find the project based on the ID
  const project = projectData.projects.find(proj => proj.id.toString() === id);

  if (!project) {
    return (
     <Projects />
    );
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Array of CSS classes for background colors
  const colorClasses = ["red", "blue", "dark", "orange"];

  //Button animation
  const [circleStyle, setCircleStyle] = useState({});
  const [animationClass, setAnimationClass] = useState("");

  const handleMouseEnter = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    setCircleStyle({
      left: `${relX}px`,
      top: `${relY}px`,
    });
    setAnimationClass("animate-explode");

    console.log(circleStyle);
  };

  const handleMouseLeave = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    setCircleStyle({
      left: `${relX}px`,
      top: `${relY}px`,
    });
    setAnimationClass("animate-desplode");
  };

  return (
    <section className=" container pt-20 mt-10 lg:md-0">
      <div className='pb-10'>
        <div data-aos="zoom-in" className='w-full m-auto'>
          <h3 className='text-white text-center font text-4xl font-semibold'>
            Project: {project.name}
          </h3>
        </div>
        <div className="container mt-8 md:mt-16 pb-16 ">
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div data-aos="fade-left" className='w-full'>
              <div className='flex flex-col gap-5 sticky top-5 p-3 rounded border-[1px] border-whiteLowOpacity'>
                <div>
                  <span className='text-white text-base font-medium block'>Service</span>
                  <span className='text-white text-xl font-medium'>{project.service}</span>
                </div>
                <div>
                  <span className='text-white text-base font-medium block'>Forntend Technologies</span>
                  <span className='text-white text-xl font-medium'>{project.Requirements?.frontend.technology}</span>
                </div>
                <div>
                  <span className='text-white text-base font-medium block'>Backend Technologies</span>
                  <span className='text-white text-xl font-medium'>{project.Requirements?.backend.technology}, {project.Requirements?.database.technology}</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" className='lg:col-span-2'>
              <div className='flex flex-col gap-8 md:gap-16'>
                <div className='overflow-hidden'>
                  <img src={project.screenshot} alt={project.name} className='w-full project-detail-img' />
                </div>
                <div data-aos="fade-up">
                  <p className='text-white text-[16px]'>{project.description}</p>
                  <h3 className='text-white text-2xl font-semibold mt-5 md:mt-10 mb-2 md:mb-4'>Project Requirements</h3>
                  <ul className='project-requirements list-disc pl-5'>
                    {project.Requirements?.features.map((feature: any, index) => (
                      <li className={colorClasses[index % colorClasses.length]} >
                        <div className="content">
                          <div className="title">{feature}</div>

                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div data-aos="fade-up">
                  <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 md:mb-4'>Project Overview</h2>
                  <p className='text-white'>{project.projectOverview}</p>
                </div>
                <div data-aos="fade-up">
                  <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 md:mb-4'>The Challenge</h2>
                  <p className='text-white'>{project.Challenge?.problemStatement}</p>
                  <p className='text-white'>{project.Challenge?.keyChallenges}</p>
                </div>
                <div data-aos="fade-up" className='text-white'>
                  <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 md:mb-4'>The Approach & Solution</h2>
                  <p>{project.approachAndSolution?.approach}</p>
                  <p>{project.approachAndSolution?.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='pt-[50px] md:pt-[60px] lg:pt-[120px] pb-[50px] md:pb-[60px] lg:pb-[120px] newProject'>
          <div className='container newProject-content'>
            <div className='flex gap-3 flex-wrap xl:flex-nowrap justify-between items-end pb-10 sm:pb-8 lg:pb-16'>
              <div data-aos="zoom-in-left" className='w-full xl:w-[636px]'>
                <h1 className='text-4xl sm:text-5xl lg:text-[56px] font-semibold text-white ml-2'>Let’s Work together</h1>
                <p className='text-base lg:text-lg text-white250 mt-2 lg:mt-4'>"I am a passionate software engineer, delivering high-quality solutions through my expertise and dedication. Currently working full-time, I am always open to exploring new opportunities to grow and contribute."</p>
              </div>

              <div data-aos="zoom-in-right">
                <div className='overflow-hidden relative inline-block rounded-[50px]'>
                  <span style={circleStyle} className={`rounded-full absolute left-0 top-0 w-0 h-0 ml-0 mt-0 pointer-events-none duration-500 ${animationClass}`}></span>
                  <a href="#"
                    className="inline-block bg-mediumTealGreen text-white font-medium text-lg min-w-[120px] w-max text-center transition duration-700 no-underline px-5 py-4 z-[100000]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span className="relative flex items-center justify-center gap-2 ">
                      <ArrowRight width='18px' height='18px' fill='var(--white-color)' />
                      Let's Contact Me
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
