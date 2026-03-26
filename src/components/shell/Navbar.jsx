import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '../../lib/scroll.js'
import { cn, ds } from '../../ds/classNames.js'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar({ activeSection = 'hero' }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  function go(id) {
    scrollToSection(id)
    setOpen(false)
  }

  return (
    <header
      className={cn(
        ds.navHeaderFixed,
        scrolled ? ds.surfaceHeaderScrolled : ds.navHeaderIdle,
      )}
    >
      <div className={ds.navBarInner}>
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            go('hero')
          }}
          className={cn(ds.navBrand, ds.textPrimary, activeSection === 'hero' && ds.navBrandActive)}
          aria-current={activeSection === 'hero' ? 'location' : undefined}
        >
          <span className={ds.navBrandTextSm}>SG</span>
          <span className={ds.navBrandTextMd}>Saikiran Guvvalla</span>
        </a>

        <div className={ds.navTray}>
          <nav className={ds.navDesktop} aria-label="Primary">
            {NAV.map(({ id, label }) => {
              const isActive = activeSection === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => go(id)}
                  className={cn(isActive ? ds.navLinkActive : ds.navLink)}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {label}
                  <span className={isActive ? ds.navUnderlineActive : ds.navUnderline} aria-hidden />
                </button>
              )
            })}
          </nav>

          <button type="button" className={cn(ds.iconButton, 'md:hidden')} aria-expanded={open} aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className={cn(ds.surfaceMobileNav, ds.pageX, ds.navMobileSheetPad)}>
          <nav className={ds.navMobileNavStack} aria-label="Mobile">
            <button
              type="button"
              className={cn(ds.navMobileLink, ds.focusRing, ds.textPrimary, activeSection === 'hero' && ds.navMobileLinkActive)}
              aria-current={activeSection === 'hero' ? 'location' : undefined}
              onClick={() => go('hero')}
            >
              Home
            </button>
            {NAV.map(({ id, label }) => {
              const isActive = activeSection === id
              return (
                <button
                  key={id}
                  type="button"
                  className={cn(ds.navMobileLink, ds.focusRing, ds.textPrimary, isActive && ds.navMobileLinkActive)}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={() => go(id)}
                >
                  {label}
                </button>
              )
            })}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
