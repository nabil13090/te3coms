'use client'

import Link from 'next/link'
import { SERVICES } from '@/lib/data'
import { ArrowLink, SectionHeader } from '@/components/ui/SectionParts'

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white border-b border-stone-200">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-0">
          <SectionHeader
            index="01"
            eyebrow="Services"
            title="Cinq expertises, une seule exigence."
            description="Chaque projet est traité avec la même rigueur — que ce soit un site vitrine ou une plateforme SaaS complète."
          />
          <ArrowLink href="/services">Tous les services</ArrowLink>
        </div>

        <div className="border border-stone-200 mt-4">
          {SERVICES.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group grid md:grid-cols-12 items-center gap-4 md:gap-0 p-6 md:p-0 hover:bg-stone-50 transition-colors ${
                i < SERVICES.length - 1 ? 'border-b border-stone-200' : ''
              }`}
            >
              <div className="md:col-span-1 md:border-r border-stone-200 md:p-8 flex md:justify-center">
                <span className="font-mono text-sm text-stone-400 group-hover:text-stone-900 transition-colors">
                  {service.num}
                </span>
              </div>
              <div className="md:col-span-4 md:border-r border-stone-200 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-stone-900 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-5 md:border-r border-stone-200 md:p-8">
                <p className="text-sm text-stone-500 leading-relaxed">{service.shortDesc}</p>
              </div>
              <div className="md:col-span-2 md:p-8 flex md:justify-end">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400 group-hover:text-stone-900 transition-colors">
                  Détails →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
