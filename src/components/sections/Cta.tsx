'use client'

import { motion } from 'framer-motion'

export default function Cta() {
  return (
    <section
      id="contact"
      className="relative z-10 px-6 overflow-hidden"
      style={{ padding: '10rem 1.5rem' }}
    >
      {/* Rings concentriques */}
      {[1, 2, 3].map(n => (
        <div
          key={n}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: `${n * 300}px`,
            height: `${n * 300}px`,
            borderRadius: '50%',
            border: '1px solid rgba(34,197,94,0.08)',
            animation: `ringPulse ${2 + n * 0.5}s ease-in-out infinite`,
            animationDelay: `${n * 0.3}s`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      ))}

      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
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
              Travaillons ensemble
            </span>
            <span style={{ width: '30px', height: '1px', background: '#22c55e', display: 'block' }} />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 900,
              color: '#f0fff4',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Votre projet mérite le{' '}
            <span style={{ color: '#22c55e' }}>meilleur</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-exo)',
              fontSize: '1.05rem',
              color: 'rgba(240,255,244,0.45)',
              lineHeight: 1.7,
              marginBottom: '3rem',
              fontWeight: 300,
              maxWidth: '500px',
              margin: '0 auto 3rem',
            }}
          >
            Une idée ? Un projet ? Un besoin urgent ? Contactez-nous et obtenez
            une réponse sous 24h.
          </p>

          {/* Email */}
          <a
            href="mailto:contact@te3coms.com"
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
              fontWeight: 700,
              color: '#22c55e',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              display: 'inline-block',
              marginBottom: '3rem',
              transition: 'letter-spacing 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.letterSpacing = '0.25em')}
            onMouseLeave={e => (e.currentTarget.style.letterSpacing = '0.1em')}
          >
            contact@te3coms.com
          </a>

          {/* Boutons */}
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <a
              href="mailto:contact@te3coms.com"
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                background: '#22c55e',
                color: '#000',
                padding: '16px 36px',
                textDecoration: 'none',
                fontWeight: 700,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#4ade80')}
              onMouseLeave={e => (e.currentTarget.style.background = '#22c55e')}
            >
              Démarrer un projet
            </a>
            <a
              href="tel:+33600000000"
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                border: '1px solid rgba(240,255,244,0.3)',
                color: '#f0fff4',
                padding: '16px 36px',
                textDecoration: 'none',
                fontWeight: 700,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#22c55e'
                e.currentTarget.style.color = '#22c55e'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(240,255,244,0.3)'
                e.currentTarget.style.color = '#f0fff4'
              }}
            >
              Nous appeler
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
