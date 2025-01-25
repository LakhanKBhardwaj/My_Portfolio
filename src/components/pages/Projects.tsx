import Image from 'next/image'
import React, { FC } from 'react'
import TODOList from '../../../public/Images/ToDoList.png'

export const Projects: FC = () => {
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
                    
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        {/* <Image src={"/project1-thumbnail.jpg"} width={50} alt={"Project 1"} className="w-full h-48 object-cover"> */}
                        <div className='project-img relative'>
                            <Image src={TODOList} alt='TODOList'/>
                        </div>
                        
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white">To-do List Application</h3>
                            <p className="text-gray-400 mt-2">Developed a feature-rich To-Do List application using React for the frontend, styled with Tailwind CSS, and MongoDB as the database to store tasks.</p>
                            <div className="flex gap-2 mt-4">
                                <span className="text-xs bg-blue-600 text-white rounded-full px-3 py-1">React</span>
                                <span className="text-xs bg-green-600 text-white rounded-full px-3 py-1">Tailwind CSS</span>
                            </div>
                            <div className="mt-4 flex gap-4">
                                <a href="https://project-live-link.com" target="_blank" className="text-blue-400 hover:underline">Live Demo</a>
                                <a href="https://github.com/project-link" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        {/* <Image src={"/project1-thumbnail.jpg"} width={50} alt={"Project 1"} className="w-full h-48 object-cover"> */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white">Project Name</h3>
                                <p className="text-gray-400 mt-2">A brief description of the project and its purpose.</p>
                                <div className="flex gap-2 mt-4">
                                    <span className="text-xs bg-blue-600 text-white rounded-full px-3 py-1">React</span>
                                    <span className="text-xs bg-green-600 text-white rounded-full px-3 py-1">Tailwind CSS</span>
                                </div>
                                <div className="mt-4 flex gap-4">
                                    <a href="https://project-live-link.com" target="_blank" className="text-blue-400 hover:underline">Live Demo</a>
                                    <a href="https://github.com/project-link" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
                                </div>
                            </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        {/* <Image src={"/project1-thumbnail.jpg"} width={50} alt={"Project 1"} className="w-full h-48 object-cover"> */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white">Project Name</h3>
                                <p className="text-gray-400 mt-2">A brief description of the project and its purpose.</p>
                                <div className="flex gap-2 mt-4">
                                    <span className="text-xs bg-blue-600 text-white rounded-full px-3 py-1">React</span>
                                    <span className="text-xs bg-green-600 text-white rounded-full px-3 py-1">Tailwind CSS</span>
                                </div>
                                <div className="mt-4 flex gap-4">
                                    <a href="https://project-live-link.com" target="_blank" className="text-blue-400 hover:underline">Live Demo</a>
                                    <a href="https://github.com/project-link" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
                                </div>
                            </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        {/* <Image src={"/project1-thumbnail.jpg"} width={50} alt={"Project 1"} className="w-full h-48 object-cover"> */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white">Project Name</h3>
                                <p className="text-gray-400 mt-2">A brief description of the project and its purpose.</p>
                                <div className="flex gap-2 mt-4">
                                    <span className="text-xs bg-blue-600 text-white rounded-full px-3 py-1">React</span>
                                    <span className="text-xs bg-green-600 text-white rounded-full px-3 py-1">Tailwind CSS</span>
                                </div>
                                <div className="mt-4 flex gap-4">
                                    <a href="https://project-live-link.com" target="_blank" className="text-blue-400 hover:underline">Live Demo</a>
                                    <a href="https://github.com/project-link" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
                                </div>
                            </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        {/* <Image src={"/project1-thumbnail.jpg"} width={50} alt={"Project 1"} className="w-full h-48 object-cover"> */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white">Project Name</h3>
                                <p className="text-gray-400 mt-2">A brief description of the project and its purpose.</p>
                                <div className="flex gap-2 mt-4">
                                    <span className="text-xs bg-blue-600 text-white rounded-full px-3 py-1">React</span>
                                    <span className="text-xs bg-green-600 text-white rounded-full px-3 py-1">Tailwind CSS</span>
                                </div>
                                <div className="mt-4 flex gap-4">
                                    <a href="https://project-live-link.com" target="_blank" className="text-blue-400 hover:underline">Live Demo</a>
                                    <a href="https://github.com/project-link" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
                                </div>
                            </div>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}
