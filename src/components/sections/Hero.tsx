'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'
import { HERO_OFFER, TESTIMONIALS, CLIENT_LOGOS } from '@/lib/data'

const STAT_BLOCKS = [
  { val: '20+', label: 'Projets livrés', className: 'bg-accent-light text-accent' },
  { val: '100%', label: 'Clients satisfaits', className: 'bg-white text-stone-900' },
  { val: '24h', label: 'Réponse garantie', className: 'bg-brand-cobalt text-white' },
  { val: '699€', label: 'Landing dès', className: 'bg-brand-amber text-stone-900' },
]

export default function Hero() {
  const featured = TESTIMONIALS[0]

  return (
    <section className="relative pt-[56px] md:pt-[64px] border-b border-stone-200 overflow-hidden bg-white">
      <div className="relative w-full">
        <div className="grid lg:grid-cols-12 border-b border-stone-200">
          <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 xl:p-14 lg:border-r border-stone-200 border-b lg:border-b-0 bg-white">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="tag-accent">Agence digitale · Marseille</span>
              <span className="flex items-center gap-1 text-sm text-stone-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" stroke="#F59E0B" />
                ))}
                <span className="ml-1 font-medium">5.0 · 20+ projets</span>
              </span>
            </div>

            <h1 className="heading-xl mb-8 max-w-5xl">
              Nous créons des sites &amp; outils digitaux qui{' '}
              <span className="text-accent">apportent des clients.</span>
            </h1>

            <p className="body-lg max-w-3xl mb-10">
              Sites web, landing pages, SaaS et CRM sur mesure — une équipe qui comprend
              votre métier et livre des produits rapides, crédibles et orientés résultats.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Link href="/contact" className="btn-primary">
                Discuter de mon projet
                <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
              <Link href="/realisations" className="btn-secondary">
                Voir les réalisations
              </Link>
            </div>

            <div className="border-l-4 border-accent bg-accent-light/50 p-6 md:p-8 max-w-2xl xl:max-w-3xl">
              <p className="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
                &ldquo;{featured.quote}&rdquo;
              </p>
              <p className="font-display font-semibold text-accent text-sm">{featured.author}</p>
              <p className="text-xs text-stone-500">{featured.role}</p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col lg:min-h-0">
            <Link
              href={HERO_OFFER.cta}
              className="group block p-6 md:p-8 xl:p-10 bg-gradient-to-br from-accent via-accent to-accent-bright text-white border-b border-accent-dark hover:from-accent-bright hover:to-brand-cobalt transition-all duration-300 shrink-0"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-200 mb-3">
                {HERO_OFFER.badge}
              </p>
              <p className="font-display text-xl md:text-2xl font-semibold mb-2">{HERO_OFFER.title}</p>
              <p className="text-blue-100 text-sm md:text-base mb-5">{HERO_OFFER.subtitle}</p>
              <div className="flex items-end gap-2 mb-5">
                <span className="font-display text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tighter leading-none text-brand-amber">
                  {HERO_OFFER.price}
                </span>
                <span className="text-2xl md:text-3xl font-display mb-1">{HERO_OFFER.currency}</span>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white group-hover:gap-3 transition-all">
                Voir l&apos;offre & le workflow
                <ArrowRight size={14} strokeWidth={1.5} />
              </span>
            </Link>

            <div className="relative aspect-[16/10] lg:aspect-auto lg:flex-1 lg:min-h-[240px] border-b lg:border-b-0 border-stone-200 overflow-hidden bg-stone-100">
              <Image
                src="/screenshots/electrotech13.png"
                alt="Exemple de réalisation TE3COMS — Electrotech 13"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-accent/95 px-6 py-4 md:px-8 md:py-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-amber-200 mb-1">
                  Dernière réalisation
                </p>
                <p className="font-display text-lg md:text-xl font-semibold text-white">Electrotech 13</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logos — fond uni, sans grille */}
        <div className="border-b border-stone-200 px-8 md:px-12 xl:px-20 py-6 bg-accent-light">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-4 text-center">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 xl:gap-x-16 gap-y-3">
            {CLIENT_LOGOS.map((name) => (
              <span
                key={name}
                className="font-display text-sm md:text-base font-semibold text-accent/80 uppercase tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-stone-200">
          {STAT_BLOCKS.map((item, i) => (
            <div
              key={item.label}
              className={`p-6 md:p-8 xl:p-10 text-center ${item.className} ${i < 3 ? 'border-r border-stone-200' : ''}`}
            >
              <p className="font-display text-2xl md:text-3xl xl:text-4xl font-semibold tracking-tight mb-1">
                {item.val}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
