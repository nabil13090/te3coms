import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import { SERVICES, TECH_STACK_GROUPS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Services | TE3COMS',
  description: 'Création SaaS, sites web WordPress & Next.js, CRM sur mesure, applications PWA, refonte et SEO.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          index="01"
          eyebrow="Services"
          title="Expertises digitales sur mesure."
          description="De la landing page à la plateforme SaaS — HTML, CSS, JavaScript, React, Next.js, Node.js, PHP et WordPress. Chaque projet avec un délai adapté à son périmètre."
        />

        <section className="section-padding bg-stone-100 border-b border-stone-200">
          <div className="container-wide border border-stone-200 bg-white">
            {SERVICES.map((service, i) => (
              <article
                key={service.slug}
                className={`grid lg:grid-cols-12 ${i < SERVICES.length - 1 ? 'border-b border-stone-200' : ''}`}
              >
                <div className="lg:col-span-1 p-6 lg:p-8 lg:border-r border-stone-200 flex lg:justify-center">
                  <span className="font-mono text-sm text-stone-400">{service.num}</span>
                </div>
                <div className="lg:col-span-4 p-6 lg:p-8 lg:border-r border-stone-200 border-t lg:border-t-0 border-stone-200">
                  <h2 className="font-display text-2xl font-semibold tracking-tight mb-3">{service.title}</h2>
                  <p className="text-stone-500 leading-relaxed text-sm mb-4">{service.desc}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    {service.deliveryRange}
                  </p>
                </div>
                <div className="lg:col-span-4 p-6 lg:p-8 lg:border-r border-stone-200 border-t lg:border-t-0 border-stone-200">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-3">Périmètre</p>
                  <ul className="space-y-2">
                    {service.scope.slice(0, 4).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-stone-500">
                        <span className="w-1.5 h-1.5 bg-stone-900 mt-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-3 p-6 lg:p-8 border-t lg:border-t-0 border-stone-200 flex flex-col justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-mono text-[10px] uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1 w-fit hover:text-accent hover:border-accent transition-colors"
                  >
                    Détails complets →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-padding bg-white border-b border-stone-200">
          <div className="container-wide">
            <p className="eyebrow mb-4 text-center">Stack maîtrisé</p>
            <h2 className="heading-lg text-center mb-10">Les technologies que nous utilisons</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-stone-200">
              {TECH_STACK_GROUPS.map((group, i) => (
                <div
                  key={group.label}
                  className={`p-8 ${i < TECH_STACK_GROUPS.length - 1 ? 'lg:border-r border-stone-200 border-b lg:border-b-0' : ''} ${
                    i < 2 ? 'md:border-b lg:border-b-0 border-stone-200' : ''
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">{group.label}</p>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-stone-600">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
