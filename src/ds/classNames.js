/**
 * Design system — all palette + spacing utilities live here.
 * Components use `cn(ds.*)` only (no raw spacing/color in JSX).
 *
 * Copy convention: **sentence case** in source strings (headlines, labels, buttons).
 * Do not use `uppercase` in the DS for labels — casing comes from the copy, not CSS.
 *
 * SP = spacing primitives (4px Tailwind scale). Composed tokens reference SP via cn().
 */

export function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}

const FOCUS_RING =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:focus-visible:outline-indigo-400'

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
  gridGapContact: 'gap-14',
  formGap: 'gap-5',

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

  insetBottom12: 'mb-12',
  sectionHeaderMargin: 'mb-14 md:mb-20 lg:mb-24',

  insetStartSm: 'ml-1',

  padTopNavClear: 'pt-16',
  padYSm: 'py-3',
  padBottomTimeline: 'pb-14',
  padLeftTimeline: 'pl-9 md:pl-11',
  padXContentTight: 'px-3',

  padTopAsideLg: 'lg:pt-2',

  heroPadBottom: 'pb-20 md:pb-28',
  heroPadTop: 'pt-12 md:pt-16 lg:pt-20',
  padTopLoose: 'pt-7',
  padHeroGlance: 'p-5 md:p-6',
}

