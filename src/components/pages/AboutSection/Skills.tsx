import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image';
import SkillData from '../../../../public/data/data.json'
import { ResumeSvgIcons } from '@/SvgIcons/svgIcons';
import { ArrowRight } from '@phosphor-icons/react';

export const Skills: FC = () => {
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
        <>
            <section id={'skills'} className='pt-[50px] md:pt-[60px] lg:pt-[120px] pb-[50px] md:pb-[60px] lg:pb-[120px]'>
                <div className='container'>
                    <div className='flex gap-3 flex-wrap xl:flex-nowrap justify-between items-end pb-10 sm:pb-8 lg:pb-16'>
                        <div data-aos="fade-up" className='w-full xl:w-[75%]'>
                            <div className='flex items-center gap-2'>
                                <div className='w-1 h-10 sm:h-14 lg:h-16 bg-mediumTealGreen'></div>
                                <h1 className='text-4xl sm:text-5xl lg:text-[56px] font-semibold text-white ml-2'>What I Do</h1>
                            </div>
                            <p className='text-base lg:text-lg text-white250 mt-2 lg:mt-4'>I have more than 3 years' experience building software for clients. Want to find out more about my experience? Check out my  online resume and project portfolio.</p>
                            <p className='text-base lg:text-lg text-white250 mt-2 lg:mt-4'>Below is a quick overview of my main skills and technologies I've learned and built some projects using. </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg:gap-8'>
                        {SkillData.skills.map((skill) => (
                            <div key={skill.id} data-aos="fade-up" data-aos-duration={skill.duration} className="rounded-sm">
                                <div className="px-4 py-5 bg-slate-800 border-[1px] border-skillsBoxBorder transition-all h-full">
                                    <div className="flex items-center gap-5">
                                        <Image src={`/svgImage/${skill.icon1}`} width={35} height={35} alt={skill.title} />
                                        {skill.icon2 && <Image src={`/svgImage/${skill.icon2}`} width={35} height={35} alt={skill.title} />}
                                    </div>
                                    <h4 className="text-base sm:text-lg lg:text-xl leading-[120%] font-medium mt-3 md:mt-6 mb-2 md:mb-3 text-white">
                                        {skill.title}
                                    </h4>
                                    <p className={`text-base md:text-lg md:leading-[120%] text-white250`}>
                                        {skill.description}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
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
                                        Let’s Contact Me
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
