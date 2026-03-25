import { cn, ds } from '../../ds/classNames.js'

/**
 * Standard section title block — keeps kicker → heading → intro hierarchy consistent.
 */
export function SectionHeader({ kicker, title, intro, className = '' }) {
  if (!kicker && !title && !intro) return null

  return (
    <header className={cn(ds.sectionHeader, className)}>
      {kicker ? <p className={ds.sectionKicker}>{kicker}</p> : null}
      {title ? <h2 className={cn(ds.sectionH2, ds.h2)}>{title}</h2> : null}
      {intro ? <p className={cn(ds.sectionIntro, ds.sectionIntroText)}>{intro}</p> : null}
    </header>
  )
}
