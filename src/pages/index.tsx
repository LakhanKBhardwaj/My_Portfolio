
import { Header } from '@/components/Header'
import { About } from '@/components/About'
import { Sidebar } from '@/components/Sidebar'
import { Skills } from '@/components/Skills'




export default function Home() {
  

 

  return (
    <main className='bg-slate-900 flex gap-6'>
      <Sidebar />
      <div className='main-containt w-full'>
        <Header />
        {/* <HomeContent /> */}
        <About />
        <Skills />
      </div>
    </main>
  )
}
