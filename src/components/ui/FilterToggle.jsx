import { cn, ds } from '../../ds/classNames.js'

/**
 * Filter pill — `aria-pressed` matches toggle semantics without full tablist keyboard plumbing.
 */
export function FilterToggle({ id, selected, onSelect, disabled = false, children }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-disabled={disabled}
      disabled={disabled}
      className={cn(selected ? ds.filterPillActive : ds.filterPill, disabled && ds.filterPillDisabled)}
      onClick={() => !disabled && onSelect(id)}
    >
      {children}
    </button>
  )
}
