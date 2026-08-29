'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { FAQ } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionParts'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding bg-accent-light/20 border-b border-stone-200">
      <div className="container-wide max-w-5xl">
        <SectionHeader
          index="07"
          eyebrow="FAQ"
          title="Questions fréquentes."
          align="center"
        />

        <div className="border border-stone-200 bg-white">
          {FAQ.map((item, i) => (
            <div key={i} className={i < FAQ.length - 1 ? 'border-b border-stone-200' : ''}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full flex items-start justify-between gap-6 p-6 md:p-8 text-left transition-colors ${
                  openIndex === i ? 'bg-accent-light/60' : 'hover:bg-accent-light/30'
                }`}
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-stone-400 mb-2">
                    {item.category}
                  </p>
                  <span className="font-display text-base md:text-lg font-semibold text-stone-900">
                    {item.question}
                  </span>
                </div>
                <span className={`shrink-0 w-8 h-8 border flex items-center justify-center mt-1 ${
                  openIndex === i ? 'border-accent bg-accent text-white' : 'border-accent/30 text-accent'
                }`}>
                  {openIndex === i ? (
                    <Minus size={14} strokeWidth={1.5} />
                  ) : (
                    <Plus size={14} strokeWidth={1.5} />
                  )}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 text-sm text-stone-500 leading-relaxed border-t border-stone-100 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
