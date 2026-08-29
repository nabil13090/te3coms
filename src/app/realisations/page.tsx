import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import MarketplaceClient from '@/components/marketplace/MarketplaceClient'

export const metadata: Metadata = {
  title: 'Réalisations | TE3COMS',
  description: 'Portfolio TE3COMS — sites web, SaaS, CRM et applications sur mesure.',
}

export default function RealisationsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-stone-100 min-h-screen">
        <PageHero
          index="02"
          eyebrow="Portfolio"
          title="Projets clients."
          description="Sites, marketplaces, plateformes SaaS et outils métier livrés pour nos clients."
        />
        <MarketplaceClient />
      </main>
      <Footer />
    </>
  )
}
