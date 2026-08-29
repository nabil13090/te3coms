import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import Process from '@/components/sections/Process'
import { AGENCY, STATS } from '@/lib/data'

export const metadata: Metadata = {
  title: "L'agence | TE3COMS",
  description: 'TE3COMS — agence digitale spécialisée en sites web, SaaS, CRM et PWA.',
}

export default function AgencePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          index="05"
          eyebrow="L'agence"
          title="Une équipe digitale, une exigence constante."
          description={AGENCY.description}
        />

        <section className="section-padding bg-stone-100 border-b border-stone-200">
          <div className="container-wide grid md:grid-cols-3 border border-stone-200 bg-white">
            {AGENCY.values.map((value, i) => (
              <div key={value.title} className={`p-8 md:p-10 ${i < AGENCY.values.length - 1 ? 'md:border-r border-stone-200 border-b md:border-b-0' : ''}`}>
                <p className="font-mono text-xs text-stone-400 mb-3">0{i + 1}</p>
                <h2 className="font-display text-xl font-semibold mb-3">{value.title}</h2>
                <p className="text-sm text-stone-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 border-b border-stone-200 bg-white">
          <div className="container-wide grid grid-cols-2 md:grid-cols-4 border border-stone-200">
            {STATS.map((stat, i) => (
              <div key={stat.label} className={`p-6 text-center ${i < STATS.length - 1 ? 'border-r border-stone-200' : ''}`}>
                <p className="font-display text-3xl font-semibold tracking-tight mb-1">{stat.value}{stat.suffix}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <Process />

        <section className="section-padding bg-accent text-white">
          <div className="container-wide text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight mb-6">Collaborons.</h2>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 font-mono text-[11px] uppercase tracking-widest hover:bg-stone-100 transition-colors">
              Nous contacter
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
