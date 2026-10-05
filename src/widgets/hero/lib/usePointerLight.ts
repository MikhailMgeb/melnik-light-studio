import { useEffect, useRef } from 'react'

/* Свет следует за курсором, а кольцо отбрасывает тень в противоположную сторону. */
export function usePointerLight() {
  const heroRef = useRef<HTMLElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    const ring = ringRef.current
    if (!hero || !ring) return

    let frame = 0
    let px = 0.3
    let py = 0.3

    const apply = () => {
      frame = 0
      const h = hero.getBoundingClientRect()
      const r = ring.getBoundingClientRect()
      const cx = (r.left + r.width / 2 - h.left) / h.width
      const cy = (r.top + r.height / 2 - h.top) / h.height
      const dx = cx - px
      const dy = cy - py
      const dist = Math.min(Math.hypot(dx, dy), 1)

      hero.style.setProperty('--x', `${px * 100}%`)
      hero.style.setProperty('--y', `${py * 100}%`)
      ring.style.setProperty('--sx', `${(dx * 70).toFixed(1)}px`)
      ring.style.setProperty('--sy', `${(dy * 70).toFixed(1)}px`)
      ring.style.setProperty('--sb', `${(8 + dist * 26).toFixed(1)}px`)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply)
    }

    const handlePointerMove = (event: PointerEvent) => {
      const h = hero.getBoundingClientRect()
      px = (event.clientX - h.left) / h.width
      py = (event.clientY - h.top) / h.height
      schedule()
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduceMotion) hero.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('resize', schedule)
    apply()

    return () => {
      cancelAnimationFrame(frame)
      hero.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return { heroRef, ringRef }
}
