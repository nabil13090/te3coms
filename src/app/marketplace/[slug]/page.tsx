import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { MARKETPLACE_PROJECTS } from '@/lib/marketplace-data'

type PageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return MARKETPLACE_PROJECTS.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const app = MARKETPLACE_PROJECTS.find((project) => project.slug === params.slug)
  if (!app) return { title: 'Projet introuvable | TE3COMS' }
  return {
    title: `${app.name} | TE3COMS`,
    description: app.shortDesc,
  }
}

function TechGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="tag bg-white">{item}</span>
        ))}
      </div>
    </div>
  )
}

export default function MarketplaceDetailPage({ params }: PageProps) {
  const app = MARKETPLACE_PROJECTS.find((project) => project.slug === params.slug)
  if (!app) notFound()

  const related = MARKETPLACE_PROJECTS.filter(
    (project) => project.category === app.category && project.slug !== app.slug,
  ).slice(0, 3)

  const imageSrc = app.mockupImage ?? app.screenshot

  return (
    <>
      <Navbar />
      <main className="pt-[88px] pb-14 px-5 md:px-8 bg-stone-100 min-h-screen border-b border-stone-200">
        <div className="container-wide max-w-5xl">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-stone-500 hover:text-stone-900 mb-8 transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Retour aux réalisations
          </Link>

          <article className="card p-8 md:p-12 mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <p className="eyebrow">{app.category}</p>
              <span className="tag bg-accent-light text-accent">{app.deliveryTime}</span>
            </div>
            <h1 className="heading-lg mb-5">{app.name}</h1>
            <p className="body-lg mb-6">{app.fullDesc}</p>
            <p className="text-sm text-stone-500 leading-relaxed mb-8">{app.context}</p>

            {imageSrc && (
              <div className="overflow-hidden border border-stone-200 relative h-[260px] md:h-[420px] mb-8 bg-white">
                <Image
                  src={imageSrc}
                  alt={`Capture ${app.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-contain object-center p-2"
                />
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 border border-stone-200 mb-8">
              {app.results.map((r, i) => (
                <div
                  key={r.label}
                  className={`p-5 text-center ${i % 2 === 0 ? 'bg-accent-light' : 'bg-amber-50'}`}
                >
                  <p className={`font-display text-2xl font-semibold ${i % 2 === 0 ? 'text-accent' : 'text-brand-amber'}`}>
                    {r.value}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-stone-500 mt-1">{r.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={app.demoUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Ouvrir la démo live
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </a>
              <Link href="/contact" className="btn-secondary">
                Projet similaire ?
              </Link>
            </div>
          </article>

          <div className="grid md:grid-cols-2 border border-stone-200 bg-white mb-8">
            <div className="p-8 md:border-r border-stone-200 border-b md:border-b-0">
              <p className="eyebrow mb-3">Le défi client</p>
              <p className="text-sm text-stone-600 leading-relaxed">{app.challenge}</p>
            </div>
            <div className="p-8 bg-accent-light/30">
              <p className="eyebrow mb-3">Notre approche</p>
              <p className="text-sm text-stone-600 leading-relaxed">{app.solution}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 border border-stone-200 bg-white mb-8">
            <div className="p-8 lg:border-r border-stone-200 border-b lg:border-b-0">
              <p className="eyebrow mb-4">Pages & modules livrés ({app.pages.length})</p>
              <ul className="space-y-2">
                {app.pages.map((page) => (
                  <li key={page} className="flex items-center gap-2 text-sm text-stone-600">
                    <Check size={14} className="text-accent shrink-0" />
                    {page}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-stone-50">
              <p className="eyebrow mb-4">Fonctionnalités développées</p>
              <ul className="space-y-2">
                {app.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-stone-600">
                    <span className="text-accent mt-0.5">→</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card p-8 md:p-10 mb-10">
            <p className="eyebrow mb-6">Stack technique détaillé</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <TechGroup label="Front-end" items={app.techStack.frontend} />
              <TechGroup label="Back-end" items={app.techStack.backend} />
              {app.techStack.cms && app.techStack.cms.length > 0 && (
                <TechGroup label="CMS" items={app.techStack.cms} />
              )}
              <TechGroup label="Outils & déploiement" items={app.techStack.tools} />
            </div>
            <div className="mt-6 pt-6 border-t border-stone-200">
              <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-3">Résumé</p>
              <div className="flex flex-wrap gap-2">
                {app.stack.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <section>
              <p className="eyebrow mb-6">Projets similaires</p>
              <div className="grid md:grid-cols-3 border border-stone-200 bg-white">
                {related.map((item, i) => (
                  <Link
                    key={item.slug}
                    href={`/marketplace/${item.slug}`}
                    className={`card p-6 hover:bg-stone-50 transition-colors block ${
                      i < related.length - 1 ? 'md:border-r border-stone-200 border-b md:border-b-0' : ''
                    }`}
                  >
                    <p className="tag mb-3">{item.category}</p>
                    <h3 className="font-display font-semibold text-stone-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-stone-500 line-clamp-2 mb-2">{item.shortDesc}</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-accent">{item.deliveryTime}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
