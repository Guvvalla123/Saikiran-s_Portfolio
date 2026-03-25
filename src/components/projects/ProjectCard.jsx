import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '../ui/Button.jsx'
import { CardShell } from '../ui/CardShell.jsx'
import { cn, ds } from '../../ds/classNames.js'

export function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <CardShell className="h-full flex flex-col">
      <article className="flex min-h-0 flex-1 flex-col" aria-labelledby={`project-title-${project.id}`}>
        <p className={ds.kickerNeutral}>Case study</p>
        <h3 id={`project-title-${project.id}`} className={cn(ds.rhythmCardAfterTitle, ds.h3)}>
          {project.title}
        </h3>
        <p className={cn(ds.rhythmCardSubtitle, ds.textSecondary)}>{project.tagline}</p>

        <p className={cn(ds.rhythmCardAfterTitle, ds.metaProjectStack)}>{project.stack}</p>

        <dl className={ds.caseStudyStack}>
          <div>
            <dt className={ds.caseStudyDt}>Problem</dt>
            <dd className={ds.caseStudyDd}>{project.problem}</dd>
          </div>
        </dl>

        <div
          className={cn(
            ds.caseStudyCollapseWrap,
            ds.caseStudyCollapseGrid,
            open ? ds.caseStudyCollapseOpen : ds.caseStudyCollapseClosed,
          )}
        >
          <div className={ds.caseStudyCollapseInner}>
            <dl className={ds.caseStudyExpandDl}>
              <div>
                <dt className={ds.caseStudyDt}>Solution</dt>
                <dd className={ds.caseStudyDd}>{project.solution}</dd>
              </div>
              <div>
                <dt className={ds.caseStudyDt}>Impact</dt>
                <dd className={ds.caseStudyDd}>{project.impact}</dd>
              </div>
            </dl>
          </div>
        </div>

        <Button variant="secondary" type="button" className={ds.btnProjectExpand} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? 'Less' : 'Full case study'}
          <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', open && 'rotate-180')} strokeWidth={1.75} aria-hidden />
        </Button>

        <div className={ds.rhythmCardTags}>
          {project.categories.map((c) => (
            <span key={c} className={ds.chip}>
              {c}
            </span>
          ))}
        </div>
      </article>
    </CardShell>
  )
}
