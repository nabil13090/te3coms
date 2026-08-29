import Link from 'next/link'
import { AGENCY } from '@/lib/data'
import { GeoSectionAccent } from '@/components/ui/GeoShapes'
import { SectionHeader } from '@/components/ui/SectionParts'

export default function AgencySection() {
  return (
    <section className="section-padding bg-stone-100 border-b border-stone-200">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 border border-stone-200 bg-white">
          <div className="p-8 md:p-12 lg:border-r border-stone-200">
            <SectionHeader
              index="05"
              eyebrow="L'agence"
              title={AGENCY.title}
              description={AGENCY.description}
            />
            <GeoSectionAccent className="mb-8" />
            <Link href="/agence" className="btn-secondary">
              En savoir plus
            </Link>
          </div>

          <div className="grid grid-rows-3">
            {AGENCY.values.map((value, i) => (
              <div
                key={value.title}
                className={`p-8 md:p-10 ${i < AGENCY.values.length - 1 ? 'border-b border-stone-200' : ''}`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">
                  0{i + 1}
                </p>
                <h3 className="font-display text-xl font-semibold tracking-tight mb-2">{value.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
