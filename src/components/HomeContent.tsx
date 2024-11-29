import React, { FC, useEffect, useRef } from 'react';
import { Typed } from 'react-typed';
import Image from 'next/image';
import BackImage from '../../public/Images/pattern.png';
import MyPic from '../../public/Images/myPic.png';

export const HomeContent: FC = () => {

    const textRef = useRef<HTMLSpanElement>(null);

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
        <div className="grid md:grid-cols-2 h-screen">
            <div className='relative  bg-slate-900 bg-cover bg-center items-center pt-48 sm:px-10 p-5 pb-0 '>
                <div className='px-5 py-2'>
                    <h3 className='text-5xl max-sm:text-3xl text-white font-bold animate-slideTop ' style={{ animationDelay: "1s" }}>Hello, It's Me</h3>
                </div>
                <div className='px-5 py-2'>
                    <h1 className='text-7xl max-sm:text-5xl text-white animate-slideLeft' style={{ animationDelay: "1s" }}>Lakhan Kumar Bhardwaj</h1>
                </div>
                <div className='px-5 py-2'>
                    <h3 className='text-5xl max-sm:text-3xl text-white font-bold animate-slideBottom' style={{ animationDelay: "1s" }}>
                        And I'm a
                        <span ref={textRef} className="text ml-2 text-cyan-300"></span>
                    </h3>
                </div>
                <div className='px-5 py-2'>
                    <p className='animate-slideRight text-white text-2xl max-sm:text-lg' style={{ animationDelay: "1s" }}>I'm a Frontend Developer with over 3 years of experience,
                        <br />proficient in HTML, CSS, SCSS, Tailwind CSS, JavaScript, React, and TypeScript..
                    </p>
                </div>

            </div>

            <div className='bg-slate-900 pt-32 px-5'>
                <section className="flex justify-center  ">
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


    )
}
