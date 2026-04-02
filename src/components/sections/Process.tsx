'use client'

import { motion } from 'framer-motion'
import { PROCESS } from '@/lib/data'

export default function Process() {
  return (
    <section id="processus" className="relative z-10 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
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
              Comment on travaille
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
            Notre <span style={{ color: '#22c55e' }}>Processus</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: '40px',
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #22c55e, transparent)',
              zIndex: 0,
            }}
          />

          {PROCESS.map((step, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col items-center text-center z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Circle */}
              <motion.div
                whileHover={{
                  background: '#22c55e',
                  boxShadow: '0 0 30px rgba(34,197,94,0.6)',
                }}
                transition={{ duration: 0.2 }}
                className="group mb-6"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  border: '1px solid rgba(34,197,94,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'transparent',
                  cursor: 'none',
                }}
              >
                <motion.span
                  whileHover={{ color: '#000' }}
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: '1.1rem',
                    fontWeight: 900,
                    color: '#22c55e',
                  }}
                >
                  {step.num}
                </motion.span>
              </motion.div>

              <h3
                style={{
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: '#f0fff4',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-exo)',
                  fontSize: '0.85rem',
                  color: 'rgba(240,255,244,0.4)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
