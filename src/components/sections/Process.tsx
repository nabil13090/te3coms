'use client'

import { PROCESS } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionParts'

export default function Process() {
  return (
    <section id="processus" className="section-padding bg-white border-b border-stone-200">
      <div className="container-wide">
        <SectionHeader
          index="04"
          eyebrow="Méthode"
          title="Quatre étapes, zéro improvisation."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-stone-200">
          {PROCESS.map((step, i) => (
            <div
              key={i}
              className={`p-8 ${i < PROCESS.length - 1 ? 'lg:border-r border-stone-200' : ''} ${i < 2 ? 'md:border-b lg:border-b-0 border-stone-200' : ''}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 bg-stone-900 text-white font-mono text-xs flex items-center justify-center">
                  {step.num}
                </span>
                <span className="h-px flex-1 bg-stone-200" />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-stone-900 mb-3 uppercase">
                {step.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
