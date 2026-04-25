'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.23, 1, 0.32, 1] },
})

function useMagnetic() {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * 0.16
    const dy = (e.clientY - cy) * 0.16
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
}

export default function Hero() {
  const btn1 = useMagnetic()
  const btn2 = useMagnetic()

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] md:min-h-screen px-4 md:px-6 overflow-hidden"
      style={{ paddingTop: '88px', paddingBottom: '22px' }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/screenshots/TE3coms.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(180deg, rgba(2,6,23,0.12) 0%, rgba(2,6,23,0.2) 45%, rgba(2,6,23,0.48) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto min-h-[calc(88vh-110px)] md:h-[calc(100vh-128px)] flex flex-col justify-between">
        <motion.div {...fadeUp(0.2)} className="pt-5 md:pt-8 max-w-2xl">
          <p
            style={{
              fontFamily: 'var(--font-exo)',
              fontSize: 'clamp(0.95rem, 3.7vw, 1.25rem)',
              lineHeight: 1.6,
              fontWeight: 700,
              color: '#ffffff',
              textShadow: '0 2px 12px rgba(0,0,0,0.45)',
            }}
          >
            Nous concevons des expériences digitales qui propulsent votre business. Sites, SaaS,
            CRM — tout sur mesure, tout performant.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.35)}
          className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 md:gap-6 pb-4 md:pb-6"
        >
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: 'clamp(1.55rem, 8.2vw, 5rem)',
                fontWeight: 900,
                lineHeight: 1.04,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                textShadow: '0 4px 18px rgba(0,0,0,0.55)',
              }}
            >
              <span style={{ display: 'block' }}>
                Solutions <span style={{ color: '#22c55e' }}>Numériques</span>
              </span>
              <span style={{ display: 'block' }}>Sur Mesure</span>
            </h1>
          </div>

          <div className="flex flex-col gap-2.5 md:gap-3 w-full sm:w-auto sm:min-w-[255px]">
            <a
              ref={btn1.ref}
              onMouseMove={btn1.onMouseMove}
              onMouseLeave={btn1.onMouseLeave}
              href="#realisations"
              className="btn-magnetic px-6 md:px-8 py-3.5 md:py-4"
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.66rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 700,
                textAlign: 'center',
                background: '#16a34a',
                color: '#ffffff',
                textDecoration: 'none',
                display: 'inline-block',
                width: '100%',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#15803d')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#16a34a')}
            >
              Voir nos réalisations
            </a>

            <a
              ref={btn2.ref}
              onMouseMove={btn2.onMouseMove}
              onMouseLeave={btn2.onMouseLeave}
              href="#contact"
              className="btn-magnetic px-6 md:px-8 py-3.5 md:py-4"
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.66rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 700,
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.45)',
                color: '#ffffff',
                textDecoration: 'none',
                display: 'inline-block',
                width: '100%',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#22c55e'
                e.currentTarget.style.color = '#22c55e'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'
                e.currentTarget.style.color = '#ffffff'
              }}
            >
              Discutons projet
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
