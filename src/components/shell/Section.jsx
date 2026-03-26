import { useInView } from '../../hooks/useInView.js'
import { cn, ds } from '../../ds/classNames.js'
import { SectionHeader } from '../ui/SectionHeader.jsx'

const SURFACE = {
  default: ds.sectionToneDefault,
  muted: ds.sectionToneMuted,
  wash: ds.sectionToneWash,
  projects: ds.sectionToneProjects,
}

/**
 * @param {'default' | 'muted' | 'wash' | 'projects'} [surface] — alternating canvas for scroll rhythm
 */
export function Section({ id, kicker, title, intro, children, className = '', surface = 'default' }) {
  const [ref, inView] = useInView({ rootMargin: '0px 0px -6% 0px' })
  const tone = SURFACE[surface] ?? SURFACE.default

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        ds.sectionRoot,
        tone,
        ds.sectionY,
        ds.sectionReveal,
        inView && ds.sectionRevealStateInView,
        className,
      )}
    >
      <div className={cn(ds.container, ds.sectionContent)}>
        <SectionHeader kicker={kicker} title={title} intro={intro} />
        {children}
      </div>
    </section>
  )
}
