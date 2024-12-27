import Image from 'next/image'
import React, { FC, useRef, useState } from 'react'
import MyPic from '../../public/Images/myImage2.png'
import Link from 'next/link'
import data from '../../public/data/data.json'
import { Briefcase, Code, Envelope, FacebookLogo, House, InstagramLogo, LinkedinLogo, PaperPlaneTilt, ReadCvLogo, ShoppingBag, User, XLogo, } from '@phosphor-icons/react'


// Create a mapping of icon strings to icon components
const iconMap = {
    "ph-house": House,
    "ph-user": User,
    "ph-code": Code,
    "ph-shopping-bag": ShoppingBag,
    "ph-read-cv-logo": ReadCvLogo,
    "ph-briefcase": Briefcase,
    "ph-envelope": Envelope,
    "ph-facebook-logo": FacebookLogo,
    "ph-instagram-logo": InstagramLogo,
    "ph-linkedin-logo": LinkedinLogo,
    "ph-x-logo": XLogo,
};

export const Sidebar: FC = () => {

    const [isActive, setIsActive] = useState("Home");

    const handelActiveMenu = (menuName: any) => {
        setIsActive(menuName)
    }


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
        setAnimationClass("animate-hireExplode");

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
        setAnimationClass("animate-hireDesplode");
    };


    return (
        <div className='w-[300px] h-full fixed z-[999] top-0 left-0 sidebar'>
            <div className='overflow-y-auto w-full h-full '>
                <div className='flex flex-col gap-6 justify-between py-10 px-5 h-full bg-slate-800'>
                    <div className='siderbar-profile'>
                        <div className='relative'>
                            <div className='w-[120px] h-[120px] m-auto rounded-[50%] bg-mediumTealGreen flex justify-center overflow-hidden'>
                                <Image src={MyPic} className='w-[70%] mt-3' alt='My Profile Pic' />
                            </div>
                            <span className='w-[32px] h-[32px] flex justify-center items-center rounded-[50%] bg-charcoal absolute top-[85px] right-[75px]'>👋</span>
                        </div>
                        <h4 className='text-white text-[22px] mt-2 text-center leading-10 font-semibold'>Lakhan Kumar Bhardwaj</h4>
                        <span className='text-white text-base block text-center'>Software Engineer</span>
                        <div className='flex justify-center gap-2 items-center mt-4'>
                            {data.socialMedia.map((icon) => {
                                const IconComponent = iconMap[icon.icon as keyof typeof iconMap];

                                return (
                                    <Link key={icon.id} href={'#'} className='flex items-center justify-center w-8 h-8 rounded-[50%] border-2 border-whiteLowOpacity transition-all ease-in-out text-mediumTealGreen hover:text-white hover:bg-mediumTealGreen'>
                                        {IconComponent && <IconComponent size={16} />}
                                    </Link>
                                )
                            })}
                        </div>
                        <div className='my-4 md:my-8 h-[1px] w-full bg-whiteLowOpacity'></div>
                        <nav className='menu-list'>
                            <ul className='flex flex-col gap-3'>
                                {data.menu.map((menu) => {
                                    const MenuIconComponent = iconMap[menu.icon as keyof typeof iconMap];

                                    return (
                                        <li key={menu.id} className={`rounded-lg ${isActive === menu.name ? 'bg-mediumTealGreen' : 'hover:bg-mediumTealGreen'}`}>
                                            <Link
                                                href={'#'}
                                                onClick={() => handelActiveMenu(menu.name)}
                                                className={`flex items-center gap-2 text-white text-[16px] leading-[130%] px-3 py-2`}
                                            >
                                                {MenuIconComponent && <MenuIconComponent size={20} />}
                                               {menu.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                                
                            </ul>
                        </nav>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='overflow-hidden relative inline-block rounded-[50px]  mb-3'>
                            <span style={circleStyle} className={`rounded-full absolute left-0 top-0 w-0 h-0 ml-0 mt-0 pointer-events-none  ${animationClass}`}></span>
                            <a href="#"
                                className="inline-block bg-mediumTealGreen text-white font-medium text-base min-w-[120px] w-max text-center no-underline px-7 py-4 z-[100000]"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className="relative flex items-center justify-center gap-2 ">
                                    <PaperPlaneTilt width='18px' height='18px' fill='var(--white-color)' />
                                    Hire Me
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
