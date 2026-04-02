import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Process from '@/components/sections/Process'
import Cta from '@/components/sections/Cta'
import MarqueeBar from '@/components/ui/MarqueeBar'
import CustomCursor from '@/components/ui/CustomCursor'
import Loader from '@/components/ui/Loader'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBar />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
