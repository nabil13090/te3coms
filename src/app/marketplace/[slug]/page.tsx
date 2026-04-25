import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
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
    title: `${app.name} | TE3COMS Marketplace`,
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
      <main className="pt-32 pb-14 px-6" style={{ background: '#f8fafc' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-sm text-slate-500">
            <Link href="/marketplace" className="text-green-700 hover:text-green-600">
              Marketplace
            </Link>{' '}
            / <span>{app.category}</span> / <span className="text-slate-800">{app.name}</span>
          </div>

          <section
            className="rounded-3xl p-8 md:p-10 mb-8"
            style={{
              border: '1px solid rgba(16,24,40,0.12)',
              background: `linear-gradient(135deg, ${app.accentColor}22 0%, rgba(255,255,255,0.95) 70%)`,
            }}
          >
            <p className="text-xs uppercase tracking-[0.16em] text-green-700 mb-3">{app.category}</p>
            <h1 className="text-4xl md:text-5xl mb-4 text-slate-900" style={{ fontFamily: 'var(--font-orbitron)' }}>
              {app.name}
            </h1>
            <p className="text-slate-700 max-w-3xl leading-8">{app.fullDesc}</p>
            {app.screenshot && (
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 relative h-[260px] md:h-[360px]">
                <Image
                  src={app.screenshot}
                  alt={`Capture ${app.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex flex-wrap gap-2 mt-6">
              {app.stack.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-slate-300 text-sm text-slate-700 bg-white">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <a
                href={app.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-lg font-semibold"
                style={{ background: app.accentColor, color: '#041008' }}
              >
                Ouvrir la demo live
              </a>
              <Link href="/marketplace" className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 bg-white">
                Retour marketplace
              </Link>
            </div>
          </section>

          {related.length > 0 && (
            <section>
              <h2 className="text-2xl mb-4 text-slate-900" style={{ fontFamily: 'var(--font-orbitron)' }}>
                Projets similaires
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/marketplace/${item.slug}`}
                    className="rounded-2xl p-4 block"
                    style={{ border: '1px solid rgba(16,24,40,0.12)', background: '#ffffff' }}
                  >
                    <p className="text-xs uppercase tracking-wider text-green-700 mb-2">{item.category}</p>
                    <h3 className="text-lg mb-2 text-slate-900" style={{ fontFamily: 'var(--font-orbitron)' }}>
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-600">{item.shortDesc}</p>
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
