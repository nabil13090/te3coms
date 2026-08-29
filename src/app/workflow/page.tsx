import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import { WORKFLOW_STEPS, PROCESS, LANDING_OFFER, DELIVERY_RANGES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Notre méthode & workflow | TE3COMS',
  description: 'Découvrez notre processus de A à Z : brief, conception, développement, SEO et mise en ligne.',
}

export default function WorkflowPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          index="Méthode"
          eyebrow="Workflow"
          title="Un processus clair, du premier appel au lancement."
          description="Que ce soit une landing page à 699 € ou une plateforme SaaS complète, nous suivons une méthode éprouvée. Les délais varient selon le périmètre — jamais de promesse générique."
        />

        {/* Timeline visuelle */}
        <section className="section-padding bg-stone-100 border-b border-stone-200">
          <div className="container-wide">
            <p className="eyebrow mb-4">Landing page 699 €</p>
            <h2 className="heading-lg mb-12">Workflow détaillé — 10 à 15 jours</h2>

            <div className="relative">
              <div className="hidden lg:block absolute left-[39px] top-0 bottom-0 w-px bg-stone-300" />
              <div className="space-y-0 border border-stone-200 bg-white">
                {WORKFLOW_STEPS.map((step, i) => (
                  <div
                    key={step.num}
                    className={`grid lg:grid-cols-[80px_1fr] ${i < WORKFLOW_STEPS.length - 1 ? 'border-b border-stone-200' : ''}`}
                  >
                    <div className="hidden lg:flex items-start justify-center pt-8">
                      <span className="relative z-10 w-10 h-10 bg-stone-900 text-white font-mono text-sm flex items-center justify-center">
                        {step.num}
                      </span>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-3 lg:hidden">
                        <span className="w-8 h-8 bg-stone-900 text-white font-mono text-xs flex items-center justify-center">
                          {step.num}
                        </span>
                        <span className="tag">{step.duration}</span>
                      </div>
                      <span className="hidden lg:inline tag mb-3">{step.duration}</span>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-stone-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-stone-600 leading-relaxed mb-6 max-w-2xl">{step.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((d) => (
                          <span key={d} className="tag bg-stone-50">{d}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 md:p-8 border border-accent bg-accent-light text-center">
              <p className="font-display text-xl font-semibold text-stone-900 mb-2">
                Landing page complète à partir de {LANDING_OFFER.price} €
              </p>
              <p className="text-sm text-stone-600 mb-6">{LANDING_OFFER.tagline}</p>
              <Link href="/offre/landing-page" className="btn-primary">
                Voir l&apos;offre détaillée
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Délais par type de projet */}
        <section className="section-padding bg-white border-b border-stone-200">
          <div className="container-wide">
            <p className="eyebrow mb-4">Délais</p>
            <h2 className="heading-lg mb-4">Combien de temps pour votre projet ?</h2>
            <p className="body-lg max-w-2xl mb-10">
              Chaque projet a son propre calendrier. Voici des fourchettes indicatives — le délai exact est
              défini au brief, en fonction du nombre de pages, des fonctionnalités et de vos délais de validation.
            </p>
            <div className="border border-stone-200 bg-white">
              {DELIVERY_RANGES.map((item, i) => (
                <div
                  key={item.type}
                  className={`grid md:grid-cols-12 p-6 md:p-8 ${i < DELIVERY_RANGES.length - 1 ? 'border-b border-stone-200' : ''}`}
                >
                  <div className="md:col-span-4 mb-2 md:mb-0">
                    <p className="font-display font-semibold text-stone-900">{item.type}</p>
                  </div>
                  <div className="md:col-span-3">
                    <span className="tag bg-accent-light text-accent">{item.range}</span>
                  </div>
                  <div className="md:col-span-5 mt-2 md:mt-0">
                    <p className="text-sm text-stone-500">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process projets complexes */}
        <section className="section-padding bg-white border-b border-stone-200">
          <div className="container-wide">
            <p className="eyebrow mb-4">Projets avancés</p>
            <h2 className="heading-lg mb-4">SaaS, CRM & applications</h2>
            <p className="body-lg max-w-2xl mb-12">
              Pour les projets plus ambitieux, nous adaptons le workflow avec des sprints, une roadmap produit
              et des démos régulières.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-stone-200">
              {PROCESS.map((step, i) => (
                <div
                  key={step.num}
                  className={`p-8 ${i < PROCESS.length - 1 ? 'lg:border-r border-stone-200' : ''} ${
                    i < 2 ? 'md:border-b lg:border-b-0 border-stone-200' : ''
                  }`}
                >
                  <span className="font-mono text-sm text-accent mb-4 block">{step.num}</span>
                  <h3 className="font-display text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-accent text-white text-center">
          <h2 className="font-display text-3xl font-semibold mb-6">Prêt à démarrer ?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 font-mono text-[11px] uppercase tracking-widest hover:bg-stone-100 transition-colors">
            Discuter de mon projet
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
