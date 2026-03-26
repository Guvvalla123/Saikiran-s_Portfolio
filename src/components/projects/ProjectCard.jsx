import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button.jsx'
import { CardShell } from '../ui/CardShell.jsx'
import { cn, ds } from '../../ds/classNames.js'

export function ProjectCard({ project }) {
  const highlights = project.features.slice(0, 3)
  const techLine = project.tech.join(' • ')

  return (
    <CardShell className={cn(ds.projectCardShell, ds.projectCardChrome, ds.projectCardInteractive, ds.projectCardPad)}>
      <article className={ds.projectCardArticle} aria-labelledby={`project-title-${project.id}`}>
        <header className={ds.projectCardHeader}>
          <h3 id={`project-title-${project.id}`} className={ds.projectCardTitle}>
            {project.title}
          </h3>
          <span className={ds.projectStatusBadge}>{project.status}</span>
        </header>

        <p className={ds.projectHook}>{project.hook}</p>

        <div className={ds.projectHighlightsBlock}>
          <p className={ds.projectHighlightsLabel}>Highlights</p>
          <ul className={ds.projectFeatureList}>
            {highlights.map((line) => (
              <li key={line} className={ds.projectFeatureRow}>
                <span className={ds.bulletDot} aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <footer className={ds.projectCardFooter}>
          <p className={ds.projectTechInline} title={techLine}>
            {techLine}
          </p>
          <Button
            variant="primary"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(ds.btnPrimaryProminent, ds.projectViewCodeButton)}
          >
            View code
            <ArrowRight className={ds.iconSm} strokeWidth={2} aria-hidden />
          </Button>
        </footer>
      </article>
    </CardShell>
  )
}
