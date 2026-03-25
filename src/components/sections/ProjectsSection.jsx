import { useCallback, useEffect, useState } from 'react'
import { Section } from '../shell/Section.jsx'
import { ProjectCard } from '../projects/ProjectCard.jsx'
import { ProjectGridSkeleton } from '../projects/ProjectGridSkeleton.jsx'
import { FilterToggle } from '../ui/FilterToggle.jsx'
import { Button } from '../ui/Button.jsx'
import { projectFilters } from '../../data/projects.js'
import { simulateProjectFetch } from '../../lib/simulateProjectFetch.js'
import { cn, ds } from '../../ds/classNames.js'

export function ProjectsSection() {
  const [filter, setFilter] = useState('all')
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError('')

    simulateProjectFetch(filter)
      .then((data) => {
        if (!cancelled) {
          setList(data)
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Something went wrong.')
          setList([])
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [filter])

  const retry = useCallback(() => {
    setLoading(true)
    setError('')
    simulateProjectFetch(filter)
      .then((data) => setList(data))
      .catch((e) => {
        setError(e instanceof Error ? e.message : 'Something went wrong.')
        setList([])
      })
      .finally(() => setLoading(false))
  }, [filter])

  const empty = !loading && !error && list.length === 0

  return (
    <Section
      id="projects"
      kicker="Projects"
      title="Case studies, not bullet lists."
      intro="Each build maps to a real constraint: access control, async workflows, or data that has to stay fast under load."
    >
      <div className={ds.filterRow} role="group" aria-label="Filter projects by category">
        {projectFilters.map((f) => (
          <FilterToggle key={f.id} id={f.id} selected={filter === f.id} disabled={loading} onSelect={setFilter}>
            {f.label}
          </FilterToggle>
        ))}
      </div>

      <div
        className={cn(ds.projectsGridMinH)}
        role="region"
        aria-label="Projects matching the selected filter"
        aria-busy={loading}
        aria-live="polite"
      >
        {loading ? <ProjectGridSkeleton /> : null}

        {!loading && error ? (
          <div className={cn(ds.emptyStateWrap)} role="alert">
            <p className={ds.emptyStateTitle}>Couldn’t load projects</p>
            <p className={cn(ds.emptyStateBody, ds.insetTop2)}>{error}</p>
            <div className={cn(ds.formActions)}>
              <Button variant="secondary" type="button" onClick={() => retry()}>
                Retry
              </Button>
            </div>
          </div>
        ) : null}

        {!loading && !error && empty ? (
          <div className={ds.emptyStateWrap} role="status">
            <p className={ds.emptyStateTitle}>No projects for this filter</p>
            <p className={cn(ds.emptyStateBody, ds.insetTop2)}>Try another category or show the full catalog.</p>
            <div className={cn(ds.formActions)}>
              <Button variant="secondary" type="button" onClick={() => setFilter('all')}>
                Show all
              </Button>
            </div>
          </div>
        ) : null}

        {!loading && !error && !empty ? (
          <div className={ds.gridProjects}>
            {list.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        ) : null}
      </div>
    </Section>
  )
}
