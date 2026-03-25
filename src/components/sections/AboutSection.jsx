import { Section } from '../shell/Section.jsx'
import { ImageWithFallback } from '../ImageWithFallback.jsx'
import { about, strengths } from '../../data/profile.js'
import { PERSON } from '../../data/site.js'
import { cn, ds } from '../../ds/classNames.js'

export function AboutSection() {
  return (
    <Section id="about" kicker="About" title="Shipping systems that hold up in production." intro={about.lede}>
      <div className={ds.gridAbout}>
        <ImageWithFallback
          src="/sai.png"
          alt="Saikiran Guvvalla, full stack developer"
          className={cn('aspect-[4/5] w-full max-w-sm rounded-2xl object-cover lg:max-w-none', ds.ringImage)}
          width={400}
          height={500}
          priority
        />

        <div className={ds.stackAbout}>
          <p className={cn('max-w-prose', ds.body)}>{about.body}</p>

          <div>
            <p className={ds.kickerNeutral}>Strengths</p>
            <ul className={ds.rhythmAfterKickerNeutral}>
              {strengths.map((s) => (
                <li key={s} className={ds.chipRound}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <dl className={ds.gridContactCards}>
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
      </div>
    </Section>
  )
}
