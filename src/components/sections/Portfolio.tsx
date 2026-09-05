'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { MARKETPLACE_PROJECTS } from '@/lib/marketplace-data'
import { ArrowLink, SectionHeader } from '@/components/ui/SectionParts'

export default function Portfolio() {
  const projects = MARKETPLACE_PROJECTS

  return (
    <section id="realisations" className="section-padding bg-blue-50/40 border-b border-stone-200">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <SectionHeader
            index="02"
            eyebrow="Réalisations"
            title="Tous nos projets, en un coup d'œil."
            description={`${projects.length} sites livrés — grille visuelle type feed. Cliquez une carte pour la fiche complète ou la démo live.`}
          />
          <ArrowLink href="/realisations">Vue liste & filtres</ArrowLink>
        </div>

        {/* Grille Instagram — tous les projets */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1.5 md:gap-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group relative aspect-square overflow-hidden bg-stone-200 border border-stone-200"
            >
              {project.screenshot ? (
                <Image
                  src={project.screenshot}
                  alt={project.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(145deg, ${project.accentColor}44, ${project.accentColor})` }}
                />
              )}

              {/* Overlay permanent léger + hover riche */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

              {/* Contenu bas — toujours visible mobile, hover desktop */}
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300">
                <p
                  className="font-mono text-[9px] uppercase tracking-[0.16em] mb-1 truncate"
                  style={{ color: project.accentColor }}
                >
                  {project.category}
                </p>
                <h3 className="font-display text-sm md:text-base font-semibold text-white leading-snug line-clamp-2 mb-2">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-1.5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={`/marketplace/${project.slug}`}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white text-stone-900 font-mono text-[9px] uppercase tracking-widest hover:bg-accent hover:text-white transition-colors"
                  >
                    Fiche
                    <ArrowUpRight size={10} />
                  </Link>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 border border-white/50 text-white font-mono text-[9px] uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-colors"
                  >
                    Live
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>

              {/* Pastille délai coin */}
              <span className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-sm text-white font-mono text-[8px] uppercase tracking-wider opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                {project.deliveryTime}
              </span>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border border-stone-200 bg-white p-5 md:p-6">
          <p className="text-sm text-stone-600">
            <span className="font-display font-semibold text-stone-900">{projects.length} projets</span>
            {' '}— WordPress, Next.js, React, Node.js, HTML / CSS / JS.
          </p>
          <Link href="/realisations" className="btn-secondary">
            Explorer le portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
