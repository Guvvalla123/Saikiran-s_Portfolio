import { Section } from '../shell/Section.jsx'
import { experience, education } from '../../data/experience.js'
import { TimelineRow } from './TimelineRow.jsx'
import { cn, ds } from '../../ds/classNames.js'

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      surface="muted"
      kicker="Experience"
      title="Where I’ve shipped impact."
      intro="Enterprise MERN products, security-minded APIs, and operator-facing workflows — from intern to full stack owner."
    >
      <div className={ds.gridExperience}>
        <div className="relative">
          <div className={ds.timelineLine} aria-hidden />
          <div className="relative">
            {experience.map((job, i) => (
              <TimelineRow key={job.id} index={i}>
                <div className={ds.surfaceCardMuted}>
                  <div className={ds.experienceJobHeader}>
                    <div>
                      <h3 className={ds.h3Plain}>{job.title}</h3>
                      <p className={cn(ds.experienceCompany, ds.textTertiary)}>{job.company}</p>
                    </div>
                    <p className={ds.monoMeta}>{job.period}</p>
                  </div>
                  <p className={cn(ds.experienceLocation, ds.textSecondary)}>{job.location}</p>
                  <p className={cn(ds.experienceSummary, ds.textSecondary)}>{job.summary}</p>
                  <ul className={ds.highlightList}>
                    {job.highlights.map((h) => (
                      <li key={h} className={cn(ds.experienceHighlightRow, ds.textSecondary)}>
                        <span className={ds.bulletDot} aria-hidden />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TimelineRow>
            ))}
          </div>
        </div>

        <aside className={ds.educationAside} aria-label="Education">
          <p className={ds.sectionKicker}>Education</p>
          <ul className={ds.educationList}>
            {education.map((e) => (
              <li key={e.degree} className={ds.educationItem}>
                <p className={cn('text-sm font-semibold', ds.textPrimary)}>{e.degree}</p>
                <p className={cn(ds.educationSchool, ds.textSecondary)}>{e.school}</p>
                <p className={cn(ds.educationPeriod, ds.monoMeta)}>{e.period}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}
