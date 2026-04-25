import { MARQUEE_ITEMS } from '@/lib/data'

export default function MarqueeBar() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        borderTop: '1px solid rgba(34,197,94,0.15)',
        borderBottom: '1px solid rgba(34,197,94,0.15)',
        background: '#ffffff',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 30s linear infinite',
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4">
            <span
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                color: '#334155',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {item}
            </span>
            <span
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#22c55e',
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
