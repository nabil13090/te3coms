'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/data'

export default function Services() {
  return (
    <section id="services" className="relative z-10 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span style={{ width: '30px', height: '1px', background: '#22c55e', display: 'block' }} />
            <span
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                color: '#22c55e',
                textTransform: 'uppercase',
              }}
            >
              Ce qu&#39;on fait
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              color: '#f0fff4',
              lineHeight: 1.1,
            }}
          >
            Nos <span style={{ color: '#22c55e' }}>Services</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(34,197,94,0.08)' }}>
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: 'rgba(34,197,94,0.05)' }}
              className="relative overflow-hidden p-8 group"
              style={{
                background: '#041008',
                cursor: 'none',
              }}
            >
              {/* Bordure gauche animée */}
              <motion.div
                initial={{ height: 0 }}
                whileHover={{ height: '100%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '3px',
                  background: '#22c55e',
                }}
              />

              {/* Numéro en filigrane */}
              <span
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1.5rem',
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: '4rem',
                  fontWeight: 900,
                  color: 'rgba(34,197,94,0.04)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                {service.num}
              </span>

              {/* Icône */}
              <div
                className="mb-5 transition-all duration-300 group-hover:border-green-neon"
                style={{
                  width: '52px',
                  height: '52px',
                  border: '1px solid rgba(34,197,94,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  transition: 'border-color 0.3s',
                }}
              >
                {service.icon}
              </div>

              {/* Titre */}
              <h3
                style={{
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  color: '#f0fff4',
                  marginBottom: '0.75rem',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-exo)',
                  fontSize: '0.88rem',
                  color: 'rgba(240,255,244,0.45)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
