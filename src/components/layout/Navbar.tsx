'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'

const NAV_COLORS = [
  'hover:bg-amber-400 hover:text-stone-900',
  'hover:bg-brand-cobalt hover:text-white',
  'hover:bg-accent-bright hover:text-white',
  'hover:bg-brand-sky hover:text-white',
  'hover:bg-brand-violet hover:text-white',
  'hover:bg-brand-coral hover:text-white',
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 overflow-hidden transition-shadow duration-200 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      {/* Barre accent pleine largeur — pas de container qui casse le layout */}
      <div
        className={`flex items-stretch h-[56px] md:h-[64px] border-b-2 border-brand-amber ${
          scrolled ? 'bg-accent-dark' : 'bg-accent'
        }`}
      >
        <Link
          href="/"
          className="flex items-center shrink-0 px-5 md:px-8 border-r border-white/15 bg-accent-dark/30 hover:bg-accent-dark/50 transition-colors"
        >
          <Image
            src="/screenshots/logo.png"
            alt="TE3COMS"
            width={130}
            height={36}
            priority
            className="w-[100px] md:w-[120px] h-auto brightness-0 invert"
          />
        </Link>

        <nav className="hidden lg:flex items-stretch flex-1 min-w-0 overflow-x-auto scrollbar-none">
          {NAV_LINKS.map((link, i) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center shrink-0 px-3 xl:px-4 font-mono text-[10px] xl:text-[11px] uppercase tracking-[0.12em] border-r border-white/10 transition-colors whitespace-nowrap ${
                  active
                    ? i === 0
                      ? 'bg-amber-400 text-stone-900 font-semibold'
                      : 'bg-white/15 text-white font-semibold'
                    : i === 0
                      ? 'bg-amber-500/25 text-amber-100 font-semibold'
                      : `text-white/85 ${NAV_COLORS[i]}`
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:flex items-center shrink-0 px-5 xl:px-7 bg-brand-amber text-stone-900 font-mono text-[10px] xl:text-[11px] uppercase tracking-[0.12em] hover:bg-amber-300 transition-colors font-semibold border-l border-white/10"
        >
          Devis WhatsApp
        </Link>

        <button
          className="lg:hidden flex items-center px-5 text-white ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer' : 'Menu'}
        >
          {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-[56px] bg-accent-dark z-40 overflow-y-auto"
          >
            <nav className="flex flex-col">
              {NAV_LINKS.map((link, i) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-6 py-4 font-mono text-sm uppercase tracking-widest border-b border-white/10 transition-colors ${
                      active
                        ? 'bg-white/15 text-white'
                        : i === 0
                          ? 'bg-amber-500/20 text-amber-100'
                          : 'text-white/85 hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="m-5 flex items-center justify-center py-4 bg-brand-amber text-stone-900 font-mono text-sm uppercase tracking-widest font-semibold"
              >
                Devis WhatsApp
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
