import { MARQUEE_ITEMS } from '@/lib/data'

export default function MarqueeBar() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="overflow-hidden py-3 border-b border-accent-dark bg-accent text-white">
      <div className="flex w-max gap-10" style={{ animation: 'marquee 40s linear infinite' }}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/90 whitespace-nowrap">
              {item}
            </span>
            <span className="w-2 h-2 bg-brand-amber shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
