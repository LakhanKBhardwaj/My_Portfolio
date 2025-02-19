import Image from 'next/image'
import React, { FC } from 'react'
import projectData from '../../../../public/data/project.json'
import { ArrowUpRight } from '@phosphor-icons/react'
import { useRouter } from 'next/router';
import Link from 'next/link'


export const Projects: FC = () => {
    const router = useRouter();
    return (
        <section id={'projects'} className='pt-[50px] md:pt-[60px] lg:pt-[120px] pb-[50px] md:pb-[60px] lg:pb-[120px]'>
            <div className='container'>
                <div className='flex gap-3 flex-wrap xl:flex-nowrap justify-between items-end pb-10 sm:pb-8 lg:pb-16'>
                    <div data-aos="zoom-in" className='w-full xl:w-[75%]'>
                        <div className='flex items-center gap-2'>
                            <div className='w-1 h-10 sm:h-14 lg:h-16 bg-mediumTealGreen'></div>
                            <h1 className='text-4xl sm:text-5xl lg:text-[56px] font-semibold text-white ml-2'>Featured Projects</h1>
                        </div>
                        <p className='text-base lg:text-lg text-white250 mt-2 lg:mt-4'>I specialize in crafting intuitive and user-friendly interfaces, focusing on delivering high-quality solutions. My attention to detail and dedication ensures seamless project execution from start to finish. Explore some of my best work below.</p>
                    </div>
                </div>
                {/* <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg:gap-8'>
                    
                </div> */}
                <div className="grid gap-4 lg:gap-8 sm:grid-cols-2  xl:grid-cols-3 max-w-7xl mx-auto ">
                    {projectData.projects.map(project => (
                        <div className='rounded-lg shadow-lg'>
                            <div className='project-img relative'>
                                <img src={project.screenshot} alt='TODOList' className='w-full h-[230px]' />
                            </div>
                            <div className="flex justify-between items-center pt-4 md:pt-8 px-3 md:px-6">
                                <div>
                                    <span className="text-xl font-semibold text-white hover:text-mediumTealGreen project-title">{project.name}</span>
                                    <div className="flex flex-row">
                                        <div className="flex [max-width:400px]:flex-wrap gap-2 mt-4 basis-128">
                                            <span className="text-xs border text-white rounded-full px-3 py-1">{project.frontend}</span>
                                            <span className="text-xs border text-white rounded-full px-3 py-1">{project.backend}</span>
                                            <span className="text-xs border text-white rounded-full px-3 py-1">{project.database}</span>
                                        </div>
                                    </div>
                                </div>
                                <Link href={{pathname: '/projectDetails',}}className='project-link flex items-center justify-center flex-shrink-0'>
                                    <ArrowUpRight size={20} className='link-icon' />
                                </Link>
                    
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}