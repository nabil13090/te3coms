'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { MARKETPLACE_PROJECTS } from '@/lib/marketplace-data'
import { ArrowLink, SectionHeader } from '@/components/ui/SectionParts'
import DeviceMockupImage from '@/components/ui/DeviceMockupImage'

export default function Portfolio() {
  const featured = MARKETPLACE_PROJECTS.find((p) => p.slug === 'electrotech-13') ?? MARKETPLACE_PROJECTS[0]
  const rest = MARKETPLACE_PROJECTS.filter((p) => p.slug !== featured.slug).slice(0, 4)

  return (
    <section id="realisations" className="section-padding bg-blue-50/40 border-b border-stone-200">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeader
            index="06"
            eyebrow="Réalisations"
            title="Projets clients, résultats concrets."
            description="WordPress, Next.js, React, Node.js — chaque projet avec son stack, ses pages et un délai adapté. Découvrez le détail de chaque livraison."
          />
          <ArrowLink href="/realisations">Portfolio complet</ArrowLink>
        </div>

        <div className="grid lg:grid-cols-12 border border-stone-200 mt-4 bg-white">
          <div className="lg:col-span-7 lg:border-r border-stone-200 border-b lg:border-b-0">
            <div className="p-6 md:p-10 lg:p-12 bg-white border-b border-stone-200">
              {(featured.mockupImage ?? featured.screenshot) && (
                <DeviceMockupImage
                  src={featured.mockupImage ?? featured.screenshot!}
                  alt={featured.name}
                  title={featured.name}
                  subtitle={featured.category}
                  href={`/marketplace/${featured.slug}`}
                />
              )}
            </div>
            <Link
              href={`/marketplace/${featured.slug}`}
              className="group block p-6 md:p-8 hover:bg-stone-50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="tag-accent">{featured.category}</span>
                    <span className="tag">{featured.deliveryTime}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 group-hover:text-accent transition-colors">
                    {featured.name}
                  </h3>
                </div>
                <span className="shrink-0 w-10 h-10 border border-accent/30 bg-accent-light flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </span>
              </div>
              <p className="text-sm text-stone-500 mb-4 leading-relaxed">{featured.fullDesc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {featured.stack.slice(0, 5).map((tag) => (
                  <span key={tag} className="tag bg-stone-50 text-xs">{tag}</span>
                ))}
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                {featured.pages.length} pages · Fiche projet complète →
              </p>
            </Link>
          </div>

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
                    {project.category} · {project.deliveryTime}
                  </p>
                  <h3 className="font-display text-base font-semibold text-stone-900 truncate group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-1 mt-1">{project.shortDesc}</p>
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