export const ds = {
  ...SP,

  pageX: 'px-5 sm:px-8',
  container: 'mx-auto max-w-5xl px-5 sm:px-8',
  sectionY: 'py-24 md:py-32 lg:py-36',
  /** Alternating section canvases — breaks flat scroll rhythm */
  sectionToneDefault:
    'border-t border-zinc-200/70 bg-zinc-50 dark:border-white/[0.07] dark:bg-zinc-950',
  sectionToneMuted:
    'border-t border-zinc-200/60 bg-zinc-100/50 dark:border-white/[0.06] dark:bg-zinc-900/50',
  sectionToneWash: cn(
    'border-t border-zinc-200/55 bg-gradient-to-b from-indigo-500/[0.05] via-zinc-50 to-zinc-50 dark:border-white/[0.06] dark:from-indigo-400/[0.06] dark:via-zinc-950 dark:to-zinc-950',
  ),
  sectionReveal: 'section-reveal-on-view',
  footerY: 'py-20 md:py-24 lg:py-28',
  footerSurface: cn(
    'relative overflow-hidden border-t border-zinc-200/55 bg-gradient-to-b from-indigo-500/[0.07] via-zinc-100/55 to-zinc-100/75 dark:border-white/[0.08] dark:from-indigo-500/[0.11] dark:via-zinc-900/55 dark:to-zinc-950',
  ),
  footerAccentLine:
    'pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent dark:via-indigo-400/45',
  footerGlow:
    'pointer-events-none absolute -right-1/4 bottom-0 h-48 w-[min(100%,28rem)] rounded-full bg-indigo-400/[0.07] blur-[80px] dark:bg-indigo-400/[0.09]',
  footerInner: 'relative z-[1]',
  footerGrid: cn('grid gap-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-start md:gap-16 lg:gap-20'),
  footerBrandStack: SP.stackLg,
  footerKicker: cn(
    'font-mono text-[10px] font-semibold tracking-wide text-indigo-600 dark:text-indigo-400',
  ),
  footerName: 'text-2xl font-semibold tracking-tight text-zinc-900 sm:text-[1.65rem] dark:text-white',
  footerRole: cn(SP.insetTop2, 'text-sm font-semibold text-indigo-600 dark:text-indigo-400'),
  footerBlurbLead: cn(SP.insetTop4, 'max-w-lg text-base font-normal leading-relaxed text-zinc-700 dark:text-zinc-300'),
  footerLinksRow: cn(SP.insetTop6, 'flex flex-wrap items-center', 'gap-x-5 gap-y-2'),
  footerQuickLink: cn(
    'text-sm font-semibold text-zinc-700 underline-offset-4 transition-colors duration-200 hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400',
    FOCUS_RING,
  ),
  footerAsideStack: cn(SP.stackMd, 'md:text-right'),
  footerAsideLabel: cn(
    'font-mono text-[10px] font-semibold tracking-wide text-zinc-500 dark:text-zinc-500',
  ),
  footerInterestList: cn(SP.insetTop3, 'flex list-none flex-wrap gap-2 p-0 md:justify-end'),
  footerInterestPill: cn(
    'inline-flex items-center rounded-full border border-indigo-500/20 bg-white/70 px-3 py-1.5 text-xs font-medium text-zinc-800 shadow-sm shadow-zinc-900/[0.04] dark:border-indigo-400/20 dark:bg-white/[0.06] dark:text-zinc-200 dark:shadow-none',
  ),
  footerBottomBar: cn(
    SP.insetTop12,
    'border-t border-zinc-200/70 pt-10 dark:border-white/[0.1]',
  ),
  footerCopyrightLine: 'flex flex-wrap items-center gap-x-2 gap-y-1 text-sm',
  footerCopyrightAccent: 'font-semibold text-indigo-600 dark:text-indigo-400',
  footerCopyrightSep: 'text-zinc-300 dark:text-zinc-600',
  footerCopyrightBody: 'font-medium text-zinc-700 dark:text-zinc-300',
  footerCopyrightMuted: 'text-xs font-normal text-zinc-500 dark:text-zinc-500',
  sectionHeader: SP.sectionHeaderMargin,
  sectionH2: cn(SP.insetTop3, 'max-w-3xl'),
  sectionIntro: cn(SP.insetTop5, 'max-w-2xl'),
  footerRow: cn('flex flex-col md:flex-row md:items-start md:justify-between', SP.inlineGap10),
  cardPad: 'p-6 md:p-7',

  rhythmHeroH1: SP.insetTop5,
  rhythmHeroSubhead: cn(SP.insetTop7, 'max-w-[34rem]'),
  /** Framing line after subhead (section nav lives in site header) */
  heroRouteIntro: cn(SP.insetTop6, 'max-w-[36rem] text-sm leading-relaxed text-zinc-500 dark:text-zinc-500'),
  rhythmHeroProof: SP.insetTop10,
  rhythmHeroCTA: cn(SP.insetTop12, 'flex flex-wrap items-center', SP.inlineGap3),
  /** Primary hero column — optimal headline measure (~42rem), grid-safe */
  heroCopy: 'min-w-0 w-full max-w-[42rem]',
  /**
   * Hero shell: mobile = copy then card (single column, tight gap);
   * md+ = two columns, text + glance aligned to start; horizontal gap only (no dead vertical void).
   */
  heroLayout: cn(
    SP.heroPadTop,
    SP.heroPadBottom,
    'grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(260px,300px)] md:items-start md:gap-x-10 md:gap-y-0 lg:gap-x-14',
  ),
  /** Glance column: full width in grid cell; slight downward offset on md+ so card doesn’t fight the headline */
  heroGlanceAside: cn(
    'w-full max-w-md md:max-w-none',
    'md:pt-6 lg:pt-8',
  ),
  heroGlanceMetaKey:
    'shrink-0 font-mono text-[10px] font-medium tracking-wide text-zinc-400 dark:text-zinc-600',
  heroGlanceMetaValue: 'text-right text-xs text-zinc-600 dark:text-zinc-400',
  rhythmHeroSocial: cn(SP.insetTop14, 'flex items-center', SP.inlineGap4),
  rhythmHeroSocialIcons: cn('flex', SP.inlineGap2),
  heroGlanceLabel: cn(
    'font-mono text-[10px] font-medium tracking-wide text-zinc-400 dark:text-zinc-600',
  ),
  heroGlanceName: cn(SP.insetTop4, 'text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'),
  heroGlanceRole: cn(SP.insetTop1, 'text-sm text-zinc-500 dark:text-zinc-500'),
  heroGlanceBlock: cn(SP.insetTop6, SP.stackSm, SP.padTopLoose, 'border-t border-zinc-200/75 dark:border-white/[0.07]'),
  rhythmHeroPanelRow: cn('flex justify-between items-baseline', SP.inlineGap4),
  rhythmContactRow: cn('flex', SP.inlineGap4),
  rhythmContactBody: cn(SP.insetTop1, 'text-sm'),
  rhythmCardAfterTitle: SP.insetTop4,
  rhythmCardSubtitle: cn(SP.insetTop1, 'text-sm'),
  rhythmCardTags: cn('mt-auto flex flex-wrap pt-6', SP.inlineGap2),
  chipList: cn(SP.insetTop5, 'flex flex-wrap', SP.inlineGap2),
  rhythmAfterKickerNeutral: cn(SP.insetTop4, 'flex flex-wrap', SP.inlineGap2),
  educationItem: 'border-l-2 border-zinc-200 pl-4 dark:border-white/[0.08]',
  gridSpan2: 'sm:col-span-2',
  textareaField: 'min-h-[120px] resize-y',
  /** Visually hidden; keep in DS (no raw utility classes in JSX) */
  srOnly: 'sr-only',
  /** Honeypot: not displayed, not focusable, ignored by autocomplete */
  formHoneypot: 'hidden select-none',

  bodyRoot:
    'min-h-screen bg-zinc-50 font-sans text-zinc-600 antialiased dark:bg-zinc-950 dark:text-zinc-400 selection:bg-indigo-500/25 selection:text-zinc-900 dark:selection:bg-indigo-400/20 dark:selection:text-white [font-optical-sizing:auto]',

  textPrimary: 'text-zinc-900 dark:text-white',
  textSecondary: 'text-zinc-500 dark:text-zinc-400',
  textMuted: 'text-zinc-400 dark:text-zinc-500',
  textTertiary: 'text-zinc-700 dark:text-zinc-300',
  textStrongMuted: 'text-zinc-800 dark:text-zinc-200',
  textLabel: 'text-xs font-semibold tracking-normal text-zinc-500 dark:text-zinc-500',
  linkAccent: cn(
    'rounded-sm font-semibold text-indigo-600 underline-offset-2 hover:underline dark:text-indigo-400',
    FOCUS_RING,
  ),
  textFooterBlurb: cn(SP.insetTop2, 'text-sm leading-relaxed'),
  textFooterCopyright: cn(SP.insetTop8, 'font-mono text-[11px]'),

  borderSubtle: 'border-zinc-200 dark:border-white/10',
  borderCard: 'border-zinc-200/90 dark:border-white/[0.06]',
  borderHairline: 'border-zinc-200/80 dark:border-white/[0.06]',
  ringImage: 'ring-1 ring-zinc-200/80 dark:ring-white/[0.08]',
  borderLeftStrong: 'border-l-2 border-zinc-200 dark:border-white/[0.08]',
  borderTopHairline: 'border-t border-zinc-200/80 dark:border-white/[0.06]',

  surfaceHeaderScrolled:
    'border-b border-zinc-200/90 bg-zinc-50/85 shadow-sm shadow-zinc-900/[0.04] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/85 dark:shadow-black/25',
  surfaceMobileNav: 'border-t border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-zinc-950',
  surfaceCard: cn(
    'rounded-2xl border border-zinc-200/88 bg-white shadow-md shadow-zinc-900/[0.045] ring-1 ring-zinc-900/[0.03] dark:border-white/[0.08] dark:bg-white/[0.035] dark:shadow-lg dark:shadow-black/25 dark:ring-white/[0.06]',
  ),
  surfaceCardMuted:
    'rounded-2xl border border-zinc-200/85 bg-zinc-50/70 p-6 shadow-sm shadow-zinc-900/[0.03] ring-1 ring-zinc-900/[0.02] dark:border-white/[0.06] dark:bg-white/[0.04] dark:shadow-none dark:ring-white/[0.04] md:p-7',
  surfaceForm:
    'rounded-2xl border border-zinc-200/85 bg-white/80 p-8 shadow-md shadow-zinc-900/[0.05] ring-1 ring-zinc-900/[0.03] backdrop-blur-sm dark:border-white/[0.08] dark:bg-zinc-900/40 dark:shadow-black/30 dark:ring-white/[0.06] md:p-9',
  surfaceIconBox: cn(
    'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200/88 bg-white/90 shadow-sm shadow-zinc-900/[0.04] ring-1 ring-zinc-900/[0.02] dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-none dark:ring-white/[0.05]',
  ),

  kicker: 'font-mono text-[11px] font-medium tracking-wide text-indigo-600 dark:text-indigo-400',
  /** Section headers — editorial rule + weight vs hero kicker */
  sectionKicker: cn(
    'border-l-2 border-indigo-500/50 pl-3 font-mono text-[11px] font-semibold tracking-wide text-indigo-600 dark:border-indigo-400/45 dark:text-indigo-400',
  ),
  /** Hero eyebrow — muted so the headline owns the moment */
  kickerHero: cn(
    'font-mono text-[11px] font-medium tracking-wide text-zinc-500 dark:text-zinc-500',
  ),
  kickerNeutral: 'font-mono text-[11px] font-medium tracking-wide text-zinc-500 dark:text-zinc-500',
  h1: 'text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-zinc-900 sm:text-5xl lg:text-[3.15rem] lg:leading-[1.05] dark:text-white',
  /** Hero headline — solid, high contrast, statement-first (premium minimal) */
  h1Hero:
    'text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.042em] text-zinc-950 sm:text-[2.75rem] sm:leading-[1.04] lg:text-[3.25rem] lg:leading-[1.02] dark:text-white',
  h2: 'text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.022em] text-zinc-900 sm:text-3xl sm:leading-[1.14] md:text-[2.25rem] md:leading-[1.12] lg:text-4xl lg:leading-[1.1] dark:text-white',
  h3: 'text-lg font-semibold tracking-tight text-zinc-900 dark:text-white',
  h3Plain: 'text-lg font-semibold text-zinc-900 dark:text-white',
  body: 'text-base leading-[1.65] text-zinc-600 dark:text-zinc-400',
  bodyLarge: 'text-[1.05rem] leading-[1.65] text-zinc-600 dark:text-zinc-400',
  /** Hero subhead — sits between headline and body; slightly more presence */
  heroLead:
    'text-[1.0625rem] font-normal leading-[1.62] text-zinc-600 sm:text-[1.125rem] dark:text-zinc-400',
  /** Section intros — readable measure; distinct from H2 */
  sectionIntroText: 'text-[1.02rem] leading-[1.7] text-zinc-600 dark:text-zinc-400',
  asideLabel: 'font-mono text-[10px] font-medium tracking-wide text-zinc-500 dark:text-zinc-500',
  profilesLabel: 'font-mono text-[10px] tracking-wide',
  monoMeta: 'font-mono text-[11px] text-zinc-500 dark:text-zinc-500',
  monoMetaXs: 'font-mono text-[10px] tracking-wide text-zinc-400 dark:text-zinc-500',
  caseStudyDt: 'font-mono text-[10px] tracking-wide text-zinc-500 dark:text-zinc-500',
  metaProjectStack: 'font-mono text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-500',

  navLink: cn(
    'group relative rounded-md px-3 py-2 text-[13px] font-medium text-zinc-600 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
    FOCUS_RING,
  ),
  navLinkActive: cn(
    'relative rounded-md px-3 py-2 text-[13px] font-semibold text-indigo-600 transition-colors duration-200 dark:text-indigo-400',
    FOCUS_RING,
  ),
  navUnderline:
    'absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 bg-indigo-500 transition-transform duration-200 ease-out group-hover:scale-x-100 dark:bg-indigo-400',
  navUnderlineActive:
    'absolute bottom-1 left-3 right-3 h-px origin-left scale-x-100 bg-indigo-500 dark:bg-indigo-400',
  navBrand: cn(
    'min-w-0 shrink text-sm font-semibold tracking-tight transition-opacity duration-200 hover:opacity-80',
  ),
  navBrandActive: 'text-indigo-600 dark:text-indigo-400',
  navMobileLinkActive: 'text-indigo-600 dark:text-indigo-400',
  navTray: cn('flex items-center', SP.inlineGapMicro),
  navMobileSheetPad: SP.padYSm,
  navMobileLink: cn(SP.padYSm, 'text-left text-sm font-medium'),
  iconButton: cn(
    'rounded-lg p-2 text-zinc-500 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-white/[0.06] dark:hover:text-white',
    FOCUS_RING,
  ),

  focusRing: FOCUS_RING,
  btnBase:
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold tracking-tight transition-[transform,box-shadow,background-color,border-color,opacity,color] duration-200 ease-out will-change-transform disabled:pointer-events-none disabled:opacity-40 motion-reduce:transition-colors',
  btnLoading: 'cursor-wait opacity-90',
  iconSpin: 'h-4 w-4 shrink-0 animate-spin',
  btnPrimary:
    'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 ring-1 ring-indigo-400/30 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-600/35 hover:ring-indigo-300/40 active:brightness-[0.97] motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98] dark:bg-indigo-500 dark:shadow-indigo-500/30 dark:ring-indigo-400/25 dark:hover:bg-indigo-400 dark:hover:shadow-indigo-500/40 dark:hover:ring-indigo-300/35',
  btnSecondary:
    'border border-zinc-200/80 bg-transparent text-zinc-700 shadow-none ring-0 hover:border-zinc-300 hover:bg-zinc-100/60 hover:shadow-sm hover:shadow-zinc-900/[0.04] motion-safe:active:scale-[0.99] dark:border-white/10 dark:bg-transparent dark:text-zinc-300 dark:hover:border-white/18 dark:hover:bg-white/[0.05] dark:hover:shadow-none',
  btnGhost:
    'font-medium text-zinc-600 hover:bg-zinc-100/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/[0.08] dark:hover:text-white',
  btnGhostPadX: SP.padXContentTight,
  btnProjectExpand: cn(SP.insetTop6, 'w-full py-2 text-xs sm:w-auto sm:self-start', SP.padXContentTight),

  heroGlowPrimary:
    'absolute -left-1/3 top-[-10%] h-[48vh] w-[68vw] rounded-full bg-indigo-500/[0.055] blur-[130px] dark:bg-indigo-400/[0.08]',
  heroGlowSecondary:
    'absolute -right-1/4 bottom-[-8%] h-[40vh] w-[52vw] rounded-full bg-zinc-400/[0.05] blur-[110px] dark:bg-zinc-500/[0.06]',
  heroGlowAccent:
    'absolute left-1/3 top-1/3 h-[min(48vh,380px)] w-[min(85vw,480px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/[0.035] blur-[110px] dark:bg-indigo-400/[0.05]',
  heroMesh:
    'absolute inset-0 bg-gradient-to-b from-zinc-50 via-zinc-50/95 to-zinc-100/40 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900/85',
  heroVignette:
    'absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-200/20 dark:via-transparent dark:to-black/30',
  heroDecorLayer: 'pointer-events-none absolute inset-0 z-0 overflow-hidden',
  heroContentLayer: 'relative z-[1]',
  heroSection: cn(
    'relative min-h-[100dvh] overflow-hidden bg-zinc-50 dark:bg-zinc-950',
    SP.padTopNavClear,
  ),
  /** Secondary glance card — lighter elevation than former hero panel */
  heroGlanceCard: cn(
    'relative overflow-hidden rounded-xl border border-zinc-200/70 bg-white/70 shadow-sm shadow-zinc-900/[0.04] ring-1 ring-zinc-900/[0.03] backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-none dark:ring-white/[0.05]',
    SP.padHeroGlance,
  ),
  heroGlanceSheen:
    'pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-indigo-500/[0.04] dark:from-white/[0.03] dark:to-indigo-500/[0.05]',
  heroGlanceGlow:
    'pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-indigo-400/12 blur-2xl dark:bg-indigo-400/10',
  proofList: cn(SP.stackSmPlus, 'max-w-[36rem] border-l border-zinc-300/90 pl-5 dark:border-white/[0.12]'),
  proofListItem:
    'text-sm font-normal leading-snug text-zinc-600 md:text-[0.95rem] md:leading-[1.55] dark:text-zinc-500',

  timelineLine:
    'absolute left-[4px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/40 via-zinc-200 to-zinc-200 dark:from-indigo-400/30 dark:via-white/10 dark:to-white/[0.06]',
  timelineDot:
    'absolute left-0 top-1.5 z-[1] h-2.5 w-2.5 rounded-full border-2 border-indigo-500 bg-zinc-50 dark:border-indigo-400 dark:bg-zinc-950',
  bulletDot: 'mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400',
  timelineRow: cn('reveal-on-view relative last:pb-0', SP.padBottomTimeline, SP.padLeftTimeline),

  gridAbout: cn('grid lg:grid-cols-[minmax(0,280px)_1fr]', SP.gridGapLg),
  gridExperience: cn('grid lg:grid-cols-[1fr_minmax(0,220px)]', SP.gridGapXl),
  gridTwoUp: cn('grid sm:grid-cols-2', SP.gridGapMd),
  gridProjects: cn('grid lg:grid-cols-2', SP.gridGapMd),
  gridContact: cn('grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]', SP.gridGapContact),
  gridContactCards: cn('grid sm:grid-cols-2', SP.inlineGap4),
  stackContactAside: SP.stackXl,
  filterRow: cn(SP.insetBottom12, 'flex flex-wrap', SP.inlineGap2),

  chip: 'rounded-md border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700 dark:border-white/[0.06] dark:bg-white/[0.04] dark:text-zinc-300',
  chipRound:
    'rounded-full border border-zinc-200/90 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-zinc-300',
  tagCategory:
    'rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-[10px] tracking-wide text-zinc-600 dark:bg-white/[0.06] dark:text-zinc-400',
  filterPill: cn(
    'rounded-full border border-zinc-200/90 bg-white/40 px-4 py-2 text-xs font-medium text-zinc-600 shadow-sm shadow-zinc-900/[0.02] transition-[colors,box-shadow] duration-200 hover:border-zinc-300 hover:text-zinc-900 hover:shadow-md hover:shadow-zinc-900/[0.05] dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400 dark:shadow-none dark:hover:border-white/15 dark:hover:text-white dark:hover:shadow-black/20',
    FOCUS_RING,
  ),
  filterPillActive: cn(
    'rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-zinc-900/20 ring-1 ring-zinc-800/30 dark:bg-white dark:text-zinc-900 dark:shadow-black/25 dark:ring-white/20',
    FOCUS_RING,
  ),
  filterPillDisabled: 'cursor-not-allowed opacity-40',

  inputField: cn(
    SP.insetTop2,
    'w-full rounded-xl border border-zinc-200/90 bg-white px-4 py-3 text-sm text-zinc-900 transition-colors duration-200 placeholder:text-zinc-400 focus:border-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/15 dark:border-white/[0.08] dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-600',
  ),
  labelField: 'text-xs font-semibold text-zinc-700 dark:text-zinc-300',
  formGrid: cn('grid sm:grid-cols-2', SP.formGap),
  /** Turnstile wrapper — stable min-height reduces layout shift when the iframe mounts */
  turnstileBlock: cn(SP.insetTop6, 'w-full min-w-0'),
  turnstileLabel: 'text-xs font-semibold text-zinc-700 dark:text-zinc-300',
  turnstileMount: 'min-h-[65px] w-full max-w-full overflow-hidden',

  feedbackStatus: cn(SP.insetTop4, 'text-center text-sm text-zinc-500 dark:text-zinc-500'),
  feedbackError: cn(SP.insetTop4, 'rounded-xl bg-red-500/10 px-4 py-3 text-center text-sm text-red-700 dark:text-red-300'),
  feedbackSuccess: cn(
    SP.insetTop4,
    'rounded-xl bg-indigo-500/10 px-4 py-3 text-center text-sm text-indigo-900 dark:text-indigo-200',
  ),

  caseStudyDd: cn(SP.insetTop1p5, 'text-sm leading-[1.65] text-zinc-600 dark:text-zinc-400'),
  caseStudyStack: cn(SP.insetTop6, SP.stackMd, 'text-sm leading-relaxed'),
  caseStudyCollapseGrid:
    'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
  caseStudyCollapseClosed: 'grid-rows-[0fr]',
  caseStudyCollapseOpen: 'grid-rows-[1fr]',
  caseStudyCollapseInner: 'min-h-0 overflow-hidden',
  caseStudyExpandDl: cn(SP.stackMd, 'text-sm leading-relaxed'),
  caseStudyCollapseWrap: SP.insetTop4,

  socialCircle: cn(
    'flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/90 bg-white/60 text-zinc-600 shadow-sm shadow-zinc-900/[0.03] transition-[colors,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-indigo-500/25 hover:text-indigo-600 hover:shadow-md dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400 dark:hover:border-indigo-400/30 dark:hover:text-indigo-400 motion-reduce:hover:translate-y-0',
    FOCUS_RING,
  ),
  imageFallback:
    'flex aspect-[4/5] max-w-md items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-zinc-900 text-4xl font-semibold tracking-tight text-indigo-200',
  scrollFab: cn(
    'fixed bottom-8 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-800 shadow-lg shadow-zinc-900/5 transition-colors duration-200 hover:border-indigo-500/40 hover:text-indigo-600 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-indigo-400/40 dark:hover:text-indigo-400',
    FOCUS_RING,
  ),

  contactCard:
    'rounded-xl border border-zinc-200/80 bg-white/50 px-4 py-3 shadow-sm shadow-zinc-900/[0.03] ring-1 ring-zinc-900/[0.02] dark:border-white/[0.06] dark:bg-white/[0.02] dark:shadow-none dark:ring-white/[0.04]',
  stackAbout: SP.stack2xl,
  educationList: cn(SP.insetTop6, SP.stackLg),
  highlightList: cn(SP.insetTop5, SP.stackDense),
  iconAccent: 'h-5 w-5 text-indigo-600 dark:text-indigo-400',
  formActions: SP.insetTop8,
  btnSubmitWidth: 'w-full sm:w-auto',

  experienceJobHeader: cn('flex flex-col sm:flex-row sm:items-baseline sm:justify-between', SP.inlineGapTight),
  experienceCompany: cn(SP.insetTop0p5, 'text-sm font-medium'),
  experienceLocation: cn(SP.insetTop1, 'text-xs'),
  experienceSummary: cn(SP.insetTop4, 'text-sm leading-[1.65] text-zinc-600 dark:text-zinc-400'),
  experienceHighlightRow: cn('flex text-sm leading-[1.6] text-zinc-600 dark:text-zinc-400', SP.inlineGap2),
  educationAside: SP.padTopAsideLg,
  educationSchool: cn(SP.insetTop1, 'text-xs'),
  educationPeriod: SP.insetTop1,
  contactDd: cn(SP.insetTop1, 'text-sm'),

  /** Responsive: hidden until `sm` (collapse on narrow viewports) */
  viewportRevealSm: 'hidden sm:block',

  skeletonBar: 'animate-pulse rounded-md bg-zinc-200/80 dark:bg-white/[0.08]',
  skeletonBarSm: 'h-3',
  skeletonBarMd: 'h-4',
  skeletonBarLg: 'h-5',
  skeletonMaxNarrow: 'max-w-[42%]',
  skeletonMaxMid: 'max-w-[66%]',
  skeletonMaxWide: 'max-w-[92%]',
  skeletonCard: cn('rounded-2xl border border-zinc-200/90 dark:border-white/[0.06]', SP.stackMd, SP.cardPad),
  emptyStateWrap: cn(SP.stackMd, 'rounded-2xl border border-dashed border-zinc-200/90 bg-zinc-50/50 px-8 py-12 text-center dark:border-white/[0.08] dark:bg-white/[0.02]'),
  emptyStateTitle: cn('text-base font-semibold', 'text-zinc-900 dark:text-white'),
  emptyStateBody: 'text-sm text-zinc-500 dark:text-zinc-400',
  belowFoldFallback: cn(SP.stackXl, 'min-h-[50vh] py-12', SP.insetTop10),
  belowFoldFallbackBar: cn('animate-pulse rounded-lg bg-zinc-200/70 dark:bg-white/[0.06]'),
  belowFoldFallbackKicker: 'h-8 w-44',
  belowFoldFallbackBlock: 'h-56 w-full',
  belowFoldFallbackWide: 'h-40 w-full',
}
