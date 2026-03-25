import { useEffect, useRef } from 'react'
import { loadTurnstileScript } from '../../lib/loadTurnstileScript.js'
import { cn, ds } from '../../ds/classNames.js'

/**
 * Cloudflare Turnstile widget (explicit render). No extra npm deps.
 * @param {object} props
 * @param {string} props.siteKey
 * @param {'light' | 'dark'} props.theme
 * @param {(token: string | null) => void} props.onToken
 * @param {string} [props.className] — optional DS token(s)
 */
export function TurnstileField({ siteKey, theme, onToken, className = '' }) {
  const mountRef = useRef(null)
  const widgetIdRef = useRef(null)
  const onTokenRef = useRef(onToken)
  onTokenRef.current = onToken

  useEffect(() => {
    const el = mountRef.current
    if (!el || !siteKey) return undefined

    let cancelled = false

    ;(async () => {
      try {
        await loadTurnstileScript()
      } catch {
        if (!cancelled) onTokenRef.current(null)
        return
      }
      if (cancelled || !mountRef.current) return

      try {
        widgetIdRef.current = window.turnstile.render(mountRef.current, {
          sitekey: siteKey,
          theme: theme === 'dark' ? 'dark' : 'light',
          callback: (token) => onTokenRef.current(token),
          'expired-callback': () => onTokenRef.current(null),
          'error-callback': () => onTokenRef.current(null),
        })
      } catch {
        if (!cancelled) onTokenRef.current(null)
      }
    })()

    return () => {
      cancelled = true
      const id = widgetIdRef.current
      widgetIdRef.current = null
      if (id != null && typeof window.turnstile !== 'undefined') {
        try {
          window.turnstile.remove(id)
        } catch {
          /* ignore */
        }
      }
      onTokenRef.current(null)
    }
  }, [siteKey, theme])

  return <div ref={mountRef} className={cn(ds.turnstileMount, className)} />
}
