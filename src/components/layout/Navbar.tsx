'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const links = [
  { href: '/marketplace', label: 'Marketplace' },
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
        background: scrolled ? 'rgba(2,6,23,0.96)' : 'rgba(2,6,23,0.92)',
        borderBottom: '1px solid rgba(34,197,94,0.25)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image src="/screenshots/logo.png" alt="TE3COMS" width={160} height={42} priority />
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
                color: '#ffffff',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#166534')}
              onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
            >
              {link.label}
              <span
                className="absolute bottom-[-4px] left-0 h-[1px] bg-green-neon transition-all duration-300 w-0 group-hover:w-full"
                style={{ background: '#166534' }}
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
            border: '1px solid #16a34a',
            color: '#166534',
            background: '#f8fafc',
            transition: 'color 0.3s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget
            el.style.color = '#ffffff'
            el.style.background = '#16a34a'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget
            el.style.color = '#166534'
            el.style.background = '#f8fafc'
          }}
        >
          Démarrer un projet
        </a>

        {/* Burger mobile */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="/marketplace"
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.58rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              border: '1px solid rgba(34,197,94,0.7)',
              color: '#166534',
              padding: '7px 10px',
              textDecoration: 'none',
              borderRadius: '999px',
            }}
          >
            Marketplace
          </a>
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ cursor: 'pointer' }}
          >
            <span className="w-6 h-px bg-green-neon" style={{ background: '#166534' }} />
            <span className="w-4 h-px bg-green-neon" style={{ background: '#166534' }} />
            <span className="w-6 h-px bg-green-neon" style={{ background: '#166534' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(248,250,252,0.98)', borderTop: '1px solid rgba(15,23,42,0.08)' }}
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
                color: '#0f172a',
                fontWeight: 700,
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
              border: '1px solid #16a34a',
              color: '#166534',
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
