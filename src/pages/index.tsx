
import { Header } from '@/components/pages/Header'
import { About } from '@/components/pages/About'
import { Sidebar } from '@/components/pages/Sidebar'
import { Skills } from '@/components/pages/Skills'
import { Projects } from '@/components/pages/Projects'




export default function Home() {
  

 

  return (
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
  )
}
