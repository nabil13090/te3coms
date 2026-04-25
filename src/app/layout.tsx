import type { Metadata } from 'next'
import { Orbitron, Exo_2 } from 'next/font/google'
import CookieBanner from '@/components/ui/CookieBanner'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-exo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TE3COMS – Solutions Numériques Sur Mesure',
  description:
    'TE3COMS est une agence digitale spécialisée en conception web, développement SaaS, CRM sur mesure et digitalisation d\'entreprise. Des solutions numériques sur mesure.',
  themeColor: '#22c55e',
  keywords: ['agence digitale', 'développement web', 'SaaS', 'CRM', 'digitalisation', 'Marseille'],
  openGraph: {
    title: 'TE3COMS – Solutions Numériques Sur Mesure',
    description: 'Agence digitale – Sites vitrine, SaaS, CRM et digitalisation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${orbitron.variable} ${exo2.variable}`} suppressHydrationWarning>
      <body className="font-exo antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
