import { Loader2 } from 'lucide-react'
import { cn, ds } from '../../ds/classNames.js'

/** Map legacy names */
const variantAliases = {
  solid: 'primary',
  outline: 'secondary',
}

const variantClass = {
  primary: ds.btnPrimary,
  secondary: ds.btnSecondary,
  ghost: ds.btnGhost,
}

function resolveVariant(v) {
  const key = variantAliases[v] ?? v
  return variantClass[key] ? key : 'primary'
}

/**
 * @param {'primary'|'secondary'|'ghost'|'solid'|'outline'} [variant]
 * @param {string} [className]
 * @param {string} [href] — renders anchor when set
 * @param {boolean} [loading] — disables control, shows spinner (buttons only)
 * @param {string} [loadingLabel] — label while loading
 */
export function Button({
  variant = 'primary',
  className = '',
  href,
  type = 'button',
  loading = false,
  loadingLabel = 'Sending…',
  disabled,
  children,
  ...rest
}) {
  const v = resolveVariant(variant)
  const cls = cn(ds.btnBase, ds.focusRing, variantClass[v], loading && ds.btnLoading, className)
  const isDisabled = Boolean(disabled || loading)

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} {...rest} disabled={isDisabled} aria-busy={loading || undefined}>
      {loading ? <Loader2 className={ds.iconSpin} aria-hidden /> : null}
      {loading ? loadingLabel : children}
    </button>
  )
}
