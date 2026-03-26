import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { ds } from '../ds/classNames.js'

export function ScrollTopFab() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button type="button" className={ds.scrollFab} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <ArrowUp className={ds.iconMd} strokeWidth={1.75} />
    </button>
  )
}
