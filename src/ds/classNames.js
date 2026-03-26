/**
 * Design system — dark-first, premium SaaS-grade surfaces (no light theme).
 * Indigo-only accent. Components use `cn(ds.*)` only.
 *
 * Copy convention: **sentence case** in source strings (headlines, labels, buttons).
 * SP = spacing primitives (4px Tailwind scale).
 */

/** Layered float shadow — cards / panels */
const SHADOW_FLOAT = 'shadow-[0_10px_40px_rgba(0,0,0,0.6)]'
const SHADOW_PRIMARY_GLOW = 'shadow-[0_0_18px_rgba(99,102,241,0.22)]'

export function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}

const FOCUS_RING =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'

/** Shared horizontal shell — navbar row + main `ds.container` */
const LAYOUT_CONTAINER = 'mx-auto max-w-5xl px-5 sm:px-8'

const iconButtonBase = cn(
  'rounded-lg p-2 text-zinc-400 transition-colors duration-200 hover:bg-zinc-800/90 hover:text-white',
  FOCUS_RING,
)

/** Spacing scale: stacks, gaps, insets, pads — single source */
const SP = {
  stackXs: 'space-y-2',
  stackSm: 'space-y-3',
  stackSmPlus: 'space-y-3.5',
  stackMd: 'space-y-4',
  stackLg: 'space-y-6',
  stackXl: 'space-y-8',
  stack2xl: 'space-y-10',
  stackDense: 'space-y-2.5',

  inlineGapMicro: 'gap-0.5',
  inlineGapTight: 'gap-1',
  inlineGap2: 'gap-2',
  inlineGap3: 'gap-3',
  inlineGap4: 'gap-4',
  inlineGap6: 'gap-6',
  inlineGap10: 'gap-10',

  gridGapMd: 'gap-6',
  gridGapLg: 'gap-14 lg:gap-16',
  gridGapXl: 'gap-20 lg:gap-16',
  gridGapContact: 'gap-8 lg:gap-10',
  formGap: 'gap-4',

  insetTop0p5: 'mt-0.5',
  insetTop1: 'mt-1',
  insetTop1p5: 'mt-1.5',
  insetTop2: 'mt-2',
  insetTop3: 'mt-3',
  insetTop4: 'mt-4',
  insetTop5: 'mt-5',
  insetTop6: 'mt-6',
  insetTop7: 'mt-7',
  insetTop8: 'mt-8',
  insetTop12: 'mt-12',
  insetTop10: 'mt-10',
  insetTop11: 'mt-11',
  insetTop14: 'mt-14',
  insetTop16: 'mt-16',

  insetBottom12: 'mb-12',
  sectionHeaderMargin: 'mb-14 md:mb-20 lg:mb-24',

  insetStartSm: 'ml-1',

  padTopNavClear: 'pt-16',
  padYSm: 'py-3',
  padBottomTimeline: 'pb-14',
  padLeftTimeline: 'pl-9 md:pl-11',
  padXContentTight: 'px-3',

  padTopAsideLg: 'lg:pt-2',

  heroPadBottom: 'pb-24 md:pb-32',
  heroPadTop: 'pt-14 md:pt-20 lg:pt-24',
  padTopLoose: 'pt-7',
  padHeroGlance: 'p-5 md:p-6',
}

