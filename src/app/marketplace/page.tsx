import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MarketplaceClient from '@/components/marketplace/MarketplaceClient'

export const metadata: Metadata = {
  title: 'Marketplace Projets | TE3COMS',
  description: 'Toutes les applications et plateformes de TE3COMS, classees par categorie avec demos live.',
}

export default function MarketplacePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-10" style={{ background: '#f8fafc' }}>
        <section className="relative z-10 px-6 mb-10">
          <div className="max-w-7xl mx-auto">
            <span
              className="inline-flex px-3 py-1 rounded-full text-xs mb-5"
              style={{
                border: '1px solid rgba(22,163,74,0.35)',
                background: 'rgba(22,163,74,0.08)',
                color: '#15803d',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Marketplace personnel
            </span>
            <h1
              className="text-4xl md:text-6xl leading-tight mb-5"
              style={{ fontFamily: 'var(--font-orbitron)', color: '#0f172a' }}
            >
              Tous mes projets
              <br />
              <span style={{ color: '#16a34a' }}>dans un onglet dedie</span>
            </h1>
            <p className="max-w-3xl text-slate-600 text-lg leading-8">
              Cette page regroupe toutes tes applications par domaine: Medical, Garage et vente vehicule, Batiment,
              SaaS metier, Hotel et conciergerie. Chaque fiche contient une description claire et un acces direct a la demo.
            </p>
          </div>
        </section>
        <MarketplaceClient />
      </main>
      <Footer />
    </>
  )
}
