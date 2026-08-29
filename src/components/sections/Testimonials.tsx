'use client'

import { TESTIMONIALS } from '@/lib/data'
import { Star } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionParts'

const CARD_ACCENTS = ['border-t-accent', 'border-t-brand-amber', 'border-t-brand-cobalt']

export default function Testimonials() {
  return (
    <section className="section-padding bg-white border-b border-stone-200">
      <div className="container-wide">
        <SectionHeader
          index="05"
          eyebrow="Témoignages"
          title="Ils nous font confiance."
          description="+20 entreprises et indépendants accompagnés sur leurs projets digitaux."
          align="center"
        />

        <div className="grid md:grid-cols-3 border border-stone-200 bg-white">
          {TESTIMONIALS.map((item, i) => (
            <blockquote
              key={i}
              className={`p-8 md:p-10 flex flex-col border-t-4 ${CARD_ACCENTS[i % CARD_ACCENTS.length]} ${
                i < TESTIMONIALS.length - 1 ? 'md:border-r border-stone-200 border-b md:border-b-0' : ''
              }`}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(item.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="#F59E0B" stroke="#F59E0B" />
                ))}
              </div>
              <p className="text-stone-700 leading-relaxed mb-8 flex-1 text-[15px]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="border-t border-stone-200 pt-6">
                <p className="font-display font-semibold text-accent">{item.author}</p>
                <p className="text-sm text-stone-500 mt-1">{item.role}</p>
                <p className="tag-accent mt-3">{item.type}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
