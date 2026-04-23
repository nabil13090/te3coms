'use client'

export default function Footer() {
  const links = [
    { label: 'Marketplace', href: '/marketplace' },
    { label: 'Services', href: '#services' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Processus', href: '#processus' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer
      className="relative z-10 px-6 py-8"
      style={{ borderTop: '1px solid rgba(34,197,94,0.12)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontSize: '1.1rem',
            fontWeight: 900,
            color: '#fff',
            letterSpacing: '0.05em',
          }}
        >
          TE<span style={{ color: '#22c55e' }}>3</span>COMS
        </span>

        <p
          style={{
            fontFamily: 'var(--font-exo)',
            fontSize: '0.75rem',
            color: 'rgba(240,255,244,0.35)',
            letterSpacing: '0.05em',
          }}
        >
          © {new Date().getFullYear()} TE3COMS — Des solutions numériques sur mesure
        </p>

        <nav className="flex items-center gap-6">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(240,255,244,0.35)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#22c55e')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,255,244,0.35)')}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
