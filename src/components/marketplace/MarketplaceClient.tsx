'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
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
    <section className="relative z-10 px-5 md:px-8 pb-20">
      <div className="container-wide">
        <div className="border border-stone-200 bg-white p-6 mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {MARKETPLACE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] border transition-colors ${
                  activeCategory === category
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-500 border-stone-200 hover:border-stone-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher..."
            className="w-full border-b border-stone-200 pb-3 bg-transparent text-stone-900 text-sm outline-none focus:border-stone-900 placeholder:text-stone-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-stone-200 bg-white">
          {filtered.map((app, idx) => (
            <article
              key={app.slug}
              className={`group ${idx % 3 !== 2 ? 'lg:border-r border-stone-200' : ''} ${idx < filtered.length - (filtered.length % 3 || 3) ? 'border-b border-stone-200' : ''}`}
            >
              <div className="h-44 relative overflow-hidden border-b border-stone-200 bg-stone-100">
                {app.screenshot && (
                  <Image src={app.screenshot} alt={app.name} fill className="object-cover object-top" sizes="33vw" />
                )}
              </div>
              <div className="p-6">
                <p className="tag mb-3">{app.category}</p>
                <h3 className="font-display text-xl font-semibold tracking-tight text-stone-900 mb-2">{app.name}</h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-5 line-clamp-2">{app.shortDesc}</p>
                <div className="flex gap-2">
                  <a
                    href={app.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 text-white font-mono text-[10px] uppercase tracking-widest hover:bg-accent transition-colors"
                  >
                    Demo
                    <ArrowUpRight size={12} />
                  </a>
                  <Link
                    href={`/marketplace/${app.slug}`}
                    className="px-4 py-2 border border-stone-200 font-mono text-[10px] uppercase tracking-widest text-stone-600 hover:border-stone-900 transition-colors"
                  >
                    Détails
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
