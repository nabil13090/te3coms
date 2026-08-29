import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { LANDING_OFFER, WORKFLOW_STEPS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Landing page 699€ | TE3COMS — Conception & développement',
  description: LANDING_OFFER.description,
}

export default function LandingOfferPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero offre */}
        <section className="pt-[88px] border-b border-stone-200 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 lg:border-x border-stone-200">
              <div className="p-8 md:p-12 lg:border-r border-stone-200 border-b lg:border-b-0">
                <p className="tag bg-accent-light border-accent text-accent mb-6 w-fit">
                  Offre fixe · Sans surprise
                </p>
                <h1 className="heading-xl mb-4">{LANDING_OFFER.tagline}</h1>
                <p className="body-lg mb-8">{LANDING_OFFER.description}</p>
                <div className="flex items-end gap-2 mb-8">
                  <span className="font-display text-6xl md:text-7xl font-semibold tracking-tighter text-stone-900">
                    {LANDING_OFFER.price}
                  </span>
                  <span className="text-3xl font-display text-stone-500 mb-2">€</span>
                  <span className="text-sm text-stone-500 mb-3 ml-2">HT · page unique</span>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-stone-500 mb-8">
                  Livraison : {LANDING_OFFER.deliveryDays}
                </p>
                <Link href="/contact" className="btn-primary">
                  Réserver mon créneau
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="p-8 md:p-12 bg-stone-50">
                <p className="eyebrow mb-6">Ce qui est inclus</p>
                <ul className="space-y-4">
                  {LANDING_OFFER.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-700">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Idéal pour */}
        <section className="section-padding bg-stone-100 border-b border-stone-200">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="eyebrow mb-4">Idéal pour</p>
                <h2 className="heading-lg mb-6">Qui est cette offre faite pour ?</h2>
                <ul className="space-y-3">
                  {LANDING_OFFER.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-stone-600">
                      <span className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-stone-200 bg-white p-8">
                <p className="eyebrow mb-4">Options</p>
                <h3 className="font-display text-xl font-semibold mb-6">Besoin de plus ?</h3>
                <ul className="space-y-4">
                  {LANDING_OFFER.options.map((opt) => (
                    <li key={opt.name} className="flex justify-between gap-4 text-sm border-b border-stone-100 pb-3 last:border-0">
                      <span className="font-medium text-stone-900">{opt.name}</span>
                      <span className="text-stone-500 shrink-0">{opt.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow détaillé */}
        <section className="section-padding bg-white border-b border-stone-200">
          <div className="container-wide">
            <p className="eyebrow mb-4 text-center">Workflow</p>
            <h2 className="heading-lg text-center mb-4">De l&apos;idée à la mise en ligne</h2>
            <p className="body-lg text-center max-w-2xl mx-auto mb-12">
              Un parcours structuré en 5 étapes. Vous savez exactement où nous en sommes à chaque moment.
            </p>

            <div className="space-y-0 border border-stone-200">
              {WORKFLOW_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className={`grid lg:grid-cols-12 ${i < WORKFLOW_STEPS.length - 1 ? 'border-b border-stone-200' : ''}`}
                >
                  <div className="lg:col-span-1 p-6 lg:p-8 bg-stone-900 text-white flex lg:flex-col items-center lg:items-start justify-between lg:justify-center gap-2 lg:border-r border-stone-200">
                    <span className="font-mono text-lg font-semibold">{step.num}</span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-stone-400 lg:mt-2">
                      {step.duration}
                    </span>
                  </div>
                  <div className="lg:col-span-5 p-6 lg:p-8 lg:border-r border-stone-200 border-t lg:border-t-0">
                    <h3 className="font-display text-xl font-semibold text-stone-900 mb-3">{step.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="lg:col-span-6 p-6 lg:p-8 bg-stone-50 border-t lg:border-t-0 border-stone-200">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-3">Livrables</p>
                    <ul className="flex flex-wrap gap-2">
                      {step.deliverables.map((d) => (
                        <li key={d} className="tag bg-white">{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/workflow" className="btn-secondary mr-4">
                Méthode complète
              </Link>
              <Link href="/contact" className="btn-primary">
                Lancer ma landing à 699 €
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
