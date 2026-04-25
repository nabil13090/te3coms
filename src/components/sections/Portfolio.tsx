'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/data'

interface Project {
  id: string
  title: string
  category: string
  url: string
  badge: string | null
}

const PROJECT_SCREENSHOTS: Record<string, string> = {
  '01': '/screenshots/gardanne-gap.png',
  '02': '/screenshots/attal-pl.png',
  '03': '/screenshots/cupping-room.png',
  '04': '/screenshots/electrotechenr.png',
  '05': '/screenshots/mda-batiment.png',
}

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [shine, setShine] = useState({ x: 0, y: 0, show: false })

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    setTilt({ rx: ((y - cy) / cy) * -4, ry: ((x - cx) / cx) * 6 })
    setShine({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, show: true })
  }
  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 })
    setShine(s => ({ ...s, show: false }))
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8 }}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      onClick={() => window.open(project.url, '_blank')}
      className="relative overflow-hidden group"
      style={{
        border: '1px solid rgba(34,197,94,0.1)',
        background: '#ffffff',
        cursor: 'pointer',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)')}
    >
      {/* Shine effect */}
      {shine.show && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(34,197,94,0.12) 0%, transparent 60%)`,
            pointerEvents: 'none',
            zIndex: 5,
          }}
        />
      )}

      {/* Browser bar */}
      <div
        style={{
          padding: '10px 14px',
          borderBottom: '1px solid rgba(34,197,94,0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(15,23,42,0.04)',
        }}
      >
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#febc2e', display: 'block' }} />
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28c840', display: 'block' }} />
        <span
          style={{
            flex: 1,
            marginLeft: '8px',
            height: '18px',
            background: 'rgba(34,197,94,0.06)',
            borderRadius: '3px',
            fontSize: '0.6rem',
            fontFamily: 'monospace',
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '8px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {project.url.replace('https://', '')}
        </span>
      </div>

      {/* Preview area */}
      <div
        style={{
          height: '140px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(15,23,42,0.03)',
        }}
      >
        {PROJECT_SCREENSHOTS[project.id] ? (
          <Image
            src={PROJECT_SCREENSHOTS[project.id]}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <span
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '5rem',
              fontWeight: 900,
              color: 'rgba(34,197,94,0.06)',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            {project.id}
          </span>
        )}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60px',
            background: 'linear-gradient(transparent, #ffffff)',
          }}
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.55rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#166534',
                marginBottom: '6px',
              }}
            >
              {project.category}
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#14532d',
              }}
            >
              {project.title}
            </h3>
          </div>
          <div className="flex flex-col items-end gap-2">
            {project.badge && (
              <span
                style={{
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: '0.5rem',
                  letterSpacing: '0.15em',
                  background: '#166534',
                  color: '#000',
                  padding: '2px 8px',
                  fontWeight: 700,
                }}
              >
                {project.badge}
              </span>
            )}
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              style={{
                color: '#166534',
                fontSize: '1.1rem',
                lineHeight: 1,
                display: 'inline-block',
              }}
            >
              →
            </motion.span>
          </div>
        </div>
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: '0.6rem',
            color: '#64748b',
            letterSpacing: '0.05em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {project.url}
        </p>
      </div>
    </motion.div>
  )
}

function NextProjectCard() {
  return (
    <div
      className="group"
      style={{
        border: '1px dashed rgba(34,197,94,0.25)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 2rem',
        cursor: 'pointer',
        minHeight: '300px',
        transition: 'border-color 0.3s, background 0.3s',
      }}
      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)'
        e.currentTarget.style.background = 'rgba(34,197,94,0.03)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(34,197,94,0.25)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-orbitron)',
          fontSize: '3rem',
          color: 'rgba(34,197,94,0.3)',
          lineHeight: 1,
          marginBottom: '1rem',
          display: 'block',
        }}
      >
        +
      </span>
      <p
        style={{
          fontFamily: 'var(--font-orbitron)',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          color: '#14532d',
          textAlign: 'center',
        }}
      >
        Votre projet est le prochain
      </p>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="realisations" className="relative z-10 px-6 py-24"
      style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span style={{ width: '30px', height: '1px', background: '#166534', display: 'block' }} />
            <span
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                color: '#166534',
                textTransform: 'uppercase',
              }}
            >
              Notre travail
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.1,
            }}
          >
            Nos <span style={{ color: '#166534' }}>Réalisations</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <NextProjectCard />
        </div>
      </div>
    </section>
  )
}
