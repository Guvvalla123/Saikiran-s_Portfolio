import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext.jsx'
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
  const { theme, toggleTheme } = useTheme()

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
        'fixed top-0 z-50 w-full transition-[border-color,background-color,box-shadow] duration-300 ease-out',
        scrolled ? ds.surfaceHeaderScrolled : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className={cn('flex h-16 items-center justify-between', ds.container)}>
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            go('hero')
          }}
          className={cn(ds.navBrand, ds.textPrimary, activeSection === 'hero' && ds.navBrandActive)}
          aria-current={activeSection === 'hero' ? 'location' : undefined}
        >
          <span className="sm:hidden">SG</span>
          <span className="hidden sm:inline">Saikiran Guvvalla</span>
        </a>

        <div className={ds.navTray}>
          <nav className="hidden items-center md:flex" aria-label="Primary">
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

          <button type="button" onClick={toggleTheme} className={cn(ds.iconButton, ds.insetStartSm)} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" strokeWidth={1.5} /> : <Moon className="h-[18px] w-[18px]" strokeWidth={1.5} />}
          </button>

          <button type="button" className={cn(ds.iconButton, 'md:hidden')} aria-expanded={open} aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className={cn(ds.surfaceMobileNav, ds.pageX, ds.navMobileSheetPad)}>
          <nav className="flex flex-col" aria-label="Mobile">
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
