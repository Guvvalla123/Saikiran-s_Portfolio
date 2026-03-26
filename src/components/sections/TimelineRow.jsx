import { useInView } from '../../hooks/useInView.js'
import { cn, ds } from '../../ds/classNames.js'

export function TimelineRow({ index, children }) {
  const [ref, inView] = useInView({ rootMargin: '0px 0px -6% 0px' })

  return (
    <div
      ref={ref}
      className={cn(ds.timelineRow, inView && ds.sectionRevealStateInView)}
      style={inView ? { animationDelay: `${index * 72}ms` } : undefined}
    >
      <span className={ds.timelineDot} aria-hidden />
      {children}
    </div>
  )
}
