import React, { FC, useState } from 'react'
import Link from 'next/link'
import { Briefcase, Code, Envelope, House, ShoppingBag, User } from '@phosphor-icons/react'
import data from '../../../public/data/data.json'


// Create a mapping of icon strings to icon components
const iconMap = {
    "ph-house": House,
    "ph-user": User,
    "ph-code": Code,
    "ph-shopping-bag": ShoppingBag,
    "ph-briefcase": Briefcase,
    "ph-envelope": Envelope,
};

export const Header: FC = () => {

    const [isActive, setIsActive] = useState('Home');

    const handelActiveMenu = (link: any) => {
        setIsActive(link)
    }


    return (
        <header className='header-visibility:hidden w-full p-3 fixed z-[3] border-b-[1px] bg-slate-900 border-slate-600 shadow-headerBoxShadow'>
            <nav className="w-full ">
                <ul className='flex gap-1 items-center justify-between'>
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
                                    <span className='header-text:hidden'>{menu.name}</span>

                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
