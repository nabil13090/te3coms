'use client'

import { useEffect, useState, RefObject } from 'react'

export function useScrollReveal(ref: RefObject<Element>): boolean {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref])

  return isVisible
}
