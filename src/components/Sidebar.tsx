import Image from 'next/image'
import React, { FC } from 'react'
import ProfilePic from '../../public/Images/LakhanLogo.png'

export const Sidebar : FC = () => {
  return (
    <div className='w-[300px] h-full fixed z-[999] top-0 left-0 transition-all ease-in-out'>
        <div className='overflow-y-auto w-full h-full '>
            <div className='flex flex-col gap-6 justify-between py-10 px-5 h-full bg-slate-700'>
                <div className='siderbar-profile'>
                    <div className='relative'>
                        <div className='w-[80%] h-[80%] m-auto rounded-[50%] bg-mediumTealGreen flex justify-center overflow-hidden'>
                            <Image src={ProfilePic} width={120} alt='My Profile Pic' />
                        </div>
                        <span className='w-[32px] h-[32px] flex justify-center items-center rounded-[50%] bg-charcoal absolute top-[80px] right-[80px]'>👋</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
