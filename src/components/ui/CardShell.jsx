import { cn, ds } from '../../ds/classNames.js'

/**
 * Reusable bordered surface for skill tiles, stat blocks, etc.
 * @param {'default' | 'muted'} variant — default = elevated card + pad; muted = tinted job-style card (padding included).
 */
export function CardShell({ variant = 'default', className = '', children }) {
  const shell = variant === 'muted' ? ds.surfaceCardMuted : cn(ds.surfaceCard, ds.cardPad)
  return <div className={cn(shell, className)}>{children}</div>
}
