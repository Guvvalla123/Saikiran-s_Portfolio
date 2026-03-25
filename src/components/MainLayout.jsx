import { Outlet } from 'react-router-dom'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { Navbar } from './shell/Navbar.jsx'
import { Footer } from './shell/Footer.jsx'
import { ScrollTopFab } from './ScrollTopFab.jsx'

export function MainLayout() {
  const activeSection = useActiveSection()

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Outlet />
      <Footer />
      <ScrollTopFab />
    </>
  )
}
