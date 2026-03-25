import { useEffect, useRef, useState } from 'react'

/**
 * Intersection observer for scroll-driven reveals (timeline, cards).
 * Respects reduced motion via optional instant show.
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (options.once !== false) obs.disconnect()
        }
      },
      { rootMargin: options.rootMargin ?? '0px 0px -8% 0px', threshold: options.threshold ?? 0.08 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [options.once, options.rootMargin, options.threshold])

  return [ref, visible]
}
