'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'te3coms_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(!window.localStorage.getItem(STORAGE_KEY))
  }, [])

  if (!visible) return null

  return (
    <div className="fixed left-5 right-5 bottom-5 md:left-8 md:right-auto md:max-w-md border border-stone-200 bg-white p-5 z-[12000] shadow-none">
      <p className="text-sm text-stone-500 leading-relaxed mb-4">
        Ce site utilise des cookies pour améliorer votre expérience.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => { window.localStorage.setItem(STORAGE_KEY, 'refused'); setVisible(false) }}
          className="flex-1 py-2.5 border border-stone-200 font-mono text-[10px] uppercase tracking-widest text-stone-600 hover:bg-stone-50"
        >
          Refuser
        </button>
        <button
          onClick={() => { window.localStorage.setItem(STORAGE_KEY, 'accepted'); setVisible(false) }}
          className="flex-1 py-2.5 bg-stone-900 text-white font-mono text-[10px] uppercase tracking-widest hover:bg-accent"
        >
          Accepter
        </button>
      </div>
    </div>
  )
}
