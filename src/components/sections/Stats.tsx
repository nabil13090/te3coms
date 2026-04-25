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
    <section
      ref={ref}
      className="relative z-10 px-6 py-20"
      style={{
        borderTop: '1px solid rgba(34,197,94,0.22)',
        borderBottom: '1px solid rgba(34,197,94,0.22)',
        backgroundImage: "url('/screenshots/fond.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(22,163,74,0.18), rgba(255,255,255,0.86))',
          zIndex: 0,
        }}
      />
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="relative z-10 flex flex-col items-center justify-center py-8 px-4 text-center"
            style={{
              borderRight: i < STATS.length - 1 ? '1px solid rgba(34,197,94,0.12)' : 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                color: '#ffffff',
                textShadow: '0 2px 10px rgba(0,0,0,0.35)',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
            </div>
            <div
              style={{
                width: '20px',
                height: '1px',
                background: '#ffffff',
                margin: '0.6rem auto',
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#ffffff',
                fontWeight: 700,
                textShadow: '0 2px 8px rgba(0,0,0,0.35)',
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
