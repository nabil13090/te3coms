import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { CASE_STUDY } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionParts'
import DeviceMockupImage from '@/components/ui/DeviceMockupImage'

function TechBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-2">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="tag bg-stone-50 text-xs">{item}</span>
        ))}
      </div>
    </div>
  )
}

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

        <div className="grid lg:grid-cols-2 border border-stone-200 bg-white mb-8">
          <div className="p-6 md:p-10 lg:p-12 flex items-center justify-center bg-white border-b lg:border-b-0 lg:border-r border-stone-200 min-h-[360px]">
            <DeviceMockupImage
              src={CASE_STUDY.mockupImage}
              alt={CASE_STUDY.client}
              title={CASE_STUDY.client}
              subtitle={CASE_STUDY.sector}
              href={CASE_STUDY.url}
            />
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="tag-accent mb-4 w-fit">{CASE_STUDY.sector}</p>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-stone-900 mb-4">
              {CASE_STUDY.title}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-6">{CASE_STUDY.context}</p>

            <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200 mb-6">
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
              <a href={CASE_STUDY.url} target="_blank" rel="noreferrer" className="btn-primary">
                Voir le site live
                <ExternalLink size={14} />
              </a>
              <Link href={`/marketplace/${CASE_STUDY.slug}`} className="btn-secondary">
                Fiche projet complète
              </Link>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 border border-stone-200 bg-white">
          <div className="p-8 lg:border-r border-stone-200 border-b lg:border-b-0">
            <p className="eyebrow mb-3">Le défi</p>
            <p className="text-sm text-stone-600 leading-relaxed">{CASE_STUDY.challenge}</p>
          </div>
          <div className="p-8 lg:border-r border-stone-200 border-b lg:border-b-0 bg-accent-light/30">
            <p className="eyebrow mb-3">Notre solution</p>
            <p className="text-sm text-stone-600 leading-relaxed">{CASE_STUDY.solution}</p>
          </div>
          <div className="p-8">
            <p className="eyebrow mb-3">Pages livrées ({CASE_STUDY.pages.length})</p>
            <ul className="space-y-1.5">
              {CASE_STUDY.pages.map((page) => (
                <li key={page} className="text-sm text-stone-600 flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent shrink-0" />
                  {page}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 border border-t-0 border-stone-200 bg-white">
          <div className="p-8 md:border-r border-stone-200 border-b md:border-b-0">
            <p className="eyebrow mb-4">Fonctionnalités clés</p>
            <ul className="space-y-2">
              {CASE_STUDY.features.map((f) => (
                <li key={f} className="text-sm text-stone-600 flex items-start gap-2">
                  <span className="text-accent mt-0.5">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-stone-50 space-y-5">
            <p className="eyebrow">Stack technique</p>
            <TechBlock label="Front-end" items={CASE_STUDY.techStack.frontend} />
            <TechBlock label="Back-end" items={CASE_STUDY.techStack.backend} />
            <TechBlock label="Outils" items={CASE_STUDY.techStack.tools} />
          </div>
        </div>
      </div>
    </section>
  )
}
