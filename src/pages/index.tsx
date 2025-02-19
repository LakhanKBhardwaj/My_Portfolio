import React, { useState } from 'react'
import { Header } from '@/components/shared/Header'
import { About } from '@/components/pages/AboutSection/About'
import { Sidebar } from '@/components/shared/Sidebar'
import { Skills } from '@/components/pages/AboutSection/Skills'
import { Projects } from '@/components/pages/AboutSection/Projects'
import { Preloader } from '@/components/shared/Preloader'



export default function Home() {

  const [isEffectActive, setIsEffectActive] = useState(true);

  const handleEffectFinish = () => {
    setIsEffectActive(false); // Hide the effect
  };
  return (
    <>
      {isEffectActive && <Preloader onFinish={handleEffectFinish} />}
      <div
        className={`transition-opacity duration-700 ${isEffectActive ? 'opacity-0.2' : 'opacity-100'
          }`}
      >
        <main className='bg-slate-900 flex gap-6'>
          <Sidebar />
          <div className='main-containt w-full'>
            <Header />
            {/* <HomeContent /> */}
            <About />
            <Skills />
            <Projects />
          </div>
        </main>
      </div>
    </>
  )
}

