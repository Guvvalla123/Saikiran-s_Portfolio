/**
 * Load Cloudflare Turnstile once (explicit render — no automatic widgets).
 * @returns {Promise<void>}
 */
let loadPromise = null

export function loadTurnstileScript() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Turnstile requires a browser environment'))
  }
  if (window.turnstile) {
    return Promise.resolve()
  }
  if (loadPromise) {
    return loadPromise
  }

  loadPromise = new Promise((resolve, reject) => {
    const done = () => {
      if (window.turnstile) {
        resolve()
      } else {
        loadPromise = null
        reject(new Error('Turnstile unavailable'))
      }
    }

    const fail = () => {
      loadPromise = null
      reject(new Error('Turnstile script failed'))
    }

    const existing = document.querySelector('script[data-turnstile-api]')
    if (existing) {
      existing.addEventListener('load', done, { once: true })
      existing.addEventListener('error', fail, { once: true })
      if (window.turnstile) {
        resolve()
      }
      return
    }

    const s = document.createElement('script')
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    s.async = true
    s.defer = true
    s.dataset.turnstileApi = 'true'
    s.onload = done
    s.onerror = fail
    document.head.appendChild(s)
  })

  return loadPromise
}
