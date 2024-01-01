import Image from 'next/image'
import Hero from './components/hero/HeroSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-24 sm:px-1 sm:py-12">
      <div className="flex z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
       <Hero/>
       
      </div>
    </main>
  )
}
