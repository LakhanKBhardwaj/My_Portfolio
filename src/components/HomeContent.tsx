import React, { FC, useEffect, useRef, useState } from 'react';
import { Typed } from 'react-typed';
import Image from 'next/image';
import BackImage from '../../public/Images/pattern.png';
import MyPic from '../../public/Images/myPic.png';
import { ResumeSvgIcons } from '@/SvgIcons/svgIcons';
import Link from 'next/link';

export const HomeContent: FC = () => {


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
                strings: ["Frontend Developer", "Web Developer", "Computer Programmer"],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 1000,
                loop: true,
            });
            return () => {
                // Destroy the Typed instance when the component unmounts
                typed.destroy();
            };
        }
    }, []);


    return (
        <section id={'home'}>
            <div className="grid md:grid-cols-3 border-b-[1px] border-slate-600 md:h-screen md:py-32">
                <div className='md:pt-16 pt-5 col-span-2'>
                    <div className='sm:px-10 max-sm:px-5'>
                        <div className='py-2'>
                            <h3 className='max-sm:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold animate-slideTop ' style={{ animationDelay: "1s" }}>Hello, It's Me</h3>
                        </div>
                        <div className='py-2'>
                            <h1 className='max-sm:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white animate-slideLeft' style={{ animationDelay: "1s" }}>Lakhan Kumar Bhardwaj</h1>
                        </div>
                        <div className='py-2'>
                            <h3 className=' max-sm:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold animate-slideBottom' style={{ animationDelay: "1s" }}>
                                And I'm a
                                <span ref={textRef} className="text ml-2 text-cyan-300"></span>
                            </h3>
                        </div>
                        <div className='py-2'>
                            <p className='animate-slideRight text-white text-2xl max-sm:text-lg' style={{ animationDelay: "1s" }}>I'm a Frontend Developer with over 3 years of experience,
                                <br />proficient in HTML, CSS, SCSS, Tailwind CSS, JavaScript, React, and TypeScript..
                            </p>
                        </div>
                    </div>
                    <div className='sm:px-28 max-sm:px-16 mt-12 flex flex-wrap items-center gap-3 md:gap-6 flex-col md:flex-row p-5'>
                        <div className='overflow-hidden relative inline-block rounded-[50px] mb-3'>
                            <span style={circleStyle} className={`bg-red-600 rounded-full absolute left-0 top-0 w-0 h-0 ml-0 mt-0 pointer-events-none duration-500 ${animationClass}`}></span>
                            <a href="#"
                                className="inline-block bg-customOragne text-white font-medium text-lg min-w-[120px] w-max text-center transition duration-700 no-underline px-7 py-4 z-[100000]"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className="relative flex items-center justify-center gap-2 z-[10000]">
                                <ResumeSvgIcons width='18px' height='18px' fill='var(--white-color)' />
                                    View Resume
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center col-span-1 max-md:col-span-2'>
                    <section className="sm:px-10 max-sm:px-5 max-md:py-5">
                        <div className="w-full  max-w-[422px] [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
                            <div className="px-5 py-16  group">
                                <Image src={BackImage} alt='Back Image' className=' w-full ' />
                            </div>
                        </div>
                    </section>
                </div>
                {/* <div className='relative w-full h-[80%] group'>
                    <Image src={BackImage} alt='Back Image' width={550} className='absolute left-0 bottom-0 transform translate-x-[8%] transition-[bottom,left] duration-[2.5s] group-hover:bottom-[40px]' />
                    <Image src={MyPic} alt='My Pic' width={450} className='text-3xl absolute left-0 bottom-0 transform translate-x-8 transition-[bottom,left] duration-[2.5s] group-hover:left-[8%]' />
                </div> */}
            </div>

        </section>


    )
}
