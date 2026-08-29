import type { Metadata } from 'next'
import { Mail, MapPin, Clock } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import ContactForm from '@/components/ui/ContactForm'
import Faq from '@/components/sections/Faq'

export const metadata: Metadata = {
  title: 'Contact | TE3COMS',
  description: 'Contactez TE3COMS pour votre projet web, SaaS, CRM ou application.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          index="08"
          eyebrow="Contact"
          title="Parlons de votre projet."
          description="Un chef de projet dédié vous recontacte sous 24 heures pour cadrer votre besoin."
        />

        <section className="section-padding bg-stone-100 border-b border-stone-200">
          <div className="container-wide grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2 space-y-px bg-stone-200 border border-stone-200">
              <div className="bg-white p-8">
                <p className="eyebrow mb-6">Coordonnées</p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3 text-sm text-stone-500">
                    <Mail size={16} className="text-stone-900 shrink-0 mt-0.5" strokeWidth={1.5} />
                    <a href="mailto:contact@te3coms.com" className="hover:text-stone-900 transition-colors">contact@te3coms.com</a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-stone-500">
                    <MapPin size={16} className="text-stone-900 shrink-0 mt-0.5" strokeWidth={1.5} />
                    Marseille & alentours
                  </li>
                  <li className="flex items-start gap-3 text-sm text-stone-500">
                    <Clock size={16} className="text-stone-900 shrink-0 mt-0.5" strokeWidth={1.5} />
                    Lun – Ven · 9h – 18h
                  </li>
                </ul>
              </div>
              <div className="bg-stone-900 text-white p-8">
                <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-3">Délai</p>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Chaque demande est analysée avec soin. Devis personnalisé et recommandations concrètes sous 24h.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  )
}
