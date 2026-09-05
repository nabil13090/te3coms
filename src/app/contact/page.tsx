import type { Metadata } from 'next'
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import ContactForm from '@/components/ui/ContactForm'
import Faq from '@/components/sections/Faq'
import { CONTACT } from '@/lib/data'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Contact | TE3COMS',
  description: 'Demandez un devis ou un renseignement TE3COMS directement sur WhatsApp — avec photos.',
}

export default function ContactPage() {
  const waUrl = buildWhatsAppUrl(
    CONTACT.whatsapp,
    'Bonjour TE3COMS, je souhaite des renseignements sur vos services.',
  )

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          index="08"
          eyebrow="Contact"
          title="Parlons de votre projet."
          description="Devis et renseignements par WhatsApp — joignez vos photos (chantier, site actuel, maquettes) dès la demande."
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
                    <MessageCircle size={16} className="text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-stone-900 transition-colors"
                    >
                      WhatsApp — réponse rapide
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-stone-500">
                    <Mail size={16} className="text-stone-900 shrink-0 mt-0.5" strokeWidth={1.5} />
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-stone-900 transition-colors">
                      {CONTACT.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-stone-500">
                    <MapPin size={16} className="text-stone-900 shrink-0 mt-0.5" strokeWidth={1.5} />
                    {CONTACT.city}
                  </li>
                  <li className="flex items-start gap-3 text-sm text-stone-500">
                    <Clock size={16} className="text-stone-900 shrink-0 mt-0.5" strokeWidth={1.5} />
                    {CONTACT.hours}
                  </li>
                </ul>
              </div>
              <div className="bg-stone-900 text-white p-8">
                <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-3">
                  WhatsApp
                </p>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Remplissez le formulaire : le message s&apos;ouvre dans WhatsApp avec vos accents
                  correctement affichés. Sur mobile, vos photos partent avec le partage natif.
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
