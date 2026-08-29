import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
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

export default function MarketplaceDetailPage({ params }: PageProps) {
  const app = MARKETPLACE_PROJECTS.find((project) => project.slug === params.slug)
  if (!app) notFound()

  const related = MARKETPLACE_PROJECTS.filter(
    (project) => project.category === app.category && project.slug !== app.slug,
  ).slice(0, 3)

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

          <article className="card p-8 md:p-12 mb-10">
            <p className="eyebrow mb-3">{app.category}</p>
            <h1 className="heading-lg mb-5">{app.name}</h1>
            <p className="body-lg mb-8">{app.fullDesc}</p>

            {app.screenshot && (
              <div className="overflow-hidden border border-stone-200 relative h-[260px] md:h-[400px] mb-8">
                <Image
                  src={app.screenshot}
                  alt={`Capture ${app.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover object-top"
                />
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-8">
              {app.stack.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
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
                    <p className="text-sm text-stone-500 line-clamp-2">{item.shortDesc}</p>
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
