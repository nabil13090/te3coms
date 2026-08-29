import { EXPERTISE_PILLARS } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionParts'

const PILLAR_COLORS = [
  { icon: 'bg-accent-light text-accent', border: 'border-accent/20' },
  { icon: 'bg-amber-50 text-brand-amber', border: 'border-brand-amber/30' },
  { icon: 'bg-blue-50 text-brand-cobalt', border: 'border-brand-cobalt/30' },
]

export default function Values() {
  return (
    <section className="section-padding bg-accent-light/30 border-b border-stone-200">
      <div className="container-wide">
        <SectionHeader
          index="04"
          eyebrow="Pourquoi TE3COMS"
          title="Un partenaire fiable, pas un prestataire jetable."
          description="Nous mettons notre expertise technique au service de vos objectifs business — avec transparence et exigence."
          align="center"
        />

        <div className="grid md:grid-cols-3 border border-stone-200 bg-white">
          {EXPERTISE_PILLARS.map((pillar, i) => {
            const colors = PILLAR_COLORS[i % PILLAR_COLORS.length]
            return (
              <div
                key={pillar.title}
                className={`p-8 md:p-10 text-center ${colors.border} ${i < EXPERTISE_PILLARS.length - 1 ? 'md:border-r border-stone-200 border-b md:border-b-0' : ''}`}
              >
                <span className={`inline-flex items-center justify-center w-14 h-14 text-2xl mb-4 ${colors.icon}`}>
                  {pillar.icon}
                </span>
                <h3 className="font-display text-lg font-semibold text-stone-900 mb-3">{pillar.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{pillar.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
