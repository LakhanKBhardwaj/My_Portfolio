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
      <div className="py-28 bg-slate-900 w-full h-80">
      <div className="text-white p-10  mx-auto ">
        <div data-aos="zoom-in-left" className=''>

        </div>
      </div>
      </div>
      
    </section>
    </>

  )
}
