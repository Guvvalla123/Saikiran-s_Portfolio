import { Section } from '../shell/Section.jsx'
import { ProjectCard } from '../projects/ProjectCard.jsx'
import { projects, projectsSectionIntro } from '../../data/projects.js'
import { ds } from '../../ds/classNames.js'

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      surface="projects"
      kicker="Projects"
      title="What I’m building."
      intro={projectsSectionIntro}
    >
      <div className={ds.gridProjects}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  )
}
