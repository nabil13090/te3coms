'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 12 + 4
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 400)
          return 100
        }
        return next
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#000',
            zIndex: 10000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '3rem',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '0.1em',
            }}
          >
            TE<span style={{ color: '#22c55e' }}>3</span>COMS
          </div>

          <div style={{ width: '300px', position: 'relative' }}>
            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'rgba(34,197,94,0.2)',
                borderRadius: '999px',
              }}
            />
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear', duration: 0.08 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '1px',
                background: '#22c55e',
                boxShadow: '0 0 8px #22c55e, 0 0 20px rgba(34,197,94,0.5)',
                borderRadius: '999px',
              }}
            />
          </div>

          <div
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.75rem',
              color: 'rgba(34,197,94,0.7)',
              letterSpacing: '0.2em',
            }}
          >
            {Math.round(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
