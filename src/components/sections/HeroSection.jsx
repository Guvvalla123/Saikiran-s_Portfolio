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

function HeroHeadline({ headline, accent }) {
  if (!accent) return headline
  const i = headline.indexOf(accent)
  if (i < 0) return headline
  return (
    <>
      {headline.slice(0, i)}
      <span className={ds.heroHeadlineAccent}>{accent}</span>
      {headline.slice(i + accent.length)}
    </>
  )
}

export function HeroSection() {
  return (
    <section id="hero" className={ds.heroSection} aria-labelledby="hero-title">
      <div className={ds.heroDecorLayer} aria-hidden>
        <div className={ds.heroRadialGlow} />
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
            <HeroHeadline headline={hero.headline} accent={hero.headlineAccent} />
          </h1>

          <ul className={ds.heroHighlightList}>
            {hero.highlights.map((line) => (
              <li key={line} className={ds.heroHighlightItem}>
                {line}
              </li>
            ))}
          </ul>

          <div className={ds.rhythmHeroCTA}>
            <Button variant="primary" className={ds.btnPrimaryProminent} onClick={() => scrollToSection('projects')}>
              View work
              <ArrowRight className={ds.iconSm} strokeWidth={2} />
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
                  <Icon className={ds.iconHeroSocial} strokeWidth={1.75} />
                </a>
              ))}
              <a href={PERSON.x} target="_blank" rel="noopener noreferrer" className={ds.socialCircle} aria-label="X">
                <XIcon className={ds.iconSm} />
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
                { k: 'Focus', v: 'APIs, access rules, tools for staff' },
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
