import { useEffect, useRef, useState } from 'react'

const DEFAULT_IDS = ['hero', 'about', 'experience', 'skills', 'projects', 'contact']

function countPresent(ids) {
  return ids.reduce((n, id) => (document.getElementById(id) ? n + 1 : n), 0)
}

/**
 * Tracks which section is most visible for nav highlighting (app-like wayfinding).
 * Re-attaches when new section roots mount (e.g. after lazy-loaded routes or Suspense).
 */
export function useActiveSection(ids = DEFAULT_IDS) {
  const [activeId, setActiveId] = useState(ids[0])
  const ratiosRef = useRef(new Map())
  const observerRef = useRef(null)

  useEffect(() => {
    const ratios = ratiosRef.current

    function pickActive() {
      let best = ids[0]
      let bestScore = 0
      for (const id of ids) {
        const r = ratios.get(id) ?? 0
        if (r > bestScore) {
          bestScore = r
          best = id
        }
      }
      if (bestScore > 0) setActiveId(best)
    }

    function observeAll() {
      observerRef.current?.disconnect()
      const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
      if (elements.length === 0) return

      const obs = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            ratios.set(e.target.id, e.intersectionRatio)
          }
          pickActive()
        },
        {
          root: null,
          rootMargin: '-12% 0px -45% 0px',
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        },
      )
      elements.forEach((el) => obs.observe(el))
      observerRef.current = obs
    }

    observeAll()

    const root = document.getElementById('root') ?? document.body
    let lastLen = countPresent(ids)
    const mo = new MutationObserver(() => {
      const len = countPresent(ids)
      if (len !== lastLen) {
        lastLen = len
        observeAll()
      }
    })
    mo.observe(root, { childList: true, subtree: true })

    return () => {
      observerRef.current?.disconnect()
      mo.disconnect()
    }
  }, [ids])

  return activeId
}
