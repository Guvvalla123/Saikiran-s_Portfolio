export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || 'https://YOUR_DEPLOYED_DOMAIN'

/** Public path to PDF resume, e.g. `/resume.pdf` in `public/`, or full URL. Empty hides the hero resume CTA. */
export const RESUME_URL = (import.meta.env.VITE_RESUME_URL || '').trim()

export const PERSON = {
  name: 'Saikiran Guvvalla',
  title: 'Full stack developer',
  email: 'saikiranguvvalla@gmail.com',
  phone: '+91 9666914543',
  phoneTel: '+919666914543',
  location: 'Hyderabad, India',
  github: 'https://github.com/Guvvalla123',
  linkedin: 'https://www.linkedin.com/in/saikiranguvvalla',
  x: 'https://x.com/saikira69116823',
}

export const FOOTER_BLURB =
  'MERN stack · REST APIs · JWT & RBAC · MongoDB · Workforce & recruitment products. Hyderabad, India.'
