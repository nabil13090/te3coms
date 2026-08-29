import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import { SERVICES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Services | TE3COMS',
  description: 'Création SaaS, sites web, CRM sur mesure, applications PWA et refonte de site.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          index="01"
          eyebrow="Services"
          title="Expertises digitales sur mesure."
          description="De la conception à la mise en production — une approche structurée pour chaque type de projet."
        />

        <section className="section-padding bg-stone-100 border-b border-stone-200">
          <div className="container-wide border border-stone-200 bg-white">
            {SERVICES.map((service, i) => (
              <article
                key={service.slug}
                className={`grid lg:grid-cols-12 ${i < SERVICES.length - 1 ? 'border-b border-stone-200' : ''}`}
              >
                <div className="lg:col-span-1 p-6 lg:p-8 lg:border-r border-stone-200 flex lg:justify-center">
                  <span className="font-mono text-sm text-stone-400">{service.num}</span>
                </div>
                <div className="lg:col-span-5 p-6 lg:p-8 lg:border-r border-stone-200 border-t lg:border-t-0 border-stone-200">
                  <h2 className="font-display text-2xl font-semibold tracking-tight mb-4">{service.title}</h2>
                  <p className="text-stone-500 leading-relaxed">{service.desc}</p>
                </div>
                <div className="lg:col-span-4 p-6 lg:p-8 lg:border-r border-stone-200 border-t lg:border-t-0 border-stone-200">
                  <ul className="space-y-3">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-stone-500">
                        <span className="w-1.5 h-1.5 bg-stone-900 mt-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-2 p-6 lg:p-8 border-t lg:border-t-0 border-stone-200 flex flex-col justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <Link href={`/services/${service.slug}`} className="font-mono text-[10px] uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1 w-fit hover:text-accent hover:border-accent transition-colors">
                    Détails →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
