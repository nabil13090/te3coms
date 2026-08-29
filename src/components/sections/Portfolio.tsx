'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { MARKETPLACE_PROJECTS } from '@/lib/marketplace-data'
import { ArrowLink, SectionHeader } from '@/components/ui/SectionParts'

export default function Portfolio() {
  const [featured, ...rest] = MARKETPLACE_PROJECTS.slice(0, 5)

  return (
    <section id="realisations" className="section-padding bg-blue-50/40 border-b border-stone-200">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeader
          index="06"
          eyebrow="Réalisations"
            title="Projets clients, résultats concrets."
            description="Sites, marketplaces, SaaS et outils métier — une sélection de nos livraisons récentes."
          />
          <ArrowLink href="/realisations">Portfolio complet</ArrowLink>
        </div>

        <div className="grid lg:grid-cols-12 border border-stone-200 mt-4 bg-white">
          {/* Projet principal */}
          {featured && (
            <Link
              href={`/marketplace/${featured.slug}`}
              className="group lg:col-span-7 lg:border-r border-stone-200 border-b lg:border-b-0"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-stone-200">
                {featured.screenshot && (
                  <Image
                    src={featured.screenshot}
                    alt={featured.name}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                )}
              </div>
              <div className="p-6 md:p-8 flex items-start justify-between gap-4">
                <div>
                  <p className="tag-accent mb-3">{featured.category}</p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-stone-900">
                    {featured.name}
                  </h3>
                  <p className="text-sm text-stone-500 mt-3 max-w-md leading-relaxed">{featured.shortDesc}</p>
                </div>
                <span className="shrink-0 w-10 h-10 border border-accent/30 bg-accent-light flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          )}

          {/* Projets secondaires */}
          <div className="lg:col-span-5 grid grid-rows-4">
            {rest.map((project, i) => (
              <Link
                key={project.slug}
                href={`/marketplace/${project.slug}`}
                className={`group flex gap-4 p-5 md:p-6 hover:bg-stone-50 transition-colors ${
                  i < rest.length - 1 ? 'border-b border-stone-200' : ''
                }`}
              >
                <div className="relative w-20 h-16 shrink-0 border border-stone-200 overflow-hidden bg-stone-100">
                  {project.screenshot && (
                    <Image
                      src={project.screenshot}
                      alt={project.name}
                      fill
                      className="object-cover object-top"
                      sizes="80px"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-stone-400 mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-display text-base font-semibold text-stone-900 truncate group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                </div>
                <ArrowUpRight size={16} className="shrink-0 text-stone-300 group-hover:text-stone-900 mt-1" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
