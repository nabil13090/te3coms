import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type ButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline-light'
  className?: string
}

export default function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    'outline-light': 'btn-outline-light',
  }

  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
}: {
  index?: string
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'items-start'
  const maxW = align === 'center' ? 'max-w-4xl' : 'max-w-4xl'

  return (
    <div className={`flex flex-col gap-5 mb-12 md:mb-16 ${alignClass} ${maxW}`}>
      <div className={`flex items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
        {index && (
          <span className={`font-mono text-sm font-medium ${dark ? 'text-brand-amber' : 'text-accent'}`}>
            {index}
          </span>
        )}
        <span className={`h-px flex-1 max-w-[48px] ${dark ? 'bg-brand-amber' : 'bg-accent'}`} />
        <p className={`eyebrow ${dark ? '!text-amber-200' : '!text-accent'}`}>{eyebrow}</p>
      </div>
      <h2 className={`heading-lg ${dark ? 'text-white' : ''}`}>{title}</h2>
      {description && (
        <p className={`body-lg ${dark ? 'text-stone-400' : ''}`}>{description}</p>
      )}
    </div>
  )
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent hover:text-brand-cobalt transition-colors group border-b border-accent pb-0.5"
    >
      {children}
      <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
    </Link>
  )
}
