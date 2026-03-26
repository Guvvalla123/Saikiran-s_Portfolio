import { Folder, Github, Linkedin, Mail, User } from 'lucide-react'
import {
  PERSON,
  FOOTER_DESCRIPTION,
  FOOTER_INITIALS,
  FOOTER_SIGNATURE,
} from '../../data/site.js'
import { scrollToSection } from '../../lib/scroll.js'
import { cn, ds } from '../../ds/classNames.js'

const SECTION_LINKS = [
  { label: 'About', sectionId: 'about', Icon: User },
  { label: 'Projects', sectionId: 'projects', Icon: Folder },
  { label: 'Contact', sectionId: 'contact', Icon: Mail },
]

const navIconProps = {
  className: ds.footerNavIcon,
  'aria-hidden': true,
  size: 16,
  strokeWidth: 1.75,
}

const socialIconProps = {
  className: ds.footerSocialIcon,
  'aria-hidden': true,
  size: 16,
  strokeWidth: 1.75,
}

export function Footer() {
  return (
    <footer className={cn(ds.footerSurface, ds.footerY)}>
      <div className={ds.footerDecorGlow} aria-hidden>
        <div className={ds.footerDecorGlowBlob} />
      </div>
      <div className={ds.footerShell}>
        <div className={ds.footerGrid}>
          <div className={ds.footerColLeft}>
            <div className={ds.footerBrandRow}>
              <div className={ds.footerLogoMark} aria-hidden>
                {FOOTER_INITIALS}
              </div>
              <p className={ds.footerName}>{PERSON.name}</p>
            </div>
            <p className={ds.footerRole}>{PERSON.title}</p>
            <p className={ds.footerDescription}>{FOOTER_DESCRIPTION}</p>
          </div>

          <div className={ds.footerNavBlock}>
            <p className={ds.footerExploreHeading}>Explore</p>
            <nav
              className={ds.footerNavCol}
              aria-label="Footer navigation"
            >
              {SECTION_LINKS.map(({ label, sectionId, Icon }) => (
                <button
                  key={sectionId}
                  type="button"
                  className={ds.footerNavLinkButton}
                  onClick={() => scrollToSection(sectionId)}
                >
                  <span className={ds.footerNavLinkRow}>
                    <Icon {...navIconProps} />
                    <span className={ds.footerNavLabel}>{label}</span>
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <nav className={ds.footerSocialCol} aria-label="Social links">
            <a
              href={PERSON.github}
              className={ds.footerSocialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github {...socialIconProps} />
              <span>GitHub</span>
            </a>
            <a
              href={PERSON.linkedin}
              className={ds.footerSocialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin {...socialIconProps} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSON.email}`}
              className={ds.footerSocialLink}
            >
              <Mail {...socialIconProps} />
              <span>Email</span>
            </a>
          </nav>
        </div>

        <p className={ds.footerSignature}>{FOOTER_SIGNATURE}</p>

        <div className={ds.footerBottomBar}>
          <p className={ds.footerCopyrightLine}>
            © 2026 {PERSON.name}
          </p>
          <p className={ds.footerBuiltWith}>Built with React + Tailwind</p>
        </div>
      </div>
    </footer>
  )
}
