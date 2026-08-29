import Image from 'next/image'
import Link from 'next/link'

type TabletMockupProps = {
  src: string
  alt: string
  title?: string
  subtitle?: string
  url?: string
  href?: string
  priority?: boolean
  className?: string
}

const SILVER_FRAME =
  'linear-gradient(155deg, #f4f4f6 0%, #d8d8de 28%, #c4c4cc 55%, #e8e8ec 78%, #f0f0f4 100%)'

const SILVER_EDGE =
  'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, transparent 42%, transparent 58%, rgba(255,255,255,0.25) 100%)'

function IpadBack() {
  return (
    <div
      className="absolute right-0 md:right-[2%] top-[2%] w-[34%] md:w-[32%] aspect-[3/4] rounded-[20px] md:rounded-[26px] border border-white/60 pointer-events-none"
      style={{
        background: SILVER_FRAME,
        transform: 'rotateY(-42deg) rotateX(6deg) rotateZ(2deg) translateZ(-32px)',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.95), inset -3px 0 10px rgba(0,0,0,0.06), 0 28px 56px rgba(15,23,42,0.14)',
      }}
      aria-hidden
    >
      <div
        className="absolute inset-0 rounded-[20px] md:rounded-[26px] pointer-events-none"
        style={{ background: SILVER_EDGE }}
      />

      {/* Module caméra iPad Pro */}
      <div
        className="absolute top-3.5 right-3.5 w-10 h-10 md:w-12 md:h-12 rounded-[10px] bg-gradient-to-br from-[#b8b8c0] to-[#90909a]"
        style={{ boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.55), 0 2px 8px rgba(0,0,0,0.12)' }}
      >
        <div className="absolute top-1.5 left-1.5 w-3 h-3 rounded-full bg-[#141418] ring-2 ring-[#3a3a44]" />
        <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#141418] ring-1 ring-[#3a3a44]" />
        <div className="absolute bottom-1.5 left-2 w-2 h-2 rounded-full bg-[#1c1c22]" />
      </div>

      {/* Lignes antenne */}
      <div className="absolute top-[18%] left-3 right-3 h-px bg-stone-400/25" />
      <div className="absolute bottom-[18%] left-3 right-3 h-px bg-stone-400/25" />
    </div>
  )
}

function IpadFront({
  src,
  alt,
  url,
  priority,
}: {
  src: string
  alt: string
  url?: string
  priority?: boolean
}) {
  return (
    <div
      className="relative w-[94%] md:w-[88%] ml-0 md:ml-[4%]"
      style={{
        transform: 'rotateY(18deg) rotateX(10deg) rotateZ(-1deg)',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="relative rounded-[18px] md:rounded-[24px] p-[9px] md:p-[11px]"
        style={{
          background: SILVER_FRAME,
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.08), 0 36px 72px rgba(15,23,42,0.22), 0 12px 24px rgba(15,23,42,0.1)',
        }}
      >
        <div
          className="absolute inset-0 rounded-[18px] md:rounded-[24px] pointer-events-none"
          style={{ background: SILVER_EDGE }}
          aria-hidden
        />

        {/* Écran paysage — fines bordures noires */}
        <div className="relative rounded-[10px] md:rounded-[14px] overflow-hidden bg-[#0a0a0a] p-[3px] md:p-1 aspect-[4/3]">
          <div className="relative w-full h-full rounded-[8px] md:rounded-[12px] overflow-hidden bg-white">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 88vw, 520px"
              priority={priority}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, transparent 42%, transparent 100%)',
              }}
              aria-hidden
            />
            {url && (
              <div className="absolute bottom-0 inset-x-0 px-4 py-2.5 bg-gradient-to-t from-black/45 to-transparent pointer-events-none">
                <p className="font-mono text-[9px] text-white/85 truncate text-center">{url}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TabletMockup({
  src,
  alt,
  title,
  subtitle,
  url,
  href,
  priority = false,
  className = '',
}: TabletMockupProps) {
  const frame = (
    <div className={`relative w-full max-w-[580px] mx-auto ${className}`}>
      <div
        className="absolute bottom-[2%] left-[10%] right-[14%] h-10 md:h-12 rounded-[50%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(15,23,42,0.18) 0%, transparent 72%)',
          filter: 'blur(10px)',
        }}
        aria-hidden
      />

      <div
        className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[340px]"
        style={{ perspective: '1600px', perspectiveOrigin: '42% 38%' }}
      >
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          <IpadBack />
          <IpadFront src={src} alt={alt} url={url} priority={priority} />
        </div>
      </div>

      {(title || subtitle) && (
        <div className="mt-6 md:mt-8 text-center px-2">
          {subtitle && (
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-1">{subtitle}</p>
          )}
          {title && <p className="font-display text-lg md:text-xl font-semibold text-stone-900">{title}</p>}
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="block group"
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
      >
        <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5">{frame}</div>
      </Link>
    )
  }

  return frame
}
