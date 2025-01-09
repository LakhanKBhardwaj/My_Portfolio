import React, { FC, useEffect, useState } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import Image from 'next/image';
import SkillData from '../../public/data/data.json'

export const Skills: FC = () => {
    const [showFullText, setShowFullText] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);


    const toggleText = () => {
        setShowFullText(!showFullText);
    };
    return (
        <section id={'skills'} className='pt-[50px] md:pt-[60px] lg:pt-[120px] pb-[50px] md:pb-[60px] lg:pb-[120px]'>
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
                    {SkillData.skills.map((skill) => (
                        <div key={skill.id} data-aos='fade-up' data-aos-duration={skill.duration} className="rounded-sm ">
                            <div className='px-4 py-5 bg-slate-800 border-[1px] border-skillsBoxBorder transition-all'>
                                <div className='flex items-center gap-5'>
                                    <Image src={`/svgImage/${skill.icon1}`} width={35} height={35} alt={skill.title} />
                                    {skill.icon2 && (
                                        <Image src={`/svgImage/${skill.icon2}`} width={35} height={35} alt={skill.title} />
                                    )}
                                </div>
                                <h4 className='text-base sm:text-lg lg:text-xl leading-[120%] font-medium mt-3 md:mt-6 mb-2 md:mb-3 text-white'>{skill.title}</h4>
                                <p
                                    className={`text-base md:text-lg md:leading-[120%] text-white250 ${showFullText ? '' : 'sm:line-clamp-3'
                                        }`}
                                >
                                    {skill.description}
                                </p>
                                <button
                                    onClick={toggleText}
                                    className="text-blue-400 hover:underline mt-2 hidden sm:block"
                                >
                                    {showFullText ? 'See Less' : 'See More'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
