import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { HeroSection } from '../components/sections/HeroSection.jsx'
import { AboutSection } from '../components/sections/AboutSection.jsx'
import { ExperienceSection } from '../components/sections/ExperienceSection.jsx'
import { PERSON, SITE_URL } from '../data/site.js'
import { cn, ds } from '../ds/classNames.js'

const BelowFoldSections = lazy(() => import('../components/BelowFoldSections.jsx'))

function BelowFoldFallback() {
  return (
    <div className={cn(ds.container, ds.belowFoldFallback)} aria-hidden>
      <div className={cn(ds.belowFoldFallbackBar, ds.belowFoldFallbackKicker)} />
      <div className={cn(ds.belowFoldFallbackBar, ds.belowFoldFallbackBlock)} />
      <div className={cn(ds.belowFoldFallbackBar, ds.belowFoldFallbackWide, ds.insetTop4)} />
    </div>
  )
}

const description =
  'Full stack developer (MERN): REST APIs, auth, MongoDB, and React tools for real teams. Based in Hyderabad, India.'

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PERSON.name,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/sai.png`,
  jobTitle: PERSON.title,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  sameAs: [PERSON.linkedin, PERSON.github, PERSON.x],
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'REST APIs',
    'JWT',
    'TanStack Query',
    'Redis',
    'BullMQ',
  ],
}

export default function PortfolioPage() {
  const canonical = `${SITE_URL}/`

  return (
    <>
      <Helmet>
        <title>{`Saikiran Guvvalla | ${PERSON.title}`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Saikiran Guvvalla | ${PERSON.title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(personLd)}</script>
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <Suspense fallback={<BelowFoldFallback />}>
        <BelowFoldSections />
      </Suspense>
    </>
  )
}
