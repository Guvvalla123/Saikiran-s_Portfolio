/**
 * Client-side contact form hardening (spam / abuse).
 * For stronger bot defense, consider Cloudflare Turnstile + server verification.
 */

const COOLDOWN_MS = 10_000
const STORAGE_KEY = 'portfolio_contact_submit_at'

/** RFC 5322–inspired practical email check (client-side; not a full parser). */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

/**
 * @param {HTMLFormElement} form
 * @returns {boolean} true if the honeypot field has any non-whitespace value
 */
export function isHoneypotTripped(form) {
  const el = form.elements.namedItem('botcheck')
  if (!el || !('value' in el)) return false
  return String(el.value).trim().length > 0
}

/**
 * @returns {string|null} User-facing cooldown message, or null if send is allowed
 */
export function getContactCooldownMessage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw == null) return null
    const last = Number.parseInt(raw, 10)
    if (!Number.isFinite(last)) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    const elapsed = Date.now() - last
    const remaining = COOLDOWN_MS - elapsed
    if (remaining > 0) {
      const secs = Math.max(1, Math.ceil(remaining / 1000))
      return `Please wait ${secs}s before sending again.`
    }
  } catch {
    /* private mode / storage blocked */
  }
  return null
}

/** Call after validation passes and immediately before the network request. */
export function recordContactAttempt() {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()))
  } catch {
    /* ignore */
  }
}

/**
 * @param {FormData} fd
 * @returns {{ ok: true, values: { name: string, email: string, subject: string, message: string } } | { ok: false, message: string }}
 */
export function validateContactForm(fd) {
  const name = String(fd.get('name') ?? '').trim()
  const email = String(fd.get('email') ?? '').trim()
  const subject = String(fd.get('subject') ?? '').trim()
  const message = String(fd.get('message') ?? '').trim()

  if (name.length < 2) {
    return { ok: false, message: 'Please enter your name (at least 2 characters).' }
  }
  if (name.length > 120) {
    return { ok: false, message: 'Name is too long.' }
  }

  if (!email) {
    return { ok: false, message: 'Please enter your email.' }
  }
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return { ok: false, message: 'Please enter a valid email address.' }
  }

  if (subject.length < 2) {
    return { ok: false, message: 'Please add a short subject.' }
  }
  if (subject.length > 200) {
    return { ok: false, message: 'Subject is too long.' }
  }

  if (message.length < 10) {
    return { ok: false, message: 'Please write a bit more (at least 10 characters).' }
  }
  if (message.length > 8000) {
    return { ok: false, message: 'Message is too long.' }
  }

  return { ok: true, values: { name, email, subject, message } }
}

/**
 * When `VITE_TURNSTILE_SITE_KEY` is set, require a non-empty token before calling Web3Forms.
 * @param {string | null | undefined} token
 * @param {boolean} turnstileEnabled
 * @returns {string | null} Error copy for the user, or null if OK
 */
export function getTurnstileValidationError(token, turnstileEnabled) {
  if (!turnstileEnabled) return null
  const t = String(token ?? '').trim()
  if (!t) {
    return 'Please complete the verification step below.'
  }
  return null
}
