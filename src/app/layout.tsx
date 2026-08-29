import type { Metadata } from 'next'
import { IBM_Plex_Sans, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import CookieBanner from '@/components/ui/CookieBanner'
import './globals.css'

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TE3COMS — Agence digitale | SaaS, Sites Web, CRM & PWA',
  description:
    'TE3COMS conçoit des sites web, plateformes SaaS, CRM sur mesure et applications PWA. Agence digitale orientée performance, conversion et croissance.',
  themeColor: '#FAFAF8',
  keywords: ['agence digitale', 'création SaaS', 'site web', 'CRM sur mesure', 'PWA', 'refonte site', 'Marseille'],
  openGraph: {
    title: 'TE3COMS — Agence digitale',
    description: 'Sites web, SaaS, CRM et applications sur mesure.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${sans.variable} ${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-stone-50 text-stone-900">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
