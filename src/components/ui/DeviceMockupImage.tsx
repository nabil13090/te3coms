import Image from 'next/image'
import Link from 'next/link'

type DeviceMockupImageProps = {
  src: string
  alt: string
  title?: string
  subtitle?: string
  href?: string
  priority?: boolean
  className?: string
}

export default function DeviceMockupImage({
  src,
  alt,
  title,
  subtitle,
  href,
  priority = false,
  className = '',
}: DeviceMockupImageProps) {
  const visual = (
    <div className={`relative w-full max-w-[560px] mx-auto ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={900}
        className="w-full h-auto"
        sizes="(max-width: 768px) 92vw, 520px"
        priority={priority}
      />
      {(title || subtitle) && (
        <div className="mt-5 md:mt-6 text-center px-2">
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
        <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1">{visual}</div>
      </Link>
    )
  }

  return visual
}
