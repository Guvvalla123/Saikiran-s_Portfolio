import { ArrowRight, Github, Linkedin } from 'lucide-react'
import { Button } from '../ui/Button.jsx'
import { PERSON, RESUME_URL } from '../../data/site.js'
import { hero } from '../../data/profile.js'
import { scrollToSection } from '../../lib/scroll.js'
import { cn, ds } from '../../ds/classNames.js'

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section id="hero" className={ds.heroSection} aria-labelledby="hero-title">
      <div className={ds.heroDecorLayer} aria-hidden>
        <div className={ds.heroMesh} />
        <div className={ds.heroGlowPrimary} />
        <div className={ds.heroGlowSecondary} />
        <div className={ds.heroGlowAccent} />
        <div className={ds.heroVignette} />
      </div>

      <div className={cn(ds.heroContentLayer, ds.container, ds.heroLayout)}>
        <div className={ds.heroCopy}>
          <p className={ds.kickerHero}>
            {PERSON.title} · {PERSON.location.split(',')[0]}
          </p>
          <h1 id="hero-title" className={cn(ds.rhythmHeroH1, ds.h1Hero)}>
            {hero.headline}
          </h1>
          <p className={cn(ds.rhythmHeroSubhead, ds.heroLead)}>{hero.subhead}</p>

          {hero.routeIntro ? <p className={ds.heroRouteIntro}>{hero.routeIntro}</p> : null}

          <ul className={cn(ds.rhythmHeroProof, ds.proofList)}>
            {hero.proofPoints.map((line) => (
              <li key={line} className={ds.proofListItem}>
                {line}
              </li>
            ))}
          </ul>

          <div className={ds.rhythmHeroCTA}>
            <Button variant="primary" onClick={() => scrollToSection('projects')}>
              Case studies
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
            {RESUME_URL ? (
              <Button
                variant="ghost"
                className={ds.btnGhostPadX}
                href={RESUME_URL}
                {...(RESUME_URL.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : { download: true })}
              >
                Résumé
              </Button>
            ) : null}
          </div>

          <div className={ds.rhythmHeroSocial}>
            <span className={cn(ds.profilesLabel, ds.textMuted)}>Profiles</span>
            <div className={ds.rhythmHeroSocialIcons}>
              {[
                { href: PERSON.github, label: 'GitHub', Icon: Github },
                { href: PERSON.linkedin, label: 'LinkedIn', Icon: Linkedin },
              ].map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={ds.socialCircle} aria-label={label}>
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </a>
              ))}
              <a href={PERSON.x} target="_blank" rel="noopener noreferrer" className={ds.socialCircle} aria-label="X">
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <aside className={ds.heroGlanceAside} aria-label="Summary">
          <div className={ds.heroGlanceCard}>
            <div className={ds.heroGlanceSheen} aria-hidden />
            <div className={ds.heroGlanceGlow} aria-hidden />
            <p className={ds.heroGlanceLabel}>At a glance</p>
            <p className={ds.heroGlanceName}>{PERSON.name}</p>
            <p className={ds.heroGlanceRole}>{PERSON.title}</p>
            <div className={ds.heroGlanceBlock}>
              {[
                { k: 'Stack', v: 'MongoDB · Express · React · Node' },
                { k: 'Focus', v: 'REST · JWT · RBAC · ops-ready UIs' },
                { k: 'Base', v: PERSON.location },
              ].map((row) => (
                <div key={row.k} className={ds.rhythmHeroPanelRow}>
                  <span className={ds.heroGlanceMetaKey}>{row.k}</span>
                  <span className={ds.heroGlanceMetaValue}>{row.v}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
