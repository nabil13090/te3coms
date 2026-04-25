'use client'

import { useEffect, useState } from 'react'

type ConsentValue = 'accepted' | 'refused'

const STORAGE_KEY = 'te3coms_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY)
    setVisible(!consent)
  }, [])

  const handleChoice = (value: ConsentValue) => {
    window.localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        left: '50%',
        bottom: '20px',
        transform: 'translateX(-50%)',
        width: 'min(920px, calc(100% - 24px))',
        background: '#020617',
        border: '1px solid rgba(34,197,94,0.35)',
        borderRadius: '14px',
        padding: '14px 16px',
        zIndex: 12000,
        boxShadow: '0 10px 30px rgba(2,6,23,0.35)',
      }}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p
          style={{
            color: '#e2e8f0',
            fontSize: '0.92rem',
            lineHeight: 1.5,
          }}
        >
          Ce site utilise des cookies pour améliorer votre expérience et mesurer l’audience.
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleChoice('refused')}
            className="px-4 py-2 rounded-md text-sm font-semibold"
            style={{
              border: '1px solid rgba(226,232,240,0.45)',
              color: '#ffffff',
              background: 'transparent',
            }}
          >
            Refuser
          </button>
          <button
            onClick={() => handleChoice('accepted')}
            className="px-4 py-2 rounded-md text-sm font-semibold"
            style={{
              border: '1px solid #22c55e',
              color: '#041008',
              background: '#22c55e',
            }}
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
