import { cn, ds } from '../../ds/classNames.js'

/**
 * Associates label + control with consistent spacing and `htmlFor` wiring.
 * Pass the control as `children` (input, textarea, select).
 */
export function FormField({ id, label, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className={ds.labelField}>
        {label}
      </label>
      {children}
    </div>
  )
}
