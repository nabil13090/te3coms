'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#processus', label: 'Processus' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(34,197,94,0.12)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '1.3rem',
              fontWeight: 900,
              letterSpacing: '0.05em',
              color: '#fff',
            }}
          >
            TE<span style={{ color: '#22c55e' }}>3</span>COMS
          </span>
        </a>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="relative group"
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(240,255,244,0.65)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#22c55e')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,255,244,0.65)')}
            >
              {link.label}
              <span
                className="absolute bottom-[-4px] left-0 h-[1px] bg-green-neon transition-all duration-300 w-0 group-hover:w-full"
                style={{ background: '#22c55e' }}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block relative overflow-hidden px-5 py-2.5 text-xs font-semibold tracking-widest uppercase"
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            border: '1px solid #22c55e',
            color: '#22c55e',
            background: 'transparent',
            cursor: 'none',
            transition: 'color 0.3s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget
            el.style.color = '#000'
            el.style.background = '#22c55e'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget
            el.style.color = '#22c55e'
            el.style.background = 'transparent'
          }}
        >
          Démarrer un projet
        </a>

        {/* Burger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ cursor: 'none' }}
        >
          <span className="w-6 h-px bg-green-neon" style={{ background: '#22c55e' }} />
          <span className="w-4 h-px bg-green-neon" style={{ background: '#22c55e' }} />
          <span className="w-6 h-px bg-green-neon" style={{ background: '#22c55e' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(0,0,0,0.97)' }}
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                color: 'rgba(240,255,244,0.8)',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              border: '1px solid #22c55e',
              color: '#22c55e',
              padding: '10px 20px',
              textAlign: 'center',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            Démarrer un projet
          </a>
        </motion.div>
      )}
    </motion.header>
  )
}
