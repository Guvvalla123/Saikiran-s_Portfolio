import { Section } from '../shell/Section.jsx'
import { about, strengths } from '../../data/profile.js'
import { PERSON } from '../../data/site.js'
import { cn, ds } from '../../ds/classNames.js'

export function AboutSection() {
  return (
    <Section id="about" kicker="About" title="Systems that hold up in production." intro={about.lede}>
      <div className={ds.aboutLayout}>
        <div className={ds.aboutCopyStack}>
          <ul className={ds.aboutBulletList}>
            {about.bullets.map((line) => (
              <li key={line} className={ds.aboutBulletItem}>
                <span className={ds.bulletDot} aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <div className={ds.strengthsBlock}>
            <p className={ds.kickerNeutral}>Strengths</p>
            <ul className={ds.strengthsChipList}>
              {strengths.map((s) => (
                <li key={s} className={ds.chipRound}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <dl className={ds.aboutContactGrid}>
          {[
            ['Location', PERSON.location],
            [
              'Email',
              <a key="e" href={`mailto:${PERSON.email}`} className={ds.linkAccent}>
                {PERSON.email}
              </a>,
            ],
            [
              'Phone',
              <a key="p" href={`tel:${PERSON.phoneTel}`} className={ds.linkAccent}>
                {PERSON.phone}
              </a>,
            ],
          ].map(([k, v]) => (
            <div key={k} className={ds.contactCard}>
              <dt className={ds.monoMetaXs}>{k}</dt>
              <dd className={cn(ds.contactDd, ds.textStrongMuted)}>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
