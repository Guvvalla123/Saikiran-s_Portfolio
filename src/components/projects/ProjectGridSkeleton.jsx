import { cn, ds } from '../../ds/classNames.js'

export function ProjectGridSkeleton() {
  return (
    <div className={cn(ds.gridProjects, ds.projectsGridMinH)} aria-hidden>
      {[0, 1, 2, 3].map((key) => (
        <div key={key} className={cn(ds.surfaceCard, ds.skeletonCard)}>
          <div className={cn(ds.skeletonBar, ds.skeletonBarLg, ds.skeletonMaxWide)} />
          <div className={cn(ds.skeletonBar, ds.skeletonBarSm, ds.skeletonMaxMid, ds.insetTop3)} />
          <div className={cn(ds.skeletonBar, ds.skeletonBarMd, ds.skeletonMaxWide, ds.insetTop6)} />
          <div className={cn(ds.skeletonBar, ds.skeletonBarMd, ds.skeletonMaxMid, ds.insetTop2)} />
          <div className={cn(ds.skeletonBar, ds.skeletonBarSm, ds.skeletonMaxNarrow, ds.insetTop8)} />
        </div>
      ))}
    </div>
  )
}
