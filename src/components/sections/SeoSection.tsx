import Link from 'next/link'
import { ArrowRight, Search, TrendingUp, MapPin, FileText } from 'lucide-react'
import { SEO_OFFER } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionParts'

const ICONS = [Search, TrendingUp, MapPin, FileText]

export default function SeoSection() {
  return (
    <section id="seo" className="section-padding bg-white border-b border-stone-200">
      <div className="container-wide">
        <SectionHeader
          index="02"
          eyebrow="Référencement SEO"
          title="Soyez visible sur Google. Attirez des clients qualifiés."
          description={SEO_OFFER.intro}
        />

        <div className="grid lg:grid-cols-12 border border-stone-200 mb-8">
          <div className="lg:col-span-5 p-8 md:p-10 bg-gradient-to-br from-accent to-accent-bright text-white lg:border-r border-stone-200 border-b lg:border-b-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-200 mb-4">
              {SEO_OFFER.badge}
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              {SEO_OFFER.headline}
            </h3>
            <p className="text-blue-100 leading-relaxed mb-8">{SEO_OFFER.description}</p>

            <ul className="space-y-3 mb-8">
              {SEO_OFFER.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                  <span className="text-brand-amber mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/services/referencement-seo" className="btn-outline-light">
              Découvrir l&apos;offre SEO
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2">
            {SEO_OFFER.pillars.map((pillar, i) => {
              const Icon = ICONS[i % ICONS.length]
              return (
                <div
                  key={pillar.title}
                  className={`p-6 md:p-8 border-stone-200 border-b last:border-b-0 sm:border-b-0 sm:odd:border-r ${
                    i < 2 ? 'sm:border-b' : ''
                  } hover:bg-accent-light/30 transition-colors`}
                >
                  <div className="w-10 h-10 bg-accent-light text-accent flex items-center justify-center mb-4">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-stone-900 mb-2">{pillar.title}</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">{pillar.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 border border-stone-200 bg-accent-light/30">
          {SEO_OFFER.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-6 md:p-8 text-center ${i < SEO_OFFER.stats.length - 1 ? 'md:border-r border-stone-200 border-b md:border-b-0' : ''}`}
            >
              <p className="font-display text-3xl md:text-4xl font-semibold text-accent mb-1">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
