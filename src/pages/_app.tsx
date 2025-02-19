import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@/styles/Preloaded.css'
import '@/styles/custom.css';


export default function App({ Component, pageProps }: AppProps) {

  
  
  return (
    <>
     
        <Component {...pageProps} />
     
    </>
  )
}
