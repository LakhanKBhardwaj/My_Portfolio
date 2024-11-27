import React, { FC, useEffect, useRef } from 'react'
import { Typed } from 'react-typed';

export const HomeContent: FC = () => {

    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (textRef.current) {
            const typed = new Typed(textRef.current, {
                strings: ["Web Developer", "Computer Programmer", "Instagrammer"],
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
        <div className="grid md:grid-cols-2">
            <div className='relative bg-sky-950 bg-cover bg-center items-center pt-48 px-10 pb-0 h-screen'>
                <h3 className='text-5xl max-sm:text-3xl text-white font-bold animate-slideTop' style={{ animationDelay: "0.7s" }}>Hello, It's Me</h3>
                <h1 className='text-7xl max-sm:text-5xl text-white animate-slideRight' style={{animationDelay: "1s"}}>Lakhan Kumar Bhardwaj</h1>
                <h3 className='text-5xl max-sm:text-3xl text-white font-bold'> 
                    And I'm a 
                    <span ref={textRef} className="text ml-2 text-cyan-300"></span>
                </h3>
                <p>I'm a Web Developer with over 1 year of experience.
                            <br /> Experienced in CPP using C++ and solving 100+ <b>LeetCode</b> problems.<br /> and much more.....
                        </p>
            </div>

            <div className='bg-slate-500'>09</div>
        </div>
    )
}
