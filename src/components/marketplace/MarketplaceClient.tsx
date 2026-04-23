'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { MARKETPLACE_CATEGORIES, MARKETPLACE_PROJECTS } from '@/lib/marketplace-data'

export default function MarketplaceClient() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<(typeof MARKETPLACE_CATEGORIES)[number]>('Toutes')

  const filtered = useMemo(() => {
    return MARKETPLACE_PROJECTS.filter((app) => {
      const categoryMatch = activeCategory === 'Toutes' || app.category === activeCategory
      const search = query.trim().toLowerCase()
      if (!search) return categoryMatch
      const text = `${app.name} ${app.shortDesc} ${app.category} ${app.stack.join(' ')}`.toLowerCase()
      return categoryMatch && text.includes(search)
    })
  }, [activeCategory, query])

  return (
    <section className="relative z-10 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-8 p-4 rounded-2xl"
          style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(6,24,12,0.75)' }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {MARKETPLACE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="px-4 py-2 rounded-full text-xs md:text-sm"
                style={{
                  fontFamily: 'var(--font-orbitron)',
                  letterSpacing: '0.06em',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: activeCategory === category ? '#021207' : 'rgba(240,255,244,0.7)',
                  background: activeCategory === category ? '#22c55e' : 'rgba(255,255,255,0.02)',
                }}
              >
                {category}
              </button>
            ))}
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un projet, une stack ou une categorie..."
            className="w-full rounded-xl px-4 py-3 outline-none"
            style={{
              border: '1px solid rgba(34,197,94,0.25)',
              background: '#041008',
              color: '#f0fff4',
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((app, idx) => (
            <motion.article
              key={app.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              className="overflow-hidden rounded-2xl"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                background: '#06180c',
              }}
            >
              <div className="h-40 p-4 flex items-end relative overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {app.screenshot ? (
                  <>
                    <Image
                      src={app.screenshot}
                      alt={`Capture ${app.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(180deg, transparent 0%, rgba(2,18,7,0.88) 90%)` }}
                    />
                  </>
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${app.accentColor}33 0%, rgba(2,18,7,0.9) 70%)` }}
                  />
                )}
                <span
                  className="px-2.5 py-1 rounded-full text-[11px] relative z-10"
                  style={{
                    background: app.status === 'live' ? 'rgba(34,197,94,0.18)' : 'rgba(168,85,247,0.18)',
                    color: app.status === 'live' ? '#4ade80' : '#d8b4fe',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  {app.status.toUpperCase()}
                </span>
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.14em] text-green-300/80 mb-2">{app.category}</p>
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: 'var(--font-orbitron)', color: '#f0fff4' }}
                >
                  {app.name}
                </h3>
                <p className="text-sm text-white/60 leading-6 mb-4 min-h-[72px]">{app.shortDesc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {app.stack.slice(0, 4).map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-white/75 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={app.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-lg text-xs font-semibold"
                    style={{ background: app.accentColor, color: '#021207' }}
                  >
                    Demo Live
                  </a>
                  <Link
                    href={`/marketplace/${app.slug}`}
                    className="px-3 py-2 rounded-lg text-xs font-semibold border border-white/15 text-white/80"
                  >
                    Voir details
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