export const ds = {
  ...SP,

  pageX: 'px-5 sm:px-8',
  container: LAYOUT_CONTAINER,
  /** Navbar inner row — same width as sections */
  navBarInner: cn('flex h-16 items-center justify-between', LAYOUT_CONTAINER),
  navHeaderFixed:
    'fixed top-0 z-50 w-full transition-[border-color,background-color,box-shadow,backdrop-filter] duration-300 ease-out',
  /** Section inner wrapper — stacks above tonal backgrounds */
  sectionContent: 'relative z-[1]',
  sectionY: 'py-24 md:py-28 lg:py-32',
  /** Deep base — slight top edge for separation */
  sectionToneDefault: cn(
    'border-t border-zinc-800/80 bg-zinc-950 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-950',
  ),
  /** Stepped surface — reads as a distinct band */
  sectionToneMuted: cn(
    'border-t border-zinc-800 bg-gradient-to-b from-zinc-900/95 via-zinc-900 to-zinc-950',
  ),
  /** Skills — restrained indigo lift */
  sectionToneWash: cn(
    'border-t border-zinc-800 bg-gradient-to-b from-indigo-500/[0.06] via-zinc-950 to-zinc-950',
  ),
  /** Projects — hiring focal plane */
  sectionToneProjects: cn(
    'border-t border-zinc-800 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950',
  ),
  sectionReveal: 'section-reveal-on-view',
  sectionRoot: 'relative',
  /** Pairs with `.section-reveal-on-view` in index.css */
  sectionRevealStateInView: 'is-inview',
  footerSurface: cn(
    'relative isolate overflow-hidden border-t border-zinc-800',
    'bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900',
    "before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-px before:w-full before:content-['']",
    'before:bg-gradient-to-r before:from-transparent before:via-indigo-500/45 before:to-transparent',
  ),
  footerY: 'py-20 md:py-24',
  footerDecorGlow:
    'pointer-events-none absolute inset-0 z-0 opacity-20',
  footerDecorGlowBlob:
    'absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 bg-indigo-500/10 blur-3xl',
  footerShell: 'relative z-[1] mx-auto max-w-6xl px-6',
  footerGrid: cn(
    'grid grid-cols-1 gap-x-16 gap-y-10',
    'md:grid-cols-3 md:items-start',
  ),
  footerColLeft: 'flex min-w-0 flex-col gap-3',
  footerBrandRow: 'flex flex-wrap items-center gap-3',
  footerLogoMark: cn(
    'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
    'border border-indigo-500/20 bg-gradient-to-br from-indigo-500/20 to-indigo-500/5',
    'shadow-[0_0_20px_rgba(99,102,241,0.15)]',
    'text-sm font-semibold text-white',
    'transition-transform duration-300 motion-safe:hover:scale-105',
  ),
  footerName: 'text-lg font-semibold text-white',
  footerRole: 'text-sm text-indigo-400',
  footerDescription: 'max-w-xs text-sm text-zinc-400',
  footerNavBlock: 'flex flex-col items-center md:items-center',
  footerExploreHeading:
    'mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500',
  footerNavCol: 'flex w-full flex-col items-center space-y-3 md:items-center',
  footerNavLinkButton: cn(
    'group cursor-pointer border-0 bg-transparent p-0 text-left font-inherit text-sm',
    'transition-all duration-300',
    FOCUS_RING,
    'rounded-sm',
  ),
  footerNavLinkRow: cn(
    'inline-flex items-center gap-2',
    'transition-transform duration-300 motion-safe:group-hover:translate-x-1',
  ),
  footerNavIcon:
    'h-4 w-4 shrink-0 text-zinc-500 transition-all duration-300 group-hover:text-white',
  footerNavLabel: cn(
    'relative inline-block text-zinc-400 transition-colors duration-300 group-hover:text-white',
    "after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-indigo-400 after:transition-all after:duration-300 after:content-['']",
    'group-hover:after:w-full',
  ),
  footerSocialCol: 'flex flex-col items-center space-y-3 md:items-end',
  footerSocialLink: cn(
    'group inline-flex items-center gap-2 text-sm text-zinc-400',
    'transition-all duration-300',
    'motion-safe:group-hover:drop-shadow-[0_0_6px_rgba(99,102,241,0.4)]',
    'group-hover:text-white',
    FOCUS_RING,
    'rounded-sm',
  ),
  footerSocialIcon: cn(
    'h-4 w-4 shrink-0 text-zinc-400 transition-all duration-300',
    'motion-safe:group-hover:scale-110 group-hover:text-white',
  ),
  footerSignature: 'mt-10 max-w-md text-sm text-zinc-500',
  footerBottomBar: cn(
    'mt-12 flex flex-col gap-4 border-t border-zinc-800/80 pt-6',
    'sm:flex-row sm:items-center sm:justify-between',
  ),
  footerCopyrightLine: 'text-xs text-zinc-500',
  footerBuiltWith: 'text-xs text-zinc-500',
  sectionHeader: SP.sectionHeaderMargin,
  sectionH2: cn(SP.insetTop4, 'max-w-3xl'),
  sectionIntro: cn(SP.insetTop6, 'max-w-xl'),
  cardPad: 'p-6 md:p-7',

  rhythmHeroH1: SP.insetTop6,
  rhythmHeroSubhead: cn(SP.insetTop7, 'max-w-[34rem]'),
  heroRouteIntro: cn(SP.insetTop6, 'max-w-[36rem] text-sm leading-relaxed text-zinc-400'),
  rhythmHeroProof: SP.insetTop10,
  rhythmHeroCTA: cn(SP.insetTop16, 'flex flex-wrap items-center', SP.inlineGap4),
  heroHighlightList: cn(SP.insetTop14, 'm-0 max-w-xl list-none p-0', SP.stackMd),
  heroHighlightItem:
    'relative pl-[1.125rem] text-[0.9375rem] font-medium leading-relaxed text-zinc-400 before:absolute before:left-0 before:top-[0.45em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-indigo-400',
  btnPrimaryProminent: cn(
    'px-6 py-3 text-[15px] font-semibold',
    SHADOW_PRIMARY_GLOW,
    'ring-1 ring-indigo-400/30',
    'hover:brightness-[1.04] motion-safe:hover:scale-[1.01] transition-[transform,filter,box-shadow] duration-300 ease-out',
  ),
  heroCopy: 'min-w-0 w-full max-w-[min(36rem,100%)]',
  heroLayout: cn(
    SP.heroPadTop,
    SP.heroPadBottom,
    'grid grid-cols-1 gap-14 md:grid-cols-[minmax(0,1fr)_minmax(280px,320px)] md:items-start md:gap-x-14 md:gap-y-0 lg:gap-x-[4.5rem]',
  ),
  heroGlanceAside: cn('w-full max-w-md md:max-w-none', 'md:pt-6 lg:pt-8'),
  heroGlanceMetaKey:
    'shrink-0 font-mono text-[10px] font-medium tracking-wide text-zinc-500',
  heroGlanceMetaValue: 'text-right text-xs font-medium text-zinc-300',
  rhythmHeroSocial: cn(SP.insetTop16, 'flex items-center', SP.inlineGap4),
  rhythmHeroSocialIcons: cn('flex', SP.inlineGap2),
  heroGlanceLabel: cn('font-mono text-[10px] font-medium tracking-wide text-zinc-500'),
  heroGlanceName: cn(SP.insetTop4, 'text-lg font-semibold tracking-tight text-white'),
  heroGlanceRole: cn(SP.insetTop1, 'text-sm text-zinc-400'),
  heroGlanceBlock: cn(SP.insetTop6, SP.stackSm, SP.padTopLoose, 'border-t border-zinc-800'),
  rhythmHeroPanelRow: cn('flex justify-between items-baseline', SP.inlineGap4),
  rhythmContactRow: cn('flex', SP.inlineGap4),
  rhythmContactBody: cn(SP.insetTop1, 'text-sm'),
  rhythmCardAfterTitle: SP.insetTop4,
  rhythmCardSubtitle: cn(SP.insetTop1, 'text-sm'),
  rhythmCardTags: cn('mt-auto flex flex-wrap pt-6', SP.inlineGap2),
  skillItemList: cn(SP.insetTop5, 'm-0 flex flex-wrap gap-2.5 p-0', 'list-none'),
  skillItem: cn(
    'flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/60 px-3 py-2 text-sm text-zinc-300',
    'transition-all duration-300 hover:border-indigo-500 hover:bg-zinc-800',
  ),
  /** Fixed 16×16 slot so text-only rows align with [icon + gap] rows */
  skillItemIconSlot: 'inline-flex h-4 w-4 shrink-0 items-center justify-center',
  skillItemSi: 'text-zinc-400',
  skillItemHighlight: 'border-indigo-500/40 text-white',
  educationItem: 'border-l-2 border-zinc-800 pl-4',
  gridSpan2: 'sm:col-span-2',
  textareaField: 'min-h-[120px] resize-y',
  srOnly: 'sr-only',
  formHoneypot: 'hidden select-none',

  bodyRoot:
    'min-h-screen bg-zinc-950 font-sans text-zinc-400 antialiased selection:bg-indigo-500/30 selection:text-zinc-100 [font-optical-sizing:auto]',

  textPrimary: 'text-white',
  textSecondary: 'text-zinc-400',
  textMuted: 'text-zinc-500',
  textTertiary: 'text-zinc-300',
  textStrongMuted: 'text-zinc-200',
  textLabel: 'text-xs font-semibold tracking-normal text-zinc-400',
  linkAccent: cn(
    'rounded-sm font-semibold text-indigo-400 underline-offset-2 hover:underline',
    FOCUS_RING,
  ),
  textFooterBlurb: cn(SP.insetTop2, 'text-sm leading-relaxed'),
  textFooterCopyright: cn(SP.insetTop8, 'font-mono text-[11px]'),

  borderSubtle: 'border-zinc-800',
  borderCard: 'border-zinc-800',
  borderHairline: 'border-zinc-800',
  ringImage: 'ring-1 ring-zinc-800',
  borderLeftStrong: 'border-l-2 border-zinc-800',
  borderTopHairline: 'border-t border-zinc-800',

  /** Nav — glass bar, always readable over hero */
  navHeaderIdle: cn(
    'border-b border-zinc-800/40 bg-zinc-950/65 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150',
  ),
  surfaceHeaderScrolled: cn(
    'border-b border-zinc-800 bg-zinc-950/92 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150',
  ),
  surfaceMobileNav: cn('border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-xl'),
  /** Floating glass card — default shell */
  surfaceCard: cn(
    'rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl',
    SHADOW_FLOAT,
    'ring-1 ring-white/[0.04]',
  ),
  surfaceCardMuted: cn(
    'rounded-2xl border border-zinc-800 bg-zinc-900/75 backdrop-blur-xl p-6 md:p-7',
    SHADOW_FLOAT,
    'ring-1 ring-white/[0.035]',
  ),
  surfaceForm: cn(
    'rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl p-5 md:p-6',
    SHADOW_FLOAT,
    'ring-1 ring-white/[0.04]',
  ),
  surfaceIconBox: cn(
    'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-md',
    'shadow-[0_6px_24px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.03]',
  ),

  kicker: 'font-mono text-[11px] font-medium tracking-wide text-indigo-400',
  sectionKicker: cn(
    'border-l-2 border-indigo-400/50 pl-3 font-mono text-[11px] font-semibold tracking-wide text-indigo-400',
  ),
  kickerHero: cn('font-mono text-[11px] font-medium tracking-wide text-zinc-400'),
  kickerNeutral: 'font-mono text-[11px] font-medium tracking-wide text-zinc-500',
  h1: 'text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.15rem] lg:leading-[1.05]',
  h1Hero:
    'max-w-[min(100%,42rem)] text-balance text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-[3rem] sm:leading-[1.03] lg:text-[3.5rem] lg:leading-[1.02]',
  /** One highlighted word in the hero headline */
  heroHeadlineAccent:
    'bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-300 bg-clip-text text-transparent',
  h2: 'text-[1.95rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[2.1rem] md:text-[2.4rem] lg:text-[2.65rem] lg:leading-[1.06]',
  h3: 'text-lg font-semibold tracking-tight text-white',
  h3Plain: 'text-lg font-semibold text-white',
  body: 'text-base leading-[1.65] text-zinc-400',
  bodyLarge: 'text-[1.05rem] leading-[1.65] text-zinc-400',
  heroLead: 'text-[1.0625rem] font-normal leading-[1.62] text-zinc-400 sm:text-[1.125rem]',
  sectionIntroText: 'text-[1.02rem] leading-relaxed text-zinc-400',
  asideLabel: 'font-mono text-[10px] font-medium tracking-wide text-zinc-500',
  profilesLabel: 'font-mono text-[10px] tracking-wide',
  monoMeta: 'font-mono text-[11px] text-zinc-500',
  monoMetaXs: 'font-mono text-[10px] tracking-wide text-zinc-500',

  navLink: cn(
    'group relative rounded-md px-3 py-2 text-[13px] font-medium text-zinc-400 transition-colors duration-200 hover:text-white',
    FOCUS_RING,
  ),
  navLinkActive: cn(
    'relative rounded-md px-3 py-2 text-[13px] font-semibold text-indigo-400 transition-colors duration-200',
    FOCUS_RING,
  ),
  navUnderline:
    'absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 bg-indigo-400 transition-transform duration-300 ease-out group-hover:scale-x-100',
  navUnderlineActive:
    'absolute bottom-1 left-3 right-3 h-px origin-left scale-x-100 bg-indigo-400 transition-transform duration-300 ease-out',
  navBrand: cn(
    'min-w-0 shrink text-sm font-semibold tracking-tight text-white transition-opacity duration-200 hover:opacity-90',
  ),
  navBrandActive: 'text-indigo-400',
  navMobileLinkActive: 'text-indigo-400',
  navTray: cn('flex items-center', SP.inlineGapMicro),
  navBrandTextSm: 'sm:hidden',
  navBrandTextMd: 'hidden sm:inline',
  navDesktop: 'hidden items-center md:flex',
  navMobileNavStack: 'flex flex-col',
  navMobileSheetPad: SP.padYSm,
  navMobileLink: cn(SP.padYSm, 'text-left text-sm font-medium text-zinc-300'),
  iconButton: iconButtonBase,
  iconButtonMdHidden: cn(iconButtonBase, 'md:hidden'),

  focusRing: FOCUS_RING,
  btnBase:
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold tracking-tight transition-[transform,box-shadow,background-color,border-color,opacity,color] duration-200 ease-out will-change-transform disabled:pointer-events-none disabled:opacity-40 motion-reduce:transition-colors',
  btnLoading: 'cursor-wait opacity-90',
  iconSpin: 'h-4 w-4 shrink-0 animate-spin',
  btnPrimary: cn(
    'bg-indigo-500 text-white ring-1 ring-indigo-400/40',
    SHADOW_PRIMARY_GLOW,
    'hover:bg-indigo-400 hover:brightness-[1.05] hover:shadow-[0_0_22px_rgba(99,102,241,0.32)] hover:ring-indigo-300/45',
    'motion-safe:hover:scale-[1.01] motion-safe:active:scale-[0.99] transition-[transform,filter,box-shadow] duration-300 ease-out',
  ),
  btnSecondary:
    'border border-zinc-700/90 bg-transparent text-zinc-300 shadow-none ring-0 hover:border-zinc-600 hover:bg-zinc-800/50 hover:text-white motion-safe:active:scale-[0.99]',
  btnGhost:
    'font-medium text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-100',
  btnGhostPadX: SP.padXContentTight,

  /** Subtle radial focus — slow breathe via `.hero-radial-breathe` in index.css */
  heroRadialGlow: cn(
    'hero-radial-breathe pointer-events-none absolute left-1/2 top-[-20%] h-[min(85vh,52rem)] w-[min(140vw,90rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_55%_45%_at_50%_35%,rgba(99,102,241,0.14)_0%,transparent_62%)] blur-3xl will-change-[opacity]',
  ),
  heroGlowPrimary:
    'absolute -left-1/3 top-[-10%] h-[48vh] w-[68vw] rounded-full bg-indigo-500/[0.06] blur-[130px]',
  heroGlowSecondary:
    'absolute -right-1/4 bottom-[-8%] h-[40vh] w-[52vw] rounded-full bg-zinc-600/[0.05] blur-[110px]',
  heroGlowAccent:
    'absolute left-1/2 top-[15%] h-[min(42vh,28rem)] w-[min(90vw,44rem)] -translate-x-1/2 rounded-full bg-indigo-400/[0.045] blur-[100px]',
  heroMesh:
    'absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-900',
  heroVignette:
    'pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35',
  heroDecorLayer: 'pointer-events-none absolute inset-0 z-0 overflow-hidden',
  heroContentLayer: 'relative z-[1]',
  heroSection: cn(
    'relative min-h-[100dvh] overflow-hidden bg-zinc-950',
    SP.padTopNavClear,
  ),
  heroGlanceCard: cn(
    'relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl',
    SHADOW_FLOAT,
    'ring-1 ring-white/[0.04]',
    SP.padHeroGlance,
  ),
  heroGlanceSheen:
    'pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-indigo-500/[0.06]',
  heroGlanceGlow:
    'pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-indigo-500/15 blur-2xl',
  proofList: cn(SP.stackSmPlus, 'max-w-[36rem] border-l border-zinc-700 pl-5'),
  proofListItem: 'text-sm font-normal leading-snug text-zinc-400 md:text-[0.95rem] md:leading-[1.55]',

  timelineLine:
    'absolute left-[4px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400/35 via-zinc-700 to-zinc-800',
  timelineDot:
    'absolute left-0 top-1.5 z-[1] h-2.5 w-2.5 rounded-full border-2 border-indigo-400 bg-zinc-950',
  bulletDot: 'mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400',
  timelineRow: cn('reveal-on-view relative last:pb-0', SP.padBottomTimeline, SP.padLeftTimeline),

  gridAbout: cn('grid lg:grid-cols-[minmax(0,280px)_1fr]', SP.gridGapLg),
  aboutLayout: cn('grid gap-10 md:gap-12', 'lg:grid-cols-[minmax(0,1fr)_minmax(0,240px)] lg:items-start lg:gap-x-12 xl:gap-x-16'),
  aboutCopyStack: cn(SP.stackXl),
  aboutBulletList: cn('m-0 max-w-2xl list-none p-0', SP.stackMd),
  aboutBulletItem: cn('flex text-[0.9375rem] leading-snug text-zinc-300', SP.inlineGap3),
  strengthsBlock: cn(SP.insetTop2, 'border-t border-zinc-800 pt-8'),
  strengthsChipList: cn(SP.insetTop4, 'm-0 flex list-none flex-wrap p-0', SP.inlineGap2),
  aboutContactGrid: cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5'),
  gridExperience: cn('grid lg:grid-cols-[1fr_minmax(0,220px)]', SP.gridGapXl),
  experienceTimelineOuter: 'relative',
  experienceTimelineInner: 'relative',
  gridTwoUp: cn('grid sm:grid-cols-2', SP.gridGapMd),
  gridProjects: cn(
    'grid grid-cols-1 lg:grid-cols-2',
    'gap-6 sm:gap-7 lg:gap-x-8 lg:gap-y-8 xl:gap-x-10',
    'items-stretch',
  ),
  projectCardChrome: cn(
    'border-zinc-800 bg-zinc-900/85 backdrop-blur-xl !shadow-[0_10px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.04]',
  ),
  projectCardInteractive: cn(
    'group h-full transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
    'motion-safe:hover:-translate-y-1.5',
    'hover:border-indigo-500/80 hover:!shadow-[0_24px_56px_rgba(0,0,0,0.72)] hover:shadow-indigo-500/10',
    'motion-reduce:transition-colors motion-reduce:hover:translate-y-0',
  ),
  projectCardPad: '!p-7 md:!p-9',
  projectCardShell: 'flex h-full min-h-0 flex-col',
  projectCardArticle: 'flex min-h-0 flex-1 flex-col',
  projectCardHeader: cn('flex flex-wrap items-start justify-between gap-x-3 gap-y-2'),
  projectCardTitle:
    'min-w-0 flex-1 text-[1.2rem] font-semibold leading-snug tracking-tight text-white sm:text-xl sm:leading-tight',
  projectStatusBadge:
    'shrink-0 rounded-md border border-zinc-700 bg-zinc-800/80 px-2 py-0.5 text-[11px] font-semibold text-zinc-300',
  projectHook: cn(
    SP.insetTop5,
    'max-w-xl text-[0.9375rem] font-medium leading-relaxed text-zinc-400 sm:text-base',
  ),
  projectHighlightsBlock: SP.insetTop6,
  projectHighlightsLabel: cn('text-[11px] font-semibold tracking-wide text-zinc-500'),
  projectFeatureList: cn(SP.insetTop3, 'm-0 list-none p-0', SP.stackDense),
  projectFeatureRow: cn('flex text-[0.8125rem] leading-snug text-zinc-400', SP.inlineGap2),
  projectCardFooter: cn(
    'mt-auto flex flex-col gap-4 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-5',
  ),
  projectTechInline:
    'min-w-0 text-[0.8125rem] font-medium leading-relaxed tracking-tight text-zinc-500',
  projectViewCodeButton: cn(
    'shrink-0 self-end sm:self-auto !px-7 !py-3.5',
    SHADOW_PRIMARY_GLOW,
    '!ring-1 !ring-indigo-400/30',
    'motion-safe:hover:scale-[1.01] hover:brightness-[1.04] motion-safe:active:scale-[0.99] motion-reduce:hover:scale-100',
    'hover:!shadow-[0_0_22px_rgba(99,102,241,0.3)] transition-[transform,filter,box-shadow] duration-300 ease-out',
    '[&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-out motion-safe:hover:[&_svg]:translate-x-1',
  ),
  iconSm: 'h-4 w-4 shrink-0',
  /** Nav menu, scroll FAB — 20px */
  iconMd: 'h-5 w-5 shrink-0',
  /** Hero social row — GitHub / LinkedIn (18px matches tap target balance) */
  iconHeroSocial: 'h-[18px] w-[18px] shrink-0',
  gridContact: cn('grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]', SP.gridGapContact),
  gridContactCards: cn('grid sm:grid-cols-2', SP.inlineGap4),
  contactAsidePanel: cn(
    'rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl p-4 md:p-5',
    SHADOW_FLOAT,
    'ring-1 ring-white/[0.04]',
  ),
  stackContactAside: SP.stackMd,
  /** Slightly tighter vertical rhythm for contact section */
  contactSectionTight: '!py-20 md:!py-24 lg:!py-28',

  chip: 'rounded-md border border-zinc-700 bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300',
  chipRound:
    'rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-xs font-medium text-zinc-300',
  tagCategory:
    'rounded-md bg-zinc-800 px-2 py-0.5 font-mono text-[10px] tracking-wide text-zinc-400',
  filterPill: cn(
    'rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-xs font-medium text-zinc-400 shadow-sm shadow-black/20 transition-[colors,box-shadow] duration-200 hover:border-zinc-600 hover:text-zinc-200 hover:shadow-md hover:shadow-black/30',
    FOCUS_RING,
  ),
  filterPillActive: cn(
    'rounded-full border border-indigo-400/40 bg-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-500/25 ring-1 ring-indigo-400/30',
    FOCUS_RING,
  ),
  filterPillDisabled: 'cursor-not-allowed opacity-40',

  inputField: cn(
    SP.insetTop2,
    'w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 transition-colors duration-200 placeholder:text-zinc-600 focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/25',
  ),
  labelField: 'text-xs font-semibold text-zinc-300',
  formGrid: cn('grid sm:grid-cols-2', SP.formGap),
  turnstileBlock: cn(SP.insetTop6, 'w-full min-w-0'),
  turnstileLabel: 'text-xs font-semibold text-zinc-300',
  turnstileMount: 'min-h-[65px] w-full max-w-full overflow-hidden',

  feedbackStatus: cn(SP.insetTop4, 'text-center text-sm text-zinc-500'),
  feedbackError: cn(SP.insetTop4, 'rounded-xl bg-red-500/15 px-4 py-3 text-center text-sm text-red-300'),
  feedbackSuccess: cn(SP.insetTop4, 'rounded-xl bg-indigo-500/15 px-4 py-3 text-center text-sm text-indigo-200'),

  socialCircle: cn(
    'flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-400 shadow-sm shadow-black/25 transition-[colors,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:text-indigo-400 hover:shadow-md motion-reduce:hover:translate-y-0',
    FOCUS_RING,
  ),
  imageFallback:
    'flex aspect-[4/5] max-w-md items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/25 to-zinc-900 text-4xl font-semibold tracking-tight text-indigo-200',
  scrollFab: cn(
    'fixed bottom-8 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-200 shadow-lg shadow-black/40 transition-colors duration-200 hover:border-indigo-500/50 hover:text-indigo-400',
    FOCUS_RING,
  ),

  contactCard: cn(
    'rounded-xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-md px-4 py-3',
    'shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.03]',
  ),
  stackAbout: SP.stack2xl,
  educationList: cn(SP.insetTop6, SP.stackLg),
  highlightList: cn(SP.insetTop5, SP.stackDense),
  iconAccent: 'h-5 w-5 text-indigo-400',
  formActions: SP.insetTop6,
  btnSubmitWidth: 'w-full sm:w-auto',

  experienceJobHeader: cn('flex flex-col sm:flex-row sm:items-baseline sm:justify-between', SP.inlineGapTight),
  experienceCompany: cn(SP.insetTop0p5, 'text-sm font-medium'),
  experienceLocation: cn(SP.insetTop1, 'text-xs'),
  experienceSummary: cn(SP.insetTop4, 'text-sm leading-[1.65] text-zinc-400'),
  experienceHighlightRow: cn('flex text-sm leading-[1.6] text-zinc-400', SP.inlineGap2),
  educationAside: SP.padTopAsideLg,
  educationDegree: 'text-sm font-semibold text-white',
  educationSchool: cn(SP.insetTop1, 'text-xs'),
  educationPeriod: SP.insetTop1,
  contactDd: cn(SP.insetTop1, 'text-sm'),

  viewportRevealSm: 'hidden sm:block',

  skeletonBar: 'animate-pulse rounded-md bg-zinc-800',
  skeletonBarSm: 'h-3',
  skeletonBarMd: 'h-4',
  skeletonBarLg: 'h-5',
  skeletonMaxNarrow: 'max-w-[42%]',
  skeletonMaxMid: 'max-w-[66%]',
  skeletonMaxWide: 'max-w-[92%]',
  skeletonCard: cn('rounded-2xl border border-zinc-800', SP.stackMd, SP.cardPad),
  emptyStateWrap: cn(SP.stackMd, 'rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/40 px-8 py-12 text-center'),
  emptyStateTitle: cn('text-base font-semibold', 'text-white'),
  emptyStateBody: 'text-sm text-zinc-500',
  belowFoldFallback: cn(SP.stackXl, 'min-h-[50vh] py-12', SP.insetTop10),
  belowFoldFallbackBar: cn('animate-pulse rounded-lg bg-zinc-800'),
  belowFoldFallbackKicker: 'h-8 w-44',
  belowFoldFallbackBlock: 'h-56 w-full',
  belowFoldFallbackWide: 'h-40 w-full',
}
