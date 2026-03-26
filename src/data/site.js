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

export const FOOTER_DESCRIPTION =
  'Backend systems and internal tools for real teams and daily workflows.'

export const FOOTER_SIGNATURE =
  'Building systems people rely on, day after day.'

/** Monogram shown in the footer mark */
export const FOOTER_INITIALS = 'SG'
