import { PERSON, FOOTER_BLURB } from '../../data/site.js'
import { interests } from '../../data/profile.js'
import { cn, ds } from '../../ds/classNames.js'

const QUICK_LINKS = [
  { href: PERSON.github, label: 'GitHub', external: true },
  { href: PERSON.linkedin, label: 'LinkedIn', external: true },
  { href: PERSON.x, label: 'X', external: true },
  { href: `mailto:${PERSON.email}`, label: 'Email', external: false },
]

export function Footer() {
  const y = new Date().getFullYear()

  return (
    <footer className={cn(ds.footerSurface, ds.footerY)}>
      <div className={ds.footerAccentLine} aria-hidden />
      <div className={ds.footerGlow} aria-hidden />
      <div className={cn(ds.container, ds.footerInner)}>
        <div className={ds.footerGrid}>
          <div className={ds.footerBrandStack}>
            <p className={ds.footerKicker}>Let’s connect</p>
            <p className={ds.footerName}>{PERSON.name}</p>
            <p className={ds.footerRole}>{PERSON.title}</p>
            <p className={ds.footerBlurbLead}>{FOOTER_BLURB}</p>
            <div className={ds.footerLinksRow}>
              {QUICK_LINKS.map(({ href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  className={ds.footerQuickLink}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className={ds.footerAsideStack}>
            <p className={ds.footerAsideLabel}>Beyond the keyboard</p>
            <ul className={ds.footerInterestList}>
              {interests.map((item) => (
                <li key={item} className={ds.footerInterestPill}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={ds.footerBottomBar}>
          <p className={ds.footerCopyrightLine}>
            <span className={ds.footerCopyrightAccent}>© {y}</span>
            <span className={ds.footerCopyrightSep} aria-hidden>
              ·
            </span>
            <span className={ds.footerCopyrightBody}>{PERSON.name}</span>
            <span className={ds.footerCopyrightSep} aria-hidden>
              ·
            </span>
            <span className={ds.footerCopyrightMuted}>{PERSON.location}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
