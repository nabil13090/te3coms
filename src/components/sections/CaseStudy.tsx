import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { CASE_STUDY } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionParts'

export default function CaseStudy() {
  return (
    <section className="section-padding bg-accent-light/40 border-b border-stone-200">
      <div className="container-wide">
        <SectionHeader
          index="03"
          eyebrow="Étude de cas"
          title={`Comment nous avons accompagné ${CASE_STUDY.client}`}
          description={CASE_STUDY.summary}
        />

        <div className="grid lg:grid-cols-2 border border-stone-200 bg-white">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] border-b lg:border-b-0 lg:border-r border-stone-200 overflow-hidden">
            <Image
              src={CASE_STUDY.image}
              alt={CASE_STUDY.client}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="tag-accent mb-4 w-fit">{CASE_STUDY.sector}</p>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-stone-900 mb-8">
              {CASE_STUDY.title}
            </h3>

            <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200 mb-8">
              {CASE_STUDY.metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`p-5 text-center ${i % 2 === 0 ? 'bg-accent-light' : 'bg-amber-50'}`}
                >
                  <p className={`font-display text-3xl font-semibold ${i % 2 === 0 ? 'text-accent' : 'text-brand-amber'}`}>
                    {m.value}
                    <span className="text-lg">{m.suffix}</span>
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-stone-500 mt-1">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={CASE_STUDY.url}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Voir le site live
                <ExternalLink size={14} />
              </a>
              <Link href="/realisations" className="btn-secondary">
                Plus de réalisations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
