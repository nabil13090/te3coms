import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionParts'

const SERVICE_TINTS = [
  { border: 'border-t-accent', bg: 'bg-accent-light/50', hover: 'hover:bg-accent-light' },
  { border: 'border-t-brand-cobalt', bg: 'bg-blue-50', hover: 'hover:bg-blue-100' },
  { border: 'border-t-brand-amber', bg: 'bg-amber-50', hover: 'hover:bg-amber-100' },
  { border: 'border-t-brand-violet', bg: 'bg-violet-50', hover: 'hover:bg-violet-100' },
  { border: 'border-t-brand-coral', bg: 'bg-orange-50', hover: 'hover:bg-orange-100' },
  { border: 'border-t-brand-sky', bg: 'bg-sky-50', hover: 'hover:bg-sky-100' },
]

export default function ExpertiseSection() {
  return (
    <section id="services" className="section-padding bg-white border-b border-stone-200">
      <div className="container-wide">
        <SectionHeader
          index="01"
          eyebrow="Expertises"
          title="Tout ce qu'il faut pour faire du digital un vrai levier."
          description="Nous ne livrons pas « juste un site ». Nous construisons des outils qui travaillent pour vous : visibilité, crédibilité, automatisation et conversion."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-stone-200">
          {SERVICES.map((service, i) => {
            const tint = SERVICE_TINTS[i % SERVICE_TINTS.length]
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group p-8 border-t-4 ${tint.border} ${tint.bg} ${tint.hover} transition-colors ${
                  i < SERVICES.length - 1 ? 'border-b md:border-b-0 border-stone-200' : ''
                } ${i % 3 !== 2 ? 'lg:border-r border-stone-200' : ''} ${
                  i < 3 ? 'md:border-b lg:border-b-0 border-stone-200' : ''
                }`}
              >
                <p className="font-mono text-xs text-accent mb-4">{service.num}</p>
                <h3 className="font-display text-xl font-semibold text-stone-900 mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">{service.longDesc}</p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-stone-500">
                      <span className="text-brand-cobalt mt-0.5 font-bold">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent border-b border-accent pb-0.5 inline-flex items-center gap-2 group-hover:text-brand-cobalt group-hover:border-brand-cobalt transition-colors">
                  En savoir plus <ArrowRight size={12} />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <Link href="/services" className="btn-secondary">
            Toutes nos expertises
          </Link>
        </div>
      </div>
    </section>
  )
}
