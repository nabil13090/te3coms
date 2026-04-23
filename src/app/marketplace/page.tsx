import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import MarketplaceClient from '@/components/marketplace/MarketplaceClient'

export const metadata: Metadata = {
  title: 'Marketplace Projets | TE3COMS',
  description: 'Toutes les applications et plateformes de TE3COMS, classees par categorie avec demos live.',
}

export default function MarketplacePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="pt-32 pb-10">
        <section className="relative z-10 px-6 mb-10">
          <div className="max-w-7xl mx-auto">
            <span
              className="inline-flex px-3 py-1 rounded-full text-xs mb-5"
              style={{
                border: '1px solid rgba(34,197,94,0.35)',
                background: 'rgba(34,197,94,0.1)',
                color: '#4ade80',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Marketplace personnel
            </span>
            <h1
              className="text-4xl md:text-6xl leading-tight mb-5"
              style={{ fontFamily: 'var(--font-orbitron)', color: '#f0fff4' }}
            >
              Tous mes projets
              <br />
              <span style={{ color: '#22c55e' }}>dans un onglet dedie</span>
            </h1>
            <p className="max-w-3xl text-white/65 text-lg leading-8">
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
