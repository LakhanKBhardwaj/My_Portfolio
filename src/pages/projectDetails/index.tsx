import React, { useState } from 'react'
import { NextPage } from 'next';
import { Header } from '@/components/shared/Header'
import { Sidebar } from '@/components/shared/Sidebar'
import { Preloader } from '@/components/shared/Preloader'




const ProjectDetails: NextPage = () => {
    const [isEffectActive, setIsEffectActive] = useState(true);

    const handleEffectFinish = () => {
      setIsEffectActive(false); // Hide the effect
    };
  return (
    <>
    {isEffectActive && <Preloader onFinish={handleEffectFinish} />}
    <div
        className={`transition-opacity duration-700 ${
          isEffectActive ? 'opacity-0.2' : 'opacity-100'
        }`}
      >
    <main className='bg-slate-900 flex gap-6'>
      <Sidebar />
      <div className='main-containt w-full'>
        <Header />
        
      </div>
    </main>
    </div>
    </>
  )
};

export default ProjectDetails;
