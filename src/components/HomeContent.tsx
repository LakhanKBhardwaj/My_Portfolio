import React, { FC, useEffect, useRef, useState } from 'react';
import { Typed } from 'react-typed';
import Image from 'next/image';
import BackImage from '../../public/Images/pattern.png';
import MyPic from '../../public/Images/Lakhan1.png';
import { ResumeSvgIcons } from '@/SvgIcons/svgIcons';
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
       <div className='text-white'>lakhan</div>


    )
}
