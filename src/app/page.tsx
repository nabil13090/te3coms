import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import MarqueeBar from '@/components/ui/MarqueeBar'
import ExpertiseSection from '@/components/sections/ExpertiseSection'
import SeoSection from '@/components/sections/SeoSection'
import CaseStudy from '@/components/sections/CaseStudy'
import WorkflowPreview from '@/components/sections/WorkflowPreview'
import Portfolio from '@/components/sections/Portfolio'
import Values from '@/components/sections/Values'
import Results from '@/components/sections/Results'
import Testimonials from '@/components/sections/Testimonials'
import Faq from '@/components/sections/Faq'
import Cta from '@/components/sections/Cta'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBar />
        <ExpertiseSection />
        <SeoSection />
        <CaseStudy />
        <WorkflowPreview />
        <Portfolio />
        <Results />
        <Values />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
