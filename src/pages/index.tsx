import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { HomeContent } from '@/components/HomeContent'
import { About } from '@/components/About'
import { Preloader } from '@/components/Preloader'
import { useEffect, useState } from 'react'




export default function Home() {
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Trigger the animation on mount
    const timer = setTimeout(() => {
      setAnimateOut(true); // Start the split animation
      setTimeout(() => 1000); // Finish after animation completes
    }, 500); // Delay before the animation starts (optional)

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='bg-slate-900 '>
 
      <Header />
      <HomeContent />
      <About />
    </main>
  )
}
