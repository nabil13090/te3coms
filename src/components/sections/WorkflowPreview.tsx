import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { WORKFLOW_STEPS } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionParts'

const STEP_COLORS = [
  'bg-brand-cobalt',
  'bg-brand-amber',
  'bg-brand-sky',
  'bg-brand-violet',
]

export default function WorkflowPreview() {
  const preview = WORKFLOW_STEPS.slice(0, 4)

  return (
    <section className="section-padding bg-gradient-to-br from-accent-dark via-accent to-accent-bright text-white border-b border-accent-dark">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <SectionHeader
            index="04"
            eyebrow="Notre méthode"
            title="4 étapes simples. Zéro surprise."
            description="Un processus clair du brief à la mise en ligne — le même pour une landing à 699 € ou un SaaS complet."
            dark
          />
          <Link href="/workflow" className="btn-outline-light shrink-0">
            Voir le workflow complet
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-white/20">
          {preview.map((step, i) => (
            <div
              key={step.num}
              className={`p-6 md:p-8 bg-white/5 hover:bg-white/10 transition-colors ${i < preview.length - 1 ? 'lg:border-r border-white/20' : ''} ${
                i < 2 ? 'md:border-b lg:border-b-0 border-white/20' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-8 h-8 ${STEP_COLORS[i]} text-white font-mono text-xs flex items-center justify-center font-semibold`}>
                  {step.num}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-amber-200">{step.duration}</span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-blue-100 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
