'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] },
})

const revealClip = (delay: number) => ({
  initial: { clipPath: 'inset(0 0 100% 0)', y: 30 },
  animate: { clipPath: 'inset(0 0 0% 0)', y: 0 },
  transition: { duration: 0.9, delay, ease: [0.23, 1, 0.32, 1] },
})

function useMagnetic() {
  const ref = useRef<HTMLAnchorElement>(null)
  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * 0.25
    const dy = (e.clientY - cy) * 0.25
    el.style.transform = `translate(${dx}px,${dy}px)`
  }
  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }
  return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const btn1 = useMagnetic()
  const btn2 = useMagnetic()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    interface Particle {
      x: number; y: number; vx: number; vy: number
    }
    const particles: Particle[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))

    let rafId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(34,197,94,0.4)'
        ctx.fill()
      })

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(34,197,94,${(1 - d / 120) * 0.15})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })

        const dm = Math.hypot(a.x - mouseRef.current.x, a.y - mouseRef.current.y)
        if (dm < 180) {
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
          ctx.strokeStyle = `rgba(34,197,94,${(1 - dm / 180) * 0.35})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      })

      rafId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ paddingTop: '100px' }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto text-center">
        {/* Eyebrow */}
        <motion.div {...fadeUp(0.2)} className="flex items-center justify-center gap-3 mb-6">
          <span style={{ display: 'block', width: '40px', height: '1px', background: '#22c55e' }} />
          <span
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              color: '#22c55e',
              textTransform: 'uppercase',
            }}
          >
            Agence Digitale · Marseille · Depuis 2024
          </span>
          <span style={{ display: 'block', width: '40px', height: '1px', background: '#22c55e' }} />
        </motion.div>

        {/* Titre H1 */}
        <h1
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '2rem',
            overflow: 'hidden',
          }}
        >
          <motion.span
            {...revealClip(0.4)}
            style={{ display: 'block', color: '#f0fff4' }}
          >
            Solutions
          </motion.span>
          <motion.span
            {...revealClip(0.55)}
            className="glitch-text"
            data-text="Numériques"
            style={{ display: 'block', color: '#22c55e' }}
          >
            Numériques
          </motion.span>
          <motion.span
            {...revealClip(0.7)}
            style={{ display: 'block', color: '#f0fff4' }}
          >
            Sur Mesure
          </motion.span>
        </h1>

        {/* Sous-titre */}
        <motion.p
          {...fadeUp(0.9)}
          style={{
            fontFamily: 'var(--font-exo)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(240,255,244,0.55)',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          Nous concevons des expériences digitales qui propulsent votre business.
          Sites, SaaS, CRM — tout sur mesure, tout performant.
        </motion.p>

        {/* Boutons */}
        <motion.div {...fadeUp(1.1)} className="flex flex-wrap gap-4 justify-center">
          <a
            ref={btn1.ref}
            onMouseMove={btn1.onMouseMove}
            onMouseLeave={btn1.onMouseLeave}
            href="#realisations"
            className="btn-magnetic px-8 py-4"
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 700,
              background: '#22c55e',
              color: '#000',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#4ade80')}
          >
            Voir nos réalisations
          </a>
          <a
            ref={btn2.ref}
            onMouseMove={btn2.onMouseMove}
            onMouseLeave={btn2.onMouseLeave}
            href="#contact"
            className="btn-magnetic px-8 py-4"
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 700,
              border: '1px solid rgba(240,255,244,0.4)',
              color: '#f0fff4',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#22c55e'
              e.currentTarget.style.color = '#22c55e'
            }}
          >
            Discutons projet
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(1.5)}
        className="absolute bottom-10 left-10 flex flex-col items-center gap-2"
        style={{ opacity: 0.6 }}
      >
        <div style={{ position: 'relative', width: '1px', height: '60px', background: 'rgba(34,197,94,0.3)' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '30%',
              background: '#22c55e',
              animation: 'scrollDown 1.5s ease-in-out infinite',
            }}
          />
        </div>
        <span
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            color: '#22c55e',
            writingMode: 'vertical-rl',
          }}
        >
          SCROLL
        </span>
      </motion.div>
    </section>
  )
}
