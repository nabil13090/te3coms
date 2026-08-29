import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/data'

export default function Footer() {
  const serviceLinks = [
    { label: 'Landing page 699€', href: '/offre/landing-page' },
    { label: 'Création SaaS', href: '/services/creation-saas' },
    { label: 'Site Web', href: '/services/site-web' },
    { label: 'CRM Sur Mesure', href: '/services/crm-sur-mesure' },
    { label: 'Application & PWA', href: '/services/application-pwa' },
    { label: 'Référencement SEO', href: '/services/referencement-seo' },
    { label: 'Refonte de Site', href: '/services/refonte-site' },
  ]

  return (
    <footer className="bg-accent-dark text-white border-t-4 border-brand-amber">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-x border-stone-800">
          <div className="p-8 md:p-10 lg:border-r border-stone-800">
            <Image
              src="/screenshots/logo.png"
              alt="TE3COMS"
              width={130}
              height={36}
              className="w-[120px] h-auto brightness-0 invert mb-6"
            />
            <p className="text-sm text-stone-500 leading-relaxed">
              Agence digitale — sites web, SaaS, CRM et applications sur mesure.
            </p>
          </div>

          <div className="p-8 md:p-10 lg:border-r border-stone-800 border-t md:border-t-0 border-stone-800">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/workflow" className="text-sm text-stone-400 hover:text-white transition-colors">
                  Notre méthode
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-10 lg:border-r border-stone-800 border-t lg:border-t-0 border-stone-800">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-10 border-t lg:border-t-0 border-stone-800">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a href="mailto:contact@te3coms.com" className="hover:text-white transition-colors">
                  contact@te3coms.com
                </a>
              </li>
              <li>Marseille & alentours</li>
              <li>Lun – Ven · 9h – 18h</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-6 border-x border-b border-stone-800">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-stone-600">
            © {new Date().getFullYear()} TE3COMS
          </p>
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-[0.14em] text-stone-600">
            <span>Mentions légales</span>
            <span>Confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
