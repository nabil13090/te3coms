import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import { SERVICES } from '@/lib/data'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return {}
  return { title: `${service.title} | TE3COMS`, description: service.shortDesc }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const others = SERVICES.filter((s) => s.slug !== params.slug)

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          index={service.num}
          eyebrow={service.title}
          title={service.shortDesc}
          description={service.desc}
        >
          <Link href="/contact" className="btn-primary">
            Demander un devis
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </PageHero>

        <section className="section-padding bg-white border-b border-stone-200">
          <div className="container-wide grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="eyebrow mb-4">En détail</p>
              <h2 className="heading-lg mb-6">Comment nous vous accompagnons</h2>
              <p className="text-stone-600 leading-relaxed text-lg mb-8">{service.longDesc}</p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="border border-stone-200 p-6">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-4">Bénéfices</p>
                  <ul className="space-y-3">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-stone-600">
                        <Check size={14} className="text-accent shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-stone-200 p-6 bg-stone-50">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-4">Pour qui ?</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{service.forWho}</p>
                </div>
              </div>
            </div>

            <div className="border border-stone-200 p-8 h-fit bg-stone-50">
              <p className="eyebrow mb-4">Livrables</p>
              <ul className="space-y-3 mb-8">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-stone-700">
                    <span className="text-accent">→</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span key={tag} className="tag bg-white">{tag}</span>
                ))}
              </div>
              <Link href="/workflow" className="font-mono text-[10px] uppercase tracking-widest text-accent border-b border-accent pb-0.5">
                Voir notre méthode →
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-stone-100 border-b border-stone-200">
          <div className="container-wide">
            <p className="eyebrow mb-6">Autres expertises</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-stone-200 bg-white">
              {others.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`p-6 hover:bg-stone-50 transition-colors ${i < others.length - 1 ? 'lg:border-r border-stone-200 border-b lg:border-b-0' : ''}`}
                >
                  <p className="font-mono text-xs text-stone-400 mb-2">{s.num}</p>
                  <h3 className="font-display font-semibold text-stone-900">{s.title}</h3>
                  <p className="text-xs text-stone-500 mt-2 line-clamp-2">{s.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
