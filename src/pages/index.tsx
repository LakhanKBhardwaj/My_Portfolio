import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { HomeContent } from '@/components/HomeContent'



export default function Home() {

  return (
    <main>
      <Header />
      <HomeContent />
    </main>
  )
}
