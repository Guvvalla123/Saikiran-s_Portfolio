import { useState } from 'react'
import { cn, ds } from '../ds/classNames.js'

export function ImageWithFallback({ src, alt, className = '', initials = 'SG', priority = false, ...props }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={cn(ds.imageFallback, className)} role="img" aria-label={alt}>
        {initials}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...(priority ? { fetchpriority: 'high' } : {})}
      onError={() => setFailed(true)}
      {...props}
    />
  )
}
