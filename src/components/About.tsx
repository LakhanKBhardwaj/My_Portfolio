import React, { FC, useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

export const About : FC = () => {
   
      useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
      }, []);


  return (
    <>
    <section id={'about'}>
      <div className="py-10 w-full h-80">
      <div className="text-white p-10  mx-auto ">
        <div data-aos="zoom-in" className=''>
          <div className='border-l-[6px]'>
            <h1 className='max-sm:text-6xl sm:text-6xl lg:text-7xl font-extrabold ml-2'>What I Do</h1>
          </div>
        </div>
      </div>
      </div>
      
    </section>
    </>

  )
}
