'use client'

import { useRef, useEffect, useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { STATS } from '@/lib/data'
import { easeOutQuart } from '@/lib/utils'

function AnimatedCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    const duration = 1600
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

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useScrollReveal(ref as React.RefObject<Element>)

  return (
    <section ref={ref} className="py-14 border-y border-stone-200 bg-white">
      <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="font-display text-4xl md:text-5xl font-semibold text-stone-900 mb-2">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
