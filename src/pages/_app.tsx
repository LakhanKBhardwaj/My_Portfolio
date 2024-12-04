import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { Preloader } from '@/components/Preloader'

export default function App({ Component, pageProps }: AppProps) {

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
        <Component {...pageProps} />
      </div>
      {/* <Component {...pageProps} /> */}
    </>
  )
}
