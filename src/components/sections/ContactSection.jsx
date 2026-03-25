import { useId, useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Section } from '../shell/Section.jsx'
import { Button } from '../ui/Button.jsx'
import { FormField } from '../ui/FormField.jsx'
import { TurnstileField } from '../ui/TurnstileField.jsx'
import { useTheme } from '../../context/ThemeContext.jsx'
import { PERSON } from '../../data/site.js'
import {
  getContactCooldownMessage,
  getTurnstileValidationError,
  isHoneypotTripped,
  recordContactAttempt,
  validateContactForm,
} from '../../lib/contactFormGuard.js'
import { cn, ds } from '../../ds/classNames.js'

/**
 * Public Web3Forms access key — embedded in the client bundle by design (Vite `VITE_*`).
 * Never put server-only secrets in `VITE_*` variables.
 *
 * Cloudflare Turnstile (optional): set `VITE_TURNSTILE_SITE_KEY` and enable Turnstile + secret
 * in the Web3Forms dashboard (Pro). Server verifies the token; the client only blocks empty tokens.
 */
const WEB3_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''
const TURNSTILE_SITE_KEY = (import.meta.env.VITE_TURNSTILE_SITE_KEY || '').trim()

export function ContactSection() {
  const { theme } = useTheme()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState(null)
  const [turnstileEpoch, setTurnstileEpoch] = useState(0)
  const statusId = useId()
  const errorId = `${statusId}-err`
  const successId = `${statusId}-ok`

  const turnstileOn = Boolean(TURNSTILE_SITE_KEY)

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    setSent(false)
    const form = e.target

    if (isHoneypotTripped(form)) {
      /* Silent fail — do not teach bots or trigger error UI */
      return
    }

    const cooldownMsg = getContactCooldownMessage()
    if (cooldownMsg) {
      setError(cooldownMsg)
      return
    }

    if (!WEB3_KEY || WEB3_KEY.includes('YOUR_')) {
      setError('Form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY for production.')
      return
    }

    const fd = new FormData(form)
    const validated = validateContactForm(fd)
    if (!validated.ok) {
      setError(validated.message)
      return
    }

    const turnstileErr = getTurnstileValidationError(turnstileToken, turnstileOn)
    if (turnstileErr) {
      setError(turnstileErr)
      return
    }

    const { name, email, subject, message } = validated.values

    recordContactAttempt()
    setLoading(true)

    const payload = {
      access_key: WEB3_KEY,
      name,
      email,
      subject,
      message,
      from_name: name,
    }

    if (turnstileOn && turnstileToken) {
      payload['cf-turnstile-response'] = turnstileToken
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setLoading(false)
      if (data.success) {
        setSent(true)
        setTurnstileToken(null)
        setTurnstileEpoch((n) => n + 1)
        form.reset()
      } else {
        setError(typeof data.message === 'string' && data.message ? data.message : 'Could not send. Try again later.')
      }
    } catch {
      setLoading(false)
      setError('Network error. Check your connection and try again.')
    }
  }

  const describedBy = error ? errorId : sent ? successId : undefined

  return (
    <Section
      id="contact"
      surface="muted"
      kicker="Contact"
      title="Let’s build something reliable."
      intro="Roles, contract work, or a technical conversation — reach out directly or use the form."
    >
      <div className={ds.gridContact}>
        <div className={ds.stackContactAside}>
          {[
            { icon: MapPin, title: 'Location', body: PERSON.location },
            {
              icon: Phone,
              title: 'Phone',
              body: (
                <a href={`tel:${PERSON.phoneTel}`} className={ds.linkAccent}>
                  {PERSON.phone}
                </a>
              ),
            },
            {
              icon: Mail,
              title: 'Email',
              body: (
                <a href={`mailto:${PERSON.email}`} className={ds.linkAccent}>
                  {PERSON.email}
                </a>
              ),
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className={ds.rhythmContactRow}>
              <div className={ds.surfaceIconBox}>
                <Icon className={ds.iconAccent} strokeWidth={1.5} aria-hidden />
              </div>
              <div>
                <p className={ds.textLabel}>{title}</p>
                <div className={cn(ds.rhythmContactBody, ds.textTertiary)}>{body}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={onSubmit}
          className={ds.surfaceForm}
          noValidate
          aria-busy={loading}
          aria-describedby={describedBy}
        >
          <input
            type="text"
            name="botcheck"
            className={ds.formHoneypot}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
          />

          <div className={ds.formGrid}>
            <FormField id="c-name" label="Name">
              <input id="c-name" name="name" required minLength={2} maxLength={120} autoComplete="name" className={ds.inputField} placeholder="Your name" />
            </FormField>
            <FormField id="c-email" label="Email">
              <input
                id="c-email"
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                className={ds.inputField}
                placeholder="you@company.com"
              />
            </FormField>
            <FormField id="c-subject" label="Subject" className={ds.gridSpan2}>
              <input id="c-subject" name="subject" required minLength={2} maxLength={200} className={ds.inputField} placeholder="Role / topic" />
            </FormField>
            <FormField id="c-msg" label="Message" className={ds.gridSpan2}>
              <textarea
                id="c-msg"
                name="message"
                required
                minLength={10}
                maxLength={8000}
                rows={5}
                className={cn(ds.inputField, ds.textareaField)}
                placeholder="Context and what you need"
              />
            </FormField>
          </div>

          {turnstileOn ? (
            <div className={ds.turnstileBlock} role="group" aria-labelledby="turnstile-label">
              <p id="turnstile-label" className={ds.turnstileLabel}>
                Verification
              </p>
              <TurnstileField
                key={turnstileEpoch}
                siteKey={TURNSTILE_SITE_KEY}
                theme={theme}
                onToken={setTurnstileToken}
                className={ds.insetTop2}
              />
            </div>
          ) : null}

          <div className={ds.srOnly} aria-live="polite" aria-atomic="true">
            {loading ? 'Sending message.' : null}
          </div>

          {error ? (
            <p id={errorId} className={ds.feedbackError} role="alert">
              {error}
            </p>
          ) : null}
          {sent ? (
            <p id={successId} className={ds.feedbackSuccess} role="status">
              Sent. I’ll reply soon.
            </p>
          ) : null}

          <div className={ds.formActions}>
            <Button variant="primary" type="submit" className={ds.btnSubmitWidth} loading={loading}>
              Send message
            </Button>
          </div>
        </form>
      </div>
    </Section>
  )
}
