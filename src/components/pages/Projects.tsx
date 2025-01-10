import React, { FC } from 'react'

export const Projects: FC = () => {
    return (
        <section id={'projects'} className='pt-[50px] md:pt-[60px] lg:pt-[120px] pb-[50px] md:pb-[60px] lg:pb-[120px]'>
            <div className='container'>
                <div className='flex gap-3 flex-wrap xl:flex-nowrap justify-between items-end pb-10 sm:pb-8 lg:pb-16'>
                    <div data-aos="zoom-in" className='w-full xl:w-[75%]'>
                        <div className='flex items-center gap-2'>
                            <div className='w-1 h-10 sm:h-14 lg:h-16 bg-mediumTealGreen'></div>
                            <h1 className='text-4xl sm:text-5xl lg:text-[56px] font-semibold text-white ml-2'>What I Do</h1>
                        </div>
                        <p className='text-base lg:text-lg text-white250 mt-2 lg:mt-4'>I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my  online resume and project portfolio.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg:gap-8'>
                    
                </div>
            </div>
        </section>
    )
}
