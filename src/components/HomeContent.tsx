import React, { FC, useEffect, useRef, useState } from 'react';
import { Typed } from 'react-typed';
import Image from 'next/image';
import BackImage from '../../public/Images/pattern.png';
import MyPic from '../../public/Images/Lakhan1.png';
import { ResumeSvgIcons } from '@/SvgIcons/svgIcons';
import Link from 'next/link';
import data from '../../public/data/data.json'


export const HomeContent: FC = () => {
    const [experienceCount, setExperienceCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const experience = 3;
    const textRef = useRef<HTMLSpanElement>(null);
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

    useEffect(() => {
        if (textRef.current) {
            const typed = new Typed(textRef.current, {
                strings: ["Designer", "Developer", "Programmer"],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 1000,
                loop: true,
                autoInsertCss: true
            });


            return () => {
                // Destroy the Typed instance when the component unmounts
                typed.destroy();
            };
        }
    }, []);

    useEffect(() => {
        let experienceCount = 0;
        const experienceInterval = setInterval(() => {
            if (experienceCount < experience) {
                experienceCount++;
                setExperienceCount(experienceCount);
            }
        }, 500);
        return () => clearInterval(experienceInterval);
    }, []);

    useEffect(() => {
        let projectCount = 0;
        const projectInterval = setInterval(() => {
            if (projectCount < data.projects.length) {
                projectCount++;
                setProjectCount(projectCount);
            }
        }, 300); // Animates the count every 500ms

        return () => clearInterval(projectInterval);
    }, []);



    return (
        <section id={'home'} className='pt-32 pb-16 border-b border-homeBorderColor overflow-hidden'>
            <div className='container'>
                <div className='flex flex-wrap gap-10 md:gap-14 items-center justify-between'>
                    <div className='w-[478px] banner-content:w-full'>
                        <span className='text-2xl md:text-3xl lg:text-4xl leading-[130%] text-white font-bold animate-slideTop ' style={{ animationDelay: "1s" }}>Hello, I'M</span>
                        <h1 className='text-3xl sm:text-4xl leading-[130%] text-white font-bold  animate-slideLeft' style={{ animationDelay: "1s" }}>Lakhan Kumar Bhardwaj</h1>
                        <h3 className='text-5xl sm:text-6xl md:text-7xl font-bold animate-slideBottom mt-2 mb-3' style={{ animationDelay: "1s" }}>
                            <span className='text-2xl md:text-3xl lg:text-4xl  leading-[130%] text-white font-bold '> And I'm a FRONTEND</span><br />
                            <span ref={textRef} className="text ml-2 text-mediumTealGreen"></span>
                        </h3>
                        <div className='py-2'>
                            <p className='animate-slideRight text-white text-lg max-sm:text-lg' style={{ animationDelay: "1s" }}>I'm a Frontend Developer with over 3 years of experience,
                                proficient in HTML, CSS, SCSS, Tailwind CSS, JavaScript, React, and TypeScript..
                            </p>
                        </div>
                        <div className=' flex flex-wrap items-center banner-content:items-start gap-3 md:gap-6 flex-col  mt-4 md:mt-8'>
                            <div className='overflow-hidden relative inline-block rounded-[50px]'>
                                <span style={circleStyle} className={`rounded-full absolute left-0 top-0 w-0 h-0 ml-0 mt-0 pointer-events-none duration-500 ${animationClass}`}></span>
                                <a href="#"
                                    className="inline-block bg-mediumTealGreen text-white font-medium text-lg min-w-[120px] w-max text-center transition duration-700 no-underline px-7 py-4 z-[100000]"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <span className="relative flex items-center justify-center gap-2 ">
                                        <ResumeSvgIcons width='18px' height='18px' fill='var(--white-color)' />
                                        View Resume
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='relative Profile-img:left-1/2 Profile-img:transform Profile-img:-translate-x-1/2'>
                        <div className=' back-image rounded-2xl border border-transparent animate-border'>
                            <Image src={BackImage} alt='Back Image' className='w-full animate-rotatedBg' />
                            {/* <div className='w-full h-full bg-mediumTealGreen animate-rotatedBg'></div> */}
                        </div>
                        <div className='bg-white'>
                            <Image src={MyPic} alt='Back Image' className='w-full h-full  absolute top-[-1px]' />
                        </div>
                    </div>
                </div>
                <div className='w-[636px] flex flex-wrap xl:flex-nowrap items-center gap-3 md:gap-6 mt-10 md:mt-16'>
                    <div className='flex items-center gap-2 xl:gap-4'>
                        <h2 className='p-0 m-0 leading-[120%] block text-7xl text-mediumTealGreen font-semibold'> {experienceCount} </h2>
                        <div className='w-[1px] h-10 bg-white'></div>
                        <span className='text-white'>Year of Experience</span>
                    </div>
                    <div className='flex items-center gap-2 xl:gap-4'>
                        <h2 className='p-0 m-0 leading-[120%] block text-7xl text-mediumTealGreen font-semibold'> {projectCount} </h2>
                        <div className='w-[1px] h-10 bg-white'></div>
                        <span className='text-white'>Projects Completed</span>
                    </div>
                    <div className='flex items-center gap-2 xl:gap-4 w-[194px] '>
                        {/* <h2 className='p-0 m-0 leading-[120%] block text-7xl text-mediumTealGreen font-semibold'> {experienceCount} </h2>
                        <div className='w-[1px] h-10 bg-white'></div>
                        <span className='text-white'>Year of Experience</span> */}
                    </div>
                </div>
            </div>
        </section>


    )
}
