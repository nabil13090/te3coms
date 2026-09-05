import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { CONTACT, LANDING_OFFER } from '@/lib/data'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export default function Cta() {
  const waUrl = buildWhatsAppUrl(
    CONTACT.whatsapp,
    'Bonjour TE3COMS, je souhaite un devis pour mon projet.',
  )

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-accent via-accent to-accent-bright text-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/60 mb-6">
              Prêt à booster votre activité ?
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05] mb-6">
              Discutons de votre projet dès aujourd&apos;hui.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed">
              Devis et renseignements par WhatsApp sous 24h. Joignez vos photos dès la demande.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between gap-4 p-6 bg-white text-stone-900 font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-stone-100 transition-colors group"
            >
              <span className="inline-flex items-center gap-2">
                <MessageCircle size={16} />
                WhatsApp — devis / renseignement
              </span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-between gap-4 p-6 border border-white/40 text-white font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-white/10 transition-colors group"
            >
              Formulaire + photos
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
            <Link
              href="/offre/landing-page"
              className="text-center text-sm text-white/60 hover:text-white transition-colors py-2"
            >
              Landing page dès {LANDING_OFFER.price} €
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
