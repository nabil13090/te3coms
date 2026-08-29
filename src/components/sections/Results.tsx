'use client'

import { useRef, useEffect, useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { RESULTS } from '@/lib/data'
import { easeOutQuart } from '@/lib/utils'
import { SectionHeader } from '@/components/ui/SectionParts'

const RESULT_COLORS = ['text-brand-amber', 'text-brand-sky', 'text-brand-coral', 'text-brand-violet']

function AnimatedCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    const duration = 1400
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      setCount(Math.round(easeOutQuart(t) * target))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isVisible, target])
  return <>{count}{suffix}</>
}

export default function Results() {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useScrollReveal(ref as React.RefObject<Element>)

  return (
    <section ref={ref} className="section-padding bg-stone-900 text-white border-b border-stone-800">
      <div className="container-wide">
        <SectionHeader
          index="05"
          eyebrow="Résultats"
          title="Ce que nos clients gagnent."
          description="Des métriques mesurées après refonte, lancement SaaS ou optimisation de parcours."
          dark
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-stone-700">
          {RESULTS.map((item, i) => (
            <div
              key={i}
              className={`p-8 bg-stone-900 hover:bg-accent/20 transition-colors ${i < RESULTS.length - 1 ? 'lg:border-r border-stone-700' : ''} ${i % 2 === 0 ? 'sm:border-r border-stone-700 sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r' : ''} border-b sm:border-b-0 lg:border-b-0 last:border-b-0`}
            >
              <p className={`font-display text-5xl md:text-6xl font-semibold tracking-tighter mb-3 ${RESULT_COLORS[i % RESULT_COLORS.length]}`}>
                +<AnimatedCounter target={item.value} suffix={item.suffix} isVisible={isVisible} />
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400 mb-3">{item.label}</p>
              <p className="text-sm text-stone-500 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
