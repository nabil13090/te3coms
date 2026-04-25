'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/data'

export default function Services() {
  return (
    <section id="services" className="relative z-10 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span style={{ width: '30px', height: '1px', background: '#166534', display: 'block' }} />
            <span
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                color: '#166534',
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
              color: '#0f172a',
              lineHeight: 1.1,
            }}
          >
            Nos <span style={{ color: '#166534' }}>Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative overflow-hidden p-7 rounded-2xl group"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(15,23,42,0.12)',
                boxShadow: '0 10px 30px rgba(2,6,23,0.06)',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(145deg, rgba(22,163,74,0.08), rgba(2,6,23,0.02) 45%, rgba(22,163,74,0.04))',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }}
                className="group-hover:opacity-100"
              />

              <motion.div
                initial={{ height: 0 }}
                whileHover={{ height: '100%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '3px',
                  background: '#166534',
                }}
              />

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

              <div
                className="mb-5 transition-all duration-300"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '52px',
                  height: '52px',
                  border: '1px solid rgba(22,101,52,0.35)',
                  background: 'rgba(22,101,52,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  borderRadius: '12px',
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  position: 'relative',
                  zIndex: 1,
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  color: '#14532d',
                  marginBottom: '0.75rem',
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  position: 'relative',
                  zIndex: 1,
                  fontFamily: 'var(--font-exo)',
                  fontSize: '0.92rem',
                  color: '#475569',
                  lineHeight: 1.75,
                  fontWeight: 400,
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
